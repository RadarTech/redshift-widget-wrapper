/**
 * Helper functions used to attach and remove the widget from the webpage
 */
export const widgetHelper = {
  /**
   * The id of the containing div
   */
  rootId: 'redshiftWidgetRoot',

  /**
   * The id of the attached iframe
   */
  iframeId: 'redshiftWidgetIframe',

  /**
   * Attach the widget to the webpage by directly embedding it to some container
   */
  attachAsDirectEmbed(id?: string) {
    const widget = document.getElementById(widgetHelper.rootId);
    if (!widget) {
      const iframe = document.createElement('iframe');
      iframe.id = widgetHelper.iframeId;

      // Hide the frame border, disable scrolling, and set the width
      iframe.frameBorder = '0';
      iframe.scrolling = 'no';
      iframe.width = '400px';

      // No border
      iframe.style.border = 'none';

      // Populate the iframe with the widget
      iframe.src = process.env.REDSHIFT_WIDGET_URL;

      const root = id ? document.getElementById(id) : document.body;
      root.appendChild(iframe);
    }
  },

  /**
   * Attach the widget to the webpage as a modal
   */
  attachAsModal() {
    const widget = document.getElementById(widgetHelper.rootId);
    if (!widget) {
      const iframe = document.createElement('iframe');
      iframe.id = widgetHelper.iframeId;

      // Allow page to be visible beyond iframe
      iframe.setAttribute('allowtransparency', 'true');

      // Hide the frame border
      iframe.frameBorder = '0';

      // Overlay all page content
      iframe.style.position = 'fixed';
      iframe.style.top = '0';
      iframe.style.left = '0';
      iframe.style.width = '100%';
      iframe.style.height = '100%';
      iframe.style.zIndex = '9999';
      iframe.style.border = 'none';

      // Populate the iframe with the widget
      iframe.src = process.env.REDSHIFT_WIDGET_URL;

      const root = document.createElement('div');
      root.id = widgetHelper.rootId;
      root.appendChild(iframe);

      document.getElementsByTagName('body')[0].appendChild(root);
    }
  },

  /**
   * Remove the widget from the webpage
   */
  remove() {
    const widget = document.getElementById(widgetHelper.rootId);
    if (widget) {
      widget.parentNode.removeChild(widget);
    }
  },
};
