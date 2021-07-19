import {SiteClient} from 'datocms-client';

export default async function requestInterceptor(request, response){
    const bodyData = request.body;
    const token = 'e9e5f9eb852d053b85e0c5d9f7208e';
    const client = new SiteClient(token);

    if(request.method == 'POST'){
        console.log("path: "+`../../local-image-cache/temp-image.${bodyData.image.ext}`);
        const path = await client.createUploadPath(`../../local-image-cache/temp-image.${bodyData.image.ext}`);
        const upload = await client.uploads.create({
            path,
            author: bodyData.userName,
            copyright: "AluraKut"
        });
        
        console.log(upload);
    
        // Enviar comunidade
        const record = await client.items.create({
            itemType: "972360",
            title: bodyData.title,
            link: null, // melhorar (não temos página de comunidades)
            image: null, // melhorar (ele não consegue mandar a imagem reclama que deve ser um object, e quando coloca object reclama que deveria ser uma string!)
            imageUrl : upload.url,
            creatorSlug: bodyData.username
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