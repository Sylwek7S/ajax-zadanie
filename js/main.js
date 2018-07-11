let dataUrl = 'https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php'

$('#button-click').on('click', function () {
    $("<div id='dane'>").appendTo('body');

    $.getJSON(dataUrl, function (dane) {
        $('<p>').text(dane.imie).appendTo('#dane');
        $('<p>').text(dane.nazwisko).appendTo('#dane');
        $('<p>').text(dane.zawod).appendTo('#dane');
        $('<p>').text(dane.firma).appendTo('#dane');
    });
})
