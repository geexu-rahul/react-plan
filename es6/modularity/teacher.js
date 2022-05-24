import { Person } from "./person";

export class Teacher extends Person{
    constructor(name){
        this.name = name; 
    }
    displayTeacher(){
        console.log("this is display Teacher ")
    }
}