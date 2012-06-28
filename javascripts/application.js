// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++

!function ($) {

     $(function(){
         $(".nav a").click(function() {
             var id = $(this).attr("href");
             $(id).addClass("active").siblings().removeClass("active");
             $(".full:visible").not(".active").hide();
             $(".full.active:hidden").show();

         });



         $(".instagram").each(function() {
              $(this).instagram({
             hash: $(this).attr("data-tag")
           , clientId: '10f26d8edde44fb4be7c1a0f857265e5'
           ,  show : 4
         });
         });

     })




 }(window.jQuery)