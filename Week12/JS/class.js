let playButtons = document.getElementsByClassName("play");
console.log(playButtons);
let blues = document.getElementById("blues");
let timeoutId;
let playStartTime = [10, 20, 30, 40];
let playStartButtons = document.getElementById("playStartButtons")

for(let i = 0; i < playButtons.length; i++){
    playButtons[i].addEventListener("click", playButtonClicked()
}

    /*
let startTime = Number(event.target.dataset.start);
blues.currentTime = startTime;

blues.play();

//play only 2 seconds
//for someone who clicks a bunch, prevents from cutting off audio from original click
clearTimeout(timeoutId);

setTimeout(function() {
    console.log("Timeout called.")
    blues.pause();
}, 2000);
}*/

function playButtonClicked(event){
    let startTime = Number(event.target.dataset.start);
    blues.currentTime = startTime;
    blues.play();

    //play only 2 seconds
    //for someone who clicks a bunch, prevents from cutting off audio from original click
    clearTimeout(timeoutId);
    timeoutId = setTimeout(stopAudio, 2000);

    setTimeout(function() {
        console.log("Timeout called.")
        blues.pause();
    }, 2000);
}
}
function stopAudio(){
    Audio.pause();
}

