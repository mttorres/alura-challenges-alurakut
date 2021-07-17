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

export async function doPostFile(url, file, token){
  const reader = new FileReader(file);
  let toSend = null;
  reader.onerror = function(event) {
    alert("Failed to read file!\n\n" + reader.error);
    reader.abort(); // (...does this do anything useful in an onerror handler?)
  };

  await reader.readAsDataURL(file);
  reader.onloadend = function () {
    toSend = reader.result;
    console.log('sucesso!');
    console.log(toSend);
    const headerAndbody = {
      method: 'PUT',
      headers: {
        'Authorization' : token,
        'Content-Type' : file.type
      },
      body: toSend
    }
    console.log("body: ");
    console.log(toSend);
    delete headerAndbody.headers['Content-Type'];
    return fetch(url, headerAndbody)
        .then((res) => {
          if(res.ok){
            return res.json();
          }
          throw new Error('Request has returned: '+res.status) 
        });
  }
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



