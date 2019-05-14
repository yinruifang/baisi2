//四个参数  method ：ajax获取的方式  get，post
//url：ajax访问的地址
//data：ajax传递的参数
//success：ajax成功返回后的回调函数
function ajax(method,url,data,success){
	//1.打开浏览器
	var xhr = null;
	//异常处理
	try{
		xhr = new XMLHttpRequest();//新建XMLHttpRequest 对象
	}catch(e){
		xhr = ActiveXObject('Microsoft.XMLHTTP');
	}
	//2.判断method的方式
	if(method == 'get' && data){//如果是get方式，url地址需要拼接
		url +='?'+data;
	}
	//3.提交
	//打开链接
	xhr.open(method,url,true);
	if(method == 'get'){//get
		xhr.send();//如果是get方式，就直接提交
	}else{//post  如果是post方式，需要设置请求头信息，然后在进行提交
		xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
		xhr.send(data);
	}
	
	//4.服务器返回的内容  ，看服务器是否正常相应  ，
	/*等待服务器返回的内容，接收的返回码
	 0.未初始化  send方法还没调用
	 1.载入  已经调用了send ，正在发送请求
	 2.载入完成 send执行完，已经接收到全部响应内容
	 3.交互 正在解析响应的内容
	 4.完成 响应的内容已经解析完成，可以在客户端调用了
	 
	 * */
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4){//服务器端正常返回
			if(xhr.status == 200){//服务器端给浏览器端的一个响应码：成功访问
				//200 301 304 400 401 403 404 5**  作业：请查询以上响应码是什么地方出错了，怎样解决
				success && success(xhr.responseText);//返回请求的数据
			}else{
				alert('出错了，error:'+xhr.status);
			}
		}
		
	}
	
	//5.数据要进行解析json对象
	//6.将 数据写到页面上

	
	
	
	
}
