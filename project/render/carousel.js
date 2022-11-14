/*
 * @Author: 1三千 1196094290@qq.com
 * @Date: 2022-08-16 19:01:53
 * @LastEditors: 1三千 1196094290@qq.com
 * @LastEditTime: 2022-08-27 15:32:45
 * @FilePath: \queqiang\封装好的函数\轮播图\carousel.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @desc 创建无缝轮播图的构造函数
 * @class Carousel
 * @constructor true
 * @param {String[]} images 
 * @param {$Element} $render 
 * @return {Carousel} 返回Carousel构造函数实例
 */

(function ($) {
    function Carousel(images, $render, title) {
        this.images = images.concat([images[0]])
        this.$render = $render
        this.title = title.concat([title[0]])

        this.$box = null
        this.$ul = null

        this.$ulDot = null
        this.$liDot = null
        this.$liDots = []
        this.boxWidth = 0

        this.index = 0
        this.timer = null
        this.init()
    }

    // 定义一个公共方法初始化无缝轮播图
    Carousel.prototype.init = function () {

        this.$box = $('<div></div>')
        this.$box.addClass('carousel')

        this.$ul = $('<ul></ul>')

        this.$ulDot = $('<ul></ul>')
        this.$ulDot.addClass('ul-dot')

        this.$box.append(this.$ul)
        this.$box.append(this.$ulDot)
        this.$render.append(this.$box)

        this.boxWidth = parseInt(this.$box.css('width'))

        for (var i = 0; i < this.images.length; i++) {
            var $li = $('<li></li>')
            var $h2 = $('<h2>' + this.title[i] + '</h2>')
            $h2.addClass('title')
            var img = document.createElement('img')
            img.src = this.images[i]
            if (i != this.images.length - 1) {

                this.$liDot = $('<li></li>')
                this.$liDot.addClass('dot')
                this.$liDots.push(this.$liDot)
                this.$ulDot.append(this.$liDot)
                this.$liDots[0].addClass('active')
            }
            $h2.attr(this.title[i])
            $li.append($h2)
            $li.append(img)
            this.$ul.append($li)
        }
        this.startMove()
        this.addEventHandel()
    }

    // addEventListener
    Carousel.prototype.addEventHandel = function () {
        var self = this
        this.$box.mouseenter(function () {
            clearInterval(self.timer)
        })
        this.$box.mouseleave(function () {
            self.startMove()
        })
    }

    // 开始轮播方法
    Carousel.prototype.startMove = function () {
        var self = this
        this.timer = setInterval(function () {
            self.nextPage()
        }, 2000)
    }


    // 下一张图片的方法
    Carousel.prototype.nextPage = function () {

        this.index = (this.index + 1) % this.images.length

        for (var i = 0; i < this.$liDots.length; i++) {
            this.$liDots[i].removeClass('active')
        }
        if (this.index != this.images.length - 1) {
            this.$liDots[this.index].addClass('active')
        } else {
            this.$liDots[this.$liDots.length - 1].removeClass('active')
            this.$liDots[0].addClass('active')
        }

        var offsetX = -this.boxWidth * this.index

        var self = this
        // 调用其他js文件的 jsAnimate函数
        jsAnimate(this.$ul, { left: offsetX }, function () {
            self.lastPage()
        })
    }


    // 最后一张图片的判断方法
    Carousel.prototype.lastPage = function () {
        if (this.index === this.images.length - 1) {
            this.index = 0
            this.$ul.css('left', '0px')
        }
    }

    $.fn.carousel = function (imgs, $app, title) {
        this.each(function (index) {
            new Carousel(imgs, $app, title)
        })
        return this
    }
})(jQuery)