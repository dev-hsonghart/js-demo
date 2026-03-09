function foo() {
  console.log("foo");
}

const foo2 = function () {
  console.log("foo2");
};

const foo3 = new Function("console.log('foo3')");

const foo4 = () => {
  console.log("foo4");
};

foo();
foo2();
foo3();
foo4();

// 함수 사용 패턴
// 즉시 실행
(function foo5() {
  console.log("foo5");
});

// 재귀 함수
function foo6(arg) {
  if (arg === 3) return;
  console.log(arg);
  foo6(arg + 1);
}

foo6(1);

// 중첩 함수
function foo7(arg) {
  function foo8() {
    console.log(arg);
  }
  foo8();
}

foo7(1);

// 콜백 함수
function foo9(arg) {
  arg();
}

foo9(() => {
  console.log(1);
});

foo9;
