import React from 'react';
import MainGrid from  '../src/components/MainGrid';
import {AlurakutMenu} from '../src/lib/AlurakutCommons'; // necessita do {} pq não é export default
import ProfileSideBar from  '../src/components/ProfileSideBar';
import WelcomeArea from '../src/components/WelcomeArea';
import RelationsArea from  '../src/components/RelationsArea';




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
  fetch(req)
  .then(res => res.json())
  .then(data => followers = data)
  .then(console.log(followers))
  /*
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
  */
}

//XMLHttpRequest não serve é request para o server local? NAO! é para binários e etc


export default function Home() {
  const userName = "mttorres";
  const followers = [{"id": "1", "login": "petrolifero"}, {"id": "2", "login": "gustavopergola"}, 
  {"id": "3", "login": "Moutella"}, {"id": "4", "login": "caio-guimaraes"}]
  const [comunidades, setComunidades] = React.useState(
    [{"id": "1", "nome": 'Grand Chase - BR', "imagem": "https://tecnoblog.net/wp-content/uploads/2021/06/grand-chase.jpg"}, 
    { "id": "2", "nome": 'Guilty Gear - CHAMP', "imagem":"https://www.arkade.com.br/wp-content/uploads/2021/06/guilty-gear-capa-1050x591.jpg"}, 
    { "id": "3", "nome": 'Ja morri pro minotauro 100 vezes', "imagem": "https://i.ytimg.com/vi/qC4qrA3BXfU/maxresdefault.jpg"}, 
    { "id": "4", "nome": 'Li esse livro entendi, mas não queria ter', "imagem": "https://miro.medium.com/max/500/1*DDsOx6D3oe8ZxcA-OTfIDA.jpeg"}]);
  return (
  <> 
  <AlurakutMenu githubUser={userName}/> 
  <MainGrid>
    <div className="profileArea" style={{gridArea: 'profileArea'}}>
        <ProfileSideBar githubUser={userName} />
    </div>    
    <WelcomeArea userStatVideos={999} userStatconfiavel={3} userStatLegal={3} community={comunidades} seterCommunity = {setComunidades} />
    <RelationsArea followers={followers} community={comunidades} />
  </MainGrid>
  </> );
}