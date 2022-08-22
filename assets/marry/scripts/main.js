// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed
$(document).ready(function () {
    $("#map-image").on("click")
    {

    }

    $('#go-to-top').click(function () {
        $('html,body').animate({scrollTop: 0}, 400);
        return false;
    });
    }
)

window.onload = function () {

    document.getElementById('player').play();
   
   }


// Smooth scroll for links with hashes
$("a.smooth-scroll").click(function (event) {
    // On-page links
    if (
        location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
    ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $("html, body").animate(
                {
                    scrollTop: target.offset().top
                },
                1000,
                function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    }
                }
            );
        }
    }
});

$(function(){
    $('#onDisplay').click(function(){
        if($("#offDisplay").css("display") == "none"){
            $('#showaccount').show();
            $('#offDisplay').show();
            $('#onDisplay').hide();
        }
    });

    $('#offDisplay').click(function(){
        if($("#offDisplay").css("display") != "none"){
            $('#showaccount').hide();
            $('#offDisplay').hide();
            $('#onDisplay').show();
        }
    });

    $('#nav-item').click(function(){
            let el = document.getElementById('idbt');
            el.ariaExpanded=false;
    });
})
