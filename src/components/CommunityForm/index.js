import React from "react";
import { requestSaveCommu } from "../../requesters/community";
import Box from "../Box";

//this.handleCreateCommunity(e)

function CommunityForm(prop){
    return (
    <Box>
        <h2 className="subTitle">O que você deseja fazer?</h2>
        <form onSubmit={function handleCreateCommunity(e){
            e.preventDefault();
            let dadosForm = new FormData(e.target);
            requestSaveCommu({title: dadosForm.get('title'), image: dadosForm.get('image'), userName: prop.userName })
            .then((data) => {
                if(data){
                    prop.seterCommunity([data.record, ...prop.community])
                }
            });
        }}>
            <div>
                <input  placeholder= "Qual vai ser o nome da sua comunidade?" 
                name= "title" 
                aria-label= "Qual vai ser o nome da sua comunidade?" 
                type= "text" />
            </div>
            <div>
                <h4 className="subTitle">Escolha uma foto para sua comunidade</h4>
                <input type="file" 
                placeholder= "Escolha uma foto para sua comunidade"
                aria-label="Escolha uma foto para sua comunidade" 
                name= "image"
                onChange={function handleFile(e){
                    //console.log("recebi arquivo");
                }} />
            </div>     
            <button>
                Criar Comunidade    
            </button>                   
        </form>
        </Box>);
}

export default CommunityForm;
