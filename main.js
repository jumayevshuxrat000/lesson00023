export class Student {
    constructor(fname, lname, tel, address) {
      this.fname = fname;
      this.lname = lname;
      this.tel = tel;
      this.address = address;
    }
  
    get telNumber() {
      return this.tel;
    }

    set telNumber(newTel) {
      this.tel = newTel;
    }
  
    getFullName() {
      return `${this.fname} ${this.lname}`;
    }
  
    info() {
      return `Name: ${this.getFullName()}, Tel: ${this.tel}, Address: ${this.address}`;
    }
  }
  
  export class Teacher {
    constructor(fname, lname, address, salary, level) {
      this.fname = fname;
      this.lname = lname;
      this.address = address;
      this.salary = salary;
      this.level = level;
    }
    get teacherSalary() {
      return this.salary;
    }
  
    set teacherSalary(newSalary) {
      this.salary = newSalary;
    }
  
    getFullName() {
      return `${this.fname} ${this.lname}`;
    }
  
    description() {
      return `Name: ${this.getFullName()}, Address: ${this.address}, Salary: ${this.salary}, Level: ${this.level}`;
    }
  }
  
  export class Group {
    constructor(name, room, level, studentCounts, teacher) {
      this.name = name;
      this.room = room;
      this.level = level;
      this.studentCounts = studentCounts;
      this.teacher = teacher;
    }
  
    get totalStudents() {
      return this.studentCounts;
    }

    set totalStudents(newCount) {
      this.studentCounts = newCount;
    }
  
    fullInformation() {
      return `Group: ${this.name}, Room: ${this.room}, Level: ${this.level}, Student Counts: ${this.studentCounts}, Teacher: ${this.teacher.getFullName()}`;
    }
  }
  
  export class Payment {
    constructor(from, to, amount, date, status = true) {
      this.from = from;
      this.to = to;
      this.amount = amount;
      this.date = date;
      this.status = status;
    }
    get paymentStatus() {
      return this.status ? "Paid" : "Not Paid";
    }
    set paymentStatus(newStatus) {
      this.status = newStatus;
    }
  }
  
  export class Salary {
    constructor(to, amount, type, date, status = true) {
      this.to = to;
      this.amount = amount;
      this.type = type;
      this.date = date;
      this.status = status;
    }
    get salaryAmount() {
      return this.amount;
    }
    set salaryAmount(newAmount) {
      this.amount = newAmount;
    }
  
    getInfo() {
      return `To: ${this.to}, Amount: ${this.amount} ${this.type}, Date: ${this.date}, Status: ${this.status ? "Paid" : "Not Paid"}`;
    }
  }
  
  export class Organization {
    constructor(name, founder, address, employeeCount = 400) {
      this.name = name;
      this.founder = founder;
      this.address = address;
      this.employeeCount = employeeCount;
    }
    get totalEmployees() {
      return this.employeeCount;
    }
  
    set totalEmployees(newCount) {
      this.employeeCount = newCount;
    }
  
    getInfo() {
      return `Organization: ${this.name}, Founder: ${this.founder}, Address: ${this.address}, Employee Count: ${this.employeeCount}`;
    }
  }
  