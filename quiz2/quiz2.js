$(document).ready(function() {
    // when the submit button is clicked (which is differentiated by the id submitButton)
    $("#submitButton").on("click", function() {

        // get the names JSON file 
        $.getJSON("names.json", function(data) {
            // create the ordered list
            const $ol = $("<ol></ol>");
            
            // and use $.each to go through each name in the names array and
            // add that to the ordered list
            $.each(data.names, function(index, name) {
                const $li = $("<li></li>").text(name);
                $ol.append($li);
            });

            // then put the ordered list into the #nameList tag which is referred to in the HTML
            $("#nameList").append($ol);
        });
    });

    // when the user clicks on a name
    $(document).on("click", "#nameList li", function() {

        // create the name into a text and an alert will pop up with the name clicked 
        const name = $(this).text();
        alert(name);
    });
});
