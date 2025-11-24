document.addEventListener("DOMContentLoaded", () => {
  // ==========================
  // SPHERE INTERACTION
  // ==========================
  const container = document.querySelector(".sphere-container");
  const sphere = document.getElementById("sphere");

  if (container && sphere) {
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    function animate() {
      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;

      sphere.style.transform = `
        translate(${currentX}px, ${currentY}px)
        scale(1.05)
      `;

      requestAnimationFrame(animate);
    }

    animate();

    container.addEventListener("mousemove", (e) => {
      const rect = container.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const offsetY = e.clientY - rect.top;

      const intensity = 1.8; // tweak if you want stronger/weaker

      targetX = (offsetX - rect.width / 2) * intensity;
      targetY = (offsetY - rect.height / 2) * intensity;
    });

    container.addEventListener("mouseleave", () => {
      targetX = 0;
      targetY = 0;
    });
  } else {
    console.warn("Sphere or container not found");
  }

  // ==========================
  // SMOOTH SCROLL NAV LINKS
  // ==========================
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href === "#") return;

      e.preventDefault();
      const targetId = href.substring(1);
      const target = document.getElementById(targetId);

      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // ==========================
  // FOOTER BUBBLES
  // ==========================
  const footer = document.querySelector("footer");

  if (footer) {
    let bubbleInterval = null;

    footer.addEventListener("mouseenter", () => {
      if (bubbleInterval) return; // avoid multiple intervals
      bubbleInterval = setInterval(() => {
        createBubble(footer);
      }, 180); // bubbles speed
    });

    footer.addEventListener("mouseleave", () => {
      if (bubbleInterval) {
        clearInterval(bubbleInterval);
        bubbleInterval = null;
      }
    });
  }

  function createBubble(footerElem) {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");

    // random horizontal position
    bubble.style.left = Math.random() * 100 + "%";

    // random bubble size
    const size = Math.random() * 12 + 8; // 8px to 20px
    bubble.style.width = size + "px";
    bubble.style.height = size + "px";

    footerElem.appendChild(bubble);

    setTimeout(() => {
      bubble.remove();
    }, 2600);
  }
});
