const canvas = document.getElementById('cns');
const ctx = canvas.getContext('2d');

let i = 0
function animate() {
    i++
    ctx.clearRect(0, 0, 500, 500);

    for(y = 1; y < 9; y++){
        for (let x = i - 15; x < i; x++) {
            ctx.fillStyle = "#fff";
            ctx.beginPath();
            ctx.arc(250 + Math.sin((i + x) * Math.PI / 180 * (y * 0.5)) * (200 - y * 20), 250 + Math.cos((i + x) * Math.PI / 180 * (y * 0.5)) * (200 - y * 20), 10, 0, 2 * Math.PI);
            ctx.fill();
        }
    }

    requestAnimationFrame(animate);
}

animate();