
    let btn = document.createElement("button");
    btn.innerHTML = "Start";
    btn.type = "Start";
    btn.onclick = function(){
        alert("Please enter your preferences.")
        window.location.reload();
    }
    document.body.appendChild(btn);
    
    let btn1 = document.createElement("button1");
    btn1.innerHTML = "High";
    btn1.type = "High";
    btn1.onclick = function(){
        alert("High water pressure has been chosen.")
    }
    document.body.appendChild(btn1);
    
    let btn2 = document.createElement("button2");
    btn2.innerHTML = "Medium";
    btn2.type = "Medium";
    btn2.onclick = function(){
        alert("Medium water pressure has been chosen.")
    }
    document.body.appendChild(btn2);
    
    let btn3 = document.createElement("button3");
    btn3.innerHTML = "Low";
    btn3.type = "Low";
    btn3.onclick = function(){
        alert("Low water pressure has been chosen.")
    }
    document.body.appendChild(btn3);
    
    let btn4 = document.createElement("button4");
    btn4.innerHTML = "Soap";
    btn4.type = "Soap";
    btn4.onclick = function(){
        alert("Please grab your soap.")
    }
    document.body.appendChild(btn4);

    let btn5 = document.createElement("button5");
    btn5.innerHTML = "Shampoo";
    btn5.type = "Shampoo";
    btn5.onclick = function(){
        alert("Please grab your shampoo.")
    }
    document.body.appendChild(btn5);

    let btn6 = document.createElement("button6");
    btn6.innerHTML = "Conditioner";
    btn6.type = "Conditioner";
    btn6.onclick = function(){
        alert("Please grab your conditioner.")
    }
    document.body.appendChild(btn6);

    let btn7 = document.createElement("button7");
    btn7.innerHTML = "SOS";
    btn7.type = "SOS";
    btn7.onclick = function(){
        confirm("Authorities have been alerted and will be there ASAP. Please move to a safe location.")
    }
    document.body.appendChild(btn7);

    
    setInterval(showTime, 1000);
    function showTime() {
        let time = new Date();
        let hour = time.getHours();
        let min = time.getMinutes();
        let sec = time.getSeconds();
        am_pm = "AM";
    
        if (hour > 12) {
            hour -= 12;
            am_pm = "PM";
        }
        if (hour == 0) {
            hr = 12;
            am_pm = "AM";
        }
    
        hour = hour < 10 ? "0" + hour : hour;
        min = min < 10 ? "0" + min : min;
        sec = sec < 10 ? "0" + sec : sec;
    
        let currentTime = hour + ":"
                + min + ":" + sec + am_pm;
    
        document.getElementById("clock")
                .innerHTML = currentTime;
    }
    showTime();

    const allRanges = document.querySelectorAll(".range-wrap");
    allRanges.forEach(wrap => {
    const range = wrap.querySelector(".range");
    const bubble = wrap.querySelector(".bubble");

    range.addEventListener("input", () => {
        setBubble(range, bubble);
    });
    setBubble(range, bubble);
});

function setBubble(range, bubble) {
  const val = range.value;
  const min = range.min ? range.min : 0;
  const max = range.max ? range.max : 100;
  const newVal = Number(((val - min) * 100) / (max - min));
  bubble.innerHTML = val;

  // Sorta magic numbers based on size of the native UI thumb
  bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
}
    