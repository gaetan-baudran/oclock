<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../style/reveil.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css">
    <title>Document</title>
</head>

<nav>
    <ul>
        <li><a href="./clock.php">Horloge</a></li>
        <li><a href="./timer.php">Minuteur</a></li>
        <li><a href="./chrono.php">Chronomètre</a></li>
    </ul>
</nav>


<body>
    <div class="wrapper">
        <div class="timer-display">00:00:00</div>
        <div class="container">
            <div class="inputs">
                <select name="heure" id="hourInput">
                    <?php for ($i = 0; $i <= 23; $i++) { ?>
                        <option value="<?php echo $i; ?>"><?php echo sprintf("%02d", $i); ?></option>
                    <?php } ?>
                </select> :

                <select name="minute" id="minuteInput">
                    <?php for ($i = 0; $i <= 59; $i++) { ?>
                        <option value="<?php echo $i; ?>"><?php echo sprintf("%02d", $i); ?></option>
                    <?php } ?>
                </select>
            </div>
            <button id="set">Ajouter une Alarme</button>
            <div class="activeAlarms"></div>
        </div>
    </div>
</body>
<script src="../script/reveil.js"></script>

</html>