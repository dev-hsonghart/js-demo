const prompt = require("prompt-sync")();

function demo1() {
  const name = prompt("책 제목: ");
  const height = prompt("책 높이: ");
  const weight = prompt("책 무게: ");

  let object = {
    name: name,
    height: height,
    weight: weight,
  };

  console.log(
    `보낼 물건의 정보 : ${object.name}, ${object.height}cm, ${object.weight}kg`,
  );
}

function demo2() {
  const input = prompt("요일을 선택 하세요 \n :");
  switch (input) {
    case "월요일":
      console.log("월요일은 월요병");
      break;
    case "화요일":
      console.log("화요일은 지루해");
      break;
    case "수요일":
      console.log("수요일은 제일 힘들어");
      break;
    case "목요일":
      console.log("목요일은 회식데이");
      break;
    case "금요일":
      console.log("금요일은 퇴근생각만 간절");
      break;
    case "토요일":
      console.log("토요일은 쉬는날");
      break;
    case "일요일":
      console.log("일요일은 출근생각에 잠 못이뤄");
      break;
    default:
      break;
  }
}

// function plus(a, b) {
//   console.log(a + b);
// }

// 타입스크립트

function plus(a: number, b: number) {
  console.log(a + b);
}

plus("1", "2");
