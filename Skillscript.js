{/* <script>
  document.addEventListener('DOMContentLoaded', () => {
    const bubbles = document.querySelectorAll('.bubble');
    const container = document.querySelector('.bubble-container');
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    bubbles.forEach(bubble => {
      // Set initial random position
      bubble.style.left = `${Math.random() * (containerWidth - 60)}px`;
      bubble.style.top = `${Math.random() * (containerHeight - 60)}px`;

      // Assign random velocity (speed & direction)
      let dx = (Math.random() - 0.5) * 2; // range -1 to 1
      let dy = (Math.random() - 0.5) * 2;

      function moveBubble() {
        let x = parseFloat(bubble.style.left);
        let y = parseFloat(bubble.style.top);

        // Update position
        x += dx;
        y += dy;

        // Bounce off edges
        if (x <= 0 || x >= containerWidth - 60) dx *= -1;
        if (y <= 0 || y >= containerHeight - 60) dy *= -1;

        bubble.style.left = `${x}px`;
        bubble.style.top = `${y}px`;

        requestAnimationFrame(moveBubble);
      }

      moveBubble(); // Start animation
    });
  });
</script> */}
