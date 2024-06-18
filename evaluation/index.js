const textArea = document.getElementById("inputer");

const enter = (value) => {
  console.log("엔터 입력");

  const input = value;

  let arrNum = input.split(" ");

  arrNum = arrNum
    .map((str) => {
      if (str == "") {
        console.log(str);
      } else {
        return +str;
      }
    })
    .filter((n) => n)
    .sort((a, b) => b - a);

  let maxScore = 100;
  let rank = 3;
  let err = false;
  let firstChecked = false;
  const result = arrNum.filter((num) => {
    if (num > maxScore) {
      err = true;
    }
    if (!firstChecked) {
      if (maxScore == num) rank--;
      firstChecked = true;
    }

    if (!err && firstChecked) {
      {
        if (rank == 0) {
        } else if (maxScore == num) {
          return num;
        } else if (maxScore > num) {
          maxScore = num;
          rank--;
          return num;
        } else {
        }
      }
    }
  });

  document.getElementById("result").innerText = result.length;
};

textArea.onkeydown = (event) => {
  if (event.key == "Enter") {
    event.preventDefault();
    const value = textArea.value;
    enter(value);
  }
};
