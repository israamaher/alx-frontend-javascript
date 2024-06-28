export class HolbertonCourse{
 constructor(name, length, students){
  if(typeof name !== 'string' || typeof length !== 'number' || !Array.isArray(students)){
   throw new Error('Invalid attribute type');
  }
  
 this._name = name;
 this._length = length;
 this._students = students;
 }
 
 get name(){
  return this._name;
 }
 set name(value){
  this._name = value;
 }

 get length(){
  return this._length;
 }
 set length(value){
  this._length = value;
 }

 get students() {
    return this._students;
  }

  set students(value) {
    if (!Array.isArray(value)) {
      throw new Error('Students must be an array');
    }
    this._students = value;
  }
}
