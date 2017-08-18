/**
 * Created by jf on 2017/1/3.
 */

window.onload = function () {
    var config = [
        {
            "width": 400,
            "top": 20,
            "left": 50,
            "opacity": 0.2,
            "zIndex": 2
        },//0
        {
            "width": 600,
            "top": 70,
            "left": 0,
            "opacity": 0.8,
            "zIndex": 3
        },//1
        {
            "width": 800,
            "top": 100,
            "left": 200,
            "opacity": 1,
            "zIndex": 4
        },//2
        {
            width: 600,
            top: 70,
            left: 600,
            opacity: 0.8,
            zIndex: 3
        },//3
        {
            "width": 400,
            "top": 20,
            "left": 750,
            "opacity": 0.2,
            "zIndex": 2
        }//4
    ];//其实就是一个配置单 规定了每张图片的大小位置层级透明度
    var wrap = document.getElementById("wrap");
    var lis = wrap.getElementsByTagName("li");
    var arrow = document.getElementById("arrow");
    var arrLeft = document.getElementById("arrLeft");
    var arrRight = document.getElementById("arrRight");
    //显示隐藏箭头
    //鼠标经过wrap 渐渐地显示arrow
    wrap.onmouseover = function () {
        animate(arrow, {"opacity": 1});
    };
    wrap.onmouseout = function () {
        animate(arrow, {"opacity": 0});
    };
    //2.把每一个li放到配置单规定的位置
    function assign() {
        for (var i = 0; i < lis.length; i++) {
            animate(lis[i], config[i], function () {
                flag = true;//回调函数会在动画执行完成后执行
                //动画执行完成后 把阀门重新打开
            });
        }
    }

    assign();
    //3.点击右箭头 旋转轮播如
    arrRight.onclick = function () {
        if (flag) {//如果阀门是打开的才可以旋转
            flag = false;//点击之后 把阀门关闭
            config.push(config.shift());
            assign();
        }
    };
    arrLeft.onclick = function () {
        //点击左箭头 对配置单进行操作 把最后的放开始
        //arr.unshift(arr.pop());
        config.unshift(config.pop());
        assign();
    };
    //4.添加节流阀
    var flag = true;//表示阀门现在是打开的

};