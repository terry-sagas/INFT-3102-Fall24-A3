import axios from "axios";
const STRAPI_URL = process.env.STRAPI_API_URL
export default async function handler(request, respose){
    try{
        const skylanders = await axios.get(STRAPI_URL + "skylanders?populate=figure_image&populate=type_image")
        respose.status(200).json(skylanders.data)
    } catch{
        respose.status(400).json({error: err})
    }
}