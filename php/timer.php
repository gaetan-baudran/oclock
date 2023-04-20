<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../style/timer.css">
    <title>Document</title>
</head>

<nav>
    <ul>
        <li><a href="./clock.php">Horloge</a></li>
        <li><a href="./chrono.php">Chronomètre</a></li>
        <li><a href="./reveil.php">Réveil</a></li>
    </ul>
</nav>


<body>

    <label for="time">Temps (en secondes):</label>
    <input type="number" id="time" min="0">
    <button onclick="startStop()">Démarrer/Arrêter</button>
    <div id="countdown"></div>

</body>

<script src="../script/timer.js"></script>

</html>