var Panels = (function () {

  var panelLeft = document.querySelector('.panels__side--left');
  var panelRight = document.querySelector('.panels__side--right');

  var openLeft = function () {
    panelLeft.classList.toggle('panels__side--left-active');
    panelRight.classList.toggle('panels__side--right-hidden');
  };

  var openRight = function () {
    panelRight.classList.toggle('panels__side--right-active');
    panelLeft.classList.toggle('panels__side--left-hidden');
  };

  var bindActions = function () {
    panelLeft.addEventListener('click', openLeft, false);
    panelRight.addEventListener('click', openRight, false);
  };

  var init = function () {
    bindActions();
  };

  return {
    init: init
  };

}());

Panels.init();

function myFunction(x) {
  if (x.matches) { // If media query matches


    newItem.removeAttribute("hidden");
    section.parentNode.replaceChild(newItem, section);
    var changed = true;
  } else if (changed === true) {} else {
    newItem.parentNode.replaceChild(section, newItem);
  }
} 
const newItem = document.getElementById('temp');
document.getElementById('temp').remove();
var section = document.getElementById('panelSection')
var x = window.matchMedia("(max-width: 640px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes