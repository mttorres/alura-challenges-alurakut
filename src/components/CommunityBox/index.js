import { ProfileRelationsBoxWrapper } from '../ProfileRelations';

function CommunityBox(prop){
    const limitItensBox = prop.data.slice().splice(0,6);
    return (
      <ProfileRelationsBoxWrapper>
        <h2 className="smallTitle">
          {prop.title}  ({(prop.data.length)})
        </h2>
        <ul>
          {limitItensBox.map((elem) => {
            const imgLink = prop.imgLinkPrefix?  prop.imgLinkPrefix + `${elem[prop.imgprop.toString()]}.png`  : 
            elem[prop.imgprop] ? elem[prop.imgprop.toString()]['url'] : elem['imageUrl']; // temp até resolver o upload de imagem
            const linkCommu = prop.pageLinkPrefix?  prop.pageLinkPrefix + `${elem[prop.linkprop.toString()]}` : elem[prop.linkprop.toString()]
            return (
            <li key={`${elem.id}`}>
              <a href={linkCommu}>  
                <img src={imgLink} />
                <span>{elem[prop.spanprop]}</span>
              </a>
            </li>);
          })}
        </ul> 
        {prop.data.length > 6 && (  
          <div>
            <hr />
            <p>
              <a className="boxLink" href={prop.seeall} >
                Ver todos
              </a>
            </p>
          </div>
        )}  
    </ProfileRelationsBoxWrapper>); 
}

export default CommunityBox;