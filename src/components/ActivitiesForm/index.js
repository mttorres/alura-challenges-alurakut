import React from "react";
import Box from "../Box";
import CommunityForm from "../CommunityForm";
import ScrapForm from "../ScrapForm";

//this.handleCreateCommunity(e)

function ActivitiesForm(prop){
    const [formOption, setFormOption] = React.useState(0);
    return (
    <Box>
        <h2 className="subTitle">O que você deseja fazer?</h2>    
            <div className="formOptions">
                <button onClick={() => setFormOption(0)}>Criar comunidade</button>
                <button onClick={() => setFormOption(1)}>Deixar um recado</button>
            </div>
            <hr />
            {formOption === 0 ? 
            (<CommunityForm userName= {prop.userName} community={prop.community} seterCommunity = {prop.seterCommunity}/>) 
            : (<ScrapForm/>)}                
        </Box>);
}

export default ActivitiesForm;
