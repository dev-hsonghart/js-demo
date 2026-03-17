// 일반적인 직원 정보
// let empName: string;
// let age: number;
// let job: string;

// function printEmp(empName: string, age: number, job: string): void {
//   console.log(`성함 : ${empName}, 나이 : ${age}, 직업 : ${job}`);
// }

// printEmp("홍길동", 12, "배관공");

class Employee {
  //   private _empName: string;
  //   private _age: number;
  //   private _job: string;

  constructor(
    private _empName: string = "",
    private _age?: number,
    private _job?: string,
  ) {
    // this._empName = empName;
    // this._age = age;
    // this._job = job;
  }

  get empName() {
    return this._empName;
  }

  set empName(val: string) {
    this._empName = val;
  }

  printEmp = (): void => {
    console.log(
      `성함 : ${this._empName}, 나이 : ${this._age}, 직업 : ${this._job}`,
    );
  };
}

let emp1 = new Employee("홍소희", 12, "교사");
emp1.empName = "박소희";

emp1.printEmp();
