<?php 
	session_start();
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="../css/style.css">
	<title>Результаты</title>
</head>
<body>
	<section class="container resultsTable">
		<div class="statistic">
			<div class="statistic-leftSide">
	        	<p><?= 'Игрок: ' . $_SESSION['player']['name']; ?></p>
	        	<p class="playedTime"><?= 'Счёт: ' . $_GET['score']; ?></p>
	        	<p class="scoreResult"><?= 'Время: ' . $_GET['time']; ?></p>
        	</div>
        	<div class="statistic-rightSide">
        		<?php 
        			if($_GET['is_winner'] == 'true'){
        				echo '<p class="win">Победа</p>';
        			} else if($_GET['is_winner'] == 'false'){
        				echo '<p class="lose">Поражение</p>';
        			}
        		?>
        	</div>
        </div>
        <a href="<?= '../index.php?last_player=' . $_SESSION['player']['name']; ?>" class="playAgain">Играть сначала</a>
	</section>
</body>
</html>