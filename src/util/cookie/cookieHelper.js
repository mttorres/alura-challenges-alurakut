import nookies from 'nookies';
import { doPost } from '../../requesters/general';

export function applyLogoutConfig() {
    nookies.destroy(null, 'USER_TOKEN');
}

export function applyLoginConfig(user) {
    if(user.length != 0){
        return doPost('https://alurakut.vercel.app/api/login', {githubUser : user})
        .then((resposta) => {
            if(resposta.token){
              nookies.set(null, 'USER_TOKEN', resposta.token, {path: '/', maxAge: 86400*7});
              return 0;
            }
            else {
                return 1;
            }
        });                  
      }
      else{
        return -1;
      }
}