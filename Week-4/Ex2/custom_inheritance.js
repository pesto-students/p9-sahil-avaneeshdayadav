console.log("Example of Prototype");
var Person = function(){};

Person.prototype.initialize = function(name, age)
{
    this.name = name;
    this.age = age;
}

var teacher = function(){};
teacher.prototype.teach = function(subject)
{
    console.log(this.name +" is now teaching "+ subject);
}

//Setting prototype of teacher with prototype of person.
Object.setPrototypeOf(teacher.prototype, Person.prototype);


var him = new teacher();
him.initialize("Adam",45);
him.teach("JavaScript");
