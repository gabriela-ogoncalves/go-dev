import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import AuthService from '../../services/Auth.js';

export default function LoginForm() {
  let navigate = useNavigate();

  const { register, handleSubmit, formState: { errors }, setError, clearErrors } = useForm();

  const onSubmit = async data => {
    try {
      await AuthService.login(data.username, data.password);
      navigate('/');
      window.location.reload();
    } catch (e) {
      if (e.response.status === 401)
        setError('login', {
          type: 'server',
          message: 'Usuário não encontrado.',
        });
      else
        setError('login', {
          type: 'server',
          message: 'Something went wrong with login',
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
          })}
        />
        {errors.username && <span role='alert'>{errors.username.message}</span>}

        <label htmlFor='password'>password</label>
        <input
          id='password'
          type='password'
          {...register('password', {
            required: {
              value: true,
              message: 'password required'
            },
          })}
        />
        {errors.password && <span role='alert'>{errors.password.message}</span>}

        <button type='submit'>Login</button>
        {errors.login && errors.login.message}
      </form>
    </div>
  );
}