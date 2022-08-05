import axiosClient from "../axiosClient";



const importLocation=(data)=>{
    const url ='importlocation';
    return axiosClient.post(url,data);
}

export {importLocation}