# Redshift Widget Wrapper

A wrapper project used to embed the widget and enable cross-domain communication.

## Basic Usage

At a minimum, a script tag must be added to the consuming webpage, which will fetch the widget wrapper javascript. In the `index.html` source file, this looks like:

```html
<script src="/redshift.js"></script>
```

## Window API

The above script attaches an API to the window of the consuming webpage that allows them to send commands to the widget. All methods are accessible on a single `redshift` object on the window. Initially, there is only one method on this object:

```typescript
/**
 * Whether the widget should appear as a modal or directly embedded in the webpage
 */
export enum EmbedMode {
  DIRECT_EMBED = 'direct-embed',
  MODAL = 'modal',
}

/**
 * The widget configuration options
 */
export interface WidgetOptions {
  embedMode?: EmbedMode; // Default: modal
  brandColor?: string; // Default: #262525
  brandImageUrl?: string; // Default: REDSHIFT Image
  containerId?: string; // The id of the container that the widget will be attached to. Default: body
}

/**
 * Set the widget configuration options
 */
redshift.setOptions(options: WidgetOptions)
```

## Embed Modes

### Modal

This mode is likely preferable for most websites because it does not disrupt their existing UI in any way. Simply slap `onclick="redshift.open()"` on a button and you're in business.

<img width="1044" alt="Screen Shot 2019-04-30 at 4 19 41 PM" src="https://user-images.githubusercontent.com/20102664/56997085-d15d5580-6b63-11e9-88ec-63000f897aa9.png">

#### Extended Window API

```typescript
/**
 * Open the widget
 */
redshift.open()

/**
 * Close the widget
 */
redshift.close() 

/**
 * Toggle the widget
 */
redshift.toggle()
```

#### How To

```html
<!-- Without any options -->
<html>
<head>
</head>
<body>
  <script src="/main.bundle.js"></script>
</body>
</html>

<!-- With options -->
<html>
<head>
</head>
<body>
  <script src="/main.bundle.js"></script>
  <script>
    redshift.setOptions({
      embedMode: 'modal',
      brandColor: '#5E8D3D',
      brandImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg',
    });
  </script>
</body>
</html>
```


### Direct Embed

This mode will directly embed the widget into the consuming website. By default, the widget will be attached to the `body` of the website. If a `containerId` is passed in the widget options then the widget will be rendered inside that container. 

<img width="939" alt="Screen Shot 2019-04-30 at 4 21 01 PM" src="https://user-images.githubusercontent.com/20102664/56997131-f6ea5f00-6b63-11e9-96e1-bacb610c1c66.png">

#### How To

```html
<html>
<head>
</head>
<body>
  <div id="render-me-here"></div>
  <script src="/main.bundle.js"></script>
  <script>
    redshift.setOptions({
      embedMode: 'direct-embed',
      brandColor: '#5E8D3D',
      brandImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg',
      containerId: 'render-me-here',
    });
  </script>
</body>
</html>
```
