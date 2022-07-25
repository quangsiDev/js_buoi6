document
  .getElementById("btn-in-ket-qua")
  .addEventListener("click", function () {
    var number = document.getElementById("txt-number").value * 1;

    var count = 0;
    var contentHTML = "";

    while (number > 1) {
      number = Math.floor(number / 2);
      count++;
      var content = ` <p>  Count:  ${count} - Number: ${number} </p>`;
      console.log("content: ", content);
      contentHTML += content;
    }

    document.getElementById("result").innerHTML = contentHTML;
  });
