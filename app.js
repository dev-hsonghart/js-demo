// let stdId: number = 1111;
// let stdName: string = "lee";
// let age: number = 10;
// let gender: string = "male";
// let course: string = "ts";
// let completed: boolean = false;
function plus(a, b) {
    return a + b;
}
var std = [];
var MyStudent = /** @class */ (function () {
    function MyStudent() {
        this.stdId = 2;
        this.stdName = "홍홍홍";
        this.age = 12;
        this.gender = "male";
        this.course = "js";
        this.completed = true;
    }
    MyStudent.prototype.setName = function (name) {
        this.stdName = name;
        console.log("이름 설정 : " + this.stdName);
    };
    return MyStudent;
}());
var myInstance = new MyStudent();
myInstance.setName("앨리스");
var user = {
    name: "홍길동",
    age: 25,
};
var numStr = 100;
var item = 111;
function convertToString(val) {
    if (typeof val == "number") {
        return console.log("".concat(val));
    }
    console.log("얘는 문자");
}
convertToString("200");
var numbers = [1, 2, 3, 4, 5];
var strings = [];
var mixArr = [1, "two", 3, "4"];
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
