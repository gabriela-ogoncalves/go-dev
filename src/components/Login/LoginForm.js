import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import AuthService from '../../services/Auth.js';
import './styles.scss';

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
    <div className='login'>
      <div className='login__form'>
        <form onSubmit={e => {
          clearErrors();
          handleSubmit(onSubmit)(e);
        }}>
          <div>
            <input
              id='username'
              type='username'
              placeholder='Usuário'
              className='login__input'
              {...register('username', {
                required: {
                  value: true,
                  message: 'username required'
                },
              })}
            />
          </div>
          <div className='login__error'>
            {errors.username && <span role='alert'>{errors.username.message}</span>}
          </div>

          <div>
            <input
              id='password'
              type='password'
              placeholder='Senha'
              className='login__input'
              {...register('password', {
                required: {
                  value: true,
                  message: 'password required'
                },
              })}
            />
          </div>
          <div className='login__error'>
            {errors.password && <span role='alert'>{errors.password.message}</span>}
          </div>

          <button className='login__button' type='submit'>Login</button>
          <div className='login__error'>
            {errors.login && errors.login.message}
          </div>
        </form>
      </div>
    </div>
  );
}