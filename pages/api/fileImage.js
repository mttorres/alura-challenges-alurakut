import fs from 'fs';

export default async function requestInterceptor(request, response){
    try{
    
        if(request.method == 'PUT'){
            //melhorar depois
            fs.writeFile(`./pages/local-image-cache/temp-image.png`, Buffer.from(request.body.replace(/^data:image\/\w+;base64,/, ""),'base64'),
            (err) => {
                    if(err){
                        console.log('Error!');
                        response.status(500).json({
                            message:  err
                        })
                    }
            });
            console.log('image saved into cache');
            response.status(201).json({
                message: 'image saved into cache'
            })
            return;
    
        }
        response.status(405).json({
            message: 'Invalid Method Request'
        })
        return;
    } catch (e){
        response.status(500).json({
            message: e
        })
    }
}