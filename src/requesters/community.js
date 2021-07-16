import React from 'react';

function requestCommu(setCommu){
    // token read-only
    React.useEffect(() => {
      const url = 'https://graphql.datocms.com/'; // "Bloqueio de conteúdo misto no Firefox"
      const headerAndbody = {
        method: 'POST',
        headers: {
          'Authorization' : 'e9e5f9eb852d053b85e0c5d9f7208e',
          'Content-Type'  : 'application/json',
          'Accept'  : 'application/json' 
        },
        body: JSON.stringify({"query": `{
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
        }`})
      }
      fetch(url, headerAndbody)
      .then((res) => {
        if(res.ok){
          return res.json();
        }
        throw new Error('Request has returned: '+res.status) 
      })  
      .then(returnRes => setCommu(returnRes.data.allCommunities))
      .catch(erro => console.log(erro));    
    }, []); 
}

export default requestCommu;