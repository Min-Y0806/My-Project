function lotto() {
  var mflag = true; //중복이 있는지 확인
  var count = 0;
  array = new Array(6);
  while (count < 6) {
    var number = (number = Math.floor(Math.random() * 45 + 1));
    if (mflag) {
      if (array.indexOf(number) == -1) {
        array[count] = number;
        count += 1;
      } else {
        mflag = false;
      }
    } else {
      mflag = true;
    }
  }
  document.getElementById("numbers").textContent = array;
}
