import {doPost, doPutFile} from './general';
import {tokenRO} from '../../config/config';

export function requestAllCommu(){
    // token read-only
    const body = {"query": `{
      allCommunities {
        id
        title
        link
        image {
          id
          url
        }
        imageUrl
        creatorSlug
        _status
        _firstPublishedAt
      }
    }`};
    return doPost('https://graphql.datocms.com/', body, tokenRO)
    .then(returnRes => returnRes.data.allCommunities)
    .catch((erro) => {
      console.log(erro);
      return [];
    }); 
}

export async function requestSaveCommu(body){
  doPutFile('/api/fileImage', body.image, null);
  console.log('body???');
  console.log(body);
  return doPost('/api/community', body, tokenRO)
  .then((returnRes) => {console.log('nova comunidade '+returnRes.toString()); return returnRes})
  .catch((erro) => {
    console.log(erro);
    return;
  });  
}