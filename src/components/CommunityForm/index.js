import React from "react";
import { requestSaveCommu } from "../../requesters/community";
import Box from "../Box";

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

    const [formOption, setFormOption] = React.useState(0);
    const [scrap, setScrap] = React.useState('');

    return (
    <Box>
        <h2 className="subTitle">O que você deseja fazer?</h2>    
            <div className="formOptions">
                <button onClick={() => setFormOption(0)}>Criar comunidade</button>
                <button onClick={() => setFormOption(1)}>Deixar um recado</button>
            </div>
            <hr />
            {formOption === 0 ? (
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
                    <button>
                        Salvar Comunidade    
                    </button>       
                </form>) :
            (
                <form onSubmit={handleCreateCommunity}>
                    <div>
                        <textarea
                            placeholder="Escreva algo legal =)"
                            value={scrap}
                            //onChange={(e) => setDescription(e.target.value)}
                            aria-label="Escreva algo legal =)"
                            type="text"
                            autoComplete="off"
                         />
                    </div>
                    <button>
                        Escrever Recado    
                    </button>      
                </form>
            )}                
        </Box>);
}

export default CommunityForm;
