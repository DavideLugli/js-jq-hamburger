
// con var hidden, non mi viene
// var hidden = true;
// console.log(hidden);
// if (hidden) {
//   $('i.fa-bars').click(
//     function() {
//       $('.hamburger-menu').show('fast');
//       hidden = false;
//       console.log(hidden);
//     }
//   );
// } else if (hidden == false) {
//   $('i.fas.fa-times').click(
//     function() {
//       $('.hamburger-menu').hide('fast');
//       hidden = true;
//     }
//   );
// }



  $('i.fa-bars').click(
    function() {
      $('.hamburger-menu').show('fast');
      hidden = false;
      console.log(hidden);
    }
  );

  $('a.close').click(
    function() {
      $('.hamburger-menu').hide('fast');
      hidden = true;
    }
  );
