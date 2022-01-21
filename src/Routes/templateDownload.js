import api from "../services/api";
import { Navigate } from "react-router-dom";

const downloadTemplate= async(data) => {
        try{
            const response = await api.post('/download-template',{data})
            console.log(response);
            window.open('http://localhost:5000/api/v1/template/?template=' + response.data.url)
        }
        catch(error){
            console.log(error.response);
            Navigate("/network")
        }   
    }

export default downloadTemplate;  

