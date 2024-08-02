interface Student{
    firstName: string,
    lastName: string,
    age:number,
    location: string
    }
    
    const student1: Student = {
        firstName: 'Paul',
        lastName: 'Jerry',
        age: 27,
        location: 'Nigeria'
        } 
    
    const student2: Student = {
        firstName: 'Jerry',
        lastName: 'Parkerson',
        age: 28,
        location: 'Edo state'
        }

const studentsList: Array<Student> = [student1, student2];

const body: HTMLBodyElement = document.getElementsByTagName("body")[0];
const table: HTMLTableElement = document.createElement('table');
const thead: HTMLTableSectionElement = document.createElement('thead');
const th1: HTMLTableCellElement = document.createElement('th');
const th2: HTMLTableCellElement = document.createElement('th');

th1.innerText = 'First Name';
th2.innerText = 'Location';
th1.style.border = '1px solid gray';
th2.style.border = '1px solid gray';
th1.style.padding = '.5rem';
th2.style.padding = '.5rem';
table.style.border = '1px solid gray';
table.style.borderCollapse = 'collapse';



thead.append(th1);
thead.append(th2);

table.append(thead);


studentsList.forEach((student) => {
    const row: HTMLTableRowElement = document.createElement('tr');

    const column1: HTMLTableCellElement = document.createElement('td');
    const column2: HTMLTableCellElement = document.createElement('td');

    column1.innerText = student.firstName;
    column2.innerText = student.lastName;

    column1.style.border = '1px solid gray';
    column2.style.border = '1px solid gray';
    column1.style.padding = '.5rem';
    column2.style.padding = '.5rem';

    row.append(column1);
    row.append(column2)

    table.append(row);
});

body.append(table) 



//////

interface Teacher {
    readonly firstName: 'string',
    readonly lastName:'string';
    fullTimeEmployee:'boolean',
    yearsOfExperience:'number',
    location:'string',
    [propName:string]: any
}

interface Directors extends Teacher {
    numberOfReports:'number'
}


const printTeacher = (firstName: string, lastName: string) : string =>'${firstName[0]}.${lastName}';
    
class StudentClass{
    first: string;
    last:string;
    constructor(firstName:string, lastName:string){
        this.first = firstName;
        this.last = lastName;
    }

    workOnHomework = () :string => 'Currently working';
    displayName = ():string => this.first;
}

interface StudentConstructor{
    (firstName: string, lastName:string): classInterface;
        
}

const student = new StudentClass("Paul", "jerry");
console.log(student.displayName())
console.log(student.workOnHomework())
