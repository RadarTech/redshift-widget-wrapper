import { DirectEmbedApi, ModalApi, OptionsApi } from './api';
import { EmbedMode, RedshiftError } from './types';

// Attach the options API to the window immediately
(() => {
  window.redshift = new OptionsApi();
})();

// Attach the mode-specific API on load
window.addEventListener('load', attachModeSpecificAPI, false);

/**
 * Attach the API used to interact with the chosen embed mode.
 */
function attachModeSpecificAPI() {
  const { mode } = window.redshiftOptions;
  window.redshift = getApiForMode(mode);
}

/**
 * Get the API for the active embed mode.
 */
function getApiForMode(mode: EmbedMode) {
  switch (mode) {
    case 'direct-embed':
      return new DirectEmbedApi();
    case 'modal':
      return new ModalApi();
    default:
      throw new Error(RedshiftError.INVALID_REDSHIFT_EMBED_MODE);
  }
}
