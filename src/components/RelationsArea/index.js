import CommunityBox from '../CommunityBox';

function RelationsArea(prop){
    return (
    <div className="profileRelationsArea" style={{gridArea: 'profileRelationsArea'}}>
    <CommunityBox data={prop.followers} title={'Pessoas da Comunidade'} linkprop={'login'} imgprop={'login'} spanprop={'login'} imgLinkPrefix = {'https://github.com/'} pageLinkPrefix = {'https://github.com/'}  />
    <CommunityBox data={prop.community} title={'Comunidades'} linkprop={''} imgprop={'imagem'} spanprop={'nome'} />      
  </div>); 
}

export default RelationsArea;