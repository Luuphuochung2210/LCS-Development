import React, { useState, useRef } from 'react'
import MainPage from '../../components/Layout/MainPage'
import Papa from "papaparse";
import ImportRows from './ImportRows';
import { importLocation } from '../../api/Location/importLocation.js';

const allowedExtensions = ["csv"];
const LocationImport = () => {
   // This state will store the parsed data
   const [data, setData] = useState([]);
    const [isCsvValid, setIsCsvValid] = useState(false);
   // It state will contain the error when
   // correct file extension is not used
   const [error, setError] = useState("");
    
   // It will store the file uploaded by the user
   const [file, setFile] = useState("");
 
   // This function will be called when
   // the file input changes
   const handleFileChange = (e) => {
       setError("");
        
       // Check if user has entered the file
       if (e.target.files.length) {
           const inputFile = e.target.files[0];
            
           // Check the file extensions, if it not
           // included in the allowed extensions
           // we show the error
           const fileExtension = inputFile?.type.split("/")[1];
           if (!allowedExtensions.includes(fileExtension)) {
               setError("Please input a csv file");
               return;
           }

           // If input type is correct set the state
           setFile(inputFile);
       }
   };
   const handldeImport =()=>{
        importLocation(data);
   }
   const handleParse = () => {
        
       // If user clicks the parse button without
       // a file we show a error
       if (!file) return setError("Enter a valid file");

       // Initialize a reader which allows user
       // to read any file or blob.
       const reader = new FileReader();
        
       // Event listener on reader when the file
       // loads, we parse it and set the data.
       reader.onload = async ({ target }) => {
           const csv = Papa.parse(target.result, { header: true });
           const parsedData = csv?.data;
           const columns = Object.keys(parsedData[0]);
           if(JSON.stringify(columns) === JSON.stringify(["ID","Address","Status"])){
            setIsCsvValid(true);
            setData(parsedData);
           }else{
            setIsCsvValid(false);
            alert("File invalid!")
           }
           
            
       };
       reader.readAsText(file);
   };
  return (
        <MainPage>
            <div>
            
                <h2 className='mt-5'>Locations</h2>
                <div>
            <label htmlFor="csvInput" style={{ display: "block" }}>
                Enter CSV File
            </label>
            <input
                onChange={handleFileChange}
                accept=".csv"
                id="csvInput"
                name="file"
                type="File"
            />
            <div>
                <button onClick={handleParse}>Parse</button>
            </div>
           
        </div>
                {isCsvValid&&<table className='table'>
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Address</th>
                            <th scope="col">Status</th>
                            <th scope="col"></th>
                            
                        </tr>
                    </thead>
                    <tbody>
                    {
                            data?.map((item, index)=> <ImportRows key={index} item={item}/>)
                        }
                    </tbody>
                    <button onClick={handldeImport}>Import</button>
                </table>}
            </div>
        </MainPage>
  )
}

export default LocationImport