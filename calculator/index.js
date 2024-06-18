const display = document.getElementById("display");

const clearDisplay = () => {
  display.textContent = "0";
};

const numAppendToDisplay = (value) => {
  if (display.textContent == "0") {
    display.textContent = value;
  } else {
    display.textContent += value;
  }
};

const operaArr = ["%", "-", "+", "X"];

const operaAppendToDisplay = (value) => {
  let check = false;
  operaArr.forEach((opera) => {
    if (display.textContent.indexOf(opera) != -1) check = true;
  });

  if (!check) {
    if (display.textContent == "0") {
      return;
    } else {
      display.textContent += " " + value + " ";
    }
  } else {
    calculateResult();
  }
};

const calculateResult = () => {
  let result;
  operaArr.forEach((opera) => {
    if (display.textContent.indexOf(opera) != -1) {
      let nums = display.textContent.split(" ").map((str) => {
        if (str == "") {
          console.log(str);
        } else {
          return str;
        }
      });

      console.log(nums);

      if (opera == "+") {
        result = +nums[0] + +nums[2];
      } else if (opera == "-") {
        result = +nums[0] - +nums[2];
      } else if (opera == "%") {
        result = +nums[0] / +nums[2];
      } else {
        result = +nums[0] * +nums[2];
      }
    }
  });

  display.textContent = result;
};
