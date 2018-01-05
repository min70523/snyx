<?php
class home{
    function __construct(){
        $obj = new db();
        $this->mysql = $obj->mysql;
    }
    function index(){
        include 'admin/views/header.html';
        include 'admin/views/index.html';
        include 'admin/views/footer.html';
    }
//    品牌推荐
    function brands(){
        include 'admin/views/header.html';
        include 'admin/views/brands.html';
        include 'admin/views/footer.html';
    }
//    新闻中心
    function xinwen(){
        include 'admin/views/header.html';
        include 'admin/views/xinwen.html';
        include 'admin/views/footer.html';
    }
    //关于我们
    function aboutme(){
        include 'admin/views/header.html';
        include 'admin/views/aboutme.html';
        include 'admin/views/footer.html';
    }
    //品牌详情
    function pinpaixiangqing(){
        include 'admin/views/header.html';
        include 'admin/views/pinpaixiangqing.html';
        include 'admin/views/footer.html';
    }
    //新闻详情
    function xinwenxiangqing(){
        include 'admin/views/header.html';
        include 'admin/views/xinwenxiangqing.html';
        include 'admin/views/footer.html';
    }
    //    品牌详情
    function details(){
        include 'admin/views/header.html';
        include 'admin/views/details.html';
        include 'admin/views/footer.html';
    }
//    品牌资讯详情
    function zixun(){
        include 'admin/views/header.html';
        include 'admin/views/zixun.html';
        include 'admin/views/footer.html';
    }
    //    联系我们
    function lianxi(){
        include 'admin/views/header.html';
        include 'admin/views/lianxi.html';
        include 'admin/views/footer.html';
    }

}
