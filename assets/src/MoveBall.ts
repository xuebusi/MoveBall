import { _decorator, Component, Node, UITransform, v2, Vec2, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('MoveBall')
export class MoveBall extends Component {
    /* 小球节点 */
    @property(Node)
    ball: Node = null

    /* 小球速度 */
    @property(Vec2)
    speed: Vec2 = new Vec2(200, 200)

    /* 小球位移 */
    frameS: Vec3 = new Vec3(0, 0, 0);

    /* 左边界 */
    left: number = 0
    /* 下边界 */
    bottom: number = 0
    /* 右边界 */
    right: number = 0
    /* 上边界 */
    top: number = 0

    /* 生命周期方法，仅执行一次 */
    start() {
        console.log("start...");

        /* 获取设计窗口的宽高 */
        let sw = this.node.getComponent(UITransform).width;
        let hw = this.node.getComponent(UITransform).height;
        /* 小球半径=小球宽度的一半 */
        let r = this.ball.getComponent(UITransform).width / 2;

        /* 左边界等于小球的半径 */
        this.left = r;
        /* 下边界等于小球的半径 */
        this.bottom = r;
        /* 右边界等于设计宽度减去小球的半径 */
        this.right = sw - r;
        /* 上边界等于设计高度减去小球的半径 */
        this.top = hw - r;
    }

    /* 生命周期方法，每一帧执行一次 */
    update(deltaTime: number) {
        console.log("update...");

        /* 实时计算小球的x轴和y轴的位移 */
        this.frameS.x = this.speed.x * deltaTime;
        this.frameS.y = this.speed.y * deltaTime;

        /* 更新小球的坐标(下一帧位置坐标 = 当前位置坐标 + 位移) */
        this.ball.position = this.ball.position.add(this.frameS)

        /* 如果小球到达左边界和右边界，则x轴运动方向取反 */
        if (this.ball.position.x <= this.left) {
            this.speed.x = -this.speed.x
            this.ball.position = new Vec3(this.left, this.ball.position.y)
        } else if(this.ball.position.x >= this.right) {
            this.speed.x = -this.speed.x
            this.ball.position = new Vec3(this.right, this.ball.position.y)
        }

        /* 如果小球到达上边界和下边界，则y轴运动方向取反 */
        if (this.ball.position.y >= this.top) {
            this.speed.y = -this.speed.y
            this.ball.position = new Vec3(this.ball.position.x, this.top)
        } else if(this.ball.position.y <= this.bottom) {
            this.speed.y = -this.speed.y
            this.ball.position = new Vec3(this.ball.position.x, this.bottom)
        }
    }
}

