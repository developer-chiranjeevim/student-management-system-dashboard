import axios from "axios";


const fetchDetails = async() => {
    try{
        const endpoint = import.meta.env.VITE_API_BASE_URL
        const response = await axios.get(endpoint);
        return response;
        
    }catch(error){
        console.log(error.message);
        return false;
    };
};


export default fetchDetails;