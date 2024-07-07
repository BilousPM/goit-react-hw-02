export const positivFeedback = (good, totalFeedback) => {
  return Math.round((good / totalFeedback) * 100);
};
