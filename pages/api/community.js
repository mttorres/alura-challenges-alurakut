import {SiteClient} from 'datocms-client';
import {tokenP} from '../../config/config';

export default async function requestInterceptor(request, response){
    const bodyData = request.body;
    const client = new SiteClient(tokenP);
    console.log(request);
    // poderia ser put né...
    if(request.method == 'POST'){
        const path = await client.createUploadPath('./pages/local-image-cache/temp-image.png');
        const upload = await client.uploads.create({
            path,

            author: bodyData.userName,
            copyright: "AluraKut"
        });
        // Enviar comunidade
        const record = await client.items.create({
            itemType: "972360",
            title: bodyData.title,
            link: null, // melhorar (não temos página de comunidades)
            image: null, // melhorar (ele não consegue mandar a imagem reclama que deve ser um object, e quando coloca object reclama que deveria ser uma string!)
            imageUrl : upload.url,
            creatorSlug: bodyData.userName
        });
        // NÃO É PRINTADO NO FRONT NEM TRAFEGADO POR LÁ!
        response.json({
            record: record
        });
        return;
    }

    response.status(405).json({
        message: 'Invalid Method Request'
    })
}