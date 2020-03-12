const checkAnalytics = () =>
  typeof window.yleAnalytics !== 'undefined' &&
  typeof window.yleAnalytics.trackEvent !== 'undefined'
    ? window.yleAnalytics.trackEvent
    : (a, b) => console.log(`analytiikkaevent ${a} rekisteröity offline`);

const pageName = 'Ulkolinja-englanti-2';

export default {
  registerEvent: name => {
    const trackEvent = checkAnalytics();
    trackEvent(`${pageName}.${name}`, {
      pageName,
    });
  },
};
