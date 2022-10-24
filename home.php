<?php
	$settings = require_once "/./settings.php";
	if (issset($settings)) die();
?>
<!DOCTYPE html>
<html>
<head>
	<title><?php echo $settings["indexTitle"]; ?></title>
	<link rel="shortcut icon" type="image/svg+xml" href="https://cdn.discordapp.com/avatars/630481836665208835/f547fde84915a88fc6cef709ef54acbb.png?size=4096"/>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="/./style.css"/>
</head>
<body>
	<h1 style="text-align: center;"><span style="color: #ffffff;">Natsunori </span></h1>
	<div align="center">
		<button onclick="window.location.href='https://natsunori.github.io/music';" class = "button is-primary" >Music</button>
		<button onclick="window.location.href='https://natsunori.github.io/profiles';" class = "button is-primary" >Profiles</button>
		<button onclick="window.location.href='https://natsunori.github.io/Priddawoman';" class = "button is-primary" >Pridda woman</button>
	</div>
</body>
</html>