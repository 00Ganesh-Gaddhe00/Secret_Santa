import React from "react";
import { useRef, useEffect } from "react";

const SantaAssignments = ({ assignments }) => {

  const listRef = useRef(null);

  useEffect(() => {
    if (assignments.length > 0) {
      listRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [assignments]);

  return (
    <div ref={listRef} className=" w-fit mx-auto my-3 bg-white rounded-3xl p-2 border" >
      <table>
        <thead>
          <tr>
            <th  className=" border-r border-gray-200 p-3">Employee_Name</th>
            <th className=" p-3">Employee_EmailID</th>
            <th  className=" border-r border-gray-200 p-3">Secret_Child_Name</th>
            <th className=" p-3">Secret_Child_EmailID</th>
          </tr>
        </thead>
        <tbody>
          {assignments.map((pair, index) => (
            <tr  key={index}>
              <td className="border-t border-r border-gray-200 p-2">{pair.Employee_Name}</td>
              <td className="border-t border-gray-200 p-2">{pair.Employee_EmailID}</td>
              <td className="border-t border-gray-200 p-2">{pair.Secret_Child_Name}</td>
              <td className="border-t border-gray-200 p-2">{pair.Secret_Child_EmailID}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SantaAssignments;
