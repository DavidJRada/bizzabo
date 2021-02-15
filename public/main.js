console.log('hi')

$(document).ready(function () {
    getEvents()
})


function getEvents() {

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.bizzabo.com/api/events",
        "method": "GET",
        "Content-type": "application/x-www-form-urlencoded",
        "headers": {
            "accept": "application/vnd.bizzabo.v2.0+json",
            "authorization": "Bearer b2f9b657-d8fd-4c34-a28b-eba13cab25c2",
            "Access-Control-Allow-Origin": "*",
        },
        "data": "{}"
    }


    $.ajax({
        "url": "https://api.bizzabo.com/api/events",
        "async": true,
        "method": "GET",
        "crossDomain": true,
        "Referrer-Policy": "strict-origin-when-cross-origin",
        "Content-type": "application/x-www-form-urlencoded",
        "headers": {
            "accept": "application/vnd.bizzabo.v2.0+json",
            "authorization": "Bearer b2f9b657-d8fd-4c34-a28b-eba13cab25c2",
            "Access-Control-Allow-Origin": "*",
        }
    }).done(function (data) {
        console.log(data);
    });
}