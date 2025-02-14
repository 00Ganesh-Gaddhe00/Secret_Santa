import React, { useState } from "react";
import Papa from "papaparse";

const FileUpload = ({ onFileUpload, type }) => {
  // const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    // setFile(e.target.files[0]);
    const file = e.target.files[0];
     if(file){
      Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: (result) => onFileUpload(result.data),
      });
     }
  };

  const handleUpload = () => {
    if (file) {
      Papa.parse(file, {
        header: true,
        complete: (result) => onFileUpload(result.data),
      });
    }
  };


  return (
    <div className="">
      
      <label className=' bg-black cursor-pointer text-white flex items-center rounded-full justify-center h-13 w-2xs p-3 hover:scale-103 transition-transform duration-300'>
        {(type==="new")? "Upload Emplyees CSV": "Upload Previouslist CSV"}
  <input
    type="file"
    accept=".csv"
    onChange={handleFileChange}
    className="hidden"
  />
</label>

      
    </div>
  );
};

export default FileUpload;
