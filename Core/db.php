<?php
class db{
    public $mysql;
    function __construct(){
        $this->config();
    }
    function config(){
        header('Content-type:text/html;charset=utf8');
//        $this->mysql=new mysqli('192.168.1.111','root','root','sv',3306);
//        $this->mysql=new mysqli('localhost','root','root','sv',3306);
        $this->mysql=new mysqli('sqld.duapp.com','37e7078d2ff24ceb963e28f05ede9ea9','cd680bc6a18c4f14906c2e06a06551d3','gwVbSASTJaJeVPXRHdlK',4050);
        $this->mysql->query('set names utf8');
        if($this->mysql->connect_errno){
            echo '数据库连接失败，失败信息'.$this->mysql->connect_errno;
            exit();
        }
    }
}

