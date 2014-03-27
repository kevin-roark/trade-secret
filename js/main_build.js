(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* export something */
module.exports = new Kutility;

/* constructor does nothing at this point */
function Kutility() {

}

/**
 * get a random object from the array arr
 *
 * @api public
 */

Kutility.prototype.choice = function(arr) {
    var i = Math.floor(Math.random() * arr.length);
    return arr[i];
}

/**
 * returns a random color as an 'rgb(x, y, z)' string
 *
 * @api public
 */
Kutility.prototype.randColor = function() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

/**
 * Color wheel 1 -> 1536.
 *
 * Written by Henry Van Dusen, all attribution to the big boy.
 * Slightly modified by Kev.
 *
 * @api public
 */
 Kutility.prototype.colorWheel = function(num) {
    var text = "rgb(";
    var entry = num % 1536;
    var num = entry % 256;

    if(entry < 256 * 1)
    	return text + "0,255," + num + ")";
    else if(entry < 256 * 2)
    	return text + "0," + (255 - num) + ",255)";
    else if(entry < 256 * 3)
      return text + num + ",0,255)";
    else if(entry < 256 * 4)
      return text + "255,0," + (255 - num) + ")";
    else if(entry < 256 * 5)
      return text + "255," + num + ",0)";
    else
      return text + (255 - num) + ",255,0)";
 }

 /**
  * Make an rbg() color string an rgba() color string
  *
  * @api public
  */
Kutility.prototype.alphize = function(color, alpha) {
  color.replace('rgb', 'rgba');
  color.replace(')', ', ' + alpha + ')');
  return color;
}

/**
 * Get an array of two random contrasting colors.
 *
 * @api public
 */
Kutility.prototype.contrasters = function() {
  var num = Math.floor(Math.random() * 1536);
  var fg = this.colorWheel(num);
  var bg = this.colorWheel(num + 650);
  return [fg, bg];
}

/**
 * Add a random shadow to a jquery element
 *
 * @api public
 */
Kutility.prototype.addShadow = function(el, size) {
  var s = size + 'px';
  var shadow = '0px 0px ' + s + ' ' + s + ' ' + this.randColor();
  el.css('-webkit-box-shadow', shadow);
  el.css('-moz-box-shadow', shadow);
  el.css('box-shadow', shadow);
}

},{}],2:[function(require,module,exports){

var kutility = require('./lib/kutility'); /* you can remove this if you don't want it */

var phrases = [
  "Click here to learn the trade secrets <i>THEY</i> aren't telling you.",
  "Professional Networkers Hate Her! This Local Mom Came Up With Optimal Strategies for Connecting with the Skills YOU Need.",
  "95% of Would-Be Networkers Make This Mistake. Click Here To Learn What Not To Do When Searching For Professional Connections For Your Start Up",
  "Got A Concept And Need Coders? Click Here To Get In Contact With The Best of the Best",
  "Be Great At What You Do! Get Access to the Resources You Need To Be The Professional You Know You Can Become",
  "Overcome Your Shyness and Access The Skills Others Have to Offer with These Hot Tips",
  "Sign Up For Daily Insights In Making Your Activities More Productive",
  "Diversify Your Business Models And Access Untapped Revenue Streams",
  "Enter The Chatroom to Exchange Skills and Contacts With Fellow Networkers",
  "Addicted to Networking? Click Here To Get In Contact With Fellow Networking Addicts",
  "Free Web Seminar On Making Connections And Envisioning Your Professional Networks",
  "Click Here to Learn The Shocking Truth About LinkedIn Founder Reid Hoffman",
  "Networking Online is the Key to Building the Professional Contacts You Need to Succeed—Download this Set of Buisness Oriented Emoticons To Get In With the E-Crowd",
  "Are Your Professional Contacts Bots? Click Here to Get the Skinny On Predatory Networking Scams",
  "Hungry For a Human Touch? Meet Lonely Professionals In Your Area",
  "Learn The Five 'E's of Professional Networking",
  "Want To Ingratiate Yourself With That Hip Man iN the Office Who Always Knows What's Up? Now You Can. Online. So You Don't Have To face Rejection Head ON",
  "Need To Make Small Talk In a Business Setting? Learn The Tricks of the Trade for Seeming Like A Well-Rounded Person"
];

var attemptedClicks = 0;
var numLinks = 1;

$('.initial-link').mouseover(function() {
  var self = $(this);
  $('.networking-zone').css('padding', 0);
  self.removeClass('initial-link');
  linkMove(self);
  flashUnderline(self, 300);
});

$(document).on('mouseover', '.network-link', linkHovered);
$(document).on('click', '.network-link', linkHovered);

function linkHovered() {
  linkMove($(this));
}

function linkMove(el) {
  var left = Math.floor(Math.random() * $(window).width() * 0.8);
  var top = Math.floor(Math.random() * ($(window).height() - 200)) + 200;
  var content = kutility.choice(phrases);
  attemptedClicks++;

  el.css('position', 'absolute');
  el.css('left', left);
  el.css('top', top);
  el.css('z-index', attemptedClicks);
  el.html(content);

  increaseFontsize(el);
  kutility.addShadow(el, 10);

  if (attemptedClicks % 10 == 0 && numLinks < 10) {
    createLink();
    numLinks++;
  }
}

function increaseFontsize(el) {
  var size = el.css('font-size');
  size.replace('px', '');
  var num = parseInt(size);
  num = parseInt(num *= 1.04);
  el.css('font-size', num + 'px');
}

function flashUnderline(el, val) {
  el.css('text-decoration', 'none');
  var lined = false;
  setInterval(function() {
    if (lined)
      el.css('text-decoration', 'underline');
    else
      el.css('text-decoration', 'none');
    lined = !lined;
  }, val);
}

function createLink() {
  var link = $('<div class="network-link">');

  var colors = kutility.contrasters();
  var fg = colors[0];
  var bg = colors[1];
  bg = kutility.alphize(bg, 0.95);

  link.css('color', fg);
  link.css('background-color', bg);

  $('body').append(link);
  linkMove(link);

  flashUnderline(link, 300);
}

},{"./lib/kutility":1}]},{},[2])