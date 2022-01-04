// google.maps.event.addDomListener(window, 'load', initialize);
// function initialize() {
// var input = document.getElementById('address');
// var autocomplete = new google.maps.places.Autocomplete(input);
// autocomplete.addListener('place_changed', function () {
// var place = autocomplete.getPlace();
// // place variable will have all the information you are looking for.

//   document.getElementById("latitude").value = place.geometry['location'].lat();
//   document.getElementById("longitude").value = place.geometry['location'].lng();
// });
// }
geocoder = new google.maps.Geocoder();

function codeAddress() {

    //In this case it gets the address from an element on the page, but obviously you  could just pass it to the method instead
    var address = document.getElementById( 'address' ).value;

    geocoder.geocode( { 'address' : address }, function( results, status ) {
        if( status == google.maps.GeocoderStatus.OK ) {

            //In this case it creates a marker, but you can get the lat and lng from the location.LatLng
            map.setCenter( results[0].geometry.location );
            var marker = new google.maps.Marker( {
                map     : map,
                position: results[0].geometry.location
            } );
        } else {
            alert( 'Geocode was not successful for the following reason: ' + status );
        }
    } );
}