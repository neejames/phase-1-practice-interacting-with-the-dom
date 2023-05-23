const counter = document.getElementById('counter');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const heart = document.getElementById('heart');
const pause = document.getElementById('pause');
const likes = document.querySelector('ul.likes');
const commentForm = document.querySelector('#comment-form');
const comments = document.querySelector('#list');
    let paused = false
    let numberTracker = {}
    let interval = setInterval(incrementCounter, 1000);

plus.addEventListener("click", incrementCounter);
minus.addEventListener("click", decrementCounter);
pause.addEventListener("click", buttonPaused);
heart.addEventListener("click", likeHeart);
commentForm.addEventListener("submit", handleSubmit);


function incrementCounter() {
    counter.innerText = parseInt(counter.innerText) + 1
};
function decrementCounter() {
    counter.innerText = parseInt(counter.innerText) - 1
};
function buttonPaused() {
    paused = !paused
    if (paused) {
        clearInterval(interval)
        pause.innerText = "resume"
    }
    else {
        interval = setInterval(incrementCounter, 1000)
        pause.innerText = "pause"
    }
};
function likeHeart() {
    let second = counter.innerText
    numberTracker[second] = numberTracker[second] || 0
    numberTracker[second] += 1
        renderLikes()
};
function renderLikes() {
    likes.innerHTML = ""
    for (let key in numberTracker){
        const li = document.createElement("li")
        li.innerText = `${key} has been liked ${numberTracker[key]} times.`
        likes.append(li)
    }
};
function handleSubmit(event) {
    event.preventDefault()
    const comment = event.target.querySelector("input").value
    const li = document.createElement("li")
    li.innerText = comment
    comments.append(li)
    event.target.reset()
}