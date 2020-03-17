export default () => {
  $("a").attr('data-scroll', '#form');
  $(function () {
    $('a').click(function (e) {
      e.preventDefault();
      var target = $(this).attr('data-scroll');
      $("html, body").animate({
        scrollTop: $(target).offset().top
      }, 1000);
    //   return false;
    });
  });
};
