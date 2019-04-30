import { OptionsApi } from './api';
import { DirectEmbed, Modal } from './mode';
import { EmbedMode, RedshiftError } from './types';

// Attach the options API to the window immediately
(() => {
  window.redshift = new OptionsApi();
})();

// Attach the mode-specific API on load
window.addEventListener('load', configureWidget, false);

/**
 * Attach the API used to interact with the chosen embed mode and
 * additional setup.
 */
function configureWidget() {
  const options = {
    embedMode: EmbedMode.MODAL, // Default to modal mode
    ...window.redshiftOptions,
  };

  // Set options if none were provided
  if (!window.redshiftOptions) {
    window.redshift.setOptions(options);
  }

  switch (options.embedMode) {
    case EmbedMode.DIRECT_EMBED:
      return new DirectEmbed();
    case EmbedMode.MODAL:
      return new Modal();
    default:
      throw new Error(RedshiftError.INVALID_REDSHIFT_EMBED_MODE);
  }
}
