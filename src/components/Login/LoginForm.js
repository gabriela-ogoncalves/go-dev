import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import AuthService from '../../services/Auth.js';

export default function LoginForm() {
  let navigate = useNavigate();

  const { register, handleSubmit, formState: { errors }, setError, clearErrors } = useForm();

  const onSubmit = async data => {
    try {
      await AuthService.login(data.email, data.password);
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
        <label htmlFor='email'>email</label>
        <input
          id='email'
          type='email'
          {...register('email', {
            required: true,
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
            required: 'required',
            minLength: {
              value: 6,
              message: 'min length is 5'
            }
          })}
        />
        {errors.password && <span role='alert'>{errors.password.message}</span>}
        <button type='submit'>Login</button>
        {errors.login && errors.login.message}
      </form>
    </div>
  );
}