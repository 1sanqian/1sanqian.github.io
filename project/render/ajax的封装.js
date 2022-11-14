/*
 * @Author: 1三千 1196094290@qq.com
 * @Date: 2022-08-24 18:43:32
 * @LastEditors: 1三千 1196094290@qq.com
 * @LastEditTime: 2022-08-25 09:10:48
 * @FilePath: \queqiang\8月\8.24\作业\ajax的封装.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @description: 对ajax 进行的封装
 * @class: ajax
 * @constructor: false
 * @return {*}
 * @Date: 2022-08-24 18:49:39
 * @LastEditTime: Do not edit
 * @param {Object} option
 */
function ajax(option) {
    option = Object.assign({
        timeout: 5000,
        type: 'GET'
    }, option)

    var data = option.data  // {name: 123, age: 5} => 'name=123&age=5'

    var dataStr = ''

    // 将 传入的数据转为 ajax 的字符串形式
    for (var key in data) {
        dataStr += key + '=' + data[key] + '&'
    }
    // 去掉多余的&
    dataStr = dataStr.substring(0, dataStr.length - 1)

    // 将 ajax 实例化
    var xhr = new XMLHttpRequest()


    var timer = setTimeout(function () {
        // 终止请求
        xhr.abort()
    }, option.timeout)

    // 监听请求的响应状态
    xhr.onreadystatechange = function () {

        if (xhr.status == 200 && xhr.readyState == 4) {
            // 响应成功清除定时器
            clearTimeout(timer)

            // 获取文本数据    
            option.success && option.success(xhr.responseText)
        }
    }

    // 创建对应的 请求(第三个参数 代表同步或异步请求)
    xhr.open(option.type, option.url)

    // 如果是 post 请求则设置对应的 协议头
    if (option.type === 'POST') {
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    }

    // 发送请求
    xhr.send(dataStr)
}
