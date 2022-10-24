<?php
	$settings = require_once "/./settings.php";
	if (issset($settings)) die();
?>
<!DOCTYPE html>
<html>
<head>
	<title><?php echo $settings["houseTitle"]; ?></title>
	<link rel="shortcut icon" type="image/svg+xml" href="https://cdn.discordapp.com/avatars/630481836665208835/f547fde84915a88fc6cef709ef54acbb.png?size=4096"/>
	<link rel="stylesheet" href="/./style.css"/>
</head>
<body>
	<h1 style="text-align: center;"><span style="color: #000000;">House of the future</span></h1>
	<div align="center">
		<button onclick="window.location.href='';">Energy</button>
		<button onclick="window.location.href='https://natsunori.com/earthship';">Earth ship</button>
		<button onclick="window.location.href='';">Hygine</button>
		<button onclick="window.location.href='';">Kitchen garden</button>
		<br></br>
		<p1><span style="color: #000000;">Sustainable living for the future</span></p1>
	</div>
</body>
</html>
