import { ProfileRelationsBoxWrapper } from '../ProfileRelations';
import Box from  '../Box';

function RelationsArea(prop){
    return (<div className="profileRelationsArea" style={{gridArea: 'profileRelationsArea'}}>
    <ProfileRelationsBoxWrapper>
      <h2 className="smallTitle">
        Pessoas da Comunidade  ({(prop.followers.length)})
      </h2>
      <ul>
        {prop.followers.map((f,i) => {
          return (
          <li key={`${i}`}>
            <a href={`https://github.com/${f.login}`} key={`${f.login}`}>
              <img src={`https://github.com/${f.login}.png`} />
              <span>{f.login}</span>
            </a>
          </li>);
        })}
      </ul>  
    </ProfileRelationsBoxWrapper>      
    <Box>
      Comunidades    
    </Box>           
  </div>); 
  }

export default RelationsArea;