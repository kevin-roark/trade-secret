
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
