const countdown = document.querySelector(".countdown");
const timelineLinks = document.querySelectorAll(".timeline-link");
const navSections = document.querySelectorAll("[data-section-nav]");
const lazyElements = document.querySelectorAll("[data-lazy-src]");

timelineLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href")?.replace("#", "");
    const target = targetId ? document.getElementById(targetId) : null;

    if (!target) {
      return;
    }

    event.preventDefault();
    setActiveTimelineLink(target.id);
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${target.id}`);
  });
});

function formatNumber(value) {
  return String(value).padStart(2, "0");
}

function updateCountdown() {
  if (!countdown) {
    return;
  }

  const eventDateValue = countdown.dataset.eventDate;
  const eventDateLabel = countdown.dataset.eventLabel || "dem Hochzeitstag";
  const daysElement = countdown.querySelector("[data-countdown-days]");
  const hoursElement = countdown.querySelector("[data-countdown-hours]");
  const minutesElement = countdown.querySelector("[data-countdown-minutes]");
  const secondsElement = countdown.querySelector("[data-countdown-seconds]");
  const noteElement = countdown.querySelector("[data-countdown-note]");

  if (!eventDateValue) {
    if (noteElement) {
      noteElement.textContent =
        "Sobald das Datum feststeht, zaehlt dieser Bereich automatisch mit.";
    }
    return;
  }

  const eventDate = new Date(eventDateValue);

  if (Number.isNaN(eventDate.getTime())) {
    if (noteElement) {
      noteElement.textContent =
        "Das hinterlegte Datum ist noch nicht im erwarteten Format.";
    }
    return;
  }

  const now = new Date();
  const remainingMilliseconds = eventDate.getTime() - now.getTime();

  if (remainingMilliseconds <= 0) {
    if (daysElement) daysElement.textContent = "00";
    if (hoursElement) hoursElement.textContent = "00";
    if (minutesElement) minutesElement.textContent = "00";
    if (secondsElement) secondsElement.textContent = "00";
    if (noteElement) noteElement.textContent = "Heute ist es soweit.";
    return;
  }

  const totalSeconds = Math.floor(remainingMilliseconds / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const days = Math.floor(totalMinutes / 1440);
  const hours = Math.floor((totalMinutes % 1440) / 60);
  const minutes = totalMinutes % 60;
  const seconds = totalSeconds % 60;

  if (daysElement) daysElement.textContent = String(days);
  if (hoursElement) hoursElement.textContent = formatNumber(hours);
  if (minutesElement) minutesElement.textContent = formatNumber(minutes);
  if (secondsElement) secondsElement.textContent = formatNumber(seconds);
  if (noteElement) {
    noteElement.textContent =
      `Der Countdown aktualisiert sich automatisch bis zum ${eventDateLabel}.`;
  }
}

updateCountdown();
window.setInterval(updateCountdown, 1000);

function setActiveTimelineLink(sectionId) {
  timelineLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${sectionId}`;

    link.classList.toggle("is-active", isActive);

    if (isActive) {
      link.setAttribute("aria-current", "true");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      const visibleEntries = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visibleEntries[0]?.target?.id) {
        setActiveTimelineLink(visibleEntries[0].target.id);
      }
    },
    {
      rootMargin: "-28% 0px -52% 0px",
      threshold: [0.08, 0.2, 0.4, 0.6],
    },
  );

  navSections.forEach((section) => sectionObserver.observe(section));
}

function loadLazyElement(element) {
  const lazySource = element.dataset.lazySrc;

  if (!lazySource) {
    return;
  }

  element.setAttribute("src", lazySource);
  element.removeAttribute("data-lazy-src");
}

if ("IntersectionObserver" in window) {
  const lazyObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        loadLazyElement(entry.target);
        observer.unobserve(entry.target);
      });
    },
    {
      rootMargin: "360px 0px",
    },
  );

  lazyElements.forEach((element) => lazyObserver.observe(element));
} else {
  lazyElements.forEach(loadLazyElement);
}
