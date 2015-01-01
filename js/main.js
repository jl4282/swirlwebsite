/**
 *
 * Bootstrap one-page template with Parallax effect | Script Tutorials
 * http://www.script-tutorials.com/bootstrap-one-page-template-with-parallax-effect/
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2014, Script Tutorials
 * http://www.script-tutorials.com/
 */

$(document).ready(function (){

  // function initialize() {
  //   var mapCanvas = document.getElementById('map');
  //   var mapOptions = {
  //     center: new google.maps.LatLng(40.946453, -73.795309),
  //     zoom: 17,
  //     mapTypeId: google.maps.MapTypeId.ROADMAP
  //   };
  //   var map = new google.maps.Map(mapCanvas, mapOptions);
  //   var marker = new google.maps.Marker({
  //     position: myLatlng,
  //     map: map,
  //     title: 'Hello World!'
  //   });
  // }
  // google.maps.event.addDomListener(window, 'load', initialize);



  function initialize() {
    var myLatlng = new google.maps.LatLng(40.946453, -73.795309);
    var mapOptions = {
      zoom: 17,
      center: myLatlng
    }
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'Swirl Coffee and Tea'
    });
  }

  google.maps.event.addDomListener(window, 'load', initialize);

  // add information window
  var infowindow = new google.maps.InfoWindow({
    content:  '<div class="info"><strong>This is my company</strong><br><br>My company address is here<br> 32846 Sydney</div>'
  });
});