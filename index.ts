/******************************************************************************************************************** */
// InterFaces
/******************************************************************************************************************** */

// interface PersonGenderProps {
//     gender: string;
//     orientation: string;
//     pronounces: string;
// }


// interface Person extends PersonGenderProps {
//     name: string,
//     age: number,

// }

// function Greet(person: Person):string {
//     return `Hello ${person.name} Iam Happy That You Are ${person.age} Years Old . And This Is Your Gender ${person.gender} And Orientation ${person.orientation} And prounces ${person.pronounces}`
// }

// let ans = Greet({
//     name: "Anuj",
//     age: 19,
//     gender: "Male",
//     orientation: "Straight",
//     pronounces: "he/him",

// });

// console.log(ans)


/******************************************************************************************************************** */
// Types 
/******************************************************************************************************************** */

// interface Circle {
//     radius:number;
// }

// interface Square {
//     side:number;
// }

// interface Rectangle {
//     width:number;
//     height:number;
// }

// type Shape = Circle | Square | Rectangle ;

// function RenderShape (shape:Shape){
//    console.log('Rendering The Shape ');
// }

// RenderShape({
//     radius:30,
//     side:20,

// })


// type numberArr = (number | string)[] ;

// function getFirstElement<T> (arr : T[]){
//   return arr[2]
// }

// let ans = getFirstElement([88,66,]) 
// console.log(ans)


// function swap<T>(a: T, b: T):[T,T] {
//    return [b,a]
// }

// let ans = swap<number>(22,55);
// console.log(typeof(ans[0]))
// console.log(ans)


interface Todo {
    title:string;
    description:string;
    id:number;
    done:boolean;
}

























