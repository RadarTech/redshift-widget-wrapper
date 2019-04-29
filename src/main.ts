import { Api } from './api';

window.addEventListener('load', attachAPI, false);

/**
 * Attach the API used to control the widget.
 */
function attachAPI() {
  window.redshift = new Api();
}
