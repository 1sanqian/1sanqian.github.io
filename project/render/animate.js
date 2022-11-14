/*
 * @Author: 1三千 1196094290@qq.com
 * @Date: 2022-08-24 18:43:15
 * @LastEditors: 1三千 1196094290@qq.com
 * @LastEditTime: 2022-08-24 21:21:31
 * @FilePath: \queqiang\8月\8.24\作业\animate.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function jsAnimate($el, styleObj, cb) {
      var el = $el[0]
    clearInterval(el.timer)

    el.timer = setInterval(function () {
        var animateStop = true

        // $el.animate(styleObj)
        // 枚举 styleObj
        for (attr in styleObj) {
            // 获取目标动画样式
            var targetValue = styleObj[attr]

            // 获取当前元素的样式
            var currentValue = parseInt(getComputedStyle(el, null)[attr])

            // 目标值减去当前值
            var speed = (targetValue - currentValue) / 8

            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed)
            // 只要有一个样式动画还在继续,动画函数就不能停止
            if (speed !== 0) {
                animateStop = false
            }

            el.style[attr] = currentValue + speed + 'px'

            if (animateStop) {
                clearInterval(el.timer)
                // cb callback 异步函数执行完毕后的回调函数
                cb && cb() // cb并不是一个必传参数,所以在调用时先判断该参数是否传递
                // if(cb) {
                //     cb()
                // }
                
            }

        }
    }, 20)
}