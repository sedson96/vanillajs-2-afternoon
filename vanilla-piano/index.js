

window.addEventListener('keypress', function (event){
    let note = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    let pianoKey = document.querySelector(`.pianoKey[data-key="${event.keyCode}"`);
    if(!note){return}
    currentTime = 0;
    pianoKey.classList.add("pressed")
    note.play();
    setTimeout(function() {
        pianoKey.classList.remove("pressed")
    },300)
    
    console.log(note);
})
