document.addEventListener("DOMContentLoaded", () => {
    const particles = document.querySelectorAll(".particle");
    particles.forEach((particle) => {
      particle.style.left = Math.random() * 100 + "%";
      particle.style.width = particle.style.height =
        Math.random() * 10 + 5 + "px";
      particle.style.animationDelay = Math.random() * 15 + "s";
    });
  });