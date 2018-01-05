'use strict';

$(function () {
    var tbody = $('tbody');
    $.ajax({
        url: '/sn/index.php/message/show',
        dataType: 'json',
        method: 'post',
        success: function success(data) {
            render(data);
        }
    });
    //查询
    ////////////////////////////////////////////////////////////////////////////////
    function render(data) {
        var str = '';
        data.forEach(function (v) {
            str += '\n             \n                <tr id="' + v['mid'] + '">\n                      <td>\n                      ' + v['mid'] + '</td>      \n                      <td>\n                        ' + v['mname'] + '</td>\n                      <td>\n                       ' + v['mphone'] + '</td>        \n                     <td>\n                       ' + v['mes'] + '</td> \n                      <td>\n                      <div class="button-group">\n                        <a class="button border-red del" href="javascript:void(0)"><span class="icon-trash-o"></span> \u5220\u9664</a>\n                      </div>\n                      </td>\n                    </tr> \n               \n                    ';
        });
        tbody.html(str);
    }
    //删除
    ///////////////////////////////////////////////////////////////////////////////////
    tbody.on('click', '.del', function () {
        var cid = $(this).closest('tr').attr('id');
        $.ajax({
            url: '/sn/index.php/message/del',
            data: { cid: cid },
            success: function success(data) {
                if (data == 'ok') {
                    $(this).closest('tr').remove();
                    location.href = '/sn/index.php/message/index';
                } else if (data == 'error') {}
            }
        });
    });
});