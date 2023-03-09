const student = {
    id: 1,
    school: "Liceo",
    year: 3,
    personalData : {
      name: "vasco",
      surname: "ceti",
      age:30,
    }
  };
  
  let student2= Object.assign ({} , student)
  
  student2.school= "scuola superiore"
  console.log (student)
  console.log (student2)