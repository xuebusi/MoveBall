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
        constructor(...args) {
          super(...args);

          /* 小球节点 */
          _initializerDefineProperty(this, "ball", _descriptor, this);

          /* 小球速度 */
          _initializerDefineProperty(this, "speed", _descriptor2, this);

          /* 小球位移 */
          this.frameS = new Vec3(0, 0, 0);

          /* 小球半径 */
          this.r = 0;

          /* 左边界 */
          this.left = 0;

          /* 下边界 */
          this.bottom = 0;

          /* 右边界 */
          this.right = 0;

          /* 上边界 */
          this.top = 0;
        }

        /* 生命周期方法，仅执行一次 */
        start() {
          console.log("start...");
          /* 获取设计窗口的宽高 */

          let sw = this.node.getComponent(UITransform).width;
          let hw = this.node.getComponent(UITransform).height; // 小球半径=小球宽度的一半

          this.r = this.ball.getComponent(UITransform).width / 2;
          /* 左边界等于小球的半径 */

          this.left = this.r;
          /* 下边界等于小球的半径 */

          this.bottom = this.r;
          /* 右边界等于设计宽度减去小球的半径 */

          this.right = sw - this.r;
          /* 上边界等于设计高度减去小球的半径 */

          this.top = hw - this.r;
        }
        /* 生命周期方法，每一帧执行一次 */


        update(deltaTime) {
          console.log("update...");
          /* 实时计算小球的x轴和y轴的位移 */

          this.frameS.x = this.speed.x * deltaTime;
          this.frameS.y = this.speed.y * deltaTime;
          /* 更新小球的坐标 */

          this.ball.position = this.ball.position.add(this.frameS);
          /* 如果小球到达左边界和右边界，则x轴运动方向取反 */

          if (this.ball.position.x <= this.left || this.ball.position.x >= this.right) {
            this.speed.x = -this.speed.x;
          }
          /* 如果小球到达上边界和下边界，则y轴运动方向取反 */


          if (this.ball.position.y >= this.top || this.ball.position.y <= this.bottom) {
            this.speed.y = -this.speed.y;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "ball", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "speed", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Vec2(200, 200);
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1c57511d97aab1db34e69c696510da5ba1feda1e.js.map