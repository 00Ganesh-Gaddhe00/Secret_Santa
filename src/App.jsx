import { useState } from "react";
import FileUpload from "./components/FileUpload";
import SantaAssignments from "./components/SantaAssignments";
import DownloadCSV from "./components/DownloadCSV";
import { assignSecretSanta } from "./utils/assignmentLogic";
import santa_logo from "./utils/santa_logo.jpg";

function App() {
  const [employees, setEmployees] = useState([]);
  const [previousAssignments, setPreviousAssignments] = useState([]);
  const [assignments, setAssignments] = useState([]);

  const handleEmployeeUpload = (data) => setEmployees(data);
  const handlePreviousUpload = (data) => setPreviousAssignments(data);

  const handleGenerate = () => {
    const newAssignments = assignSecretSanta(employees, previousAssignments);
    setAssignments(newAssignments);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-8 px-4">
      <h1 className="text-4xl font-bold text-center bg-white px-6 py-3 rounded-lg shadow-md border border-gray-300">
        Secret Santa Generator
      </h1>

      <div className="mt-6 w-40 h-40 flex items-center justify-center bg-white border-4 border-gray-300 shadow-lg rounded-full p-2">
        <img className="w-full h-full object-contain rounded-full" src={santa_logo} alt="Secret Santa Logo" />
      </div>

      <div className="mt-6 flex flex-col md:flex-row items-center gap-6">
        <div className="flex flex-col items-center">
          {employees.length > 0 && (
            <p className="bg-white border border-gray-400 rounded-md px-4 py-1 text-sm text-center mb-2">
              employees.CSV
            </p>
          )}
          <FileUpload onFileUpload={handleEmployeeUpload} type="new" />
        </div>

        <div className="flex flex-col items-center">
          <FileUpload onFileUpload={handlePreviousUpload} type="prev" />
          {previousAssignments.length > 0 && (
            <p className="bg-white border border-gray-400 rounded-md px-4 py-1 text-sm text-center mt-2">
              PreviousE.CSV
            </p>
          )}
        </div>
      </div>

      <button
        className="mt-6 bg-white border-2 border-gray-400 px-6 py-3 rounded-full shadow-md hover:scale-105 transition-transform duration-300"
        onClick={handleGenerate}
      >
        Generate Secret Santa
      </button>

      <div className="mt-6 bg-gray-200 rounded-lg p-4 shadow-md w-full max-w-2xl">
        <h3 className="font-bold text-center mb-2">
          Assigned List: {assignments.length > 0 ? <DownloadCSV data={assignments} /> : "No List"}
        </h3>
        {assignments.length > 0 && <SantaAssignments assignments={assignments} />}
      </div>
    </div>
  );
}

export default App;
