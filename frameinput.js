(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
 
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
 
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());

var currentFrame = -1;

function animate() {
  currentFrame += 1;
  requestAnimationFrame(animate);
  draw(currentFrame);
}

function draw(currentFrame) {
  var frameTick = new CustomEvent('frameTick', {'detail': currentFrame});
  var elem = document.getElementsByClassName('gfyitem')[0];
  elem.dispatchEvent(frameTick);
}

//frameinputs.js

(function( $ ) {

	//Start by creating the new function
	$.fn.frameinputs = function ( frameData ) {

		//Return the function and stuff
		return this.each(function(index, el) {
			
		});

	};

}( jQuery ));