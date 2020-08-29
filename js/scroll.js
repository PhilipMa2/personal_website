function scrollEffect() {
  $(window).scroll(function () {
    var sc = $(window).scrollTop()
    if (sc > 0) {
      $("#header-scroll").addClass("small")
      $("#header-scroll").removeClass("default")
    } else {
      $("#header-scroll").removeClass("small")
      $("#header-scroll").addClass("default")
    }
  });
}
