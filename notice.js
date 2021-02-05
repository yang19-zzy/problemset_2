setInterval(function() {
    const myColor = document.getElementById("notice");
    let className = myColor.getAttribute("class");
    if (className === "color1") {
      myColor.setAttribute("class","color2");
    } else {
      myColor.setAttribute("class","color1");
    }
  }, 2000);