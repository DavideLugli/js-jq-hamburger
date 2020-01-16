// $('i.fa-bars').click(
//   function () {
//     $('.hamburger-menu').show('fast');
//   }
// );

var hidden = true;
if (hidden) {
  $('i.fa-bars').click(
    function() {
      $('.hamburger-menu').show('fast');
      hidden = false;
      console.log(hidden);
    }

  );
} else if (!hidden) {
  $('a.close').click(
    function() {
      $('.hamburger-menu').hide('fast');
      hidden = true;
    }

  );
}
