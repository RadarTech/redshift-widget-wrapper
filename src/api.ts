import { addWidget, removeWidget } from './helpers';
import { WidgetOptions } from './types';

/**
 * The API used to communicate with trade widget.
 */
export class Api {
  private _isOpen: boolean;
  private _brandColor: string;
  private _brandImageUrl: string;

  /**
   * Whether or not the trade widget is open
   */
  get isOpen() {
    return this._isOpen;
  }

  constructor() {
    this._isOpen = false;
  }

  /**
   * Set the widget configuration options
   * @param options The widget options, including brand image and color
   */
  public setOptions(options: WidgetOptions) {
    window.redshiftOptions = options;
  }

  /**
   * Open the widget
   */
  public open() {
    addWidget();
    this._isOpen = true;
  }

  /**
   * Close the widget
   */
  public close() {
    removeWidget();
    this._isOpen = false;
  }

  /**
   * Toggle the widget
   */
  public toggle() {
    this.isOpen ? this.close() : this.open();
  }
}
