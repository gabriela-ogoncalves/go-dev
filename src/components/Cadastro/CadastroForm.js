import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import AuthService from '../../services/Auth.js';

export default function CadastroForm() {
  let navigate = useNavigate();

  const { register, handleSubmit, formState: { errors }, setError, clearErrors, watch } = useForm();

  const onSubmit = async data => {
    try {
      await AuthService.register(data.username, data.email, data.password);
      navigate('/');
      window.location.reload();
    } catch (e) {
      setError('register', {
        type: 'server',
        message: 'Something went wrong with register',
      });
    }
  };

  return (
    <div>
      <form onSubmit={e => {
        clearErrors();
        handleSubmit(onSubmit)(e);
      }}>
        <label htmlFor='username'>username</label>
        <input
          id='username'
          type='username'
          {...register('username', {
            required: {
              value: true,
              message: 'username required'
            },
            minLength: {
              value: 3,
              message: 'min length is 3'
            },
            maxLength: {
              value: 20,
              message: 'max length is 20'
            }
          })}
        />
        {errors.username && <span role='alert'>{errors.username.message}</span>}


        <label htmlFor='email'>email</label>
        <input
          id='email'
          type='email'
          {...register('email', {
            required: {
              value: true,
              message: 'email required'
            },
            maxLength: {
              value: 50,
              message: 'max length is 50'
            },
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Insira um e-mail válido.'
            }
          })}
        />
        {errors.email && <span role='alert'>{errors.email.message}</span>}

        <label htmlFor='password'>password</label>
        <input
          id='password'
          type='password'
          {...register('password', {
            required: {
              value: true,
              message: 'password required'
            },
            minLength: {
              value: 6,
              message: 'min length is 6'
            }
          })}
        />
        {errors.password && <span role='alert'>{errors.password.message}</span>}

        <label htmlFor='confirmPassword'>confirm password</label>
        <input
          id='confirmPassword'
          type='password'
          {...register('confirmPassword', {
            validate: value => value === watch('password') || 'The passwords do not match'
          })}
        />
        {errors.confirmPassword && <span role='alert'>{errors.confirmPassword.message}</span>}

        <button type='submit'>Cadastrar</button>
        {errors.register && errors.register.message}
      </form>
    </div>
  );
}