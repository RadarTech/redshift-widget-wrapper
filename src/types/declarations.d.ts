import { WidgetOptions } from '.';
import { Api } from '../api';

declare global {
  interface Window {
    redshift: Api;
    redshiftOptions: WidgetOptions;
  }
}
