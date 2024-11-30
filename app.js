import { Student,Organization , Teacher, Group, Payment, Salary  } from './main.js';

import { Student, Teacher, Group, Payment, Salary, Organization } from './path-to-file.js';

let student = new Student("Jumayev", "Shuxrat", "+123456789", "77 Street");
console.log(student.telNumber); 
student.telNumber = "+987654321";
console.log(student.telNumber); 

let teacher = new Teacher("Buburmirzo", "BRM", "777 Mazil", 3000, "Senior");
console.log(teacher.teacherSalary);
teacher.teacherSalary = 3500;
console.log(teacher.teacherSalary); 

let group = new Group("N83-Group", "Slack", "4-Oy", 25, teacher);
console.log(group.totalStudents); 
group.totalStudents = 30;
console.log(group.totalStudents); 

let payment = new Payment("Shuxrat", "Dilshod", 1000, Date.now());
console.log(payment.paymentStatus);
payment.paymentStatus = false;
console.log(payment.paymentStatus); 

let salary = new Salary("Boburmirzo", 1500, "USD", Date.now());
console.log(salary.salaryAmount); 
salary.salaryAmount = 1800;
console.log(salary.salaryAmount); 

let org = new Organization("Najot Ta`lim", "Temurbek Adxamov", "Chilzor 9 kvartal");
console.log(org.totalEmployees); 
org.totalEmployees = 450;
console.log(org.totalEmployees); 



