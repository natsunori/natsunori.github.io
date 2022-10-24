<?php
	$settings = require_once "/./settings.php";
	if (issset($settings)) die();
?>
<!DOCTYPE html>
<html>
   <head>
      <title><?php echo $settings["priddawomanTitle"]; ?></title>
      <link rel="shortcut icon" type="image/svg+xml" href="https://cdn.discordapp.com/avatars/630481836665208835/f547fde84915a88fc6cef709ef54acbb.png?size=4096"/>
      <meta name="viewport" content="width=device-width, initial-scale=1">
	   <link rel="stylesheet" href="/./style.css"/> 
   </head>
   <body style="background-color:black;">
      <button onclick="window.location.href='https://natsunori.github.io';">Home</button>
      <style>
         #wrap { 
            width: 600px; 
            height: 390px; 
            padding: 0; 
            overflow: hidden; 
         }
         #frame { 
            width: 800px; 
            height: 520px; 
            border: 1px solid black; 
         }
         #frame { 
            zoom: 0.75; 
            -moz-transform: scale(0.75); 
            -moz-transform-origin: 0 0; 
         }
      </style>
      <p>Some text before the frame</p>
      <div id="wrap">
         <iframe id="frame" src="https://docs.google.com/presentation/d/e/2PACX-1vStPdXFdC2FO-6G6_XYk4s5KUD0CBBzkvf4_wCZov_mGtu8xRQyj_CqNBA5SfGkDqp9BPU0CzNc28zk/pub?start=false&loop=false&delayms=3000"></iframe>
      </div>
      <p>Some text after the frame</p>
   </body>
</html>
