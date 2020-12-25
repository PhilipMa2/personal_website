function arrow_animation() {
  $(function() {
    $("a[href='#home']").on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top},
      500, 'linear');
    });
  });
}
