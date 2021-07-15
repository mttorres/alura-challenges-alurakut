import Box from '../Box';
import { OrkutNostalgicIconSet } from '../../lib/AlurakutCommons';
import CommunityForm from '../CommunityForm';

function WelcomeArea(prop){
    return (
    <div className="welcomeArea" style={{gridArea: 'welcomeArea'}}>
        <Box>
            <h1 className="title">Bem Vindo(a)</h1>
            <OrkutNostalgicIconSet videos={prop.userStatVideos} confiavel={prop.userStatconfiavel} legal={prop.userStatLegal}  />   
        </Box>
        <CommunityForm community={prop.community} seterCommunity = {prop.seterCommunity} />
        </div>);
}

export default WelcomeArea;