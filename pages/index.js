import React from 'react';
import MainGrid from  '../src/components/MainGrid';
import {AlurakutMenu} from '../src/lib/AlurakutCommons'; // necessita do {} pq não é export default
import ProfileSideBar from  '../src/components/ProfileSideBar';
import WelcomeArea from '../src/components/WelcomeArea';
import RelationsArea from  '../src/components/RelationsArea';

//XMLHttpRequest não serve é request para o server local? NAO! é para binários e etc

export default function Home() {
  const userName = "mttorres";
  const [followers, setFollowers] = React.useState([]);
  React.useEffect(() => {
    const req = new Request(`https://api.github.com/users/${userName}/followers`);
    fetch(req)
    .then((res) => {
      if(res.ok){
        return res.json();
      }
      throw new Error('Request has returned: '+res.status) 
    })  
    .then((data) => setFollowers(data))
    .catch(erro => console.log(erro));    
  }, []); // passar variáveis para ese array faz ele executar isso toda vez que essa é alterada
  // não passar nada para o array implica em uma execução unica. 

  //const followers = [{"id": "1", "login": "petrolifero"}, {"id": "2", "login": "gustavopergola"}, 
  //{"id": "3", "login": "Moutella"}, {"id": "4", "login": "caio-guimaraes"}]

  const galera = [{"id": "1", "login": 'juunegreiros'}, {"id": "2", "login": "omariosouto"}, 
  {"id": "3", "login": "peas"}, {"id": "5", "login": "rafaballerini"}, {"id": "6", "login": "marcobrunodev"},
  {"id": "7", "login": "felipefialho"}, ]
  
  const [comunidades, setComunidades] = React.useState(
    [{"id": "1", "nome": 'Grand Chase - BR', "imagem": "https://tecnoblog.net/wp-content/uploads/2021/06/grand-chase.jpg", "link": "https://steamcommunity.com/app/985810/discussions/"}, 
    { "id": "2", "nome": 'Guilty Gear - BR', "imagem":"https://www.arkade.com.br/wp-content/uploads/2021/06/guilty-gear-capa-1050x591.jpg", "link":"https://steamcommunity.com/app/1384160/discussions/"}, 
    { "id": "3", "nome": 'Ja morri pro minotauro 100 vezes', "imagem": "https://i.ytimg.com/vi/qC4qrA3BXfU/maxresdefault.jpg", "link":"https://www.youtube.com/watch?v=xSFIkK-Nasc"}, 
    { "id": "4", "nome": 'Li esse livro entendi, mas não queria ter', "imagem": "https://miro.medium.com/max/500/1*DDsOx6D3oe8ZxcA-OTfIDA.jpeg", "link":"https://www.estantevirtual.com.br/livros/albert-camus/o-mito-de-sisifo/232241127"},
    { "id": "5", "nome": 'UFF - Universidade Federal Fluminense', "imagem": "https://upload.wikimedia.org/wikipedia/pt/4/47/UFF_bras%C3%A3o.png", "link": "https://www.uff.br/"},
    { "id": "6", "nome": 'Projeto Escola de informática', "imagem": "https://storage.googleapis.com/atados-v3/user-uploaded/images-large/11bea5d2-2bca-48ae-b2bf-543f780b04d0.jpeg", "link":"https://www.projetomaossolidarias.org.br/projeto-escola-de-informatica/"}
  ]);
  return (
  <> 
  <AlurakutMenu githubUser={userName}/> 
  <MainGrid>
    <div className="profileArea" style={{gridArea: 'profileArea'}}>
        <ProfileSideBar githubUser={userName} />
    </div>    
    <WelcomeArea userStatVideos={999} userStatconfiavel={3} userStatLegal={3} community={comunidades} seterCommunity = {setComunidades} />
    <RelationsArea galera ={galera} followers={followers} community={comunidades} />
  </MainGrid>
  </> );
}