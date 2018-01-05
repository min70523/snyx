'use strict';

$(function () {
    var xwxq = $('.xinwen');
    var pids = location.href.split('=', 2)[1];
    $.ajax({
        url: '/sn/index.php/Article/show',
        dataType: 'json',
        method: 'post',
        success: function success(data) {
            var brands = [];
            data.forEach(function (v, i) {
                if (v['pid'] == pids) {
                    brands.push(v);
                }
            });
            console.log(brands)
            render(brands);
        }
    });
    function time(value) {
        value = value.slice(0, 10);
        return value;
    }

    function render(data) {
        var str = '';
        str += '\n \n    <div class="xin">\n        <div class="top">\n            <div class="top1">\n                <div class="top2"></div>\n            </div>\n        </div>\n\n        <div class="biao">\n            <div class="biaoleft"><a href="/sn/index.php/home/index">\u9996\u9875</a></div>\n            <div class="biaocenter">>></div>\n            <div class="biaoleft"><a href="/sn/index.php/home/xinwen">\u65B0\u95FB\u4E2D\u5FC3</a></div>\n            <div class="biaocenter">>></div>\n            <div class="biaoright"><a href="/sn/index.php/home/xinwenxiangqing">\u65B0\u95FB\u8BE6\u60C5</a></div>\n        </div>\n\n        <!--\u6700\u65B0\u65B0\u95FB\u5F00\u59CB-->\n            <div class="zixun">\n                <div class="zleft"></div>\n                <div class="zcenter">\n                    <p>\u65B0\u95FB\u8BE6\u60C5</p>\n                    <div class="zixian"></div>\n                    <p>JOURNALISM</p>\n                </div>\n                <div class="zright"></div>\n            </div>\n        <div class="left"></div>\n        <div class="center">\n            <li>\n                <span>' + time(data[0]['time']) + '</span>\n            </li>\n            <li>\n                <span>' + data[0]['num'] + '\u4EBA\u6D4F\u89C8</span>\n            </li>\n        </div>\n        <div class="right"></div>\n        <!--\u6700\u65B0\u65B0\u95FB\u7ED3\u675F-->\n\n        <!--\u5185\u5BB9\u7ED3\u675F-->\n        <div class="xiangqing">\n            <div class="xiang">\n                <div class="fang"></div>\n                <p> <span>' + data[0]['name'] + '</span><span>/</span><span>' + data[0]['nameE'] + '</span></p>\n            </div>\n            <li>\n                <img src="' + data[0]['thumb'] + '" alt="">\n                ' + data[0]['title'] + '\n                ' + data[0]['content'] + '\n                ' + data[0]['contentE'] + '\n            </li>\n            <li>\n                <img src="' + data[1]['thumb'] + '" alt="">\n                ' + data[1]['title'] + '\n                ' + data[1]['content'] + '\n                ' + data[1]['contentE'] + '\n            </li>\n        </div>';
        xwxq.html(str);
    }
});