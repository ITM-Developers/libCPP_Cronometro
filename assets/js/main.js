function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

function drawMatrix() {
	// Draw a semitransparent black rectangle on top of previous drawing
	ctx.fillStyle = '#0001';
	ctx.fillRect(0, 0, w, h);
  
	// Set color to green and font to 15pt monospace in the drawing context
	ctx.fillStyle = '#0f0';
	ctx.font = '14pt monospace';
  
	// for each column put a random character at the end
	ypos.forEach((y, ind) => {
	  // generate a random character
	  var ascii_code = getRandomInt(100) + 11930;
	  const text = String.fromCharCode(ascii_code);

	  // x coordinate of the column, y coordinate is already given
	  const x = ind * 20;
	  // render the character at (x, y)
	  ctx.fillText(text, x, y);
  
	  // randomly reset the end of the column if it's at least 100px high
	  if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
	  // otherwise just move the y coordinate for the column 20px down,
	  else ypos[ind] = y + 20;
	});
}

// Get the canvas node and the drawing context
const canvas = document.getElementsByClassName('canvasMatrix')[0];
const ctx = canvas.getContext('2d');

// set the width and height of the canvas
const w = canvas.width = document.body.offsetWidth;
const h = canvas.height = document.body.offsetHeight;

// draw a black rectangle of width and height same as that of the canvas
ctx.fillStyle = '#000';
ctx.fillRect(0, 0, w, h);

const cols = Math.floor(w / 20) + 1;
const ypos = Array(cols).fill(0);

// render the animation at 20 FPS.
setInterval(drawMatrix, 50);


(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

})()