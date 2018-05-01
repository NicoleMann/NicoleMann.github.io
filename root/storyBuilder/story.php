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
//$stmtB = $pdo->prepare("SELECT * FROM `Setting` 
//	WHERE `Setting` = '$setting';");
//$stmtC = $pdo->prepare("SELECT * FROM `Villain` 
//	WHERE `Type` = '$typeV' AND `Lair` = '$lair';");
//$stmtD = $pdo->prepare("SELECT * FROM `Conflict` 
//	WHERE `Reason` = '$reason' AND `Fight` = '$fight';");

$stmtA->execute();
//$stmtB->execute();
//$stmtC->execute();
//$stmtD->execute();

?>
<!doctype html>
<html>
	<head>
		<meta charset="utf-8" />
		<title>Story Builder - Complete</title>
		<link rel="stylesheet" href="css/style.css" />
	</head>
	<body>        
		<h1>The Adventure of <span><? echo($row["Character.Name"]) ?></span></h1>
        
        <p>Once upon a time there was a person named <span><? echo($row["Character.Name"]) ?></span> and <span><? echo($row["Charcter.Gender"]) ?></span> lived in a <span><? echo($row["Setting"]) ?></span>.  Things were peaceful, for a time.</p>
        
        <p>Then one day, along came a <span><? echo($row["Villain.Type"]) ?></span>, bringing chaos to the <span><? echo($row["Setting.Name"]) ?></span>.  The <span><? echo($row["Villain.Type"]) ?></span> was evil and rude, and had a penchant for taking things that belonged to others.</p>
        
        <p><span><? echo($row["Conflict.Reason"]) ?></span></p>
        
        <p>The <span><? echo($row["Character.Name"]) ?></span> learned of the <span><? echo($row["Villain.Type"]) ?></span>’s presence in the country and set off on a journey to to defeat the <span><? echo($row["Villain.Type"]) ?></span>.  Navigating to the <span><? echo($row["Villain.Type"]) ?></span>’s lair was fairly simple and before long the <span><? echo($row["Character.Name"]) ?></span> arrived at the <span><? echo($row["Villain.Lair"]) ?></span> that the <span><? echo($row["Villain.Type"]) ?></span> called home.  Once there, the <span><? echo($row["Character.Name"]) ?></span> <span><? echo($row["Conflict.Fight"]) ?></span>.  <span><? echo($row["Character.Name"]) ?></span> then <span><? echo($row["Conflict.Ending"]) ?></span>.  And they all lived happily ever after!</p>
        
        <a href="protagPage.html"><input type="button" value="Edit"/></a>
    </body>
