(function() {
  new WOW().init();

  var mywindow = $(window);
  var mypos = mywindow.scrollTop();
  var up = false;
  var newscroll;

  mywindow.scroll(function() {
    newscroll = mywindow.scrollTop();
    if (newscroll > mypos && !up) {
      $('.navbar-fixed-top').stop().fadeOut(730);
      up = !up;
    } else if (newscroll < mypos && up) {
      $('.navbar-fixed-top').stop().fadeIn(300);
      up = !up;
    }
    mypos = newscroll;
  });
})();