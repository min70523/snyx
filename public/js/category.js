'use strict';

$(function () {
    var tbody = $('tbody');

    $.ajax({
        url: '/sn/index.php/category/show',
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
            str += '\n                <tr id="' + v['cid'] + '">\n                      <td type="cid">\n                      <input type="text" value="' + v['cid'] + '" disabled style="width:                               70px"></td>      \n                      <td type="cname">\n<input type="text" value="' + v['cname'] + '"></td> \n                        <td type="cnameEn">\n                        <input type="text" value="' + v['cnameEn'] + '"></td>   \n                      <td type="pid">\n                      <input type="text" value="' + v['pid'] + '" style="width: 70px">\n</td>\n                      <td type="thumb">\n                            <img  src="' + v['thumb'] + '" style="width: 100px;height: 80px">\n                       </td>\n                       \n                      <td>\n                      <div class="button-group">\n                        <a class="button border-red del" href="javascript:void(0)"><span class="icon-trash-o"></span> \u5220\u9664</a>\n                      </div>\n                      </td>\n                    </tr> \n                 \n                    ';
        });
        tbody.html(str);
    }
    //删除
    ///////////////////////////////////////////////////////////////////////////////////
    tbody.on('click', '.del', function () {
        var cid = $(this).closest('tr').attr('id');
        $.ajax({
            url: '/sn/index.php/category/del',
            data: { cid: cid },
            success: function success(data) {
                if (data == 'ok') {
                    $(this).closest('tr').remove();
                    location.href = '/sn/index.php/category/index';
                } else if (data == 'error') {}
            }
        });
    });
    //修改
    ////////////////////////////////////////////////////////////////////////////////////////
    tbody.on('blur', 'input', function (e) {
        var value = $(this).val();
        var type = $(this).closest('td').attr('type');
        var id = $(this).closest('tr').attr('id');
        $.ajax({
            url: '/sn/index.php/category/update',
            data: { id: id, type: type, value: value },
            success: function success(data) {
                if (data == 'ok') {
                    alert('修改成功');
                } else if (data == 'error') {
                    alert('修改失败');
                }
            }
        });
    });
});