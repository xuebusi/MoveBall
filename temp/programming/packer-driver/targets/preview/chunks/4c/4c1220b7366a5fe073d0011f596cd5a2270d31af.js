System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, MoveBall;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "80facEZbSpGEKMhdMMPoTNM", "MoveBall", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MoveBall", MoveBall = (_dec = ccclass('MoveBall'), _dec(_class = class MoveBall extends Component {
        constructor() {
          super(...arguments);
          this.x = 0;
        }

        start() {
          console.log("start...");
        }

        update(deltaTime) {
          //console.log("update...");
          this.x += deltaTime;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4c1220b7366a5fe073d0011f596cd5a2270d31af.js.map