import {doGet} from "./general";



function requestFollowers(userName){
  return doGet(`https://api.github.com/users/${userName}/followers`)
  .catch((erro) => {
    console.log(erro);
    return [];
  });
}

export default requestFollowers;