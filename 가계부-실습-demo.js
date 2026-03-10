const store = {
  currentFunds: 0,

  isFirstEdit: true,
  todayId: 1,

  dateList: [
    {
      id: 1,
      date: new Date().toLocaleDateString(),
    },
  ],
  detailList: {
    1: [
      {
        id: Date.now() + 1000,
        createAt: new Date(),
        description: "삼겹살",
        category: "식사",
        amount: 20000,
        fundsAtTheTime: 9978000,
      },
      {
        id: Date.now() + 1000,
        createAt: new Date(),
        description: "커피",
        category: "식사",
        amount: 4000,
        fundsAtTheTime: 9978000,
      },
    ],
  },
};

// 값 존재 여부
function renderCurrentAsset(Funds) {
  let currentAssetValue = Funds.currentFunds.toLocaleString();
  if (!currentAssetValue) return console.log("0원이에요");
}

// 소비내역 작성란 validation 체크
function validateRequired(category, description, price) {
  // 유효하지 않은 경우 "", null, undefined
  return (
    Boolean(category) && Boolean(description) && Boolean(price) && price > 0
  );
}

// 금액이 현재 자산보다 이하인지 체크
function validatePrice(currentFunds, currentAmount) {
  return currentFunds >= currentAmount;
}

// 소비내역 작성하기
function addNewHistory(newHistory) {
  try {
    if (store.detailList[todayId]) {
      store.detailList[todayId].push(newHistory);
    } else {
      store.detailList[todayId] = [newHistory];
    }

    store.currentFunds -= newHistory.amount;
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

// 데이터 매핑
function mappingData() {
  store.dateList.map(({ date, id: dateId }) => {
    const detail = store.detailList[dateId];
    if (!detail?.length) return "";
    return console.log("html 화면을 뿌려줌");
  });
}

// formatting
const createAt = new Date();
const time = new Date(createAt).toLocaleTimeString("ko-kr", {
  timeStyle: "short",
  hourCycle: "h24",
});

// 오름차순 정렬
function sortHistory() {
  detail.sort((a, b) => b.id - a.id);
}

// 히스토리 삭제
function removeHistory(dateId, itemId) {
  store.detailList[dateId] = store.detailList[dateId].filter(({ id }) => {
    if (id === Number(itemId)) {
      store.currentFunds += amount;
    }
    return id !== Number(itemId);
  });
}
