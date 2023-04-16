// let draw = document.querySelector('.testimonials');
// draw.style.display = 'none';
// let draw_toggle = document.querySelector('.draw_toggle');
// draw_toggle.addEventListener('click', (e) => {
//     if (draw.style.display === 'none') {
//         draw.style.display = 'block';
//         draw_toggle.innerHTML = 'Hide Drawings 🖌️';
//     } else {
//         draw.style.display = 'none';
//         draw_toggle.innerHTML = 'Show Drawings 🖌️';
//     }
// })


// const body = document.querySelector('body');
let panel_left = document.querySelector('.left_scroll');
let panel_content = document.querySelector('.panel_content_left');

let screen_height = screen.height;
const body = document.body;
const html = document.documentElement;
const height = Math.max(body.getBoundingClientRect().height, html.getBoundingClientRect().height);
// console.log(height)

// onscroll event
window.onscroll = function() {

    panel_left.style.marginTop = `${window.scrollY/10}px`;
    // translate panel_content down
    panel_content.style.marginTop = `-${window.scrollY}px`;
}
console.log(screen_height)
panel_content.addEventListener('click',(e)=>{
    // console.log(e.clientY)
    
    // let neww = (screen_height-(height*.28))/2;
    // console.log(neww)
    // window.scrollTo(0, (e.clientY- neww -50)/.28)
    if(e.clientY < screen_height*.33){
        window.scrollTo(0, 0)
    }else if (e.clientY < screen_height*.66) {
        window.scrollTo(0, height/2 - screen_height/2)
    } else {
        window.scrollTo(0, height)
    }
})


// auto typer
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};


// images carousel
const track = document.getElementById("image-track");
track.addEventListener("mouseover",(e)=>{
track.onmousemove = e => {
    const x = (e.clientX / window.innerWidth)*100;

    track.animate({
          transform: `translateX(-${100-x}%)`
        }, { duration: 3000, fill: "forwards" });

    for(const image of track.getElementsByClassName("image")) {
      image.animate({
          objectPosition: `${100-x}% center`
      }, { duration: 1200, fill: "forwards" });
      }
}

const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

const handleOnUp = () => {
track.dataset.mouseDownAt = "0";  
track.dataset.prevPercentage = track.dataset.percentage;
}

const handleOnMove = e => {
if(track.dataset.mouseDownAt === "0") return;

const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
      maxDelta = window.innerWidth / 2;

const percentage = (mouseDelta / maxDelta) * -100,
      nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
      nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

track.dataset.percentage = nextPercentage;

track.animate({
  transform: `translateX(${nextPercentage}%)`
}, { duration: 1200, fill: "forwards" });

for(const image of track.getElementsByClassName("image")) {
  image.animate({
    objectPosition: `${100 + nextPercentage}% center`
  }, { duration: 1200, fill: "forwards" });
}
}

/* -- Had to add extra lines for touch events -- */

window.onmousedown = e => handleOnDown(e);

window.ontouchstart = e => handleOnDown(e.touches[0]);

window.onmouseup = e => handleOnUp(e);

window.ontouchend = e => handleOnUp(e.touches[0]);

window.onmousemove = e => handleOnMove(e);

window.ontouchmove = e => handleOnMove(e.touches[0]);

})
