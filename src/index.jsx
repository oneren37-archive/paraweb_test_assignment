/* global document, window */
import App from './App';

// eslint-disable-next-line no-unused-vars
window.createElement = function (tagName, props = {}, ...children) {
  if (typeof tagName === 'function') return tagName(props);
  if (tagName === 'fragment') return children;
  const elem = Object.assign(document.createElement(tagName), props);
  children.forEach((child) => {
    if (Array.isArray(child)) elem.append(...child);
    else elem.append(child);
  });
  return elem;
};

document.body.appendChild(<App title="Hello world" />);
