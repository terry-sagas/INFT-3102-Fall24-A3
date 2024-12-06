import axios from 'axios'


const STRAPI_URL = process.env.STRAPI_API_URL

export const fetchAmiiboList = async () =>{
    try {
        const respose = await axios.get(STRAPI_URL + "amiibos?populate=figure_image")
        return respose.data
    } catch (error){
        console.error("Error in fetching list" + error)
    }
    
}
export const fetchSkylandersList = async () =>{
    try {
        const respose = await axios.get(STRAPI_URL + "skylanders?populate=figure_image&populate=type_image")
        return respose.data
    } catch (error){
        console.error("Error in fetching list" + error)
    }
    
}
