let person = {
    name: "Gabriel",
    age: 19,
    location: "Anambra"
  };
  
  console.log("Initial person object:", person);
  
  console.log("Name:", person.name);            
  console.log("Age:", person["age"]);      
  console.log("Location:", person.location);
  
  person.email = "alice@example.com";           
  person["profession"] = "Web Developer";       
  
  console.log("After adding email & profession:", person);

  person.age = 26;                            
  person["location"] = "Abuja";                 
  
  console.log("After updating age & location:", person);