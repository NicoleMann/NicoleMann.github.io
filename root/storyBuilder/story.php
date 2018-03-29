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
	WHERE `Setting` = '$setting';");
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
		<meta charset="utf-8" />
		<title>Story Builder - Complete</title>
		<link rel="stylesheet" href="css/style.css" />
	</head>
	<body>        
		<h1>The Adventure of <span <? echo($row["Character.Name"]) ?> ></span></h1>
        <p>Once upon a time there was a man/woman/person named <span <? echo($row["Character.Name"]) ?> ></span> and <span <? echo($row["Charcter.Gender"]) ?> ></span> lived <span <? echo($row["Setting"]) ?><? echo($row["Setting.Name"]) ?> ></span>.  It was here that <span <? echo($row["Character.Name"]) ?> ></span> practiced the magical arts/trained long and hard to master the sword/ruled justly over the country.  Things were peaceful, for a time.</p>
        <p>Then one day, along came <span <? echo($row["Villain.Name"]) ?> ></span>, bringing chaos to <span <? echo($row["Setting.Name"]) ?> ></span>.  <span <? echo($row["Villain.Name"]) ?> ></span> was evil and rude, and had a penchant for taking things that belonged to others.</p>
        <p><span <? echo($row["Conflict.Reason"]) ?> ></span></p>
        <p><span <? echo($row["Character.Name"]) ?> ></span> learned of <span <? echo($row["Villain.Name"]) ?> ></span>’s presence in the country and set off on a journey to to defeat <span <? echo($row["Villain.Name"]) ?> ></span>.  Navigating to <span <? echo($row["Villain.Name"]) ?> ></span>’s lair was fairly simple and before long <span <? echo($row["Character.Name"]) ?> ></span> arrived at the <span <? echo($row["Villain.Lair"]) ?> ></span> that <span <? echo($row["Villain.Name"]) ?> ></span> called home.  Once there, <span <? echo($row["Character.Name"]) ?> ></span> <span <? echo($row["Conflict.Fight"]) ?> ></span>  <span <? echo($row["Character.Name"]) ?> ></span> then <span <? echo($row["Conflict.Ending"]) ?> ></span>
And they all lived happily ever after!
</p>
			<a href="protagPage.html"><input type="button" value="Edit"/></a>

    </body>