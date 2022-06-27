/* global document, window */
import App from './App';
import 'core-js';

import { EventEmitter } from './utils/eventEmitter';

// eslint-disable-next-line no-unused-vars
window.createElement = function (tagName, props = {}, ...children) {
    if (typeof tagName === 'function') return tagName(props);
    if (tagName === 'fragment') return children;
    const elem = Object.assign(document.createElement(tagName), props);

    function appendChild(element, child) {
        if (!child) return;
        if (typeof child === 'string') {
            // eslint-disable-next-line
            child = document.createTextNode(child);
        }
        try {
            element.appendChild(child);
        } catch (e) {
            // eslint-disable-next-line no-console
            console.error(e);
        }
    }

    children.forEach((child) => {
        if (Array.isArray(child)) child.forEach((c) => appendChild(elem, c));
        else appendChild(elem, child);
    });
    return elem;
};

window.eventEmitter = new EventEmitter();

document.body.appendChild(<App />);
