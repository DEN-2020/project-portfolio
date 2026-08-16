const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim();
const consentKey = 'portfolio_analytics_consent';

type ConsentChoice = 'accepted' | 'rejected';

declare global {
  interface Window {
    dataLayer?: unknown[][];
    gtag?: (...args: unknown[]) => void;
  }

  interface Navigator {
    globalPrivacyControl?: boolean;
  }
}

const hasPrivacySignal = () => navigator.doNotTrack === '1' || navigator.globalPrivacyControl === true;

const scheduleAnalytics = (callback: () => void) => {
  if (typeof window.requestIdleCallback === 'function') {
    window.requestIdleCallback(callback, { timeout: 3000 });
    return;
  }
  setTimeout(callback, 1);
};

const loadGoogleAnalytics = () => {
  if (!measurementId || window.gtag) return;

  window.dataLayer = window.dataLayer ?? [];
  window.gtag = (...args: unknown[]) => window.dataLayer?.push(args);
  window.gtag('consent', 'default', {
    analytics_storage: 'granted',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  });
  window.gtag('js', new Date());
  window.gtag('config', measurementId, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
    send_page_view: true,
  });

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  document.head.appendChild(script);
};

const saveChoice = (choice: ConsentChoice) => {
  localStorage.setItem(consentKey, choice);
  document.querySelector('[data-analytics-consent]')?.remove();
  if (choice === 'accepted') scheduleAnalytics(loadGoogleAnalytics);
};

const renderConsent = () => {
  const isRussian = document.documentElement.lang === 'ru';
  const banner = document.createElement('aside');
  banner.className = 'analytics-consent';
  banner.dataset.analyticsConsent = '';
  banner.setAttribute('role', 'dialog');
  banner.setAttribute('aria-label', isRussian ? 'Настройки аналитики' : 'Analytics preferences');
  banner.innerHTML = `
    <p>
      ${
        isRussian
          ? 'Разрешить анонимную статистику посещений? Рекламные сигналы отключены.'
          : 'Allow anonymous visit statistics? Advertising signals are disabled.'
      }
    </p>
    <div class="analytics-consent__actions">
      <button type="button" class="card-btn card-btn--primary" data-analytics-choice="accepted">
        ${isRussian ? 'Разрешить' : 'Allow'}
      </button>
      <button type="button" class="card-btn" data-analytics-choice="rejected">
        ${isRussian ? 'Отклонить' : 'Decline'}
      </button>
    </div>
  `;

  banner.querySelectorAll<HTMLButtonElement>('[data-analytics-choice]').forEach((button) => {
    button.addEventListener('click', () => saveChoice(button.dataset.analyticsChoice as ConsentChoice));
  });
  document.body.appendChild(banner);
};

export const initAnalytics = () => {
  if (!measurementId || !/^G-[A-Z0-9]{8,}$/.test(measurementId) || hasPrivacySignal()) return;

  const choice = localStorage.getItem(consentKey) as ConsentChoice | null;
  if (choice === 'accepted') {
    scheduleAnalytics(loadGoogleAnalytics);
    return;
  }
  if (choice !== 'rejected') renderConsent();
};
