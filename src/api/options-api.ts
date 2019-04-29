import { WidgetOptions } from '../types';

/**
 * The portion of the widget API that is used to set the widget configuration.
 */
export class OptionsApi {
  /**
   * Set the widget configuration options
   * @param options The widget options, including brand image and color
   */
  public setOptions(options: WidgetOptions) {
    window.redshiftOptions = options;
  }
}
