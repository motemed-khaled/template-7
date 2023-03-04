$(function () {
    "use strict"
    var windowheight = $(window).height();
    var upperhe = $(".upper-bar").innerHeight();
    var navhe = $(".navbar").innerHeight();
    $(".slider , .carousel-item").height(windowheight - (upperhe + navhe));
    //nav bar link
    let myLinks = document.querySelectorAll(".nav-link");
    
    for (let i = 0; i < myLinks.length; i++) {
        myLinks[i].onclick = function () {
           for (let j = 0; j < myLinks.length; j++) {
            console.log( myLinks[j].classList.remove("active"))
            }
            this.classList.add("active");
        }
   }
    //shufflle
    $(".feature-work ul li").on("click", function () {
        $(this).addClass("active").siblings().removeClass("active");
        if ($(this).data("class") === "all") {
            $(".row .col-sm.image").css("opacity", "1");
        } else {
            $(".row .col-sm.image").css("opacity", "0.07");
            $($(this).data("class")).parent().css("opacity", "1");
        }
    })

    // start scroll
    $(window).scroll(function () {
        $(this).scrollTop() >= 600 ? $(".scroll").fadeIn() : $(".scroll").fadeOut();
    });
    $(".scroll").click(function () {
        $("html , body").animate({ scrollTop: 0 }, 600);
    });

    // start option box
    $(".check").click(function () {
        $(".color-option").fadeToggle();
    })
    if (window.localStorage.color) {
        $(":root").css("--main-color", window.localStorage.color );
    } 
    $(".color-option ul li").click(function () {
        window.localStorage.setItem("color", $(this).css("background-color"));
        $(":root").css("--main-color", window.localStorage.color);
        $(".color-option").fadeToggle();
    })
});
