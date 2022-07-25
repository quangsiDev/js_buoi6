function inKetQua() {
  console.log("yes");

  var number = document.getElementById("txt-number").value * 1;
  console.log("number: ", number);
  var sum = 0;
  var step = 1;
  do {
    sum += step;
    step++;
  } while (step <= number);
  console.log("sum: ", sum);
}
// 5   1  2 3 4 5 6
