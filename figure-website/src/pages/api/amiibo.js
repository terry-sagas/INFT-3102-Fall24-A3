
const STRAPI_URL = process.env.STRAPI_API_URL
export default async function handler(request, respose){
    try{
        const amiibo = await axios.get(STRAPI_URL + "amiibos?populate=figure_image")
        respose.status(200).json(amiibo.data)
    } catch{
        respose.status(400).json({error: err})
    }
}