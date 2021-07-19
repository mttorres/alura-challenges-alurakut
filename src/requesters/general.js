import convertAsDataURL from '../util/fileConverter'

export function doPost(url, body, token){
    const headerAndbody = {
      method: 'POST',
      headers: {
        'Authorization' : token,
        'Content-Type'  : 'application/json',
        'Accept'  : 'application/json' 
      },
      body: JSON.stringify(body)
    }
    return fetch(url, headerAndbody)
        .then((res) => {
          if(res.ok){
            return res.json();
          }
          throw new Error('Request has returned: '+res.status) 
        });
}

export function doPutFile(url, file, token){
    convertAsDataURL(file)
    .then((result) => {
      const headerAndbody = {
        method: 'PUT',
        headers: {
          'Authorization' : token,
          'Content-Type' : file.type
        },
        body: result
      }
      delete headerAndbody.headers['Content-Type'];
      return fetch(url, headerAndbody)
      .then((res) => {
        if(res.ok){
          return res.json();
        }
        throw new Error('Request has returned: '+res.status) 
      });

    })
    .catch((error) => console.error(error))
}

export function doGet(url, token){
  const headerAndbody = {
    method: 'GET',
    headers: {
      'Authorization' : token,
      'Content-Type'  : 'application/json',
      'Accept'  : 'application/json' 
    }
  }
  return fetch(url, headerAndbody)
      .then((res) => {
        if(res.ok){
          return res.json();
        }
        throw new Error('Request has returned: '+res.status) 
      });
}



