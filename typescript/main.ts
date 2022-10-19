export{}                 /*by adding export or import typescript treats this file as module instead of script*/
let message='learning typescript';
console.log(message);

//variable decalration
let x=10;
const y=69;

let sum; // let can be used if there ll be a change in the value
const title='typescript'; // const can be used when there is no change in the value

//variable type
 let isBeginner: boolean = true;
 let total: number=0;
 let name: string ='Vaishnavi';

 let sentence: string = `My name is ${name}
 I am a beginner in Typescript `;
 console.log(sentence);       

 //name=true  static type checking
 //name. intellisense

  let n:null=null;
  let u:undefined=undefined;
  
 //object type
  const car: { type: string, model: string, year: number } = {
  type: "Toyota",
  model: "Corolla",
  year: 2009
  };

console.log(car);


  let list1: number[] = [1,2,3];
  let list2: Array<number>=[1,2,3];
  
  //tuple
  let person1: [string,number]=['Apple',200];

  enum Week{monday,tuesday,wednesday};

  let w:Week = Week.tuesday;
  console.log(w);
  enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
  }
  console.log(StatusCodes.NotFound);
  console.log(StatusCodes.Success);

  let randomValue: any=10; // any can be used when unsure of type
  randomValue = true; // reassigning to boolean also doesn;t thrown an error
  randomValue='Mango';

  
 /* let myVariable:unknown=10;
  (myVariable as string).toUpperCase();

  //type inference
  let a;
  a=10;
  a=true;

 /* let b=78;
  b=true;*/

  //union typoe restrict to specified type
  //have intellisense support
  let multitype:number | boolean;
  multitype=20;
  multitype=true;


  //anytype doent have any restriction
  //no intellisense support
  let anytype:any;
  anytype=20;
  anytype=true;
  
  //optional and default parameters
  function add(num1: number,num2?:number):number {
    if(num2)
    return num1+ num2;
    else
    return num1;
  }
  console.log(add(5,10));
  add(5);

  //CLASSES

  /*class Person {
    private name: string;
  
    public constructor(name: string) {
      this.name = name;
    }
  
    public getName(): string {
      return this.name;
    }
  }
        
  const person = new Person("Issac Newton");
  
  console.log(person.getName());*/

  //inheritance-implements
  interface Shape {
    getArea: () => number;
  }
  
  class Rectangle implements Shape {
    public constructor(protected readonly width: number, protected readonly height: number) {}
  
    public getArea(): number {
      return this.width * this.height;
    }
  }
  
  const myRect = new Rectangle(30,40);
  
  console.log(myRect.getArea());

  //extends
  interface Shape {
    getArea: () => number;
  }
        
  abstract class Polygon {
    public abstract getArea(): number;
  
    public toString(): string {
      return `Polygon[area=${this.getArea()}]`;
    }
  }
  
  //utility types
  //required
  interface Car {
    make: string;
    model: string;
    mileage?: number;
  }
              
  let myCar: Required<Car> = {
    make: 'Ford',
    model: 'Focus',
    mileage: 12000 // `Required` forces mileage to be defined
  };
  
  console.log(myCar);
  //record
  const nameAgeMap: Record<string, number> = {
    'boy': 7,
    'girl': 3
  };
  
  console.log(nameAgeMap);

  //omit
  interface Person {
    Fulname: string;
    age: number;
    location?: string;
  }
      
  const b: Omit<Person, 'age' | 'location'> = {
    Fulname: 'Thomas'
    // `Omit` has removed age and location from the type and they can't be defined here
  };
  
  console.log(bob);
  //pick
  interface Person {
    Fulname: string;
    age: number;
    location?: string;
  }
              
  const don: Pick<Person, 'Fulname'> = {
    Fulname: 'Don'
    // `Pick` has only kept name, so age and location were removed from the type and they can't be defined here
  };
  
  console.log(don);

//exclude
  type Primitive = string | number | boolean;
  const value: Exclude<Primitive, string> = true;   // a string cannot be used here since Exclude removed it from the type.
  console.log(typeof value);

  