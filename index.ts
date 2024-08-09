
/********************************************************************************************************************/
// Interface for Object Shapes
/********************************************************************************************************************/

interface Todo {
    title: string;
    description: string;
    id: number;
    done: boolean;
}

/********************************************************************************************************************/
// Type Annotations
/********************************************************************************************************************/

// Primitive Types: string, number, boolean, null, undefined, void
// Array Types: number[], string[]
// Tuple Types: [string, number]
// Object Types: { name: string; age: number; }
// Any Type: any (used when you want to opt out of type checking)

let userName: string = "Anuj";
let userAge: number = 19;
let isLoggedIn: boolean = true;

// Function Parameters with Return Type

function sayHello(name: string, country: string): string {
    return `Hello ${name} from ${country}`;
}

let greeting1 = sayHello("Anuj", "Georgia");
let greeting2 = sayHello("Anuj", "gEorgia");
console.log(greeting1);
console.log(greeting2);

/********************************************************************************************************************/
// Arrays and Tuples
/********************************************************************************************************************/

let rollNumbers: number[] = [11, 2, 3, 4, 54];

// Objects
// You can define the shape of an object using type annotations.

interface Student {
    name: string;
    age: number;
    rollNum: number;
}

const studentDetails: Student = {
    name: "Anuj",
    age: 19,
    rollNum: 23,
};

console.log(studentDetails);

// Mixed Type Arrays

let numbers: Array<number | string> = [1, 2, 3, 4, 5, 6, "go"];
let mixedArray: Array<string | boolean | number> = [true, 33, "conductor"];

let newStrings: (string | number)[] = ["Bikaner", 86]; // Mixed type array

// Tuples

let patientInfo: [string, number] = ["patientNo", 420]; // Elements should be in sequence as types of them are defined

let doctorInfo: [string, number, number?] = ['Dr. Salunke', 49, 21]; // Age is optional

let [drName, idNo, drAge] = doctorInfo;

let [DrName, info, age]: [string, number, number?] = ['Dr. Salunke', 49, 21];

/********************************************************************************************************************/
// Enums
/********************************************************************************************************************/

enum Direction {
    SOUTH = "south",
    WEST = "west",
    EAST = "east",
    NORTH = "north"
}

interface House {
    name: string;
    no: number;
    direction: Direction;
}

let house: House = {
    name: "Mannat",
    no: 23,
    direction: Direction.EAST
}

console.log(Direction); // Logs the Direction enum object

/********************************************************************************************************************/
// Interfaces
/********************************************************************************************************************/

interface Person {
    name : string ;
    age : number ;
    greet () : void ;
    adress? : string ; // Optional Property
}


// Read Only 

interface Point {
    readonly x : number ;
    readonly y : number ;
}

const point : Point = { x : 29 , y : 69 } ;

// ------------------------- implementing an interface in a class ----------------- //

class Employee implements Person {
    name : string ;
    age : number ;

    constructor (name : string , age : number){ // its gets called when new instance is created 
        this.name = name ;
        this.age = age ;
    }

    greet(): void  { // doesnt return anything just logs thing
        console.log(` Hello My Name is ${this.name} and iam ${age} years old `)
    }
}

const employee = new Employee( "shravan" , 19); // creating an instance . 

employee.greet(); 

/********************************************************************************************************************/
// Type Aliances 
/********************************************************************************************************************/


type StudentNo = string | number ;

let value : StudentNo ;

value = 'twenty' ;
value = 20 ;

// -----------------------------------------------------------------------------??//
type Points = {
    x: number;
    y: number;
};

type Shape = {
    center: Points;
    radius: number;
};

const circle: Shape = {
    center: { x: 0, y: 0 },
    radius: 10
};

// --------------------- //

type ID = string | number;

function getUser(id: ID): void {
    console.log(`Fetching user with ID: ${id}`);
}

getUser(123);       // valid
getUser("abc123");  // valid


//________________________________________??___________________//

type  sayBye = (name : string) => string ; 

const saybye : sayBye = ( name ) =>{
    return ` Bye ${name} `
}
console.log(saybye("anuj"))

// --------------------------------------------------------------------------------//
type Coordinates = [number, number];

const pointer: Coordinates = [10, 20];

//--------------------------------------------------------------------------------//

type UserID = string;
type User = {
    id: UserID;
    name: string;
};

const user: User = {
    id: "user123",
    name: "Alice"
};

/********************************************************************************************************************/
// functions
/********************************************************************************************************************/

