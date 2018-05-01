<?php 
session_start();

$dsn = "mysql:host=localhost;dbname=mannnico_storyBuilder";
$username = "mannnico";
$password = "2%9zgrFhR%J";
$pdo = new PDO($dsn, $username, $password);

$gender = $_POST['gender'];
$typeP = $_POST['typeP'];
$setting = $_POST['setting'];
$typeV = $_POST['typeV'];
$lair = $_POST['lair'];
$reason = $_POST['reason'];
$fight = $_POST['fight'];

$stmtA = $pdo->prepare("SELECT * FROM `Characters` 
	WHERE `Gender` = '$gender' AND `Type` = '$typeP';");
$stmtB = $pdo->prepare("SELECT * FROM `Setting` 
	WHERE `Name` = '$setting';");
$stmtC = $pdo->prepare("SELECT * FROM `Villain` 
	WHERE `Type` = '$typeV' AND `Lair` = '$lair';");
$stmtD = $pdo->prepare("SELECT * FROM `Conflict` 
	WHERE `Reason` = '$reason' AND `Fight` = '$fight';");

$stmtA->execute();
$stmtB->execute();
$stmtC->execute();
$stmtD->execute();

?>
<!doctype html>
<html>
    <head>
        <meta charset="utf-8"/>
        <title>Story Builder - Confirm Story Pieces</title>
        <link rel="stylesheet" href="css/style.css"/>
    </head>
    <body>
		<h1>Confirm Story Pieces</h1>
		<h2>Character</h2>
		<? while($row=$stmtA->fetch()){ ?>
        <p><? echo($row["Character.Name"]);
            echo($row["Character.Type"]);?></p>
		<? } ?>
		<h2>Setting</h2>
		<? while($row=$stmtB->fetch()){	?>
		<p><? echo($row["Setting.Name"]);?></p>
		<? } ?>
		<h2>Villain</h2>
		<? while($row=$stmtC->fetch()){ ?>
		<p><? echo($row["Villain.Type"]);
            echo($row["Villain.Lair"])?></p>
		<? } ?>
		<a href="story.php"><input type="button" id="create" value="Write Story"/></a>
    </body>
</html>
