System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, UITransform, Vec2, Vec3, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, MoveBall;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      UITransform = _cc.UITransform;
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "80facEZbSpGEKMhdMMPoTNM", "MoveBall", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'UITransform', 'v2', 'Vec2', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MoveBall", MoveBall = (_dec = ccclass('MoveBall'), _dec2 = property(Node), _dec3 = property(Vec2), _dec(_class = (_class2 = class MoveBall extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "ball", _descriptor, this);

          _initializerDefineProperty(this, "speed", _descriptor2, this);

          this.frameS = new Vec3(0, 0, 0);
          this.r = 0;
          this.left = 0;
          this.bottom = 0;
          this.right = 0;
          this.top = 0;
        }

        start() {
          console.log(this.ball); // this.r = this.ball.
        }

        update(deltaTime) {
          console.log("update...");
          this.frameS.x = this.speed.x * deltaTime;
          this.frameS.y = this.speed.y * deltaTime;
          this.ball.position = this.ball.position.add(this.frameS);
          var sw = this.node.getComponent(UITransform).width;
          var hw = this.node.getComponent(UITransform).height;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "ball", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "speed", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec2(200, 200);
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ce10f3c672d766f28d29ad3f9e8bfdb6eba38447.js.map