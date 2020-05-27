function sayHello(person: string): string {
  return "Hello, " + person;
}
var user = "Super Student";
document.getElementById("One").innerHTML = sayHello(user);

// class called Person
class Employee {
  private firstName: string;
  private lastName: string;
  private age: number;
  private phoneNum: string;
  private city: string;
  private state: string;
  private zipCode: number;
  private occupation: string;
  private hourlyWage: number;
  private hoursWorked: number;
  private degrees: string[] = [];

  // constructor
  constructor(
    firstName: string,
    lastName: string,
    hourlyWage: number,
    age?: number,
    phoneNum?: string,
    city?: string,
    state?: string,
    zipCode?: number,
    occupation?: string,
    hoursWorked?: number
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    if (age) {
      this.age = age;
    }
    if (phoneNum) {
      this.phoneNum = phoneNum;
    }
    if (city) {
      this.city = city;
    }
    if (state) {
      this.state = state;
    }
    if (zipCode) {
      this.zipCode = zipCode;
    }
    if (occupation) {
      this.occupation = occupation;
    }
    this.hourlyWage = hourlyWage;
    if (hoursWorked) {
      this.hoursWorked = hoursWorked;
    } else {
      this.hoursWorked = 40;
    }
  }
  //Getters & Setters
  public setFirstName(firstName: string) {
    this.firstName = firstName;
  }
  public setLastName(lastName: string) {
    this.lastName = lastName;
  }
  public setAge(age: number) {
    this.age = age;
  }
  public setPhoneNum(phoneNum: string) {
    this.phoneNum = phoneNum;
  }
  public setCity(city: string) {
    this.city = city;
  }
  public setState(state: string) {
    this.state = state;
  }
  public setZipCode(zipCode: number) {
    this.zipCode = zipCode;
  }
  public setOccupation(occupation: string) {
    this.occupation = occupation;
  }
  public setHourlyWage(hourlyWage: number) {
    this.hourlyWage = hourlyWage;
  }
  public setHoursWorked(hoursWorked: number) {
    this.hoursWorked = hoursWorked;
  }

  public getFirstName(): string {
    return this.firstName;
  }
  public getLastName(): string {
    return this.lastName;
  }
  public getAge(): number {
    return this.age;
  }
  public getPhoneNum(): string {
    return this.phoneNum;
  }
  public getCity(): string {
    return this.city;
  }
  public getState(): string {
    return this.state;
  }
  public getZipCode(): number {
    return this.zipCode;
  }
  public getOccupation(): string {
    return this.occupation;
  }

  public getHourlyWage() {
    return this.hourlyWage;
  }
  public getHoursWorked() {
    return this.hoursWorked;
  }
  // Methods
  public fullName(): string {
    return "It is nice to meet you, " + this.firstName + " " + this.lastName;
  }
  public moreInfo(): string {
    return this.firstName + " " + this.lastName + " is a " + this.occupation;
  }
  public lives(): string {
    return (
      this.firstName +
      " " +
      this.lastName +
      " lives in " +
      this.city +
      "," +
      this.state +
      " . "
    );
  }
  public ageMethod(): string {
    return (
      this.firstName + " " + this.lastName + " is " + this.age + " years old."
    );
  }
  public weeklyWage(hoursWorked?: number): number {
    return this.hourlyWage * this.hoursWorked;
  }

  public addCerts(...degrees: string[]) {
    this.degrees.push(...degrees);
    return "Degrees: " + this.degrees.join(",");
  }
}

interface EmployeeOptions {
  firstName?: string;
  lastName?: string;
}

function createEmp(
  config: EmployeeOptions
): { firstName: string; lastName: string } {
  let newEmployee = { firstName: "Your", lastName: "Name" };
  if (config.firstName) {
    newEmployee.firstName = config.firstName;
  }
  if (config.lastName) {
    newEmployee.lastName = config.lastName;
  }
  return newEmployee;
}

let emp = createEmp({ firstName: "", lastName: "" });

let persOne: Employee = new Employee(
  "James",
  "Arnold",
  124,
  32,
  "919-882-2680",
  "Apex",
  "North Carolina",
  27540,
  "Developer"
);

document.getElementById("Two").innerHTML =
  persOne.fullName() +
  ". Your weekly rate of pay is $: " +
  persOne.weeklyWage();
document.getElementById("Three").innerHTML = persOne.ageMethod();
document.getElementById("Four").innerHTML = persOne.lives();
document.getElementById("Five").innerHTML = persOne.addCerts(
  "MBA",
  "BACHELOR",
  "WEB DEVELOPMENT"
);

document.getElementById("Six").innerHTML =
  "Created new Employee from Interface: " + emp.firstName + " " + emp.lastName;
