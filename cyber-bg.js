// Anime-style animated background
const canvas = document.getElementById('cyber-bg');
const ctx = canvas.getContext('2d');

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

// Soft anime color palette
const colors = ['#FF69B4', '#FFB6C1', '#DDA0DD', '#E6E6FA', '#B0E0E6', '#98D8C8'];

// Cherry blossom petals
class Petal {
    constructor() {
        this.reset();
    }
    reset() {
        this.x = Math.random() * canvas.width * 1.5;
        this.y = -20;
        this.size = Math.random() * 10 + 5;
        this.speedY = Math.random() * 1.2 + 0.3;
        this.speedX = Math.random() * 0.8 - 0.4;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.04;
        this.alpha = Math.random() * 0.7 + 0.3;
        this.wobble = Math.random() * Math.PI * 2;
        this.wobbleSpeed = Math.random() * 0.02 + 0.01;
        this.color = Math.random() > 0.3 ? '#FFB7C5' : '#FFDDE1';
    }
    update() {
        this.y += this.speedY;
        this.wobble += this.wobbleSpeed;
        this.x += this.speedX + Math.sin(this.wobble) * 0.8;
        this.rotation += this.rotationSpeed;
        if (this.y > canvas.height + 30) {
            this.reset();
        }
    }
    draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        
        // Draw petal shape
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#FF69B4';
        ctx.beginPath();
        ctx.ellipse(0, 0, this.size, this.size * 0.5, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Inner highlight
        ctx.fillStyle = '#FFF0F5';
        ctx.globalAlpha = this.alpha * 0.6;
        ctx.beginPath();
        ctx.ellipse(-this.size * 0.2, -this.size * 0.1, this.size * 0.35, this.size * 0.2, 0, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
    }
}

// Soft glowing particles (like fireflies/sparkles)
class Sparkle {
    constructor() {
        this.reset();
    }
    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.alpha = Math.random() * 0.6 + 0.2;
        this.pulse = Math.random() * Math.PI * 2;
        this.pulseSpeed = Math.random() * 0.03 + 0.01;
        this.driftX = (Math.random() - 0.5) * 0.2;
        this.driftY = (Math.random() - 0.5) * 0.2;
    }
    update() {
        this.pulse += this.pulseSpeed;
        this.x += this.driftX;
        this.y += this.driftY;
        
        // Wrap around screen
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
    }
    draw() {
        const glow = Math.sin(this.pulse) * 0.4 + 0.6;
        ctx.save();
        ctx.globalAlpha = this.alpha * glow;
        ctx.shadowBlur = 15;
        ctx.shadowColor = this.color;
        ctx.fillStyle = this.color;
        
        // Soft circle
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * glow, 0, Math.PI * 2);
        ctx.fill();
        
        // Bright center
        ctx.globalAlpha = this.alpha * glow * 0.8;
        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 0.4, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
    }
}

// Shooting stars
class ShootingStar {
    constructor() {
        this.reset();
        this.active = false;
        this.timer = Math.random() * 300 + 100;
    }
    reset() {
        this.x = Math.random() * canvas.width * 0.8;
        this.y = Math.random() * canvas.height * 0.4;
        this.length = Math.random() * 80 + 40;
        this.speed = Math.random() * 8 + 6;
        this.alpha = 0;
        this.maxAlpha = Math.random() * 0.6 + 0.4;
        this.angle = Math.PI * 0.2 + Math.random() * 0.2;
        this.trail = [];
        this.active = true;
        this.fadeIn = true;
    }
    update() {
        if (!this.active) {
            this.timer--;
            if (this.timer <= 0) {
                this.reset();
                this.timer = Math.random() * 400 + 200;
            }
            return;
        }
        
        // Fade in/out
        if (this.fadeIn) {
            this.alpha += 0.05;
            if (this.alpha >= this.maxAlpha) {
                this.fadeIn = false;
            }
        }
        
        // Move
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        
        // Add trail point
        this.trail.unshift({ x: this.x, y: this.y });
        if (this.trail.length > 20) this.trail.pop();
        
        // Check bounds
        if (this.x > canvas.width + 50 || this.y > canvas.height + 50) {
            this.active = false;
            this.trail = [];
        }
    }
    draw() {
        if (!this.active || this.trail.length < 2) return;
        
        ctx.save();
        
        // Draw trail
        for (let i = 0; i < this.trail.length - 1; i++) {
            const t = 1 - (i / this.trail.length);
            ctx.globalAlpha = this.alpha * t * 0.8;
            ctx.strokeStyle = `rgba(255, 255, 255, ${t})`;
            ctx.lineWidth = 2 * t;
            ctx.shadowBlur = 10;
            ctx.shadowColor = '#FFB6C1';
            ctx.beginPath();
            ctx.moveTo(this.trail[i].x, this.trail[i].y);
            ctx.lineTo(this.trail[i + 1].x, this.trail[i + 1].y);
            ctx.stroke();
        }
        
        // Draw head
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = '#FFFFFF';
        ctx.shadowBlur = 20;
        ctx.shadowColor = '#FFFFFF';
        ctx.beginPath();
        ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
    }
}

// Soft floating clouds
class Cloud {
    constructor() {
        this.reset();
    }
    reset() {
        this.x = -200;
        this.y = Math.random() * canvas.height * 0.5;
        this.width = Math.random() * 150 + 100;
        this.height = this.width * 0.4;
        this.speed = Math.random() * 0.2 + 0.1;
        this.alpha = Math.random() * 0.06 + 0.02;
    }
    update() {
        this.x += this.speed;
        if (this.x > canvas.width + 200) {
            this.reset();
        }
    }
    draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        
        // Draw cloud as multiple overlapping circles
        const gradient = ctx.createRadialGradient(
            this.x, this.y, 0,
            this.x, this.y, this.width * 0.6
        );
        gradient.addColorStop(0, 'rgba(255, 200, 220, 0.5)');
        gradient.addColorStop(0.5, 'rgba(230, 180, 200, 0.3)');
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        
        // Main blob
        ctx.beginPath();
        ctx.ellipse(this.x, this.y, this.width * 0.5, this.height, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Side blobs
        ctx.beginPath();
        ctx.ellipse(this.x - this.width * 0.3, this.y + 5, this.width * 0.35, this.height * 0.8, 0, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.beginPath();
        ctx.ellipse(this.x + this.width * 0.3, this.y - 5, this.width * 0.4, this.height * 0.7, 0, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
    }
}

// Create elements
const petals = [];
for (let i = 0; i < 50; i++) {
    const petal = new Petal();
    petal.y = Math.random() * canvas.height;
    petals.push(petal);
}

const sparkles = [];
for (let i = 0; i < 50; i++) {
    sparkles.push(new Sparkle());
}

const shootingStars = [];
for (let i = 0; i < 4; i++) {
    const star = new ShootingStar();
    star.timer = Math.random() * 200 * (i + 1);
    shootingStars.push(star);
}

const clouds = [];
for (let i = 0; i < 5; i++) {
    const cloud = new Cloud();
    cloud.x = Math.random() * canvas.width;
    clouds.push(cloud);
}

// Animation loop
function animate() {
    // Clear canvas completely (no trails)
    ctx.fillStyle = 'rgb(15, 5, 20)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw clouds (very background)
    clouds.forEach(cloud => {
        cloud.update();
        cloud.draw();
    });
    
    // Draw shooting stars
    shootingStars.forEach(star => {
        star.update();
        star.draw();
    });
    
    // Draw sparkles
    sparkles.forEach(sparkle => {
        sparkle.update();
        sparkle.draw();
    });
    
    // Draw petals (foreground)
    petals.forEach(petal => {
        petal.update();
        petal.draw();
    });
    
    requestAnimationFrame(animate);
}
animate();

