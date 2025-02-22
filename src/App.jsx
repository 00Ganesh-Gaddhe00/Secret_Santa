import { useState } from 'react';
import FileUpload from "./components/FileUpload";
import SantaAssignments from "./components/SantaAssignments";
import DownloadCSV from "./components/DownloadCSV";
import { assignSecretSanta } from "./utils/assignmentLogic";
import santa_logo from './utils/santa_logo.jpg';

function App() {
  const [employees, setEmployees] = useState([]);
  const [previousAssignments, setPreviousAssignments] = useState([]);
  const [assignments, setAssignments] = useState([]);

  const handleEmployeeUpload = (data) => setEmployees(data);
  const handlePreviousUpload = (data) => setPreviousAssignments(data);

  const handleGenerate = () => {
    setAssignments(assignSecretSanta(employees, previousAssignments));
  };

  return (
    <div className="bg-[url('/src/utils/background.avif')] bg-repeat backdrop-opacity-50 min-h-screen">
      <div className='bg-white/80 min-h-screen'>
        <h1 className='josefin-sans-heading bg-white text-4xl mt-4 text-center border border-gray-300 rounded-2xl p-3 max-w-5xl mx-auto shadow-sm'>
          Secret Santa Generator
        </h1>

        <div className='border-4 bg-white flex border-gray-300 shadow-lg rounded-full justify-center w-60 h-60 p-2 mx-auto mt-8'>
          <img className="w-full h-full object-contain rounded-full" src={santa_logo} alt="Santa Logo" />
        </div>

        <div className='mt-5 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-20 w-fit mx-auto'>
          <div className='flex flex-col lg:flex-row items-center gap-1'>
            <div className='w-[9rem] min-h-[2rem] flex items-center justify-center'>
              {employees.length > 0 && <p className='bg-white border border-gray-400 rounded-md px-4 py-1 text-sm text-center'>employees.CSV</p>}
            </div>
            <FileUpload onFileUpload={handleEmployeeUpload} type="new" />
          </div>

          <div className='flex lg:flex-row flex-col-reverse items-center gap-1'>
            <FileUpload onFileUpload={handlePreviousUpload} type="prev" />
            <div className='w-[9rem] min-h-[2rem] flex items-center justify-center'>
              {previousAssignments.length > 0 && <p className='bg-white border border-gray-400 rounded-md px-4 py-1 text-sm text-center'>PreviousE.CSV</p>}
            </div>
          </div>
        </div>

        <button
          className='border-2 bg-white flex items-center rounded-full justify-center h-14 w-full max-w-2xl mx-auto mt-8 p-3 hover:scale-105 cursor-pointer transition-transform duration-300'
          onClick={handleGenerate}>
          Generate Secret Santa
        </button>

        <div className='mt-8 w-fit md:min-w-2xl mx-auto bg-gradient-to-b from-gray-100 to-gray-300 rounded-4xl p-4 min-h-30'>
          <h3 className='font-bold text-center'>
            Assigned List: {assignments.length > 0 ? <DownloadCSV data={assignments} /> : "No List"}
          </h3>
          {assignments.length > 0 && <SantaAssignments assignments={assignments} />}
        </div>
      </div>
    </div>
  );
}

export default App;
