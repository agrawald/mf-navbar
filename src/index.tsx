import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import singleSpaReact from 'single-spa-react';

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  domElementGetter
});

export function bootstrap(props: any) {
  console.log(props);
  return reactLifecycles.bootstrap(props);
}

export function mount(props: any) {
  console.log(props);
  return reactLifecycles.mount(props);
}

export function unmount(props: any) {
  console.log(props);
  return reactLifecycles.unmount(props);
}

function domElementGetter() {
  let el = document.getElementById('navbar');
  if (!el) {
    el = document.createElement('div');
    el.id = 'navbar';
    document.body.appendChild(el);
  }

  return el;
}
