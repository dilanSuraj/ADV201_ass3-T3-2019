function play(event) {
    var href = event.target.parentNode.href;
    event.preventDefault();
    var audio = document.getElementById("audio");
    audio.play();
    
    audio.addEventListener('ended', function () {
        window.location = href;
    });
}

$(window).on("load",function(){
        // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");;
});