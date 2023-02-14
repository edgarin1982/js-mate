/* const students = [
    {
      name: "Jill",
      lastname: "Doe",
      age: 24,
      course: "Marketing",
    },
    {
      name: "John",
      lastname: "Doe",
      age: 22,
      course: "Web Development",
    },
    {
      name: "Jack",
      lastname: "Doe",
      age: 20,
      course: "Accounting",
    },
    {
      name: "Ryan Jhon",
      lastname: "Ray",
      age: 23,
      course: "Web Development",
    },
    {
      name: "Jane",
      lastname: "Doe",
      age: 20,
      course: "Financial Management",
    },
  ];*/

  //foreach

  /* for (let index = 0; index < students.length; index++) {
    const element = students[index];
    
  } */

  /* students.forEach(function (student, index, students) {
      console.log(student);
      console.log(index);
      console.log(students);
  }) */


  /* const fullNames= []
  students.forEach(student => 
   { fullNames.push(student.name + ' ' + student.lastname)});

   console.log(fullNames); */

   //MAP
   /* const fullNames = students.map(function (student){
    return student.name + ' ' + student.lastname;
   })
   console.log(fullNames); */

   
 /*  const names = students.map(item => ({
    
        //spread operator
        ...item,
        course: 'Programing'
        name: item.name,
        lastname: item.lastname,
        age: item.age,
        course: item.course, 
        title: `${item.name} - ${item.course}`
        fullname: item.name + ' ' + item.lastname,
        age: item.age,
        course: item.course 
    
  }));
  console.log(names);  */


  const products = [
	{ id: "1", name: "shirt", category: "clothing" },
	{ id: "2", name: "Sports Tennis", category: "accessories" },
	{ id: "3", name: "Casual shoes", category: "footwear" },
	{ id: "4", name: "skirt", category: "clothing" },
	{ id: "5", name: "tie", category: "clothing" },
];  

const rta = products.map(item =>{
    item.tax = 5.5;
    return item;
    
})
console.log(rta); 

