<?php
	header("content-type:text/html;charset=utf-8");
	//数组
	$arr = array('username'=>'lily' ,'age'=>18);
	//将数组转json格式输出 
	//json_encode() 将数组转json数据
	//在http协议传输 或者是 XMLHttpRequest 传输时，数据只能是json格式或者是 XML的格式
	echo json_encode($arr);
?>