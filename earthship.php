<?php
	$settings = require_once "/./settings.php";
	if (issset($settings)) die();
?>
<!DOCTYPE html>
<html>
<head>
	<title><?php echo $settings["earthshipTitle"]; ?></title>
	<link rel="shortcut icon" type="image/svg+xml" href="https://cdn.discordapp.com/avatars/630481836665208835/f547fde84915a88fc6cef709ef54acbb.png?size=4096"/>
	<style>
		body {
		    background-image: url('http://hiddenarchitecture.net/wp-content/uploads/2016/04/MONSANTO_016.jpg');
		    background-repeat: no-repeat;  
		    background-size: cover;
		}
	</style>
</head>
<body>
	<button onclick="window.location.href='www.natusnori.com/hotf';">Home</button>
	<h1 style="text-align: center;"><span style="color: #000000;">Earth ship</span></h1>
	<div align="center", {background-color: white;}>
		<img src="https://i.pinimg.com/originals/d9/f1/6e/d9f16eff306773e789fa723a00266893.jpg">
    <p>lorem ipsum</p>
	</div>
</body>
</html>