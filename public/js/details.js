'use strict';

$(function () {

    //查询banner
    $.ajax({
        url: '/sn/index.php/category/show',
        dataType: 'json',
        method: 'post',
        success: function success(data) {
            var arr = [];
            data.forEach(function (v) {
                if (v['pid'] == 2) {
                    arr.push(v);
                }
            });
            renderbanner(arr);
        }

    });

    var bannerImg = $('.banner-img');
    function renderbanner(data) {
        var str = '';
        str = '<img src="' + data[0]['thumb'] + '" alt="">\n        ';
        bannerImg.html(str);
    }

    $.ajax({
        url: '/sn/index.php/Article/show',
        dataType: 'json',
        method: 'post',
        success: function success(data) {
            var arr = [];
            var array = [];
            data.forEach(function (v) {
                if (v['pid'] == 5) {
                    arr.push(v);
                }
                if (v['pid'] == 8) {
                    array.push(v);
                }
            });
            render(arr);
            renderzixun(array);
        }
    });

    function render(data) {
        var shuoming1 = $('.shuoming1');
        var str = '\n              <div class="title">\n            <span class="title1">\u25A0 ' + data[0]['name'] + '</span>\n            <span>/</span>\n            <span class="title2">' + data[0]['nameE'] + '</span>\n            <span class="title3">' + data[0]['titleE'] + '</span>\n        </div>\n        <div class="content">\n            <p>' + data[0]['content'] + '</p>\n            <p>' + data[0]['contentE'] + '</p>\n            <ul>\n                <li><img src="' + data[0]['thumb'] + '" alt=""></li>\n                <li><img src="' + data[2]['thumb'] + '" alt=""></li>\n                <li>\n                    <img src="' + data[3]['thumb'] + '" alt="">\n                    <img src="' + data[4]['thumb'] + '" alt="">\n                </li>\n            </ul>\n        </div>\n        ';
        shuoming1.html(str);

        var shuoming2 = $('.shuoming2');
        var str2 = '\n            <div class="title">\n            <span class="title1">\u25A0 ' + data[1]['name'] + '</span>\n            <span>/</span>\n            <span class="title2">' + data[1]['nameE'] + '</span>\n            <span class="title3">' + data[1]['titleE'] + '</span>\n        </div>\n        <div class="content content1">\n            <p>' + data[1]['content'] + '</p>\n            <p>' + data[1]['contentE'] + '</p>\n            <div>\n                <img src="' + data[1]['thumb'] + '" alt="">\n                <div class="sanjiao">\n                    <div class="sdes">\u9AD8\u7EA7\u5B9A\u5236</div>\n                    <div class="scont">\u8BA9\u60A8\u611F\u53D7\u5B8C\u7F8E\u8D34\u8EAB</div>\n                </div>\n            </div>\n        </div>\n        ';
        shuoming2.html(str2);
    }

    function renderzixun(data) {
        var str = '';
        var ppzx = $('.zixun .zx');
        var num = 1;
        data.forEach(function (v) {
            str += '\n             <li id="' + v['id'] + '">\n                <a href="/sn/index.php/home/zixun?pid=' + v['id'] + '">\n                    <div class="zleft">\n                        <span class="num">0' + num++ + '</span>\n                        <span class="time">' + v['name'] + '</span>\n                    </div>\n\n                    <div class="zright">\n                        <p class="zdes">' + v['title'] + '</p>\n                        <p class="content">' + v['content'] + '</p>\n                    </div>\n                    <div class="bg"></div>\n                </a>\n\n            </li>    \n   \n           ';
        });

        ppzx.html(str);
    }
});