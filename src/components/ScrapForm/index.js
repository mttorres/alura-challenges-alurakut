import React from "react";

function ScrapForm(prop){

    function handleCreateScrap(e){

    }
    const [scrap, setScrap] = React.useState('');
    return (
        <form onSubmit={handleCreateScrap}>
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
    )
}

export default ScrapForm;