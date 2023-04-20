<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../style/chrono.css">
    <title>Chronomètre</title>
</head>

<nav>
    <ul>
        <li><a href="./clock.php">Horloge</a></li>
        <li><a href="./timer.php">Minuteur</a></li>
        <li><a href="./reveil.php">Réveil</a></li>
    </ul>
</nav>

<body>
    <div id="wrapper">
        <div id="chrono">00:00:00</div>

        <div id="button">

            <button id="start">Start</button>
            <button id="reset">Reset</button>
            <button id="tour">Tour</button>

        </div>

        <div id="liste">
            <ul id="tempsListe" style="list-style-type:none;"></ul>
        </div>

    </div>
</body>
<script src="../script/chrono.js"></script>

</html>