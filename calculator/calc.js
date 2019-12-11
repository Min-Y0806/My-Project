var en = true;
var pm = true;
$(".numbers li input").click(function() {
  var key = $(this).val();
  var result = document.getElementById("result");
  var bar = document.getElementById("formu");
  switch (key) {
    //clear button
    case "c":
      bar.value = "";
      result.value = "";
      break;
    //brackets
    case "()":
      toggle = (function() {
        return function() {
          bar.value += en ? "(" : ")";
          en = !en;
        };
      })()();
      break;
    //multiple button x->*
    case "x":
      key = "*";
      bar.value += key;
      break;

    //positive or negative
    case "+/-":
      toggle = (function() {
        return function() {
          bar.value += pm ? "+" : "-";
          pm = !pm;
        };
      })()();
      break;
    //percentage %=*0.1
    case "%":
      perc = "*0.01";
      bar.value += perc;
      break;
    case "=":
      var res = bar.value;
      var rv = eval(res);
      if (rv == parseInt(rv)) {
        rv == rv;
      } else {
        rv = rv.toFixed(7);
      }
      result.value = rv;

    default:
      bar.value += key;
  }
});
