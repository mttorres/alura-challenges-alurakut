import Box from "../Box";

//this.handleCreateCommunity(e)

function CommunityForm(prop){
    return (
    <Box>
        <h2 className="subTitle">O que você deseja fazer?</h2>
        <form onSubmit={function handleCreateCommunity(e){
            e.preventDefault();
            let dadosForm = new FormData(e.target);
            let name = dadosForm.get('title');
            let image = dadosForm.get('image'); 
            prop.seterCommunity([...prop.community, { "id": (Math.random() * (4 - 1) + 1).toString() , "nome": name, "imagem": image}])
        }}>
            <div>
                <input 
                placeholder= "Qual vai ser o nome da sua comunidade?" 
                name= "title" 
                aria-label= "Qual vai ser o nome da sua comunidade?" 
                type= "text" />
            </div>
            <div>
                <input type="file" 
                placeholder= "Coloque uma URL para usarmos de capa"
                aria-label="Coloque uma URL para usarmos de capa" 
                onChange={function handleFile(e){
                    
                }} />
            </div>     
            <button>
                Criar Comunidade    
            </button>                   
        </form>
        </Box>);
}

export default CommunityForm;
