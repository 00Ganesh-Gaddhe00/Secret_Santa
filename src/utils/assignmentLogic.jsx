export const assignSecretSanta = (employees, previousAssignments) => {
   
  if(employees.length<2){
    alert('Upload employees List')
    return [];
  }

  const shuffled = [...employees].sort(() => Math.random() - 0.5);
  const assignments = [];

  for (let i = 0; i < employees.length; i++) {
    let santa = employees[i];
    let child = shuffled[i];

    while (
      santa.Employee_EmailID === child.Employee_EmailID ||
      previousAssignments.some(
        (prev) =>
          prev.Employee_EmailID === santa.Employee_EmailID &&
          prev.Secret_Child_EmailID === child.Employee_EmailID
      )
    ) {
      shuffled.push(shuffled.shift());
      child = shuffled[i];
    }

    assignments.push({
      Employee_Name: santa.Employee_Name,
      Employee_EmailID: santa.Employee_EmailID,
      Secret_Child_Name: child.Employee_Name,
      Secret_Child_EmailID: child.Employee_EmailID,
    });
  }

  return assignments;
};




