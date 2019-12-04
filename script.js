var video = [ // holds list of avalible videos by filename, stored in the root folder 
    "Bassnectar & Dorfex Bos - Other Worlds [Reflective Part 2].mp4",
    "Bassnectar - Reaching Out [OFFICIAL VIDEO].mp4",
    "Bassnectar & Hailo - Irresistible Force [Reflective Part 4].mp4",
    "GRiZMATIK MY PEOPLE (OFFICIAL MUSIC VIDEO).mp4",
    "Kaminanda - Wizards and Spice.mp4",
    "Marvel Years - Hit Them With It.mp4",
    "Neil Young- Old Man (Marvel Years Remix).mp4",
    "Ratatat x RJD2 (Marvel Years Mashup).mp4",
    "Shatter Me Featuring Lzzy Hale - Lindsey Stirling.mp4",
    "SunSquabi - Just A Little.mp4",
    "Underground - Lindsey Stirling.mp4",
    "We Are Giants ft Dia Frampton - Lindsey Stirling.mp4"
    ]
var current = "" // holds filename title of current video
var currentIndex = 0 // holds video[x] index of current video 

var player = document.querySelector("#player")
var next = document.querySelector("#next")
var title = document.querySelector("#title")
var play = document.querySelector("#play")
var pause = document.querySelector("#pause")
var playList = document.getElementById("list")

// add playlist ----------------------------------------------------------
function createList() {
    for (i = 0; i < video.length; i++) {
        var node = document.createElement("li")
        node.textContent = video[i]
        node.setAttribute("id", "btn" + i)
        node.setAttribute("class","btn")
        node.setAttribute("onclick", "listClick(id)")
        playList.appendChild(node)
    }
}
createList()

var button = document.querySelector(".btn")

function listClick(num) { //this may work if I turn video into an object, and add an id number 
    id = num.replace('btn','')
    player.setAttribute("src", video[id])
    current = video[id]
    currentIndex = video.indexOf(current)
    title.innerHTML = current
}
// end playlist-----------------------------------------------------------

// cycles through avalible videos
function addIndex() { 
    if (currentIndex < video.length - 1) {
        currentIndex++
    } else {
        currentIndex = 0
    }
}
// plays next video in index
function playNext() {
    addIndex()
    player.setAttribute("src", video[currentIndex])
    current = video[currentIndex]
    title.innerHTML = current
}
// plays random video in index
function playRando() {
    rando = (Math.floor(Math.random() * video.length))
    player.setAttribute("src", video[rando])
    current = video[rando]
    currentIndex = video.indexOf(current)
    title.innerHTML = current
}
// event listeners ---------------------------------------------------
// watches for end of video and plays next video in index
player.addEventListener("ended", playNext)

// watches button for next video in index
next.addEventListener("click", playNext)

// watches button for random video
rando.addEventListener("click", playRando);

// html5 video play function 
play.addEventListener("click", function() {
    player.play()
})
//html5 video pause function 
pause.addEventListener("click", function() {
    player.pause()
})
// starts playing on page load 
function playFirst() {
    player.setAttribute("src", video[currentIndex])
    current = video[currentIndex]
    title.innerHTML = current
}
playFirst()  
// end event listeners-------------------------------------------------

// add files to array on startup - looks like php is the preferred way to do this 
// move var videos to an object filename: title: id: 