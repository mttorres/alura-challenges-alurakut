
export default function convertAsDataURL(file){
    const reader = new FileReader(file);
    return new Promise((resolve, reject) =>{
        reader.onload = () => {
            resolve(reader.result)
        }
        reader.onerror = () => {
            alert("Failed to read file!\n\n" + reader.error);
            reader.abort(); 
            reject("Failed to read file!\n\n" + reader.error);
        }
        //throw new Error("Failed to read file!\n\n" + reader.error);
        reader.readAsDataURL(file);
    });
}