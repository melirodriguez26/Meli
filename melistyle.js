// Mobile navigation
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");
if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });
  navigation.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
  }));
}

// Staggered scroll reveal for smooth entrance motion
const revealItems = document.querySelectorAll(".reveal");
revealItems.forEach((item, index) => {
  item.style.transitionDelay = `${(index % 4) * 90}ms`;
});

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        setTimeout(() => {
          entry.target.style.transitionDelay = "0ms";
        }, 800);
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  revealItems.forEach(item => observer.observe(item));
} else {
  revealItems.forEach(item => item.classList.add("visible"));
}

// Accessible expandable project cards
document.querySelectorAll(".project-card").forEach(card => {
  const toggle = () => {
    const open = card.classList.toggle("is-open");
    card.setAttribute("aria-pressed", String(open));
    card.setAttribute("aria-expanded", String(open));
    card.querySelector(".project-details").setAttribute("aria-hidden", String(!open));
  };
  card.addEventListener("click", toggle);
  card.addEventListener("keydown", event => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggle();
    }
  });
});

// Certificate image preview
const certificateDialog = document.querySelector(".certificate-dialog");
if (certificateDialog && typeof certificateDialog.showModal === "function") {
  const preview = certificateDialog.querySelector(".dialog-image");
  const closeButton = certificateDialog.querySelector(".dialog-close");

  document.querySelectorAll(".certificate-image").forEach(button => {
    button.addEventListener("click", () => {
      const image = button.querySelector("img");
      preview.src = image.src;
      preview.alt = image.alt;
      certificateDialog.showModal();
      closeButton.focus();
    });
  });

  closeButton.addEventListener("click", () => certificateDialog.close());
  certificateDialog.addEventListener("click", event => {
    if (event.target === certificateDialog) certificateDialog.close();
  });
  certificateDialog.addEventListener("close", () => {
    preview.removeAttribute("src");
    preview.alt = "";
  });
}

// Añadir contenedor de destellos dinámicos abundantes en todas las páginas y secciones
document.addEventListener('DOMContentLoaded', () => {
    const sparkleContainer = document.createElement('div');
    sparkleContainer.className = 'sparkle-container';
    document.body.appendChild(sparkleContainer);

    // Más destellos flotantes generales (65 partículas)
    const numSparkles = 65;
    for (let i = 0; i < numSparkles; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        
        const size = Math.random() * 5 + 2; // tamaño entre 2px y 7px
        sparkle.style.width = `${size}px`;
        sparkle.style.height = `${size}px`;
        
        sparkle.style.left = `${Math.random() * 100}vw`;
        sparkle.style.top = `${Math.random() * 100}vh`;
        
        const duration = Math.random() * 3.5 + 2; // entre 2s y 5.5s
        sparkle.style.setProperty('--duration', `${duration}s`);
        sparkle.style.animationDelay = `${Math.random() * 6}s`;
        
        sparkleContainer.appendChild(sparkle);
    }

    // Añadir estrellitas flotantes tipográficas adicionales (✦ / ✧) para mayor chispa visual
    const starSymbols = ['✦', '✧', '✳', '★'];
    for (let j = 0; j < 25; j++) {
        const star = document.createElement('div');
        star.className = 'floating-star-symbol';
        star.textContent = starSymbols[Math.floor(Math.random() * starSymbols.length)];
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;
        star.style.fontSize = `${Math.random() * 10 + 10}px`;
        star.style.opacity = Math.random() * 0.4 + 0.2;
        
        const duration = Math.random() * 4 + 3;
        star.style.animation = `floatingStarAnim ${duration}s ease-in-out infinite alternate`;
        star.style.animationDelay = `${Math.random() * 5}s`;
        
        sparkleContainer.appendChild(star);
    }
});

// Añadir destellos celestes enriquecidos en tamaños variados con movimiento fluido a las partes blancas y tarjetas
document.addEventListener('DOMContentLoaded', () => {
    const whiteSectionsOrCards = document.querySelectorAll('.profile-copy, .edu-card, .skill-card, .project-card, .certificate-card');
    
    whiteSectionsOrCards.forEach(container => {
        if (getComputedStyle(container).position === 'static') {
            container.style.position = 'relative';
        }
        
        const numCeleste = 7; // Más destellos celestes por tarjeta/sección blanca
        for (let i = 0; i < numCeleste; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'celeste-sparkle';
            
            const size = Math.random() * 6 + 3; // entre 3px y 9px
            sparkle.style.width = `${size}px`;
            sparkle.style.height = `${size}px`;
            
            sparkle.style.left = `${Math.random() * 92 + 4}%`;
            sparkle.style.top = `${Math.random() * 92 + 4}%`;
            
            const duration = Math.random() * 2.5 + 2; // entre 2s y 4.5s
            sparkle.style.setProperty('--duration', `${duration}s`);
            sparkle.style.animationDelay = `${Math.random() * 4.5}s`;
            
            container.appendChild(sparkle);
        }
    });
});