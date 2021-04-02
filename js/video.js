var video = document.getElementById("player1");

window.addEventListener("load", () => {
    console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", () => {
    console.log("Play Video");
    video.play();
    document.getElementById("volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", () => {
    console.log("Pause Video");
    video.pause();
})

document.querySelector("#slower").addEventListener("click", () => {
    video.playbackRate = video.playbackRate * 0.95;
    console.log(video.playbackRate);
})

document.querySelector("#faster").addEventListener("click", () => {
    video.playbackRate = video.playbackRate * 1.05;
    console.log(video.playbackRate);
})

document.querySelector("skip").addEventListener("click", () => {
    console.log("original location " + video.currentTime);
    video.currentTime += 15;
    if (video.currentTime > 67.40) {
        console.log("go back to beginning");
        video.currentTime = 0;
    }
    console.log("new location " + video.currentTime);
})