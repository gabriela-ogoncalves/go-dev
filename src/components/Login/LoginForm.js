import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import AuthService from '../../services/auth.js';
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
          message: 'Usuário e/ou senha incorreto(s).',
        });
      else
        setError('login', {
          type: 'server',
          message: 'Algo deu errado :( Por favor, tente novamente mais tarde.',
        });
    }
  };

  return (
    <div className='login'>
      <div className='login__form'>
        <p className='login__title'>LOGIN</p>
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
                  message: 'Usuário é um campo obrigatório'
                },
              })}
            />
          </div>
          {errors.username && 
            <div className='login__error'>
              <span role='alert'>{errors.username.message}</span>
            </div>
          }

          <div>
            <input
              id='password'
              type='password'
              placeholder='Senha'
              className='login__input'
              {...register('password', {
                required: {
                  value: true,
                  message: 'A senha é obrigatória'
                },
              })}
            />
          </div>
          {errors.password && 
            <div className='login__error'>
              <span role='alert'>{errors.password.message}</span>
            </div>
          }

          <button className='login__button' type='submit'>Login</button>
          
          {errors.login &&
            <div className='login__error'>
              {errors.login.message}
            </div>
          }

          <div className='login__sign-up'>
            <p>Ainda não possui uma conta?</p>
            <a href='/cadastro'>Cadastre-se gratuitamente aqui</a>
            
          </div>
        </form>
      </div>
    </div>
  );
}