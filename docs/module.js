import singleSpaHtml from 'single-spa-html';

const htmlLifecycles = singleSpaHtml({
  template: '<inspireComp></inspireComp>',
})

export const bootstrapInspire = htmlLifecycles.bootstrap;
export const mountInspire = htmlLifecycles.mount;
export const unmountInspire = htmlLifecycles.unmount;