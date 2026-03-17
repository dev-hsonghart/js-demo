// let stdId: number = 1111;
// let stdName: string = "lee";
// let age: number = 10;
// let gender: string = "male";
// let course: string = "ts";
// let completed: boolean = false;

function plus(a: number, b?: number): number {
  return a + b;
}

let std: Student[] = [];

interface Student {
  stdId: number;
  stdName: string;
  age?: number;
  gender: "male" | "female";
  course: string;
  completed: boolean;
  setName(name: string): void;
  //   setName: (name: string) => void;
}

class MyStudent implements Student {
  stdId: number = 2;
  stdName: string = "홍홍홍";
  age: number = 12;
  gender: "male" | "female" = "male";
  course: string = "js";
  completed: boolean = true;
  setName(name: string): void {
    this.stdName = name;
    console.log("이름 설정 : " + this.stdName);
  }
}

const myInstance = new MyStudent();
myInstance.setName("앨리스");

const user: { name: string; age: number } = {
  name: "홍길동",
  age: 25,
};

type strOrNum = number | string;

let numStr: strOrNum = 100;
let item: number = 111;

function convertToString(val: strOrNum): void {
  if (typeof val == "number") {
    return console.log(`${val}`);
  }

  console.log("얘는 문자");
}

convertToString("200");

let numbers: number[] = [1, 2, 3, 4, 5];
let strings: string[] = [];
let mixArr: (number | string)[] = [1, "two", 3, "4"];

let greeting: [number, string, boolean] = [1, "hello", true];

let firstArr = [1, 2, 3];
let secondArr = [4, 5, 6];

let combineArr = [...firstArr, ...secondArr];

// enum GenderType {
//   Male = 0,
//   Female = 1,
// }

// function getInfo(id: number): Student {
//   return {
//     stdId: id,
//     stdName: "홍길동",
//     // age: 11,
//     gender: "male",
//     course: "ts",
//     completed: false,
//   };
// }

// function setInfo(student: Student): void {
//   std.push(student);
// }

// setInfo({
//   stdId: 2,
//   stdName: "홍홍홍",
//   age: 12,
//   gender: "male",
//   course: "js",
//   completed: true,
// });
// console.log(std);
// console.log(getInfo(5678));
