import { WidgetOptions } from '.';
import { DirectEmbedApi, ModalApi, OptionsApi } from '../api';

declare global {
  interface Window {
    redshift: OptionsApi | ModalApi | DirectEmbedApi;
    redshiftOptions: WidgetOptions;
  }
}
