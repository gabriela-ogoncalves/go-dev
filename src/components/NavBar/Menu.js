import React, { Fragment, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';

import Context from '../../Context';
import AuthService from '../../services/auth.js';
import MenuIcon from './MenuIcon';

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isLogged, setIsLogged] = useContext(Context);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {},[isLogged]); 
    
  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', marginRight: '1rem' }}>
        {
          isLogged 
          ? (
            <Tooltip title="Minha conta">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              >
                <Avatar sx={{ width: 45, height: 45, bgcolor:'var(--go-dev-border)' }} />
              </IconButton>
            </Tooltip>
          ) : (
            <Tooltip title="Minha conta">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              >
                <Avatar
                  sx={{ width: 45, height: 45, bgcolor:'var(--go-dev-border)' }} 
                >
                  <MenuIcon />
                </Avatar>
              </IconButton>
          </Tooltip>
          )
        }
      </Box>
      {
        isLogged &&
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '& .MuiList-root': {
                fontFamily: 'var(--open-sans-font)'
              },

              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem disabled>
            Bem-vindo(a), <strong>{isLogged.username}</strong>!
          </MenuItem>
          <Divider />

          <MenuItem onClick={() => {
            handleClose();
            navigate('/profile', {replace: true});
          }}>
            Meu Perfil
          </MenuItem>
          <MenuItem onClick={() => {
            handleClose();
            navigate('/trilhas', {replace: true});
          }}>
            Trilhas
          </MenuItem>
          <MenuItem onClick={() => {
            handleClose();
            navigate('/certificados', {replace: true});
          }}>
            Certificados
          </MenuItem>
          <Divider />
          <MenuItem onClick={() => {
            swal({
              title: 'Tem certeza que deseja sair?',
              text: 'Temos muito mais trilhas que ainda podem te interessar! Que tal dar uma olhadinha?',
              icon: 'warning',
              buttons: ['Cancelar', 'Sair'],
            })
            .then((confirm) => {
              if (confirm) {
                AuthService.logout();
                setIsLogged(false);
                handleClose();
                navigate('/', {replace: true});
              }
            });
          }}
          >
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Sair
          </MenuItem>
        </Menu>
      }
      {
        !isLogged &&
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '& .MuiList-root': {
                width: 160
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >

          <MenuItem onClick={() => {
            handleClose();
            navigate('/trilhas', {replace: true});
          }}>
            Trilhas
          </MenuItem>
          <MenuItem onClick={() => {
            handleClose();
            navigate('/cadastro', {replace: true});
          }}>
            Cadastrar
          </MenuItem>
          <MenuItem onClick={() => {
            handleClose();
            navigate('/login', {replace: true});
          }}>
            Login
          </MenuItem>
        </Menu>
      }
    </>
  );
}