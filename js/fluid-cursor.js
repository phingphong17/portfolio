document.addEventListener('DOMContentLoaded', () => {
    // Ajout des styles CSS
    const style = document.createElement('style');
    style.textContent = `
        .fluid-cursor {
            pointer-events: none;
            position: fixed;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: rgba(0, 119, 181, 0.6);
            transform: translate(-50%, -50%);
            z-index: 9999;
        }
        
        .fluid-trail {
            pointer-events: none;
            position: fixed;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color: rgba(0, 119, 181, 0.3);
            transform: translate(-50%, -50%);
            transition: width 0.2s, height 0.2s;
            z-index: 9998;
        }
    `;
    document.head.appendChild(style);

    // Création du curseur et des traînées
    const cursor = document.createElement('div');
    cursor.className = 'fluid-cursor';
    document.body.appendChild(cursor);
    
    const trails = Array.from({length: 20}, () => {
        const trail = document.createElement('div');
        trail.className = 'fluid-trail';
        document.body.appendChild(trail);
        return trail;
    });
    
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animate() {
        const dx = mouseX - cursorX;
        const dy = mouseY - cursorY;
        cursorX += dx * 0.1;
        cursorY += dy * 0.1;
        cursor.style.left = `${cursorX}px`;
        cursor.style.top = `${cursorY}px`;
        
        trails.forEach((trail, index) => {
            setTimeout(() => {
                const trailX = cursorX - dx * (index * 0.1);
                const trailY = cursorY - dy * (index * 0.1);
                trail.style.left = `${trailX}px`;
                trail.style.top = `${trailY}px`;
                trail.style.width = `${20 - index}px`;
                trail.style.height = `${20 - index}px`;
                trail.style.opacity = 1 - (index * 0.05);
            }, index * 10);
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
}); 