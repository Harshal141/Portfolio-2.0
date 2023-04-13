const body = document.querySelector('body');
let panel_left = document.querySelector('.left_scroll');
let panel_content = document.querySelector('.panel_content_left');

// onscroll event
window.onscroll = function() {
    // translate body
    // constrain.style.marginTop = `-${window.scrollY}px`;
    // translate panel_left
    panel_left.style.marginTop = `${window.scrollY/10}px`;
    // translate panel_content down
    panel_content.style.marginTop = `-${window.scrollY}px`;
    console.log(panel_content)
}
