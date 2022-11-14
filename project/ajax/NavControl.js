/*
 * @Author: 1三千 1196094290@qq.com
 * @Date: 2022-08-25 19:01:31
 * @LastEditors: 1三千 1196094290@qq.com
 * @LastEditTime: 2022-08-26 21:23:03
 * @FilePath: \queqiang\8月\js阶段考核\.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

function NavControl(styleId, keyNumber, $title, $pic, obj) {
    this.styleId = styleId
    this.keyNumber = keyNumber

    this.$title = $title
    this.$pic = $pic

    this.obj = obj
    this.lidiv = null

    this.key = null
    this.index = null
    this.init()
    this.addEvent()
}
NavControl.prototype.init = function () {
    for (var i in this.styleId) {
        this.lidiv = $('<div>')
        this.lidiv.appendTo(this.$title)
        $('<span>').text(i).addClass('titleId').appendTo(this.lidiv)
        for (var j in this.keyNumber[i]) {
            $('<span>').text(j).appendTo(this.lidiv)
        }
    }

}

NavControl.prototype.addEvent = function () {

    var self = this

    this.$title.on('click', 'div', function (e) {
        var $el = $(e.target)
        self.key = self.styleId[$(this).children('.titleId').text()]
        $el.addClass('active').siblings().removeClass('active')
        for (var i in self.styleId) {
            if (self.styleId[i] == self.key) {
                for (var j in self.keyNumber[i]) {
                    if ($el.text() == j) {
                        self.obj[self.styleId[i]] = self.keyNumber[i][j]
                        break
                    }
                }
            }
        }
        self.myajax()
    })
}

NavControl.prototype.myajax = function () {
    var self = this
    $.ajax({
        type: 'GET',
        url: 'https://apis.netstart.cn/bcomic/ClassPage?',
        data: this.obj,
        timeout: 15000,

        error: function (err) {
            console.log('请求失败', err);
        },
        success: function (data) {
            console.log('请求成功', data);
            $('.picbox').remove()
            self.createElement(data.data);
        }
    })
}

NavControl.prototype.createElement = function (data) {
    for (var i = 0; i < data.length; i++) {
        var $div = $('<div></div>')
        $div.addClass('picbox')
        $div.appendTo(this.$pic)
        var $img = $('<img src="' + data[i].vertical_cover + '">')
        $img.addClass('picc')
        $img.appendTo($div)
    }
} 
