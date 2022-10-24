<?php
	$settings = require_once "/./settings.php";
	if (issset($settings)) die();
?>
<!DOCTYPE html>
<html>
   <head>
      <title><?php echo $settings["profilesTitle"]; ?></title>
      <link rel="shortcut icon" type="image/svg+xml" href="https://cdn.discordapp.com/avatars/630481836665208835/f547fde84915a88fc6cef709ef54acbb.png?size=4096"/>
      <meta name="viewport" content="width=device-width, initial-scale=1">
	   <link rel="stylesheet" href="/./style.css"/>
   </head>
   <body style="background-color:black;">
      <button onclick="window.location.href='https://natsunori.github.io';">
            Home
      </button>
      <h1 style="text-align: center;">   
      <span style="color: #ffffff;">Profiles</span></h1>
	   <p style="text-align: center;"><span style="color: #ffffff;">test build 2A1</span></p>
      <div align="center">
               <button onclick="window.location.href='https://osu.ppy.sh/users/22650901';">Osu!</button>
               <button onclick="window.location.href='https://discordapp.com/users/630481836665208835/';">discord</button>
               <button onclick="window.location.href='https://steamcommunity.com/id/natsunori/';">Steam</button>
               <button onclick="window.location.href='https://github.com/natsunori/silica-v2';">Silica</button>
               <button onclick="window.location.href='https://open.spotify.com/user/wasdpo6';">Spotify</button>
               <button onclick="window.location.href='https://www.twitch.tv/natsunorir';">Twitch</button>
               <button onclick="window.location.href='https://github.com/natsunori';">Github</button>
      </div>
   </body>
</html>
