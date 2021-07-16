import React from 'react';

function requestFollowers(userName, setFollowers){
    React.useEffect(() => {
      const req = new Request(`https://api.github.com/users/${userName}/followers`); // "Bloqueio de conteúdo misto no Firefox"
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
}

export default requestFollowers;