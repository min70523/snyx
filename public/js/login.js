'use strict';

$(function () {
    var user = $('#user');
    var pass = $('#password');
    var codes = $('#codes');
    var submit = $(':submit');
    ////////////////////////////////登录
    /////////////////////////////////////////////////////////////////////////////////////
    submit.on('click', function () {
        $('input').trigger('blur'); //触发事件
        if ($('form .form-help').length) {
            return;
        }
        var data = { user: user.val(), password: pass.val(), codes: codes.val() };
        $.ajax({
            url: '/sn/index.php/login/check',
            data: data,
            success: function success(data) {
                if (data == 1) {
                    alert('登录成功');
                    location.href = '/sn/index.php/category/index';
                } else if (data == 2) {
                    alert('密码错误');
                } else if (data == 3) {
                    alert('用户名不存在');
                } else if (data == '4') {
                    alert('验证码错误');
                }
            }
        });
        return false;
    });
});