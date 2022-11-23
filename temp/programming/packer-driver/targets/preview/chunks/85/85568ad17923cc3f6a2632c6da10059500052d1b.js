System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, EventEmitter, _crd, Event;

  _export("EventEmitter", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fefe8xCzhdEO74TrezRSAlN", "EventEmitter", undefined);

      _export("EventEmitter", EventEmitter = class EventEmitter {
        constructor() {
          this.events = void 0;
          this.hosts = void 0;
          this.events = {};
          this.hosts = {};
        }

        on(event, listener, host) {
          if (typeof this.events[event] !== 'object') {
            this.events[event] = [];
            this.hosts[event] = [];
          }

          this.events[event].push(listener);
          this.hosts[event].push(host);
        }

        removeListener(event, listener, host) {
          var idx; // cc.log(this.events);
          // cc.log(this.hosts);

          if (typeof this.events[event] === 'object' && typeof this.hosts[event] === 'object') {
            idx = this.events[event].indexOf(listener); // id = Array.indexOf(this.hosts[event], host);
            // cc.log(idx);
            // cc.log(this.events[event].length);

            if (idx > -1) {
              this.events[event].splice(idx, 1);
              this.hosts[event].splice(idx, 1);
            } // cc.log(this.events[event].length);

          }
        }

        emit(event) {
          var i, hosts, listeners, length;

          if (typeof this.events[event] === 'object') {
            listeners = this.events[event].slice();
            hosts = this.hosts[event].slice();
            length = listeners.length;

            for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = arguments[_key];
            }

            for (i = 0; i < length; i++) {
              if (this.events[listeners[i]] !== null) {
                listeners[i].apply(hosts[i], args);
              } else {
                listeners[i].apply(this, args);
              }
            }
          }
        }

        once(event, listener, host) {
          this.on(event, () => {
            this.removeListener(event, listener, host);
            listener.apply(this, arguments);
          }, host);
        }

      });

      _export("Event", Event = new EventEmitter());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=85568ad17923cc3f6a2632c6da10059500052d1b.js.map