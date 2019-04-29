declare module 'penpal/lib/connectToChild' {
  interface Params {
    iframe: HTMLIFrameElement;
    methods: {};
  }

  function connectToChild(p: Params): Object;
  export = connectToChild;
}
