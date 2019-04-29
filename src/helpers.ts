const rootId = 'redshiftWidgetRoot';

/**
 * Add the widget to the webpage
 */
export function addWidget() {
  const widget = document.getElementById(rootId);
  if (!widget) {
    const iframe = document.createElement('iframe');

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
    root.id = rootId;
    root.appendChild(iframe);

    document.getElementsByTagName('body')[0].appendChild(root);
  }
}

/**
 * Remove the widget from the webpage
 */
export function removeWidget() {
  const widget = document.getElementById(rootId);
  if (widget) {
    widget.parentNode.removeChild(widget);
  }
}
