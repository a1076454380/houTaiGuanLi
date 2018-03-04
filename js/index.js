$(function(){
//	图片上传
	$('.file-click').click(function(){
		$(this).prev().click()
	})
//	按钮背景颜色
	$('.dbtn').mousedown(function(){
		var width=$(this).width()
		var height=$(this).height()
		$(this).attr('style',';background: url(../img/btnactive.png) no-repeat;background-size:'+width+'px '+height+'px;')
	})
	$('.dbtn').mouseup(function(){
		$(this).attr('style','')
	})
//	权限更改
	$('.mypower .power-change').click(function(){
		
		if($(this).next().attr('class')=='power-state no'){
			$(this).next().attr('class','power-state')
		}else{
			$(this).next().attr('class','power-state no')
		}
	})
//	系统权限悬浮效果
				$('#new img').mouseover(function(){
				$(this).attr('src','../img/operation_03-active.png')
			})
			$('#new img').mouseout(function(){
				$(this).attr('src','../img/operation_03.png')
			})
			$('#delete img').mouseover(function(){
				$(this).attr('src','../img/operation_05-active.png')
			})
			$('#delete img').mouseout(function(){
				$(this).attr('src','../img/operation_05.png')
			})
			$('.rhide').click(function(){
				$('.rgba').hide()
			})
//	移动端
//	文档库信息
	$('.mbtn').click(function(){
		console.log()
		var top=$('.info').css('bottom')
		if(top=='20px'){
			$('.info').css('bottom','-100%').css('opacity','0')
			$('.operation').css('bottom','-100%').css('opacity','0')
			if($('.sbtn').length==0){
				$(this).css('bottom','20px')
			}else{
				$(this).css('bottom','90px')
			}
			$('.sbtn').css('bottom','90px')
			$(this).children('.mbtn-inner').attr('class','mbtn-inner')
		}else{
			$('.info').css('bottom','20px').css('opacity','1')
			$(this).css('bottom','358px')
			$('.sbtn').css('bottom','358px')
			$(this).children('.mbtn-inner').attr('class','mbtn-inner drata')
		}
	})
	$('.mysubmit').click(function(){
		$("input[type='submit']").click()
	})
	$('.sbtn').click(function(){
		var top=$('.operation').css('bottom')
		if(top=='0px'){
			$(this).css('bottom','90px')
			$('.mbtn').css('bottom','90px')
			$('.operation').css('bottom','-100%').css('opacity','0')
			$('.info').css('bottom','-100%').css('opacity','0')
		}else{
			$(this).css('bottom','391px')
			$('.mbtn').css('bottom','391px')
			$('.operation').css('bottom','0').css('opacity','1')
		}
	})
	var touchtime = new Date().getTime();
	$('.double').click(function(){
   		if( new Date().getTime() - touchtime < 500 ){
            alert('打开文件')
        }else{
            touchtime = new Date().getTime();
				$('.double').removeClass('active')
            	$(this).addClass('active')
        }
	})
})