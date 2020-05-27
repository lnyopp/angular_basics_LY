function sayHello(person) {
    return "Hello, " + person;
}
var user = "Super Student";
document.getElementById("One").innerHTML = sayHello(user);
// class called Person
var Employee = /** @class */ (function () {
    // constructor
    function Employee(firstName, lastName, hourlyWage, age, phoneNum, city, state, zipCode, occupation, hoursWorked) {
        this.degrees = [];
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
        }
        else {
            this.hoursWorked = 40;
        }
    }
    //Getters & Setters
    Employee.prototype.setFirstName = function (firstName) {
        this.firstName = firstName;
    };
    Employee.prototype.setLastName = function (lastName) {
        this.lastName = lastName;
    };
    Employee.prototype.setAge = function (age) {
        this.age = age;
    };
    Employee.prototype.setPhoneNum = function (phoneNum) {
        this.phoneNum = phoneNum;
    };
    Employee.prototype.setCity = function (city) {
        this.city = city;
    };
    Employee.prototype.setState = function (state) {
        this.state = state;
    };
    Employee.prototype.setZipCode = function (zipCode) {
        this.zipCode = zipCode;
    };
    Employee.prototype.setOccupation = function (occupation) {
        this.occupation = occupation;
    };
    Employee.prototype.setHourlyWage = function (hourlyWage) {
        this.hourlyWage = hourlyWage;
    };
    Employee.prototype.setHoursWorked = function (hoursWorked) {
        this.hoursWorked = hoursWorked;
    };
    Employee.prototype.getFirstName = function () {
        return this.firstName;
    };
    Employee.prototype.getLastName = function () {
        return this.lastName;
    };
    Employee.prototype.getAge = function () {
        return this.age;
    };
    Employee.prototype.getPhoneNum = function () {
        return this.phoneNum;
    };
    Employee.prototype.getCity = function () {
        return this.city;
    };
    Employee.prototype.getState = function () {
        return this.state;
    };
    Employee.prototype.getZipCode = function () {
        return this.zipCode;
    };
    Employee.prototype.getOccupation = function () {
        return this.occupation;
    };
    Employee.prototype.getHourlyWage = function () {
        return this.hourlyWage;
    };
    Employee.prototype.getHoursWorked = function () {
        return this.hoursWorked;
    };
    // Methods
    Employee.prototype.fullName = function () {
        return "It is nice to meet you, " + this.firstName + " " + this.lastName;
    };
    Employee.prototype.moreInfo = function () {
        return this.firstName + " " + this.lastName + " is a " + this.occupation;
    };
    Employee.prototype.lives = function () {
        return (this.firstName +
            " " +
            this.lastName +
            " lives in " +
            this.city +
            "," +
            this.state +
            " . ");
    };
    Employee.prototype.ageMethod = function () {
        return (this.firstName + " " + this.lastName + " is " + this.age + " years old.");
    };
    Employee.prototype.weeklyWage = function (hoursWorked) {
        return this.hourlyWage * this.hoursWorked;
    };
    Employee.prototype.addCerts = function () {
        var _a;
        var degrees = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            degrees[_i] = arguments[_i];
        }
        (_a = this.degrees).push.apply(_a, degrees);
        return "Degrees: " + this.degrees.join(",");
    };
    return Employee;
}());
function createEmp(config) {
    var newEmployee = { firstName: "Your", lastName: "Name" };
    if (config.firstName) {
        newEmployee.firstName = config.firstName;
    }
    if (config.lastName) {
        newEmployee.lastName = config.lastName;
    }
    return newEmployee;
}
var emp = createEmp({ firstName: "", lastName: "" });
var persOne = new Employee("James", "Arnold", 124, 32, "919-882-2680", "Apex", "North Carolina", 27540, "Developer");
document.getElementById("Two").innerHTML =
    persOne.fullName() +
        ". Your weekly rate of pay is $: " +
        persOne.weeklyWage();
document.getElementById("Three").innerHTML = persOne.ageMethod();
document.getElementById("Four").innerHTML = persOne.lives();
document.getElementById("Five").innerHTML = persOne.addCerts("MBA", "BACHELOR", "WEB DEVELOPMENT");
document.getElementById("Six").innerHTML =
    "Created new Employee from Interface: " + emp.firstName + " " + emp.lastName;
