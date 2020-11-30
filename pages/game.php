<?php
	session_start();
	$_SESSION['player'] = [
		"name" => $_POST['player_name']
	];
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/style.css">
    <title>Игра</title>
</head>
<body>
    <div class="container">
    	<div class="top">
        	<p><?= 'Игрок: ' . $_POST['player_name']; ?></p>
        	<p class="timer" id="timer"></p>
        </div>
        <div class="score">Счёт: <span id="score">0</span></div>
        <div class="lives">Жизней: <span id="livesCounter">3</span></div>
        <canvas class="gameArea" id="canvas" width="800" height="600"></canvas>
    </div>
    <script src="../js/script.js"></script>
</body>
</html>