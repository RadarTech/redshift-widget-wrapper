import { ModalApi } from '../api';
import { EmbedMode } from '../types';
import { Shared } from './shared';

export class Modal extends Shared {
  protected _mode = EmbedMode.MODAL;

  constructor() {
    super();
    window.redshift = new ModalApi(
      this.attachToWebpage.bind(this),
      this.removeFromWebpage.bind(this),
      this.initializeXDomainMessaging.bind(this),
    );
  }

  /**
   * Attach the widget to the webpage as a modal
   */
  public attachToWebpage() {
    const widget = document.getElementById(this._rootId);
    if (!widget) {
      this._iframe = document.createElement('iframe');
      this._iframe.id = this._iframeId;

      // Allow page to be visible beyond iframe
      this._iframe.setAttribute('allowtransparency', 'true');

      // Hide the frame border
      this._iframe.frameBorder = '0';

      // Overlay all page content
      this._iframe.style.position = 'fixed';
      this._iframe.style.top = '0';
      this._iframe.style.left = '0';
      this._iframe.style.width = '100%';
      this._iframe.style.height = '100%';
      this._iframe.style.zIndex = '9999';
      this._iframe.style.border = 'none';

      // Populate the iframe with the widget
      this._iframe.src = process.env.REDSHIFT_WIDGET_URL;

      const root = document.createElement('div');
      root.id = this._rootId;
      root.appendChild(this._iframe);

      document.getElementsByTagName('body')[0].appendChild(root);
    }
  }

  /**
   * Remove the widget from the webpage
   */
  public removeFromWebpage() {
    const widget = document.getElementById(this._rootId);
    if (widget) {
      widget.parentNode.removeChild(widget);
    }
  }
}
