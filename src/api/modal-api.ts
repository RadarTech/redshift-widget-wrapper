import { addWidget, removeWidget } from '../helpers';
import { OptionsApi } from './options-api';

/**
 * The API used to communicate with trade widget when the embed mode is set to modal.
 */
export class ModalApi extends OptionsApi {
  private _isOpen: boolean;

  /**
   * Whether or not the trade widget is open
   */
  get isOpen() {
    return this._isOpen;
  }

  constructor() {
    super();
    this._isOpen = false;
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
