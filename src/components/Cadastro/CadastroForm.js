import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import AuthService from '../../services/auth.js';
import './styles.scss';

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
        message: 'Algo deu errado :( Por favor, tente novamente mais tarde.',
      });
    }
  };

  return (
    <div className='sign-up'>
      <div className='sign-up__container'>
        <p className='sign-up__title'>CADASTRO</p>
        <form 
          className='sign-up__form'
          onSubmit={e => {
            clearErrors();
            handleSubmit(onSubmit)(e);
          }}
        >
          <label
            className='sign-up__label'
            htmlFor='username'
          >
            username
          </label>
          <input
            id='username'
            className='sign-up__input'
            type='username'
            placeholder='Escolha um nome de usuário único'
            {...register('username', {
              required: {
                value: true,
                message: 'Nome de usuário é obrigatório'
              },
              minLength: {
                value: 3,
                message: 'Tamanho mínimo de 3 caracteres'
              },
              maxLength: {
                value: 20,
                message: 'Tamanho mínimo é de 20 caracteres'
              }
            })}
          />
          {errors.username && 
            <span className='sign-up__error' role='alert'>
              {errors.username.message}
            </span>
          }

          <label
            className='sign-up__label'
            htmlFor='email'
          >
            Email
          </label>
          <input
            id='email'
            type='email'
            placeholder='Insira seu melhor email'
            className='sign-up__input'
            {...register('email', {
              required: {
                value: true,
                message: 'Email obrigatório'
              },
              maxLength: {
                value: 50,
                message: 'Tamanho máximo é de 50 caracteres'
              },
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Insira um e-mail válido.'
              }
            })}
          />
          {errors.email && 
            <span className='sign-up__error' role='alert'>
              {errors.email.message}
            </span>
          }

          <label
            className='sign-up__label'
            htmlFor='password'
          >
            Senha
          </label>
          <input
            id='password'
            type='password'
            placeholder='Escolha uma senha (min 6 caracteres)'
            className='sign-up__input'
            {...register('password', {
              required: {
                value: true,
                message: 'Senha obrigatória'
              },
              minLength: {
                value: 6,
                message: 'Tamanho mínimo de 6 caracteres'
              }
            })}
          />
          {errors.password && 
            <span className='sign-up__error' role='alert'>
              {errors.password.message}
            </span>
          }

          <label
            className='sign-up__label'
            htmlFor='confirmPassword'
          >
            confirmação de senha
          </label>
          <input
            id='confirmPassword'
            type='password'
            placeholder='Confirme sua senha'
            className='sign-up__input'
            {...register('confirmPassword', {
              validate: value => value === watch('password') || 'As senhas digitadas são diferentes'
            })}
          />
          {errors.confirmPassword && 
            <span className='sign-up__error' role='alert'>
              {errors.confirmPassword.message}
            </span>
          }

          <button className='sign-up__button' type='submit'>Cadastrar</button>

          {errors.register &&
            <div className='sign-up__error sign-up__error__final'>
              {errors.register.message}
            </div>
          }

          <div className='sign-up__login'>
            <p>Já possui uma conta?</p>
            <a href='/login'>Faça login aqui</a>            
          </div>
        </form>
      </div>
    </div>
  );
}
