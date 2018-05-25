var newBeer = [];

$('#submitBeer').on('click', function(event){
    event.preventDefault();
    var newBeer = {
        brewery_name: $('#inputBeerName').val().trim();
        city_name: $('#inputBreweryName').val().trim();
        beer_name: $('#inputBreweryLocation').val().trim();
        beer_type: $('#beerTypeList').val();
    }
});