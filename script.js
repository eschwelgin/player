var video = [
    "Bassnectar & Dorfex Bos - Other Worlds [Reflective Part 2].mp4",
    "Bassnectar & Hailo - Irresistible Force [Reflective Part 4].mp4",
    "Bassnectar - Reaching Out [OFFICIAL VIDEO].mp4"
]
var current = ""
var currentIndex = 0

var player = document.querySelector("#player")
var next = document.querySelector("#next")
var title = document.querySelector("#title")
var play = document.querySelector("#play")
var pause = document.querySelector("#pause")

function addIndex() {
    if (currentIndex < video.length - 1) {
        currentIndex++
    } else {
        currentIndex = 0
    }
}

function playNext() {
    addIndex()
    player.setAttribute("src", video[currentIndex])
    current = video[currentIndex]
    title.innerHTML = current
}

function playRando() {
    rando = (Math.floor(Math.random() * video.length))
    player.setAttribute("src", video[rando])
    current = video[rando]
    currentIndex = video.indexOf(current)
    title.innerHTML = current
}

player.addEventListener("ended", function() {
    playNext()
});

next.addEventListener("click", function() {
    playNext()
});

rando.addEventListener("click", function() {
    playRando()
});

play.addEventListener("click", function() {
    player.play()
});

pause.addEventListener("click", function() {
    player.pause()
});

// add files to array on startup - looks like php is the preferred way to do this 
// add playlist 


