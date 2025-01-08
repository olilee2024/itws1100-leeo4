<?php
// Include configuration if necessary (like conn.php for database connections)
include 'conn.php';

// Include the header (HTML <head> and start of <body>)
include 'header.php';

// Include the navigation bar
include 'navbar.php';
?>
<!DOCTYPE html>
<html>
    <!-- CSS FILES/HEADER -->
    <?php
        include './resources/header.inc.php';
    ?>

    <!-- NAVIGATION BAR -->
    <?php
        include './resources/navbar.inc.php';
    ?>
    <body>
        <!-- DESCRIPTION -->
        <h1 class = "firstlook">Hi! My name's Olivia Lee!</h1>
        <div>
            <div class = "left"><img src = "./labs/lab03/images/me.jpg" height = 300px></div>
            <div><h3 class = "side">Hi! My name is Olivia Lee! I'm currently a freshman at Rensselaer Polytechnic Institute in Troy, NY. I'm majoring in Information Technology and Web Science. Although I don't have experience in the technology industry, I have been working hard in classes learning different programming languages. </h3></div>
            <div><h3  class = "side">I am interested in <em>UX Design</em>, also known as User Experience Design. I have been immersed in art and design my whole life. Once I started to computer science classes in high school, I wanted to combine both interests. Through UX Design, I can enjoy designing websites and apps to help users access technology efficiently.</h3></div>
            <div><h3 class = "side">Some small facts:</h3></div>
            <div><h3 class = "side">I am from New Jersey in Bergen County (conveniently 30 minutes from New York City!). I love to cook with my family and rock climb with my friends in my free time.</h3></div>
        </div>
        <div>
            <h2 class = "space">Login to my website!</h2>
        </div>

    </body>

    <!-- FOOTER -->
    <?php
        include './resources/footer.inc.php';
    ?>

</html>
