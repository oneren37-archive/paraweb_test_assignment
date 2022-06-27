export function EventEmitter() {
    this.listeners = {};

    this.on = function (str, fn) {
        this.listeners[str] = fn;
    };

    this.emit = function (str, data) {
        this.listeners[str](data);
    };

    this.remove = function (str) {
        delete this.listeners[str];
    };
}
