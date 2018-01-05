'use strict';

$(function () {
    var nav = $('.nav');
    $.ajax({
        url: '/sn/index.php/category/show',
        dataType: 'json',
        method: 'post',
        success: function success(data) {
            var brands = [];
            data.forEach(function (v, i) {
                if (v['pid'] == 0) {
                    brands.push(v);
                }
            });
            render(brands);
        }
    });
    //查询导航
    ////////////////////////////////////////////////////////////////////////////////
    function render(data) {
        var str = '';
        data.forEach(function (v) {
            str += '\n               <li><a href="/sn/index.php/home/' + v['cnameEn'] + '">' + v['cname'] + '</a></li>\n                    ';
        });
        nav.html(str);
    }
});