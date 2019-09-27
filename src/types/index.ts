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
 * Redshift widget wrapper errors
 */
export enum RedshiftError {
  INVALID_REDSHIFT_EMBED_MODE = 'Invalid Redshift Embed Mode',
}
