// bài 1

var soChan = "";
var soLe = "";

for (var i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    soChan = soChan + i + " ";
  } else {
    soLe = soLe + i + " ";
  }
}
document.getElementById("result-bai-1").innerHTML = `
<p class="text-warning">${soChan}</p>
<p class="text-danger">${soLe}</p>
`;
// bài 2
// n=5
var n = 5;
var sum = 0;
for (var i = 0; i <= n; i++) {
  if (i % 2 == 0) {
    sum += i;
  }
}
console.log("sum: ", sum);

// cau hỏi

var count = 0;

var username = "alice";

for (count; count <= 10; count++) {
  console.log("Do nothing");
}
console.log(count);
