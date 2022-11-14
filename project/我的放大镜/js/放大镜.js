function Amplification(initlocat, img, locat) {
    // 放图片的盒子
    this.box = null

    // 图片
    this.img = null

    // 放大镜
    this.locat = null

    // 放大镜里的图片
    this.fanda = null

    // 鼠标放大元素(鼠标按住的小方块)
    this.small = null

    // 定义了一个初始化方法,用于创建DOM元素,并绑定事件监听方法
    this.init = function () {

        // 放图片的盒子
        this.box = initlocat

        // 图片
        this.img = document.createElement('img')
        this.img.src = img

        // 放大镜
        this.locat = locat

        // 鼠标移动的放大元素
        this.small = document.createElement('div')
        this.small.className = 'small'

        this.fanda = document.createElement('img')
        this.fanda.src = img

        this.locat.appendChild(this.fanda)

        this.box.appendChild(this.img)
        this.box.appendChild(this.small)

        var that = this
        // 初始化监听两个事件
        this.box.onmouseenter = function () {
            // 这里的this 是 box
            that.small.style.display = 'block'
            that.locat.style.display = 'block'
        }

        this.box.onmousemove = function (e) {
            that.amp(e)
        }

        this.box.onmouseleave = function () {
            // 这里的this 是 box
            that.small.style.display = 'none'
            that.locat.style.display = 'none'
        }

    }

    // 鼠标移动
    this.amp = function (e) {
        // 鼠标按住的小方块的 1/2 宽度和 1/2高度
        var width = (this.small.getBoundingClientRect().width) / 2
        var height = (this.small.getBoundingClientRect().height) / 2

        // 盒子的左外边距和上外边距
        var x = parseInt(this.box.offsetLeft)
        var y = parseInt(this.box.offsetTop)

        // 鼠标按住小方块的 移动 (减1/2宽高让鼠标 保持 在  移动方块中央 )
        this.small.style.left = e.clientX - x - width + 'px'
        this.small.style.top = e.clientY - y - height + 'px'

        var left = parseInt(this.small.style.left)
        var top = parseInt(this.small.style.top)

        var right = x + left
        var maxRight = parseInt(this.box.offsetWidth) - parseInt(width * 2)

        var bottom = x + top
        var maxBottom = parseInt(this.box.offsetHeight) - parseInt(height * 2)

        // 鼠标移动方块强制定位在图片盒子内
        if (left < 0) {
            this.small.style.left = 0 + 'px'
        }

        if (top < 0) {
            this.small.style.top = 0 + 'px'
        }

        if (right > maxRight) {
            this.small.style.left = maxRight + 'px'
        }

        if (bottom > maxBottom) {
            this.small.style.top = maxBottom + 'px'
        }
        
        // 放大元素的移动, 3为大小图片的比率
        this.fanda.style.top = -parseInt(this.small.offsetTop) * 3 + 'px'
        this.fanda.style.left = -parseInt(this.small.offsetLeft) * 3 + 'px'
    }
    this.init()
}