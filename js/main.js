
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
