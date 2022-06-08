document.getElementById("submit").onclick = function execute() {
    document.getElementById("submit").disabled = true;
    const target = document.getElementById("datetime").value;
    let intervalid = setInterval(function updateTimer() {
        let current = new Date();   // return the current time
        let diff = new Date(target).getTime() - current.getTime();
        document.getElementById("display").style.backgroundColor = "blueviolet";
        document.getElementById("days").innerText = Math.floor(diff / (1000*60*60*24));
        document.getElementById("hours").innerText = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
        document.getElementById("minutes").innerText = Math.floor((diff % (1000*60*60)) / (1000*60));
        document.getElementById("seconds").innerText = Math.floor((diff % (1000 * 60)) / (1000));

        if(diff <= 0){
            clearInterval(intervalid);
            document.getElementById("submit").disabled = false;
            document.getElementById("display").style.backgroundColor = "#f54242";
            document.getElementById("days").innerText = "0";
            document.getElementById("hours").innerText = "0";
            document.getElementById("minutes").innerText = "0";
            document.getElementById("seconds").innerText = "0";
        }
    }, 1000);

    document.getElementById("reset").onclick = function setzero() {
        clearInterval(intervalid);
        document.getElementById("display").style.backgroundColor = "blueviolet";
        document.getElementById("submit").disabled = false;
        document.getElementById("days").innerText = "0";
        document.getElementById("hours").innerText = "0";
        document.getElementById("minutes").innerText = "0";
        document.getElementById("seconds").innerText = "0";
    }
}

