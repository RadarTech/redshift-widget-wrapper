import { WidgetOptions } from '.';
import { DirectEmbedApi, ModalApi, OptionsApi } from '../api';

declare global {
  interface Window {
    redshift: OptionsApi | ModalApi | DirectEmbedApi;
    redshiftOptions: WidgetOptions;
  }
}

declare module 'iframe-resizer' {
  function iframeResizer(
    options: iframeResizer.IFrameOptions,
    target: string | HTMLElement,
  ): iframeResizer.IFrameComponent[];
}
