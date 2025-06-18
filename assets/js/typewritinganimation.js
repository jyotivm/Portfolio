const words = ["Better", "Smarter", "Faster"];
    let wordIndex = 0;
    let charIndex = 0;
    const typingSpeed = 150;
    const erasingSpeed = 80;
    const delayBetweenWords = 1500;

    const typedTextSpan = document.getElementById("typed-text");

    function type() {
      if (charIndex < words[wordIndex].length) {
        typedTextSpan.textContent += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
      } else {
        setTimeout(erase, delayBetweenWords);
      }
    }

    function erase() {
      if (charIndex > 0) {
        typedTextSpan.textContent = words[wordIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingSpeed);
      } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, typingSpeed);
      }
    }

    document.addEventListener("DOMContentLoaded", () => {
      setTimeout(type, 1000);
    });