<?php
class main{
    function __construct(){
        $obj=new db();
        $this->mysql=$obj->mysql;
    }
    function index(){
        include 'admin/views/main.html';
    }
}