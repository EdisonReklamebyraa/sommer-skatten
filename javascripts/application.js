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
             var self = $(".body", this);
             var max = 0;
             var insta_next_url;
             var callback = function (photos, data) {
                 max++;
                 insta_next_url = data.pagination.next_url;
                 if(max < 3){
                     self.instagram({
                         next_url : insta_next_url
                       , show : 16
                       , onComplete : callback
                       , onEmpty: loadFancybox
                     })

                 } else{
                     loadFancybox();
                 }
             }
             self.instagram({
                 hash: $(this).attr("data-tag")
               , clientId: '10f26d8edde44fb4be7c1a0f857265e5'
               ,  show : 8
               ,  onComplete : callback
               ,  onEmpty: loadFancybox
             });
             $(".more", this).click(function() {
                     self.instagram({
                         next_url : insta_next_url
                       , show : 16
                       , onComplete : callback
                       , onEmpty: loadFancybox
                     })
                 return false;
             });
         });




     })



     if(navigator.geolocation.getCurrentPosition){

         navigator.geolocation.getCurrentPosition(function(geoposition) {
             var latitude  = 58.8651;
             var longitude = 9.59625;
             var dir = direction(geoposition.coords.latitude, geoposition.coords.longitude,latitude,longitude);


         });
     }



 }(window.jQuery);

function distance(lat1,lon1,lat2,lon2) {
	  var R = 6371; // km (change this constant to get miles)
	  var dLat = (lat2-lat1) * Math.PI / 180;
	  var dLon = (lon2-lon1) * Math.PI / 180;
	  var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(lat1 * Math.PI / 180 ) * Math.cos(lat2 * Math.PI / 180 ) *  Math.sin(dLon/2) * Math.sin(dLon/2);
	  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
	  var d = R * c;
	  if (d>1)
      return Math.round(d)+"km";
	  else if (d<=1)
      return Math.round(d*1000)+"m";
	  return d;
}
function heading(dir) {
    var directions = ["N", "NE", "E", "SE", "S", "SW", "NW"];
    return directions[Math.round(dir / 45)];
}


function direction(lat1,lon1,lat2,lon2) {
    var dLon = lon2 - lon1;
    var y = Math.sin(dLon) * Math.cos(lat2);
    var x = Math.cos(lat1)*Math.sin(lat2)-Math.sin(lat1)*Math.cos(lat2)*Math.cos(dLon);
    return (180.0/Math.PI)*Math.atan2(y, x);
}

function loadFancybox(){
    $('.instagram-placeholder a').fancybox({
				prevEffect : 'none',
				nextEffect : 'none',

				closeBtn  : false,
				arrows    : false,
				nextClick : true,

				helpers : {
					  thumbs : {
						    width  : 50,
						    height : 50
					  }
				}
		});
}