// Bulma navbar burger toggle
document.addEventListener('DOMContentLoaded', () => {
	const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
	if ($navbarBurgers.length > 0) {
		$navbarBurgers.forEach(el => {
			el.addEventListener('click', () => {
				const target = el.dataset.target;
				const $target = document.getElementById(target);
				el.classList.toggle('is-active');
				$target.classList.toggle('is-active');
			});
		});
	}

	// Cursor glow effect
	const cursorGlow = document.getElementById('cursorGlow');
	if (cursorGlow && window.innerWidth > 768) {
		document.addEventListener('mousemove', (e) => {
			cursorGlow.style.left = e.clientX + 'px';
			cursorGlow.style.top = e.clientY + 'px';
			cursorGlow.classList.add('active');
		});

		document.addEventListener('mouseleave', () => {
			cursorGlow.classList.remove('active');
		});
	}

	// Twitch live status check (using public embed endpoint)
	const streamStatus = document.getElementById('streamStatus');
	if (streamStatus) {
		checkTwitchStatus('natsunorir');
	}
});

// Check Twitch live status
async function checkTwitchStatus(channel) {
	const streamStatus = document.getElementById('streamStatus');
	if (!streamStatus) return;

	// Default to offline
	setOffline(streamStatus);

	try {
		const response = await fetch(`https://decapi.me/twitch/uptime/${channel}`);
		const text = await response.text();
		
		// DecAPI returns uptime like "2 hours, 30 minutes" when live
		// Returns "natsunorir is offline" or similar when offline
		const isOffline = text.toLowerCase().includes('offline') || 
		                  text.toLowerCase().includes('not found') ||
		                  text.toLowerCase().includes('error');
		
		if (!isOffline && text.match(/\d+\s*(hour|minute|second|day)/i)) {
			// Actually live - has uptime data
			streamStatus.classList.remove('offline');
			streamStatus.querySelector('.live-text').textContent = 'LIVE';
			streamStatus.querySelector('.stream-cta').textContent = 'Watch Now!';
		} else {
			setOffline(streamStatus);
		}
	} catch (error) {
		setOffline(streamStatus);
	}
}

function setOffline(streamStatus) {
	streamStatus.classList.add('offline');
	streamStatus.querySelector('.live-text').textContent = 'OFFLINE';
	streamStatus.querySelector('.stream-cta').textContent = 'Visit Channel';
}
