<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/style.css">
    <title>Игра | Вход</title>
</head>
<body>
    <div class="container">
        <form action="pages/game.php" method="post">
            <input class="playerName" type="text" name="player_name" placeholder="Ваш никнейм" value="<?php
                if(isset($_GET['last_player'])) echo $_GET['last_player'];
            ?>">
            <input class="entryBtn" type="submit" value="Войти">
        </form>
    </div>
    <script>
        let entryBtn = document.querySelector('.entryBtn');
        let input = document.querySelector('.playerName');
        setInterval(() => {
            if(input.value !== ''){
                entryBtn.style.pointerEvents = 'auto';
            } else {
                entryBtn.style.pointerEvents = 'none';
            }
        }, 100);
    </script>
</body>
</html>