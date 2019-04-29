import resizer from 'iframe-resizer';
import { DirectEmbedApi, ModalApi, OptionsApi } from './api';
import { RedshiftError } from './types';
import { widgetHelper } from './widget-helper';

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
  const { embedMode } = window.redshiftOptions;
  switch (embedMode) {
    case 'direct-embed':
      {
        window.redshift = new DirectEmbedApi();
        widgetHelper.attachAsDirectEmbed();
        resizer.iframeResizer(
          {
            checkOrigin: false,
            heightCalculationMethod: 'taggedElement',
          },
          `#${widgetHelper.iframeId}`,
        );
      }
      break;
    case 'modal':
      {
        window.redshift = new ModalApi();
      }
      break;
    default:
      throw new Error(RedshiftError.INVALID_REDSHIFT_EMBED_MODE);
  }
}
