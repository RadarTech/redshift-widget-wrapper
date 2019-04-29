/**
 * The widget configuration options
 */
export interface WidgetOptions {
  mode: EmbedMode; // Required Embed Mode
  brandColor?: string; // Default: #262525
  brandImageUrl?: string; // Default: REDSHIFT Image
}

/**
 * Whether the widget should appear as a modal or directly embedded in the webpage
 */
export type EmbedMode = 'direct-embed' | 'modal';

/**
 * Redshift widget wrapper errors
 */
export enum RedshiftError {
  INVALID_REDSHIFT_EMBED_MODE = 'Invalid Redshift Embed Mode',
}
