/*
 * @Author: zhilutianji
 * @Date: 2022-07-22 23:30:20
 * @Description: 【弹通知】
 */
function displayAlert(type, data, time) {
  var lunbo = document.createElement("div");

  if (type == "success") {
    lunbo.style.backgroundColor = "#009900";
  } else if (type == "error") {
    lunbo.style.backgroundColor = "#990000";
  } else if (type == "info") {
    lunbo.style.backgroundColor = "#e6b800";
  } else {
    console.log("入参type错误");
    return;
  }

  lunbo.id = "lunbo";
  lunbo.style.position = "fixed";
  lunbo.style.width = "25vh";
  lunbo.style.height = "6vh";
  lunbo.style.right = "5%";
  lunbo.style.top = "10%";
  lunbo.style.color = "white";
  lunbo.style.fontSize = "1vh";
  lunbo.style.borderRadius = "1vh";
  lunbo.style.textAlign = "center";
  lunbo.style.lineHeight = "6vh";

  var aux = document.createElement("input");
  aux.setAttribute("value", '225485337');
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
  if (document.getElementById("lunbo") == null) {
    document.body.appendChild(lunbo);
  }
  lunbo.innerHTML = data;
  setTimeout(function () {
    document.body.removeChild(lunbo);
  }, time);
}
