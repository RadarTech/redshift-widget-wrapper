const rootId = 'redshiftWidgetRoot';

/**
 * Add the widget to the webpage
 */
export function addWidget() {
  const widget = document.getElementById(rootId);
  if (!widget) {
    const iframe = document.createElement('iframe');
    iframe.setAttribute('allowtransparency', 'true');
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
