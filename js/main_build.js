(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

exports.phrases = [
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
  "Don't let who you are get in the way of how your colleages perceive you. Learn the strategies today",
  "LinkedIn's  not going to cut it anymore. Learn to optimize what they won't teach you in business school.",
  "Life Hacks and More. Turn your life into a game -- a game you can win.",
  "Don't get cheated by those who actually <i>know</i> the secrets. You deserve a piece of the pie.",
  "If you're sleeping for more than 3 hours, you aren't going to suceed. Learn how we succeed.",
  "You can transform any social activity into a networking opportunity - We guarantee it.",
  "You can talk about the weather, or you can talk about stocks. Learn which one will optimize your future.",
  "SLip it in. How to fake it without seeming like a fake. Become elite.",
  "Elite techniques to transform a hobby into a career -- its not fun and games until there's profit involved.",
  "Zuckerberg's a dinosaur. Find out how to make an app that matters, an app that profits.",
  "You can play around or you can grow up and start earning. Click here to grow up",
  "Code is only part of the solution. Become one of the elite - artists, thinkers, innovators, ideas.",
  "Sell your ideas to suburban tweens, and let them handle the nerd grunting",
  "Just Because We Know How To NetWork Doesn't Mean We ForGot The Little People - find out how.",
  "An idea can become profit just like that - learn how not to let the other guy earn YOUR cash.",
  "Drive the traffic your business needs to achieve self-reliance.",
  "Search Engine Optimization (SEO) is how the Future can be Built. Don't let your antiquated techniques keep you in the dark",
  "StartUps aren't just smart - they are savory. Bet you wanna work at one? Good luck without clicking this",
  "Found a StartUp, Become a Hero",
  "StartUps are like bug-lights for smart people - learn to earn their respect (it WONT come easy)",
  "There's something about dedication and drive that drives the highest achievers - click to see just what that is",
  "It's not what you know, its who you know. Learn to know who to know",
  "Need To Make Small Talk In a Business Setting? Learn The Tricks of the Trade for Seeming Like A Well-Rounded Person"
];

exports.images = [
  'images/networking/1.jpg',
  'images/networking/2.jpg',
  'images/networking/3.jpg',
  'images/networking/4.jpg',
  'images/networking/5.jpg',
  'images/networking/6.jpg',
  'images/networking/7.png',
  'images/networking/8.jpg',
  'images/networking/9.jpg',
  'images/networking/10.jpg',
  'images/networking/11.jpg',
  'images/networking/12.jpg',
  'images/networking/13.jpg',
  'images/networking/14.jpg'
];

},{}],2:[function(require,module,exports){
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

/**
 * Add transform to element with all the lame browser prefixes.
 *
 * @api public
 */
Kutility.prototype.addTransform = function(el, transform) {
  var curTransform = this.getTransform(el);
  curTransform = curTransform.replace('none', '');
  var newTransform = curTransform + transform;
  this.setTransform(el, newTransform);
}

/**
 * Set transform of element with all the lame browser prefixes.
 *
 * @api public
 */
Kutility.prototype.setTransform = function(el, transform) {
  el.css('-webkit-transform', transform);
  el.css('-moz-transform', transform);
  el.css('-ms-transform', transform);
  el.css('-o-transform', transform);
  el.css('transform', transform);
}

/**
 * Check an elements tansform.
 *
 * @api public
 */
Kutility.prototype.getTransform = function(el) {
  var possible = ['transform', '-webkit-transform', '-moz-transform', '-ms-transform', '-o-transform'];

  for (var i = 0; i < possible.length; i++) {
    var f = el.css(possible[i]);
    if (f == 'none' && i + 1 < possible.length) {
      var pf = el.css(possible[i + 1]);
      if (pf)
        continue;
    }
    return f;
  }
}

/**
 * Remove all transforms from element.
 *
 * @api public
 */
Kutility.prototype.clearTransforms = function(el) {
  el.css('-webkit-transform', '');
  el.css('-moz-transform', '');
  el.css('-ms-transform', '');
  el.css('-o-transform', '');
  el.css('transform', '');
}

/**
 * Rotate an element by x degrees.
 *
 * @api public
 */
Kutility.prototype.rotate = function(el, x) {
  var ct = this.getTransform(el);
  ct = ct.replace(/matrix\(.*\)/, '').replace('none', '');

  var t = ' rotate(' + x + 'deg)';
  this.setTransform(el, ct  + t);
}

/**
 * Scale an element by x (no units);
 *
 * @api public
 */
Kutility.prototype.scale = function(el, x) {
  var ct = this.getTransform(el);
  ct = ct.replace(/scale\(.*\)/, '').replace('none', '');

  var t = ' scale(' + x + ')';
  this.setTransform(el, ct + t);
}

/**
 * Translate an element by x, y (include your own units);
 *
 * @api public
 */
Kutility.prototype.translate = function(el, x, y) {
  var ct = this.getTransform(el);
  ct = ct.replace(/translate\(.*\)/, '').replace('none', '');

  var t = ' translate(' + x + ', '  + y + ')';
  this.setTransform(el, ct + t);
}

/**
 * Skew an element by x, y degrees;
 *
 * @api public
 */
Kutility.prototype.skew = function(el, x, y) {
  var ct = this.getTransform(el);
  ct = ct.replace(/skew\(.*\)/, '').replace('none', '');

  var xd = x + 'deg';
  var yd = y + 'deg';
  var t = ' skew(' + xd + ', ' + yd + ')';
  this.setTransform(el, ct + t);
}

/**
 * Warp an element by a random amount by rotating and skewing it.
 *
 * @api public
 */
Kutility.prototype.warp = function(el) {
  var r = Math.floor(Math.random() * 360);
  var x = Math.floor(Math.random() * 360);
  var y = Math.floor(Math.random() * 360);

  this.rotate(el, r);
  this.skew(el, x, y);
}

/**
 * Add filter to element with all the lame browser prefixes.
 *
 * @api public
 */
Kutility.prototype.addFilter = function(el, filter) {
  var curFilter = this.getFilter(el);
  curFilter = curFilter.replace('none', '');
  var newFilter = curFilter + ' ' + filter;
  this.setFilter(el, newFilter);
}

/**
 * Set filter to element with all lame prefixes.
 *
 * @api public
 */
Kutility.prototype.setFilter = function(el, filter) {
  el.css('-webkit-filter', filter);
  el.css('-moz-filter', filter);
  el.css('-ms-filter', filter);
  el.css('-o-filter', filter);
  el.css('filter', filter);
}

/**
 * Check an elements filter.
 *
 * @api public
 */
Kutility.prototype.getFilter = function(el) {
  var possible = ['filter', '-webkit-filter', '-moz-filter', '-ms-filter', '-o-filter'];

  for (var i = 0; i < possible.length; i++) {
    var f = el.css(possible[i]);
    if (f == 'none' && i + 1 < possible.length) {
      var pf = el.css(possible[i + 1]);
      if (pf)
        continue;
    }
    return f;
  }
}

/**
 * Remove all filters from element.
 *
 * @api public
 */
Kutility.prototype.clearFilters = function(el) {
  el.css('-webkit-filter', '');
  el.css('-moz-filter', '');
  el.css('-ms-filter', '');
  el.css('-o-filter', '');
  el.css('filter', '');
}

/**

/**
 * Grayscale an element by x percent.
 *
 * @api public
 */
Kutility.prototype.grayscale = function(el, x) {
  var cf = this.getFilter(el);
  cf = cf.replace(/grayscale\(.*\)/, '').replace('none', '');

  var f = ' grayscale(' + x + '%)';
  this.setFilter(el, cf  + f);
}

/**
 * Sepia an element by x percent.
 *
 * @api public
 */
Kutility.prototype.sepia = function(el, x) {
  var cf = this.getFilter(el);
  cf = cf.replace(/sepia\(.*\)/, '').replace('none', '');

  var f = ' sepia(' + x + '%)';
  this.setFilter(el, cf + f);
}

/**
 * Saturate an element by x percent.
 *
 * @api public
 */
Kutility.prototype.saturate = function(el, x) {
  var cf = this.getFilter(el);
  cf = cf.replace(/saturate\(.*\)/, '').replace('none', '');

  var f = ' saturate(' + x + '%)';
  this.setFilter(el, cf + f);
}

/**
 * Invert an element by x percent.
 *
 * @api public
 */
Kutility.prototype.invert = function(el, x) {
  var cf = this.getFilter(el);
  cf = cf.replace(/invert\(.*\)/, '').replace('none', '');

  var f = ' invert(' + x + '%)';
  this.setFilter(el, cf + f);
}

/**
 * Hue-rotate an element by x degrees.
 *
 * @api public
 */
Kutility.prototype.hutate = function(el, x) {
  var cf = this.getFilter(el);
  cf = cf.replace(/hue-rotate\(.*\)/, '').replace('none', '');

  var f = ' hue-rotate(' + x + 'deg)';
  this.setFilter(el, cf + f);
}

/**
 * Set opacity of an element to x percent.
 *
 * @api public
 */
Kutility.prototype.opace = function(el, x) {
  var cf = this.getFilter(el);
  cf = cf.replace(/opacity\(.*\)/, '').replace('none', '');

  var f = ' opacity(' + x + '%)';
  this.setFilter(el, cf + f);
}

/**
 * Set brightness of an element to x percent.
 *
 * @api public
 */
Kutility.prototype.brightness = function(el, x) {
  var cf = this.getFilter(el);
  cf = cf.replace(/brightness\(.*\)/, '').replace('none', '');

  var f = ' brightness(' + x + '%)';
  this.setFilter(el, cf + f);
}

/**
 * Set contrast of an element to x percent.
 *
 * @api public
 */
Kutility.prototype.contrast = function(el, x) {
  var cf = this.getFilter(el);
  cf = cf.replace(/contrast\(.*\)/, '').replace('none', '');

  var f = ' contrast(' + x + '%)';
  this.setFilter(el, cf + f);
}

/**
 * Blur an element by x pixels.
 *
 * @api public
 */
Kutility.prototype.blur = function(el, x) {
  var cf = this.getFilter(el);
  cf = cf.replace(/blur\(.*\)/, '').replace('none', '');

  var f = ' blur(' + x + 'px)';
  this.setFilter(el, cf + f);
}

},{}],3:[function(require,module,exports){

var kutility = require('./lib/kutility');
var content = require('./content');

var phrases = content.phrases;
var images = content.images;

var attemptedClicks = 0;
var numLinks = 1;

$('.initial-link').mouseover(function() {
  var self = $(this);
  $('.networking-zone').css('padding', 0);
  self.removeClass('initial-link');
  linkMove(self);
  flashUnderline(self, 300);
  self.unbind('mouseover');
  getKevinsGoing();
});

$(document).on('mouseover', '.network-link', linkHovered);
$(document).on('click', '.network-link', linkHovered);
$(document).on('mouseover', '.network-image', imageHovered);
$(document).on('click', '.network-image', imageHovered);

function linkHovered() {
  linkMove($(this));
}

function imageHovered() {
  imageMove($(this));
}

function linkMove(el) {
  var left = Math.floor(Math.random() * $(window).width() * 0.6);
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

  addSomething();
}

function imageMove(img) {
  var left = Math.floor(Math.random() * $(window).width() * 0.8);
  var top = Math.floor(Math.random() * ($(window).height() - 200)) + 200;
  attemptedClicks++;

  img.css('left', left);
  img.css('top', top);
  img.css('z-index', attemptedClicks);

  kutility.addShadow(img, 10);

  addSomething();
}

function addSomething() {
  if (attemptedClicks % 10 == 0 && numLinks < 20) {
    var p = Math.random();
    if (p < 0.69)
      createLink();
    else
      createImage();
    numLinks++;
  }
}

function increaseFontsize(el) {
  var size = el.css('font-size');
  size = size.replace('px', '');
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

function createImage() {
  var image = $('<div class="network-image">');
  var img = $('<img src="' + kutility.choice(images) + '">');
  image.append(img);

  var bg = kutility.randColor();
  bg = kutility.alphize(bg, 0.95);
  image.css('background-color', bg);

  $('body').append(image);
  imageMove(image);

  warpLater(image);
}

function warpLater(el) {
  setTimeout(function() {
    kutility.warp(el);
  }, Math.floor(Math.random() * 10000) + 2000);
}

function getKevinsGoing() {
  setTimeout(function() {
    var k1 = $('.kevin-image-1');
    k1.fadeIn();

    var sat = 100;
    var satTimer = setInterval(function() {
      kutility.saturate(k1, sat++);
      kutility.contrast(k1, sat);
      if (sat > 450) {
        clearInterval(satTimer);
        doHue();
      }
    }, 60);

    function doHue() {
      var hue = 0;
      setInterval(function() {
        kutility.hutate(k1, hue++);
      }, 30);
    }

  }, 10000);

  setTimeout(function() {
    var k2 = $('.kevin-image-2');
    k2.fadeIn();

    var inv = 0;
    var invTimer = setInterval(function() {
      kutility.invert(k2, inv++);
      if (inv > 100)
        clearInterval(invTimer);
    }, 150);

    setTimeout(function() {
      var b = 0;
      var bTimer = setInterval(function() {
        kutility.brightness(k2, b++);
        if (b > 350)
          clearInterval(bTimer);
      }, 35);
    }, 9000);

  }, 25000);
}

},{"./content":1,"./lib/kutility":2}]},{},[3])