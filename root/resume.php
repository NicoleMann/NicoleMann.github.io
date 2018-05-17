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

$stmtA = $pdo->prepare("SELECT * FROM `Skills`;");
$stmtB = $pdo->prepare("SELECT * FROM `Setting`;");
$stmtC = $pdo->prepare("SELECT * FROM `Villain`;");
$stmtD = $pdo->prepare("SELECT * FROM `Conflict`;");
$stmtA->execute();
$stmtB->execute();
$stmtC->execute();
$stmtD->execute();

?>
