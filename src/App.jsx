import { use, useState } from 'react'
import FileUpload from "./components/FileUpload";
import SantaAssignments from "./components/SantaAssignments";
import DownloadCSV from "./components/DownloadCSV";
import { assignSecretSanta } from "./utils/assignmentLogic";
import santa_logo from './utils/santa_logo.jpg'
import back_ground from './utils/background.avif'

function App() {
  const [employees, setEmployees] = useState([]);
  const [previousAssignments, setPreviousAssignments] = useState([]);
  const [assignments, setAssignments] = useState([]);

  const handleEmployeeUpload = (data) => {
    console.log(data)
    
    setEmployees(data);}
  const handlePreviousUpload = (data) => setPreviousAssignments(data);

  const handleGenerate = () => {
    const newAssignments = assignSecretSanta(employees, previousAssignments);
    // console.log(newAssignments)
    setAssignments(newAssignments);
  };

  return (
    <div className="bg-[url('/src/utils/background.avif')] bg-repeat backdrop-opacity-50 min-h-screen h-auto" >

      <div className='bg-white/80 min-h-screen h-auto' >
      
          
      <h1 className='josefin-sans-heading bg-white text-4xl mt-4 text-center border-[1px] border-gray-300 rounded-2xl p-3 max-w-5xl mx-auto 
                      shadow-sm

                    '>
        Secret Santa Generator</h1>
        

        <div className='border-4 bg-white flex border-gray-300 shadow-lg rounded-full justify-center w-60 h-60 ite p-2 mx-auto mt-8'> 
          <img className="w-full h-full object-contain rounded-full" height="200px"  width="200px"src= {santa_logo} />
          </div>
    
      
     <div className=' mt-5 flex items-center justify-center gap-20 w-fit mx-auto'>
      <div className='flex'>
      {/* <h2 >Upload Employees CSV</h2> */}
      <div className='inline w-[9rem] h-fit my-auto'>
        {(employees.length>0)&& <p className=' bg-white border-[1px] pl-4 border-gray-400 rounded-[5px]'>employees.CSV</p>}
      </div>
      <FileUpload onFileUpload={handleEmployeeUpload} type="new"/>
      </div>
      
      <div className='flex'>
      {/* <h2>Upload Previous Year Assignments</h2> */}
      <FileUpload onFileUpload={handlePreviousUpload} type="prev"/>
      <div className='inline w-[9rem] h-fit my-auto'>
      {(previousAssignments.length>0) &&<p className='bg-white border-[1px] border-gray-400 rounded-[5px] pl-4'>PreviousE.CSV
        </p>}
      </div>

      </div>
      </div>


      <button 
       className=' border-2 bg-white flex items-center rounded-full justify-center h-14 w-2xl mx-auto mt-8 p-3 hover:scale-103 cursor-pointer transition-transform duration-300 '
       onClick={handleGenerate}>
        Generate Secret Santa
      </button>
      
      <div  className=' mt-5 w-2xl mx-auto bg-gradient-to-b from-gray-100 to-gray-300 rounded-4xl p-2 min-h-30'>
        <h3 className='font-bold text-center'>Assigned List : {(assignments.length>0)? <span><DownloadCSV data={assignments} />
        </span>:"No List"}</h3>
      {assignments.length > 0 && (
        <>
          <SantaAssignments assignments={assignments} />
        </>
      )}
      </div>
      </div>

    </div>
  );
}

export default App
