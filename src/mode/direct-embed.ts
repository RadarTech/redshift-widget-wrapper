import resizer from 'iframe-resizer';
import { DirectEmbedApi } from '../api';
import { EmbedMode } from '../types';
import { Shared } from './shared';

export class DirectEmbed extends Shared {
  protected _mode = EmbedMode.DIRECT_EMBED;

  constructor() {
    super();
    window.redshift = new DirectEmbedApi();
    this.attachToWebpage();
    this.resizeIframeOnChange();
    this.initializeXDomainMessaging();
  }

  /**
   * Attach the widget to the webpage by directly embedding it to some container
   */
  public attachToWebpage() {
    const widget = document.getElementById(this._rootId);
    if (!widget) {
      this._iframe = document.createElement('iframe');
      this._iframe.id = this._iframeId;

      // Hide the frame border, disable scrolling, and set the width + height
      this._iframe.frameBorder = '0';
      this._iframe.scrolling = 'no';
      this._iframe.width = '400px';
      this._iframe.height = '451px';

      // No border, add box-shadow
      this._iframe.style.border = 'none';
      this._iframe.style.boxShadow = '0 0 50px rgba(0, 0, 0, .1)';

      // Set a background color and image that display while loading the widget
      this._iframe.style.background =
        '#ffffff url("https://widget.redshift.radar.tech/assets/redshift-logo.svg") no-repeat center center';

      // Populate the iframe with the widget
      this._iframe.src = process.env.REDSHIFT_WIDGET_URL;

      const id = window.redshiftOptions.containerId;
      const root = id ? document.getElementById(id) : document.body;
      root.appendChild(this._iframe);
    }
  }

  /**
   * Resize the iframe height to match it's content
   */
  private resizeIframeOnChange() {
    resizer.iframeResizer(
      {
        checkOrigin: false,
        heightCalculationMethod: 'taggedElement',
      },
      `#${this._iframeId}`,
    );
  }
}
