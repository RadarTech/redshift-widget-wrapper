import connectToChild from 'penpal/lib/connectToChild';
import { EmbedMode } from '../types';

export abstract class Shared {
  protected _iframe: HTMLIFrameElement;
  protected abstract _mode: EmbedMode;

  /**
   * Initiialize cross-domain messaging via penpal
   */
  protected initializeXDomainMessaging() {
    connectToChild({
      iframe: this._iframe,
      // Methods the parent is exposing to the child
      methods: {
        getOptions: () => {
          return window.redshiftOptions;
        },
        getEmbedMode: () => {
          return this._mode;
        },
      },
    });
  }
}
