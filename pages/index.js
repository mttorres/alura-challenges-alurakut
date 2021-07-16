import React from 'react';
import MainGrid from  '../src/components/MainGrid';
import {AlurakutMenu} from '../src/lib/AlurakutCommons'; // necessita do {} pq não é export default
import ProfileSideBar from  '../src/components/ProfileSideBar';
import WelcomeArea from '../src/components/WelcomeArea';
import RelationsArea from  '../src/components/RelationsArea';
import requestFollowers from '../src/requesters/followers';
import requestCommu from '../src/requesters/community';

//XMLHttpRequest não serve é request para o server local? NAO! é para binários e etc

export default function Home() {
  const userName = "mttorres";
  const [followers, setFollowers] = React.useState([]);
  requestFollowers(userName,setFollowers);
  const galera = [{"id": "1", "login": 'juunegreiros'}, {"id": "2", "login": "omariosouto"}, 
  {"id": "3", "login": "peas"}, {"id": "5", "login": "rafaballerini"}, {"id": "6", "login": "marcobrunodev"},
  {"id": "7", "login": "felipefialho"}, ]
  const [comunidades, setComunidades] = React.useState([]);
  requestCommu(setComunidades);

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