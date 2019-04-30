import { OptionsApi } from './options-api';

/**
 * The API used to communicate with trade widget when the embed mode is set to modal.
 */
export class ModalApi extends OptionsApi {
  private _isOpen: boolean;
  private _attach: () => void;
  private _remove: () => void;
  private _initMessaging: () => void;

  /**
   * Whether or not the trade widget is open
   */
  get isOpen() {
    return this._isOpen;
  }

  constructor(
    attach: () => void,
    remove: () => void,
    initMessaging: () => void,
  ) {
    super();
    this._attach = attach;
    this._remove = remove;
    this._initMessaging = initMessaging;
    this._isOpen = false;
  }

  /**
   * Open the widget
   */
  public open() {
    this._attach();
    this._initMessaging();
    this._isOpen = true;
  }

  /**
   * Close the widget
   */
  public close() {
    this._remove();
    this._isOpen = false;
  }

  /**
   * Toggle the widget
   */
  public toggle() {
    this.isOpen ? this.close() : this.open();
  }
}
