// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){

  // use jQuery to create an HTML <span> tag
  var counter = window.dancers.length;
  this.$node = $('<span class="dancer"' + ' data-index="' + counter + '"' +  '></span>');

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  // debugger;
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;
  this.isLiningUp = false;
  this.initialize(); 
};


Dancer.prototype.initialize = function() {
  this.step();
  this.setPosition(this.top, this.left);
  //
};

Dancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  //this
  // var context = step.bind(this);
  // debugger;
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function (newTop, newLeft) {
  this.isLiningUp = true;
  this.setPosition(newTop,newLeft);
};


