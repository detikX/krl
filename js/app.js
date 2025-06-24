$(document).ready(function () {
    AOS.init();
    new WOW().init();
})


//jam
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.9;
setInterval(drawClock, 1000);

function drawClock() {
    drawFace(ctx, radius);
    drawNumbers(ctx, radius);
    drawTicks(ctx, radius);
    drawTime(ctx, radius);
}

function drawFace(ctx, radius) {
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.beginPath();
    ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
    ctx.fillStyle = "#121212";
    ctx.fill();
}

function drawNumbers(ctx, radius) {
    ctx.font = radius * 0.15 + "px 'Source Code Pro'";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.fillStyle = "#121212";
    for (let num = 1; num < 13; num++) {
        let ang = (num * Math.PI) / 6;
        ctx.rotate(ang);
        ctx.translate(0, -radius * 0.85);
        ctx.rotate(-ang);
        ctx.fillText(num.toString(), 0, 0);
        ctx.rotate(ang);
        ctx.translate(0, radius * 0.85);
        ctx.rotate(-ang);
    }
}

function drawTicks(ctx, radius) {
    for (let i = 0; i < 60; i++) {
        let ang = (i * Math.PI) / 30;
        ctx.rotate(ang);
        ctx.translate(0, -radius);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, i % 5 === 0 ? radius * 0.08 : radius * 0.04); // Shortened tick height
        ctx.strokeStyle = "#121212";
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.translate(0, radius);
        ctx.rotate(-ang);
    }
}

function drawTime(ctx, radius) {
    const now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    //hour
    hour = hour % 12;
    hour =
        (hour * Math.PI) / 6 +
        (minute * Math.PI) / (6 * 60) +
        (second * Math.PI) / (360 * 60);
    drawHand(ctx, hour, radius * 0.5, radius * 0.07);
    //minute
    minute = (minute * Math.PI) / 30 + (second * Math.PI) / (30 * 60);
    drawHand(ctx, minute, radius * 0.75, radius * 0.07); // Shortened minute hand
    // second
    second = (second * Math.PI) / 30;
    drawHand(ctx, second, radius * 0.9, radius * 0.02, "red");
}

function drawHand(ctx, pos, length, width, color = "#121212") {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.strokeStyle = color;
    ctx.moveTo(0, 0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}

function ScrollIndicator() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    // var height = $(".ref").height();
    var scrolled = (winScroll / height) * 100;
    // console.log(Math.round(scrolled));
    // $('#myiframe')[0].src = "https://youtube.com/embed/_jeUgUsGZnI";
    if (Math.round(scrolled) > 40 && Math.round(scrolled) < 105) {
        // $(".embed").addClass('gunung');
        // var loc = 'https://youtube.com/embed/_jeUgUsGZnI?autoplay=1&mute=1',
        //     params = loc.split('?')[1],
        //     iframe = $('#myiframe')[0];

        // console.log(scrolled);
        // // iframe.addClass('aa')
        // iframe.src = iframe.src + '?' + params;
        $('#myiframe').attr('autoplay')
        // console.log($("#myiframe")[0].src);


    }
    // else {
    //     $(".embed").removeClass('gunung')
    // }

}

window.onscroll = function () { ScrollIndicator() };



gsap.timeline({
    scrollTrigger: {
        trigger: ".box",
        start: "center center",
        end: "bottom top",
        scrub: 1,
        pin: true
    }
})
    .from(".text1", {
        x: innerWidth * 1
    })
    .from(".text2", {
        x: innerWidth * -1
    })
    .from(".angkax", {
        y: innerHeight * 1,
        rotate: 360
    })

$('.single-item').slick();
