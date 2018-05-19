<?php
$dsn = "mysql:host=localhost;dbname=mannnico_student";
$username = "mannnico";
$password = "2%9zgrFhR%J";
$pdo = new PDO($dsn, $username, $password);

$stmt = $pdo->prepare("SELECT * FROM `Skills`;")("SELECT * FROM `Experience`;")("SELECT * FROM `Education`;")("SELECT * FROM `Contact`;");

$stmt->execute();

?>
<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Nicole Mann - Resume</title>
        <link rel="stylesheet" href="css/main.css">
    </head>
    <body>
    <h1>Nicole Mann</h1>
    <h2>Skills</h2>
    <table>
    <?
    while($row=$stmt->fetch()){
    ?>    
      <tr>
        <td><?echo($row["Skills.Name"]);?></td>
        <td><?echo($row["Skills.Description"]);?></td>
      </tr>
    <?    
    }
    ?>
    </table>
    <h2>Experience</h2>
    <table>
    <?
    while($row=$stmt->fetch()){
    ?>    
      <tr>
        <td><?echo($row["Experience.Name"]);?></td>
        <td><?echo($row["Experience.Description"]);?></td>
      </tr>
    <?    
    }
    ?>
    </table>
    <h2>Education</h2>
    <table>
    <?
    while($row=$stmt->fetch()){
    ?>    
      <tr>
        <td><?echo($row["Education.Name"]);?></td>
        <td><?echo($row["Education.Description"]);?></td>
      </tr>
    <?    
    }
    ?>
    </table>
    <h2>Contact Information</h2>
    <table>   
      <tr>
        <td>Mobile: <a href="call:6478341606">(647) 834-1606</a></td>
      </tr>
      <tr>
        <td>Home: <a href="call:9056703510">(905) 670-3510</a></td>
      </tr>
      <tr>
        <td>Email: <a href="mailto:mannnico@sheridancollege.ca">mannnico@sheridancollege.ca</a></td>
      </tr>
    </table>
    </body>
    </html?
