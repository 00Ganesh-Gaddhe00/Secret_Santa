import React from "react";
import Papa from "papaparse";

const DownloadCSV = ({ data, filename = "data.csv" }) => {
  const handleDownload = () => {
    if (!data || data.length === 0) {
      alert("No data available to download!");
      return;
    }
    const csv = Papa.unparse(data);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="border rounded-[5px] font-light text-sm px-[7px] shadow-sm  bg-gray-600 text-white hover:scale-105 hover:bg-gray-400 cursor-pointer"
    >
      Download
    </button>
  );
};

export default DownloadCSV;

