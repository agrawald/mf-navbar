import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
// import * as serviceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import singleSpaReact from 'single-spa-react';

// ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  domElementGetter
});

export const bootstrap = [reactLifecycles.bootstrap];

export const mount = [reactLifecycles.mount];

export const unmount = [reactLifecycles.unmount];

function domElementGetter() {
  let el = document.getElementById('navbar');
  if (!el) {
    el = document.createElement('div');
    el.id = 'navbar';
    document.body.appendChild(el);
  }

  return el;
}
// serviceWorker.unregister();
