(function () {
  "use strict";

  var referralKeys = ["ref", "source", "utm_source", "utm_medium", "utm_campaign"];
  var params = new URLSearchParams(window.location.search);
  var referral = {};
  var prefersReducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  referralKeys.forEach(function (key) {
    var value = params.get(key);
    if (value) {
      referral[key] = value;
    }
  });

  if (Object.keys(referral).length > 0 && window.console && typeof window.console.info === "function") {
    window.console.info("Referral context:", referral);
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
      var targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") {
        return;
      }

      var target = document.querySelector(targetId);
      if (!target) {
        return;
      }

      event.preventDefault();
      target.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
      history.pushState(null, "", targetId);
    });
  });

  document.querySelectorAll(".media-placeholder").forEach(function (placeholder) {
    placeholder.setAttribute("aria-label", placeholder.textContent.trim() || "Asset placeholder");
  });
})();
