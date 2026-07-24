// TODO: replace with your live Stripe Payment Link, e.g. https://buy.stripe.com/xxxx
const STRIPE_PAYMENT_LINK = "https://buy.stripe.com/REPLACE_WITH_PAYMENT_LINK";

document.getElementById("checkout-btn").href = STRIPE_PAYMENT_LINK;

// Scroll-triggered fade-up reveals (skipped under reduced motion — CSS shows everything)
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const targets = document.querySelectorAll("[data-reveal]");

if (reduceMotion || !("IntersectionObserver" in window)) {
  targets.forEach(el => el.classList.add("is-visible"));
} else {
  const io = new IntersectionObserver(
    entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.1 }
  );
  targets.forEach(el => io.observe(el));
}
