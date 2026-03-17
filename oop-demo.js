// 일반적인 직원 정보
// let empName: string;
// let age: number;
// let job: string;
// function printEmp(empName: string, age: number, job: string): void {
//   console.log(`성함 : ${empName}, 나이 : ${age}, 직업 : ${job}`);
// }
// printEmp("홍길동", 12, "배관공");
var Employee = /** @class */ (function () {
    //   private _empName: string;
    //   private _age: number;
    //   private _job: string;
    function Employee(_empName, _age, _job) {
        if (_empName === void 0) { _empName = ""; }
        var _this = this;
        this._empName = _empName;
        this._age = _age;
        this._job = _job;
        this.printEmp = function () {
            console.log("\uC131\uD568 : ".concat(_this._empName, ", \uB098\uC774 : ").concat(_this._age, ", \uC9C1\uC5C5 : ").concat(_this._job));
        };
        // this._empName = empName;
        // this._age = age;
        // this._job = job;
    }
    Object.defineProperty(Employee.prototype, "empName", {
        get: function () {
            return this._empName;
        },
        set: function (val) {
            this._empName = val;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
var emp1 = new Employee("홍소희", 12, "교사");
emp1.empName = "박소희";
emp1.printEmp();
