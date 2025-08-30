/**
 * Safely navigates to an external URL without showing the URL in the status bar
 * @param {string} url - The URL to navigate to
 * @param {boolean} newTab - Whether to open in a new tab
 */
export const navigateToExternal = (url, newTab = true) => {
  if (newTab) {
    window.open(url, '_blank', 'noopener,noreferrer');
  } else {
    window.location.href = url;
  }
};

/**
 * Returns props for an external link that prevents URL preview
 * @param {string} url - The URL to link to
 * @param {boolean} newTab - Whether to open in a new tab
 * @returns {Object} Props to spread on a button or div
 */
export const getExternalLinkProps = (url, newTab = true) => ({
  role: 'link',
  tabIndex: 0,
  onKeyDown: (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      navigateToExternal(url, newTab);
    }
  },
  onClick: (e) => {
    e.preventDefault();
    navigateToExternal(url, newTab);
  },
  style: { cursor: 'pointer' },
  'aria-label': `Open external link${newTab ? ' in new tab' : ''}`
});
