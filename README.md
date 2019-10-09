# Redshift Widget Wrapper

A wrapper used to embed the redshift widget and enable cross-domain communication

## Basic Usage

At a minimum, the following script tag must be added to the consuming webpage, which will fetch the widget wrapper javascript:

```html
<script src="https://cdn.radar.tech/redshift.js"></script>
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
 * Whether the widget should run in production (mainnet) or development (kovan testnet) mode
 */
export enum Environment {
  PRODUCTION = 'production',
  DEVELOPMENT = 'development',
}

/**
 * The widget configuration options
 */
export interface WidgetOptions {
  embedMode?: EmbedMode; // Default: modal
  env?: Environment; // Default: production
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

This mode is likely preferable for most websites because it does not disrupt the existing UI in any way. Simply slap `onclick="redshift.open()"` on a button and you're in business.

#### [View Live Demo](https://codepen.io/cavan-radar/details/pooJxvj?preview_height=650)

<img width="973" alt="Modal Embed" src="https://user-images.githubusercontent.com/20102664/65806350-62058500-e146-11e9-827d-5e422890dd5e.png">

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
  <script src="https://cdn.radar.tech/redshift.js"></script>
</body>
</html>

<!-- With options -->
<html>
<head>
</head>
<body>
  <script src="https://cdn.radar.tech/redshift.js"></script>
  <script>
    redshift.setOptions({
      embedMode: 'modal',
      env: 'development',
      brandColor: '#3B3B98',
      brandImageUrl: 'https://cdn.radar.tech/assets/placeholder-logo.png',
    });
  </script>
</body>
</html>
```


### Direct Embed

This mode will directly embed the widget into the consuming website. By default, the widget will be attached to the `body` of the website. If a `containerId` is passed in the widget options then the widget will be rendered inside that container.

#### [View Live Demo](https://codepen.io/cavan-radar/details/BaaNqbo?preview_height=650)

<img width="975" alt="Direct Embed" src="https://user-images.githubusercontent.com/20102664/65806349-60d45800-e146-11e9-9459-50e36dc25999.png">

#### How To

```html
<html>
<head>
</head>
<body>
  <div id="render-me-here"></div>
  <script src="https://cdn.radar.tech/redshift.js"></script>
  <script>
    redshift.setOptions({
      embedMode: 'direct-embed',
      env: 'development',
      brandColor: '#3B3B98',
      brandImageUrl: 'https://cdn.radar.tech/assets/placeholder-logo.png',
      containerId: 'render-me-here',
    });
  </script>
</body>
</html>
```
