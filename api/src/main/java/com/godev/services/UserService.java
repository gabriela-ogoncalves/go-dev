package com.godev.services;

import com.godev.models.*;
import com.godev.payloads.JwtResponse;
import com.godev.payloads.MessageResponse;
import com.godev.payloads.ProgressResponse;
import com.godev.repository.PathRepository;
import com.godev.repository.RoleRepository;
import com.godev.repository.UserRepository;
import com.godev.security.UserDetailsImpl;
import com.godev.security.UserDetailsServiceImpl;
import com.godev.security.auth.JwtUtils;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class UserService extends UserDetailsServiceImpl {
    private final AuthenticationManager authenticationManager;
    private final PasswordEncoder encoder;
    private final JwtUtils jwtUtils;
    private final RoleRepository roleRepository;
    private final PathRepository pathRepository;

    public UserService(
            AuthenticationManager authenticationManager,
            JwtUtils jwtUtils,
            PasswordEncoder encoder,
            RoleRepository roleRepository,
            PathRepository pathRepository,
            UserRepository userRepository) {
        super(userRepository);
        this.authenticationManager = authenticationManager;
        this.encoder = encoder;
        this.jwtUtils = jwtUtils;
        this.roleRepository = roleRepository;
        this.pathRepository = pathRepository;
    }

    public ResponseEntity<JwtResponse> authenticateUser(String username, String password) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(username, password));

        SecurityContext context = SecurityContextHolder.createEmptyContext();
        context.setAuthentication(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        String jwt = jwtUtils.generateJwtToken(authentication);

        List<String> roles = userDetails.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.toList());

        return ResponseEntity.ok(new JwtResponse(
                jwt,
                userDetails.getId(),
                userDetails.getUsername(),
                userDetails.getEmail(),
                roles
        ));
    }

    public ResponseEntity<MessageResponse> registerUser(
            String username,
            String email,
            String password,
            Set<String> strRoles) {
        if (userRepository.existsByUsername(username)) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Username is already taken!"));
        }

        if (userRepository.existsByEmail(email)) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Email is already in use!"));
        }

        User user = new User(username,
                email,
                encoder.encode(password));

        Set<Role> roles = new HashSet<>();
        if (strRoles == null) {
            Role userRole = roleRepository.findByName(ERole.ROLE_USER)
                    .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
            roles.add(userRole);
        } else {
            strRoles.forEach(role -> {
                if (role.equals("admin")) {
                    Role adminRole = roleRepository.findByName(ERole.ROLE_ADMIN)
                            .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                    roles.add(adminRole);
                } else {
                    Role userRole = roleRepository.findByName(ERole.ROLE_USER)
                            .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                    roles.add(userRole);
                }
            });
        }

        user.setRoles(roles);
        userRepository.save(user);

        return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
    }

    public ResponseEntity<ProgressResponse> userProgress(String username) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + username));

        List<Path> paths = pathRepository.findAll();
        Set<Long> userLessonIds = user.getLessons().stream().map(Lesson::getId).collect(Collectors.toSet());
        Set<Long> userExerciseIds = user.getExercises().stream().map(Exercise::getId).collect(Collectors.toSet());

        ProgressResponse response = new ProgressResponse(username);
        paths.forEach(path -> {
            Set<Long> lessonIds = path.getTopics().stream().flatMap(
                    topic -> topic.getLessons().stream().map(Lesson::getId)
            ).collect(Collectors.toSet());

            Set<Long> exerciseIds = path.getTopics().stream().flatMap(
                    topic -> topic.getExercises().stream().map(Exercise::getId)
            ).collect(Collectors.toSet());

            boolean allLessonsCompleted = userLessonIds.containsAll(lessonIds);
            boolean allExercisesCompleted = userExerciseIds.containsAll(exerciseIds);

            if (allLessonsCompleted && allExercisesCompleted)
                response.completedPaths.add(path);
            else if (allLessonsCompleted)
                response.completedLessonsPaths.add(path);
            else if (allExercisesCompleted)
                response.completedExercisesPaths.add(path);
            else
                response.uncompletedPaths.add(path);
        });

        return ResponseEntity.ok(response);
    }
}