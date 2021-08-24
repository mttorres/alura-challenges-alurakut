import React from "react";
import { requestSaveCommu } from "../../requesters/community";

//this.handleCreateCommunity(e)

function CommunityForm(prop){

    function handleCreateCommunity(e){
        e.preventDefault();
        let dadosForm = new FormData(e.target);
        requestSaveCommu({title: dadosForm.get('title'), image: dadosForm.get('image'), userName: prop.userName })
        .then((data) => {
            if(data){
                prop.seterCommunity([data.record, ...prop.community])
            }
        });
    }

    return (
                <form onSubmit={handleCreateCommunity}>
                    <div>
                        <h4 className="subTitle">Qual vai ser o nome da sua comunidade?</h4>
                        <input  placeholder= "Nome?" 
                        name= "title" 
                        aria-label= "Nome?" 
                        type= "text" />
                    </div>
                    <div>
                        <h4 className="subTitle">Escolha uma foto para sua comunidade</h4>
                        <input type="file" 
                        placeholder= "Escolha uma foto para sua comunidade"
                        aria-label="Escolha uma foto para sua comunidade" 
                        name= "image"
                        />
                    </div>
                    <div>
                        <h4 className="subTitle">Digite a URL do site da comunidade</h4>
                        <input  placeholder= "Url" 
                        name= "url" 
                        aria-label= "Url" 
                        type= "text" />
                    </div>                    
                    <button>
                        Salvar Comunidade    
                    </button>       
                </form>)
}

export default CommunityForm;
