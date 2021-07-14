//import styled from 'styled-components'; // é uma biblioteca aparte do react mas pode ser usada em conjunto
import MainGrid from  '../src/components/MainGrid';
import Box from  '../src/components/Box';
import ProfileSideBar from  '../src/components/ProfileSideBar';
import RelationsArea from  '../src/components/RelationsArea';
import {AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'; // necessita do {} pq não é export default



/*
requestFollowers = async(userName) => {
  const req = new Request(`http://api.github.com/users/${userName}/followers`);
  try{
    let response = await fetch(req); 
    let data = await response.json();   
    this.setState({
      Data: data
    });
  }
  catch(error){
    console.log(error)
  }
}
*/

async function requestFollowers(userName, followers) {
  const req = new Request(`http://api.github.com/users/${userName}/followers`);
  try{
    let response = await fetch(req); 
    let data = await response.json();   
    data.map((e) =>{
      followers.push(e);
    })
    console.log("response ready");
    console.log(followers);
  }
  catch(error){
    console.log(error)
  }
}

//XMLHttpRequest não serve é request para o server local? NAO! é para binários e etc


export default function Home() {
  const userName = "mttorres";
  // podia separar em uma componente?
  /*
  const followers = this.state.Data?.map((f, i) => (
    <li key={i}>
        <a href={`https://github.com/${f.login}`} key={f.login} >
          <img src={`https://github.com/${f.login}.png`}></img>
          <span>{f.login}</span>
        </a>      
    </li>
  ));
  */
  
  //const followers = [];
  //requestFollowers(userName,followers);
  //console.log(followers);
  // ta seguindo pro return não esperando a variável (nao podemos usar await aqui porque o react não aceita retorno como promisse)
  
  const followers = [{"login": "petrolifero"}, {"login": "gustavopergola"}, {"login": "Moutella",}, {"login": "caio-guimaraes"}]
  return (
  <> 
  <AlurakutMenu githubUser={userName}/> 
  <MainGrid>
    <div className="profileArea" style={{gridArea: 'profileArea'}}>
        <ProfileSideBar githubUser={userName} />
    </div>    
    <div className="welcomeArea" style={{gridArea: 'welcomeArea'}}>
      <Box>
        <h1 className="title">Bem Vindo(a)</h1>
        <OrkutNostalgicIconSet videos={999} confiavel={3} legal={3}  />   
      </Box>         
    </div>
      <RelationsArea followers={followers} />
  </MainGrid>
  </> );
}