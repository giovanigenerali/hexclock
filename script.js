function hexClock() {
 var d = new Date(), h = d.getHours(), m = d.getMinutes(), s = d.getSeconds();

 if (h <= 9) h = "0" + h;
 if (m <= 9) m = "0" + m;
 if (s <= 9) s = "0" + s;

 var color = "#"+h+m+s;
 document.body.style.background = color;
 document.getElementById("hex").innerHTML = color;

 setTimeout(function() {
  hexClock();
 }, 1000);

}
hexClock();
