import React from 'react';
import { useRouter } from 'next/router'
import { applyLoginConfig } from '../src/util/cookie/cookieHelper'

export default function LoginPage(){
  const router = useRouter();
  const [githubUser, setGithubUser] = React.useState('');

  const [userExistsError, setUserExistsError] = React.useState(false);
  const [triedToLogin, setTry] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(false);

  async function handleLogin(e) {
    e.preventDefault();
    setIsLoading(true);
    setTry(triedToLogin+1);
    let result = await applyLoginConfig(githubUser);
    if(result === 0){
      console.log(result);
      console.log('LOGANDO!');
      router.push('/');  
    }
    if(result === 1){
      console.log('set error!');
      setUserExistsError(true);
    }
    setIsLoading(false);
  }

  return (
    <main style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <div className="loginScreen">
        <section className="logoArea">
          <img src="https://alurakut.vercel.app/logo.svg" />

          <p><strong>Conecte-se</strong> aos seus amigos e familiares usando recados e mensagens instantâneas</p>
          <p><strong>Conheça</strong> novas pessoas através de amigos de seus amigos e comunidades</p>
          <p><strong>Compartilhe</strong> seus vídeos, fotos e paixões em um só lugar</p>
        </section>

        <section className="formArea">
          <form className="box" onSubmit={handleLogin} >
            <p>
              Acesse agora mesmo com seu usuário do <strong>GitHub</strong>!
          </p>
            <input placeholder="Usuário" 
            value={githubUser} 
            onChange={(event) => setGithubUser(event.target.value.trim().toLowerCase())} />
            {githubUser.length !== 0 && userExistsError && (              
              <span style={{ fontSize: '13px', color: 'red', marginBottom: '12px' }}>
                O usuário informado não pode ser validado. Você tem um usuário no GitHub?
              </span>)}   
            {triedToLogin > 0 && githubUser.length === 0 && (              
              <span style={{ fontSize: '13px', color: 'red', marginBottom: '12px' }}>
                Favor informar um usuário!
              </span>)}              
              

            <button type="submit" disabled={isLoading}>
            {isLoading ? 'Entrando...' : 'Login'}
            </button>
          </form>

          <footer className="box">
            <p>
              Ainda não é membro? <br />
              <a href="/login">
                <strong>
                  ENTRAR JÁ
              </strong>
              </a>
            </p>
          </footer>
        </section>

        <footer className="footerArea">
          <p>
            © 2021 alura.com.br - <a href="/">Sobre o Orkut.br</a> - <a href="/">Centro de segurança</a> - <a href="/">Privacidade</a> - <a href="/">Termos</a> - <a href="/">Contato</a>
          </p>
        </footer>
      </div>
    </main>
  )
} 