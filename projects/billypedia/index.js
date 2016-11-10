/* global $ _ opspark */
$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
        $('#section-bio').css('color', 'red')
        $('#section-praise').css('color', 'orange')
        $('#section-quotes').css('color', 'green')
        $('#section-disco').css('color', 'blue')
        $('div').css('font-style', 'italic');
        $('#sections').css('background-color', '#ABD2FA').css('border-radius', '4px');
        // uncomment this to inspect all available data; delete when done //
        // console.log(data);
        
        // EXAMPLE: Looping over top rated recordings; replace with your code //
        let topRated = data.discography.topRated;
        _.forEach(topRated, function(recording) {
            console.log(recording);
        });
        
        
        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});


