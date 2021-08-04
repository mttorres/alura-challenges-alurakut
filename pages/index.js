import React from 'react';
import nookies from 'nookies';
import jwt from 'jsonwebtoken';
import MainGrid from  '../src/components/MainGrid';
import {AlurakutMenu} from '../src/lib/AlurakutCommons'; // necessita do {} pq não é export default
import ProfileSideBar from  '../src/components/ProfileSideBar';
import WelcomeArea from '../src/components/WelcomeArea';
import RelationsArea from  '../src/components/RelationsArea';
import requestFollowers from '../src/requesters/followers';
import {requestAllCommu} from '../src/requesters/community';
import { doPost } from '../src/requesters/general';

//XMLHttpRequest não serve é request para o server local? NAO! é para binários e etc

export default function Home(props) {
  const userName = props.githubUser;
  const [followers, setFollowers] = React.useState([]);
  React.useEffect(() => {
    requestFollowers(userName)
    .then(data => setFollowers(data));
  }, []);

  const galera = [{"id": "1", "login": 'juunegreiros'}, {"id": "2", "login": "omariosouto"}, 
  {"id": "3", "login": "peas"}, {"id": "5", "login": "rafaballerini"}, {"id": "6", "login": "marcobrunodev"},
  {"id": "7", "login": "felipefialho"}, ]
  
  const [comunidades, setCommu] = React.useState([]);
  React.useEffect(() => {
    requestAllCommu()
    .then(data => setCommu(data));
  },[]);

  return (
  <> 
  <AlurakutMenu githubUser={userName}/> 
  <MainGrid>
    <div className="profileArea" style={{gridArea: 'profileArea'}}>
        <ProfileSideBar githubUser={userName} />
    </div>    
    <WelcomeArea userName={userName} userStatVideos={999} userStatconfiavel={3} userStatLegal={3} community={comunidades} seterCommunity = {setCommu} />
    <RelationsArea galera ={galera} followers={followers} community={comunidades} />
  </MainGrid>
  </> );
}


export async function getServerSideProps(context){
  const cookies =  nookies.get(context);
  const token = cookies.USER_TOKEN;
  let isAuthenticated = false;
  let githubUser;

  if(token) {
    githubUser  = jwt.decode(token).githubUser;
    isAuthenticated = await doPost('https://alurakut.vercel.app/api/auth', null, token);
  } 
  if(isAuthenticated){
    return {
      props: {githubUser}
    }    
  }
  else {
    return {
      redirect: {
        destination: '/login',
        permanent: false,

      }    
    }
  }
}