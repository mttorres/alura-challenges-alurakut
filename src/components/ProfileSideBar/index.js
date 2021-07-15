import Box from  '../Box';
import { AlurakutProfileSidebarMenuDefault} from '../../lib/AlurakutCommons';

function ProfileSideBar(prop){
    return (
      <Box as="aside">
        <img src={`https://github.com/${prop.githubUser}.png`}/>
        <hr />
        <p>
          <a className="boxLink" href={`https://github.com/${prop.githubUser}`}>
            @{prop.githubUser}
          </a>
        </p>
        <hr />
        <AlurakutProfileSidebarMenuDefault />
      </Box>
      ); 
  }

export default ProfileSideBar;