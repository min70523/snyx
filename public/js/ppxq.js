'use strict';

$(function () {
    var ppxq = $('.xinwen');
    var pids = location.href.split('=', 2)[1];
    console.log(pids);
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

            render(brands.slice(0, 9));
        }
    });
    function time(value) {
        value = value.slice(0, 10);
        return value;
    }

    function render(data) {
        var str = '';
        str += '\n <div class="sxian">\n        <div class="sxian1"></div>\n    </div>\n    <div class="xin">\n\n        <div class="biao">\n            <div class="biaoleft"><a href="/sn/index.php/home/index">\u9996\u9875</a></div>\n            <div class="biaocenter">>></div>\n            <div class="biaoleft"><a href="/sn/index.php/home/brands">\u54C1\u724C\u63A8\u8350</a></div>\n            <div class="biaocenter">>></div>\n            <div class="biaoright"><a href="/sn/index.php/home/xinwenxiangqing">\u79C1\u4EBA\u8BA2\u5236</a></div>\n        </div>\n            <div class="zixun">\n            <div class="zleft"></div>\n            <div class="zcenter">\n                <p>\u79C1\u4EBA\u8BA2\u5236</p>\n                <div class="zixian"></div>\n                <p>BRAND</p>\n            </div>\n            <div class="zright"></div>\n        </div>\n        <div class="left"></div>\n        <div class="center">\n            <li>\n                <span>' + time(data[0]['time']) + '</span>\n            </li>\n            <li>\n                <span>' + data[0]['num'] + '\u4EBA\u6D4F\u89C8</span>\n            </li>\n        </div>\n        <div class="right"></div>\n        <!--\u6700\u65B0\u65B0\u95FB\u7ED3\u675F-->\n        <!--\u5B9A\u5236\u5F00\u59CB-->\n        <div class="dingzhi">\n            <div class="dingtop">\n                <p>' + data[0]['name'] + '</p>\n            </div>\n            <div class="dingbottom">\n                <div class="dingxian"></div>\n                <p>' + data[0]['nameE'] + '</p>\n                <div class="dingxian"></div>\n            </div>\n        </div>\n        <!--\u5B9A\u5236\u7ED3\u675F-->\n        <!--\u5168\u90E8\u5F00\u59CB-->\n           <div class="dingtu">\n               <div class="tutop">\n                   <div class="dingleft">\n                       <img src="' + data[1]['thumb'] + '" alt="">\n                   </div>\n                   <div class="dingright">\n                       <li>\n                           <p>' + data[1]['title'] + '</p>\n                           <p>' + data[1]['content'] + '</p>\n                       </li>\n                       <li>\n                           <p>' + data[2]['title'] + '</p>\n                           <p>' + data[2]['content'] + '</p>\n                       </li>\n                   </div>\n               </div>\n               <div class="tucenter">\n                   <li>\n                       <img src="' + data[2]['thumb'] + '" alt="">\n                   </li>\n                   <li>\n                       <img src="' + data[3]['thumb'] + '" alt="">\n                   </li>\n                   <li>\n                       <img src="' + data[4]['thumb'] + '" alt="">\n                   </li>\n               </div>\n               <div class="tubottom">\n                ' + data[5]['content'] + '\n                ' + data[5]['contentE'] + '\n               </div>\n           </div>\n        <!--\u5168\u90E8\u7ED3\u675F-->\n        <!--\u63A8\u8350\u5F00\u59CB-->\n        <nav>\n        <div class="dian1"></div>\n        <p class="jingying"> ' + data[6]['name'] + '</p>\n\n        <ul class="three">\n            <li>\n                <img src=" ' + data[6]['thumb'] + '" alt="">\n                <div class="box"> ' + data[6]['content'] + '</div>\n            </li>\n            <li>\n                <img src="' + data[7]['thumb'] + '" alt="">\n                <div class="box"> ' + data[7]['content'] + '</div>\n            </li>\n            <li class="last">\n                <img src="' + data[8]['thumb'] + '" alt="">\n                <div class="box"> ' + data[8]['content'] + '</div>\n            </li>\n        </ul>\n    </nav>\n        <!--\u63A8\u8350\u7ED3\u675F-->';
        ppxq.html(str);
    }
});