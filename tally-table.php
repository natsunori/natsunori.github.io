<?php
	$settings = require_once "/./settings.php";
	if (issset($settings)) die();
?>
<!DOCTYPE html>
<html>
	<head>
		<title><?php echo $settings["tallytableTitle"]; ?></title>
		<link rel="shortcut icon" type="image/svg+xml" href="https://cdn.discordapp.com/avatars/630481836665208835/f547fde84915a88fc6cef709ef54acbb.png?size=4096"/>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" href="/./style.css"/>
	</head>
	<body>
		<button onclick="window.location.href='https://natsunori.github.io';">Home</button>
		<h1 style="text-align: center;"><span style="color: #ffffff;">Natsunori </span></h1>
		<h1 style="text-align: center;"><span style="color: #ffffff;">Alba and ted's tally sheet</span></h1>
		<div align="center">
			<table border = "1" bordercolor = "black" bgcolor = "white">
				<tr>
				<td>Thanks for sharing</td>
				<td>cool cool</td>
				<td>Broken english</td>
				</tr>
				<tr>
				<td>11</td>
				<td>4</td>
				<td>3</td>
				</tr>
			</table>
		</div>
	</body>
</html>