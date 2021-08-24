import {doGet} from "./general";



function requestFollowing(userName){
  return doGet(`https://api.github.com/users/${userName}/following`)
  .catch((erro) => {
    console.log(erro);
    return [];
  });
}

export default requestFollowing;