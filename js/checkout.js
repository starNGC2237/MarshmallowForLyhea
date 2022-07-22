var system = {};
var p = navigator.platform;
var u = navigator.userAgent;

system.win = p.indexOf("Win") == 0;
system.mac = p.indexOf("Mac") == 0;
system.x11 = p == "X11" || p.indexOf("Linux") == 0;
console.log(system);
if (system.win || system.mac || system.xll) {
  //如果是手机转
  if (u.indexOf("Windows Phone") > -1) {
    window.location.href = "./404.html";
    //win手机端
  }
} else {
  window.location.href = "./404.html";
}
