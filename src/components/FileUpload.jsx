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
      
      <label className='bg-black cursor-pointer text-white flex items-center justify-center 
                   rounded-full w-full md:w-60 lg:w-80 
                   p-2 md:p-3 lg:p-4 text-sm md:text-base lg:text-lg 
                   h-12 md:h-14 hover:scale-105 transition-transform duration-300'>
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
