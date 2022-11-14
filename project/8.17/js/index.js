window.onload = function () {
    // 容器
    var box = $('.box')
    // 首页
    var home = $('.home')
    // 开始游戏的按钮
    var startGame = $('.startGame')
    // 游戏页
    var game = $('.game')
    // 我方飞机
    var myPlane = $('.myPlane')
    var myPlaneWidth = myPlane.offsetWidth
    var myPlaneHeight = myPlane.offsetHeight

    var enemys = []
    var bullets = [];

    // 定时器
    var moveBgTimer,
        createBulletTimer,
        createEnmeyTimer,
        moveBulletTimer,
        moveEnemyTimer,
        collisionTimer,
        myPlaneCollisionTimer

    // 开始游戏
    addEvent(startGame, 'click', function () {
        home.style.display = 'none';

        // 移动背景
        moveBg()
        // 移动我方飞机
        moveMyPlane();
        // 创建子弹实例的方法
        cleatEvenyBullet();
        // 移动子弹
        moveEveryBullet();
        // 创建敌机
        createEveryEnemy();
        // 移动飞机
        moveEveryEnemy();


    })

    // 让背景移动(使用定时器)
    function moveBg() {
        moveBgTimer = setInterval(function () {
            // 获取背景的当前位置
            var bgLocal = parseInt(getStyle(game, "background-position-y"));
            // console.log(bgLocal);
            if (bgLocal == game.offsetHeight) {
                game.style.backgroundPositionY = "0px"
            }
            else {
                game.style.backgroundPositionY = bgLocal + 1 + "px"
            }

        }, 10)
    }

    // 让我方飞机移动(给页面设置监听)
    function moveMyPlane() {
        addEvent(game, 'mousemove', function (evt) {
            // 获取鼠标坐标
            var left = evt.clientX - box.offsetLeft
            var top = evt.clientY - box.offsetTop

            // 把飞机的中心点移动到鼠标的位置上
            left = left - myPlaneWidth / 2
            top = top - myPlaneHeight / 2

            // 最大边界
            var maxLeft = game.offsetWidth - myPlaneWidth
            var maxTop = game.offsetHeight - myPlaneHeight

            // 边界控制
            left = left < 0 ? 0 : left > maxLeft ? maxLeft : left;
            top = top < 0 ? 0 : top > maxTop ? maxTop : top;

            myPlane.style.left = left + 'px'
            myPlane.style.top = top + 'px'
        })
    }

    // 

    // 创建子弹
    // setInterval(function () {
    //     var myPlaneLeft = myPlane.offsetLeft;
    //     var myPlaneTop = myPlane.offsetTop;

    //     var left = myPlaneLeft + myPlaneWidth/2 
    //     var top = myPlaneTop+ myPlaneHeight/2

    //     var bullet = document.createElement('img')
    //     bullet.src = "../images/images/bullet.png";
    //     bullet.style.width = '8px'
    //     bullet.style.height = '16px'
    //     bullet.style.position = 'absolute'

    //     bullet.style.left = left+'px'
    //     bullet.style.top = top+'px'
    //     console.log(123);
    //     game.appendChild(bullet)
    // }, 500)

    // 子弹类(子弹构造函数)
    function Bullet() {
        // 子弹的尺寸
        this.width = 8;
        this.height = 16;

        // 子弹出现的坐标
        this.left = myPlane.offsetLeft + myPlaneWidth / 2 - this.width / 4;
        this.top = myPlane.offsetTop - this.height;

        // 子弹的坐标
        this.src = './images/bullet.png'

        // 子弹在页面中 的元素
        this.currentBullet = null;
    }

    // 创建子弹页面元素的方法
    Bullet.prototype.createBulletEle = function () {
        // 子弹图片节点
        this.currentBullet = document.createElement('img');
        // 添加属性
        this.currentBullet.src = this.src;
        this.currentBullet.style.width = this.width + 'px';
        this.currentBullet.style.height = this.height + 'px';
        this.currentBullet.style.position = 'absolute';
        this.currentBullet.style.left = this.left + 'px';
        this.currentBullet.style.top = this.top + 'px';

        // 把子弹元素插入到页面中
        game.appendChild(this.currentBullet);
    }

    // 移动子弹的原型方法
    Bullet.prototype.moveBullet = function (index) {
        this.top--;
        // 如果子弹超出屏幕之外
        if (this.top <= -this.height) {
            // 1. 移除页面中 的 dom 节点
            game.removeChild(this.currentBullet)
            // 2. 通过子弹的下标来 删除数组中 的子弹对象'
            bullets.splice(index, 1)

        }
        this.currentBullet.style.top = this.top + 'px';
    }

    // 检测 子弹碰撞飞机 的原型方法
    Bullet.prototype.collision = function (index) {
        // 用当前移动的这颗子弹, 去和所有的敌机坐标做碰撞检测
        // 遍历所有的敌机
        for (var i = 0; i < enemys.length; i++) {

            if (this.left > enemys[i].left - this.width &&
                this.left < enemys[i].left + enemys[i].width &&
                this.top > enemys[i].top - this.height &&
                this.top < enemys[i].top + enemys[i].height) {
                // 移除当前的子弹元素
                game.removeChild(this.currentBullet)
                // 移除一个子弹
                bullets.splice(index, 1);
                // 敌机减血
                enemys[i].blood--;

                // 敌机血量为0 
                if (enemys[i].blood == 0) {
                    // 创建死亡敌机
                    var dieEnemy = document.createElement('img');
                    dieEnemy.src = enemys[i].dieImg;
                    dieEnemy.style.width = enemys[i].width + 'px'
                    dieEnemy.style.height = enemys[i].height + 'px'
                    dieEnemy.style.position = 'absolute'

                    dieEnemy.style.left = enemys[i].left + 'px';
                    dieEnemy.style.top = enemys[i].top + 'px';


                    game.appendChild(dieEnemy)

                    collisionTimer = setTimeout(function () {
                        game.removeChild(dieEnemy)
                    }, 1000)
                    game.removeChild(enemys[i].currentEnemy);
                    enemys.splice(i, 1);
                }
            }

        }
    }

    // 存储子弹实例的数组
    // var bullets = [];

    // new 子弹实例的方法
    function cleatEvenyBullet() {
        createBulletTimer = setInterval(function () {
            // 创建子弹实例
            var bullet = new Bullet()
            // 
            bullet.createBulletEle();
            // 把每一个子弹实例存储到数组中
            bullets.push(bullet)
            // console.log(bullets);
        }, 200)
    }

    // 移动子弹的方法
    function moveEveryBullet() {
        moveBulletTimer = setInterval(function () {        // 遍历所有子弹
            for (var i = 0; i < bullets.length; i++) {
                // 传递下标,记录元素位置
                bullets[i].moveBullet(i);
                // 用子弹移动后的位置去判断是否碰撞到敌方飞机
                bullets[i].collision(i)
            }
        }, 4)
    }

    // 敌方飞机(三种飞机的数据)
    var enemy = [{
        width: 34,
        height: 24,
        blood: 1,
        img: './images/enemy1.png',
        dieImg: './images/enemy1b.gif',
    }, {
        width: 46,
        height: 60,
        blood: 5,
        img: './images/enemy2.png',
        dieImg: './images/enemy2b.gif',
    }, {
        width: 110,
        height: 164,
        blood: 10,
        img: './images/enemy3.png',
        dieImg: './images/enemy3b.gif',
    }]

    // 敌方飞机数组
    // var enemys = [];log
    // 敌机构造函数
    function Enemy() {
        // 0-0.5
        // 0.5-0.9
        // 0.9-1
        // 随机数
        var num = Math.random();
        // 敌机数据
        var obj;
        // 根据随机数来创建不同类型飞机
        if (num < 0.5) {
            // 小飞机
            obj = enemy[0]
        } else if (num < 0.9) {
            // 中飞机
            obj = enemy[1]
        } else {
            // 大飞机
            obj = enemy[2]
        }

        this.width = obj.width;
        this.height = obj.height;

        // 飞机出现的位置
        var maxLeft = game.offsetWidth - this.width
        this.left = Math.random() * maxLeft
        this.top = -this.height

        // 血量
        this.blood = obj.blood;

        // 两个图片路径
        this.src = obj.img;
        this.dieImg = obj.dieImg;

        // 敌机在页面上的节点
        this.currentEnemy = null;
    }

    // 创建敌机的原型方法
    Enemy.prototype.createEnemy = function () {
        // 创建敌机节点
        this.currentEnemy = document.createElement('img');
        // 添加样式属性
        this.currentEnemy.src = this.src;
        this.currentEnemy.style.width = this.width + 'px'
        this.currentEnemy.style.height = this.height + 'px'
        this.currentEnemy.style.position = 'absolute'
        this.currentEnemy.style.left = this.left + 'px'
        this.currentEnemy.style.top = this.top + 'px'
        // 插入页面
        game.appendChild(this.currentEnemy);
    }

    // 移动敌方飞机
    Enemy.prototype.moveEnemy = function () {
        this.top++

        if (this.top >= game.offsetHeight) {
            // 1.移除节点
            game.removeChild(this.currentEnemy)
            // 2.删除数组的这个敌机对象
            enemys.shift();
        }
        this.currentEnemy.style.top = this.top + 'px'
    }

    // 敌方飞机和我方飞机碰撞的原型方法
    Enemy.prototype.collisionEnemy = function () {
        // 获取我方飞机的坐标
        var left = parseInt(myPlane.style.left)
        var top = parseInt(myPlane.style.top)

        // 判断我方飞机是否和敌方飞机相撞
        if (this.left > left - this.width &&
            this.left < left + this.width &&
            this.top > top - this.height &&
            this.top < top + this.height
        ) {
            // 创建 dieMyPlane元素, 存放 我方飞机 碰撞后的图片
            var dieMyPlane = document.createElement('img');
            // 我方飞机碰撞后的属性样式
            dieMyPlane.src = './images/planeb.gif'
            dieMyPlane.style.width = myPlaneWidth
            dieMyPlane.style.height = myPlaneHeight
            dieMyPlane.style.position = 'absolute'
            dieMyPlane.style.left = left + 'px'
            dieMyPlane.style.top = top + 'px'

            // 创建 dieEnemy 元素, 存放 敌方飞机 碰撞后的图片
            var dieEnemy = document.createElement('img');
            // 敌方飞机碰撞后的属性样式
            dieEnemy.src = this.dieImg;
            dieEnemy.style.width = this.width + 'px'
            dieEnemy.style.height = this.height + 'px'
            dieEnemy.style.position = 'absolute'
            dieEnemy.style.left = this.left + 'px';
            dieEnemy.style.top = this.top + 'px';

            // 将我方飞机和敌方飞机碰撞后的图片 添加入页面中
            game.appendChild(dieEnemy)
            game.appendChild(dieMyPlane)

            // 删除 我方飞机和敌方飞机 未碰撞前 的元素
            game.removeChild(this.currentEnemy);
            game.removeChild(myPlane);

            // 清除页面的 背景移动 定时器
            clearInterval(moveBgTimer)
            // 清除 创建子弹 的定时器
            clearInterval(createBulletTimer)
            // 清除 创建敌机 的定时器
            clearInterval(createEnmeyTimer)
            // 清除 子弹移动 的定时器
            clearInterval(moveBulletTimer)
            // 清除 敌机移动 的定时器
            clearInterval(moveEnemyTimer)
            // 清除 子弹和敌机碰撞 的一次定时器
            clearTimeout(collisionTimer)

            // 1s 后清除 元素 并重新 加载页面
            myPlaneCollisionTimer = setTimeout(function () {
                // 移除创建的 碰撞后的敌机 元素
                game.removeChild(dieEnemy)
                // 移除创建的 碰撞后的我方飞机 元素
                game.removeChild(dieMyPlane)
                // 重新加载页面(清除所有定时器)
                location.reload()
            }, 1000)
        }
    }

    // 创建敌机实例
    function createEveryEnemy() {
        createEnmeyTimer = setInterval(function () {
            // 实例化敌机对象
            var enemy = new Enemy();
            // 用当前的实例对象, 创建节点
            enemy.createEnemy();
            // 把当前敌机对象插入到数组中
            enemys.push(enemy)
        }, 800)
    }

    // 移动敌机的方法
    function moveEveryEnemy() {
        moveEnemyTimer = setInterval(function () {
            // 遍历每一驾敌方飞机
            for (var i = 0; i < enemys.length; i++) {
                enemys[i].moveEnemy();
                enemys[i].collisionEnemy();
            }
        }, 2)
    }



    /**
     * @description: 获取元素样式
     * @param {*} obj   元素节点
     * @param {*} attr   元素样式
     * @returns 
     */
    function getStyle(obj, attr) {
        // if (getComputedStyle) {
        //     getComputedStyle(obj)[attr]
        // } else {
        //     obj.currentStyle[attr]
        // }

        return getComputedStyle ? getComputedStyle(obj)[attr] : obj.currentStyle[attr];
    }

    /**
    * @description: 获取节点方法
    * @return {*}
    * @param {string} selector css 选择器
     */
    function $(selector) {
        var ele = document.querySelectorAll(selector);

        if (ele.length === 1) {
            return ele[0]
        } else {
            return ele;
        }

    }

    /**
     * @description: 绑定节点事件的方法
     * @param {{}} obj   元素节点
     * @param {string} sEven   事件类型
     * @param {function} fn  事件处理函数
     * @return {*}
     */
    function addEvent(obj, sEven, fn) {
        // Ie 浏览器绑定事件
        if (obj.attachEvent) {
            obj.attachEvent('on' + sEven, fn)
        }
        // W3c 标准浏览器绑定事件
        else {
            obj.addEventListener(sEven, fn, false)
        }
    }
}

