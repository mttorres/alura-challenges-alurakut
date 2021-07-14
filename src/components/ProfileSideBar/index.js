import Box from  '../Box';

function ProfileSideBar(prop){
    return (<Box>
        <img src={`https://github.com/${prop.githubUser}.png`}/>
      </Box>); 
  }

export default ProfileSideBar;