interface DirectorInterface{
    workFromHome ():string;
    getCoffeeBreak() : string;
    workDirectorTasks():string;  
}

interface TeacherInterface{
    workFromHome ():string;
    getCoffeeBreak() : string;
    workDirectorTasks():string;  
}

class Director implements DirectorInterface{
    workFromHome =(): string => 'Working from home';
    getCoffeeBreak=(): string => 'Getting a coffee break';
    workDirectorTasks=(): string => 'Getting to director tasks';
}

class Teacher implements TeacherInterface{
    workFromHome = () : string => 'Cannot work from home';
    getCoffeeBreak = () : string => 'Cannot have a break';
    workTeacherTasks = () : string => 'Getting to work';
}

const CreatEmployee = (salary:number | string) : Teacher | Director => Number(salary) < 500 ? new Teacher() :new Director();

const isDirector = (employee:Teacher | Director) : boolean => employee instanceof Director;

function executeWork(employee: Teacher|Director){
    if(employee instanceof Director){
        return (employee as Director).workDirectorTasks();
    }{
        return (employee as Teacher).workDirectorTasks();
    }
}  

type Subjects = 'Math' | 'History';

export const teachClass = (todayClass: Subjects) : string => {
    return todayClass === 'Math' ? 'Teaching Math': 'Teaching History';
}
