var remote = require('remote');
var $ = require('jquery');
var profile = require('./js/profile.js');
var profileView = require('./js/profileView.js');

profileView.render();

$(document).on('dblclick mousedown', '.no-select, .btn', false);

$('.header .close').click(function() {
  remote.getCurrentWindow().close();
});
$('.header .maximize').click(function() {
  var win = remote.getCurrentWindow();

  if (!win.maximizedPrev) {
    win.maximizedPrev = win.getSize();
    win.setSize(600, 780);
  } else {
    win.setSize(win.maximizedPrev[0], win.maximizedPrev[1]);
    win.maximizedPrev = null;
  }
});
$('.header .minimize').click(function() {
  remote.getCurrentWindow().minimize();
});
