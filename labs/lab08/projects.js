$(document).ready(function() {
    // In ajax
    $.ajax({
        // Getting the json file that includes the data needed
        type: "GET",
        url: "projects_data.json",
        dataType: "json",
        success: function(responseData, status) {
            // Start generating the output, "sectioned" is part of css
            var output = '<div class="sectioned">';
            $.each(responseData.menuItems, function(i, item) {
                // Create a toggle header with an arrow icon and a hidden description for each lab by using css with class
                // Takes in item.link, item.name, and item.description from the json file
                output += `
                    <div class="lab-item">
                        <h2 class="lab-toggle">
                            <span class="arrow">&#9654;</span> 
                            <a href="${item.link}" class="norm">${item.name}</a>
                        </h2>
                        <div class="lab-description">
                            <p>${item.description}</p>
                        </div>
                    </div>
                `;
            });
            // Close the output with the div tag
            output += '</div>';
            // Now call the projectsList id to include what just added
            $('#projectsList').html(output);


            // JQUERY SECTION OF THE LAB
            // Toggle functionality 
            $(".lab-description").hide(); // Initially hide all descriptions

            // Only when the user clicks on the arrow to toggle the description
            $(".lab-toggle .arrow").on("click", function(event) {
                event.preventDefault(); // Prevents sending user to the link when clicking arrow 
                const arrow = $(this);
                // Gets the specific lab description on the arrow chosen
                const labDescription = arrow.closest(".lab-toggle").next(".lab-description");
                // Utilizes slideToggle() function to display
                labDescription.slideToggle();

                // Toggle arrow direction
                if (arrow.text() === "▼") {
                    arrow.html("&#9654;"); // Right arrow (closed state)
                } else {
                    arrow.html("&#9660;"); // Down arrow (open state)
                }
            });
        }
    });
});