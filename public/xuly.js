$(document).ready(function(){

	var month = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];

	var month_acronym = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];

	var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

	var currentdate = new Date(); 
	var currentdays = days[currentdate.getDay()];
    var currentmonth = month[currentdate.getMonth()];
    var currentyear = currentdate.getFullYear();
    var currentdates = currentdate.getDate();

	$(function() {
	 	$("div.month").replaceWith("<div class='month'>"+currentmonth+"</div>");
	 	$("div.year").replaceWith("<div class='year'>"+currentyear+"</div>");	 
	 });

	var get_year_txt = $(".year").text();
	var get_year = parseInt($(".year").text());
	var get_month_txt = $(".month").text();
	var day_in_month_1 = [31,28,31,30,31,30,31,31,30,31,30,31];
	var day_in_month_2 = [31,29,31,30,31,30,31,31,30,31,30,31];
	var day_in_month = [];
	var day_belongto_month = 0;
	var year = [];
	var count = [];
	var con = 1; 
	var calendar = [];
	var colors = ["#f44242","#f4cd41", "#57d9ff","#2f4230", "#fc7c20", "#6f9b73"];
	var day=0;
	var get_day = [];
	

	var kt_y = function(){
		if(get_year%4==0 && get_year%100!=0 || get_year%400==0){
			day_in_month = day_in_month_2;
		}else{
			day_in_month = day_in_month_1;
		}
	};

	var kt_m = function(){
		switch(get_month_txt.toLowerCase()){
			case month[0]:
				day_belongto_month = day_in_month[0];
				break;
			case month[1]:
				day_belongto_month = day_in_month[1];
				break;
			case month[2]:
				day_belongto_month = day_in_month[2];
				break;
			case month[3]:
				day_belongto_month = day_in_month[3];
				break;
			case month[4]:
				day_belongto_month = day_in_month[4];
				break;
			case month[5]:
				day_belongto_month = day_in_month[5];
				break;
			case month[6]:
				day_belongto_month = day_in_month[6];
				break;
			case month[7]:
				day_belongto_month = day_in_month[7];
				break;
			case month[8]:
				day_belongto_month = day_in_month[8];
				break;
			case month[9]:
				day_belongto_month = day_in_month[9];
				break;
			case month[10]:
				day_belongto_month = day_in_month[10];
				break;
			case month[11]:
				day_belongto_month = day_in_month[11];
				break;
		}
	};	

	var kt_p_m = function(variable){
		switch(variable.slice(0,3).toLowerCase()){
			case "jan":
				return 0;
				break;
			case "feb":
				return 1;
				break;
			case "mar":
				return 2;
				break;
			case "apr":
				return 3;
				break;
			case "may":
				return 4;
				break;
			case "jun":
				return 5;
				break;
			case "jul":
				return 6;
				break;
			case "aug":
				return 7;
				break;
			case "sep":
				return 8;
				break;
			case "oct":
				return 9;
				break;
			case "nov":
				return 10;
				break;
			default:
				return 11;
		}
	};

	var kt_d = function(variable){
			switch(variable.slice(0,3).toLowerCase()){
			case "sun":
				return 0;
				break;
			case "mon":
				return 1;
				break;
			case "tue":
				return 2;
				break;
			case "wed":
				return 3;
				break;
			case "thu":
				return 4;
				break;
			case "fri":
				return 5;
				break;
			default :
				return 6;
			}
	};

	var cre_y = function(){
		var n = 2117;
		for(var i=1;i<32;i++){
			day++;
			get_day.push(day);
		}
		for(var i=1917; i<n; i++){
			year.push(i);
		}
		for(var j=0;j<year.length;j++)
		{
			$('.year-picker').append("<div class='y' value='"+year[j]+"'>"+year[j]+"</div>");
		}

		for(var t=0;t<month_acronym.length;t++)
		{
			$('.month-picker').append("<div class='m' value='"+month_acronym[t]+"'>"+month_acronym[t]+"</div>");
		}
	};	

	cre_y();	

	var kt_m_r = function(variable){
		switch(variable){
			case 0:
				return get_month_txt="january";
				break;
			case 1:
				return get_month_txt="february";
				break;
			case 2:
				return get_month_txt="march";
				break;
			case 3:
				return get_month_txt="april";
				break;
			case 4:
				return get_month_txt="may";
				break;
			case 5:
				return get_month_txt="june";
				break;
			case 6:
				return get_month_txt="july";
				break;
			case 7:
				return get_month_txt="august";
				break;
			case 8:
				return get_month_txt="september";
				break;
			case 9:
				return get_month_txt="october";
				break;
			case 10:
				return get_month_txt="november";
				break;
			default:
				return get_month_txt="december";
		}
	};
	
	
	var cre_cal =function(){
		kt_y();
	    kt_m();	
	    var firstdate = new Date();
	    firstdate.setFullYear(get_year, kt_p_m(get_month_txt), 1); 
	    var firstdays = days[firstdate.getDay()];
	    var firstmonths = month[firstdate.getMonth()];
	    
	    count=[];	
	    con=1;
	    $("table#day").replaceWith("<table id='day'><tr></tr></table>");

		for(var k=1;k<day_belongto_month+1;k++){
			count.push(con);
			con++;
		};

		var c1 = 0;
		for(var i=0;i<days.length;i++){
			if(c1<days.length){
		    	$("#day tr").last().append("<th>"+days[c1].slice(0,3).toUpperCase()+"</th>");
		    	c1++;
	    	}
		};
		var c2=0; var vt=0;
		for (var i = 0; i < Math.floor(count.length/7+2); i++)
		{
		    $("#day").append("<tr></tr>");
		    for (var j = 0; j < Math.floor(count.length/4); j++){
		    	//lấy thẻ tr hiện tại trong table
		    	if(c2<count.length && vt>=kt_d(firstdays)){
			    	$("#day tr").last().append("<td class=cl_td value='"+count[c2]+"/"+get_month_txt+"/"+get_year_txt+"'>"+count[c2]+"</td>");
			    	c2++;			    	
		    	}else{
		    		$("#day tr").last().append("<td></td>");
		    		vt++;
		    	}
		    }
		};
		if(get_month_txt==currentmonth && get_year_txt==currentyear)
		{
			$("td[value='"+currentdates+"/"+currentmonth+"/"+currentyear+"']").css("background-color","lightgrey");
		}
	};
	cre_cal();

	var picked_date = function(value){
		for(var j=0;j<get_day.length;j++){
			var pd = get_day[j]+"/"+get_month_txt+"/"+get_year_txt;
			if(value.attr('value')==pd){
				$("td[value='"+pd+"']").css({"background-color":"lightgrey","opacity":"0.8"});
			}else{
				$("td[value='"+pd+"']").css({"background-color":"transparent","opacity":"1"});
				$("td[value='"+currentdates+"/"+currentmonth+"/"+currentyear+"']").css("background-color","lightgrey");
			}
		}
	};

	var picked_year = function(){
		var offset1 = $(".y[value='"+get_year_txt+"']").offset();
		$("div.year-picker").scrollTop(Number(offset1.top - 99));
		for(var i=0;i<year.length;i++){
			if(get_year_txt == year[i]){
				$(".y[value='"+year[i]+"']").css("background-color","#000000");
			}else{
				$(".y[value='"+year[i]+"']").css("background-color","transparent");
			}
		}
	};

	var picked_month = function(){
		for(var i=0;i<month_acronym.length;i++){
			if(get_month_txt.slice(0,3).toUpperCase() == month_acronym[i]){
				$(".m[value='"+month_acronym[i]+"']").css("background-color","#000000");
			}else{
				$(".m[value='"+month_acronym[i]+"']").css("background-color","transparent");
			}
		}
	};

	var blind_data = function(){
		$('td .test').remove();
		var get_data = JSON.parse(localStorage.getItem("event_db"));
		var array = [];
		if(!!get_data && get_data.length>0){
			for(var i=0; i<get_data.length;i++){
				array = get_data[i].event;
				for(var j=0; j<array.length;j++){
					$("td[value='"+get_data[i].id+"']").append("<div style='background-color:"+colors[j]+"'class='test' value='"+get_data[i].id+"-"+array[j]+"-"+j+"'>"+array[j]+"</div>");
				}
			}
		}
	};
	blind_data();

	var canvas = $(".canvas")[0];
	var ctx = canvas.getContext("2d");

	var drawPieSlice = function(ctx,centerX, centerY, radius, startAngle, endAngle, color ){
	    ctx.fillStyle = color;
	    ctx.beginPath();
	    ctx.moveTo(centerX,centerY);
	    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
	    ctx.closePath();
	    ctx.fill();
	};

	var draw_chart = function(value){
		var get_data = JSON.parse(localStorage.getItem("event_db"));
		var index = 3*Math.PI/2;
		var coordinate = 0;		
		if(!!get_data && get_data.length>0){
			if(value.children().size()==0){
				$('.canvas').replaceWith("<canvas class='canvas' width='455' height='500'></canvas>");
				$(".total").replaceWith("<div class='total'>TOTAL: 0</div>");	
			}else{
				canvas = $(".canvas")[0];
				ctx = canvas.getContext("2d");
				for(var i=0;i<get_data.length;i++){
					if(value.attr('value')==get_data[i].id){
						for(var j=0; j<value.children().size();j++){
							coordinate = 2*Math.PI*parseInt(value.children().eq(j).text())/get_data[i].total;
							drawPieSlice(ctx, 250,250,150, index, index+coordinate, colors[j]);
							index+=coordinate;
						}
					$(".total").replaceWith("<div class='total'>TOTAL: "+get_data[i].total+"</div>");	
					}
				}
			}
		}
		$(".date").replaceWith("<div class='date'>Date: "+value.attr('value')+"</div>");
	};

	var draw_current = function(){
		draw_chart($("td[value='"+currentdates+"/"+currentmonth+"/"+currentyear+"']"));
		$("td").css({"background-color":"transparent","opacity":"1"});
		$("td[value='"+currentdates+"/"+currentmonth+"/"+currentyear+"']").css("background-color","lightgrey");
	};
	draw_current();

	var ts_dblc = function(){
		var get_data = JSON.parse(localStorage.getItem("event_db"));
		var array = [];
		var td = $($("td[value='"+$(".cl_td").attr('value')+"']")[0]);
		$(".test").dblclick(function(e){
			e.stopPropagation();
			if(!!get_data && get_data.length>0){
				for(var i=0; i<get_data.length;i++){
					array = get_data[i].event;
					for(var j=0; j<array.length;j++){
					var ktv = get_data[i].id+"-"+array[j]+"-"+j;
						if(ktv == $(this).attr("value")){
							if(array.length>1){
								$(".test[value='"+ktv+"']").replaceWith("");
								array.splice(j,1);
								get_data[i].total-=Number($(this).text());
								localStorage.setItem("event_db", JSON.stringify(get_data));
							}else{
								$(".test[value='"+ktv+"']").replaceWith("");
								get_data.splice(i,1);
								localStorage.setItem("event_db", JSON.stringify(get_data));			
							}
						}
					}
				}
				if(get_data==""){
					localStorage.clear();
				}
			}
			blind_data();
			draw_chart(td);
	    });
	};
	ts_dblc();

	var data_popup = function(){
		var get_data = JSON.parse(localStorage.getItem("event_db"));
		var array = [];
		if(!!get_data && get_data.length>0){
			for(var i=0; i<get_data.length;i++){
				array = get_data[i].event;
				for(var j=0; j<array.length;j++){
					$(".pop-up[value='"+get_data[i].id+"']").append("<div style='background-color:"+colors[j]+"'class='test' value='"+get_data[i].id+"-"+array[j]+"-"+j+"'>"+array[j]+"</div>");
				}
			}
			$(".test").unbind("dblclick");
			ts_dblc();
		}
	};

	var popup_submit = function(){
		$('#submit').click(function(e){
			e.stopPropagation();
			var js = [];
			var bool=-1;
			js = localStorage.getItem("event_db");
			var get_event = $('#event').val();
			var total = Number($('#event').val());
			var jason = {'id':$(".cl_td").attr('value'), 'event':[get_event], 'total': total};
			var td = $($("td[value='"+$(".cl_td").attr('value')+"']")[0]);
			if(!!js && js.length>0){
				if(get_event !=""){
					if (typeof(Storage) !== "undefined") {
						js = JSON.parse(js);
						for(var i=0; i<js.length;i++){
							if(jason.id == js[i].id){
								js[i].event.push(jason.event+"");
								js[i].total+=total;
								localStorage.setItem("event_db", JSON.stringify(js));				
								bool=0;
								break;
							}else{
								bool=1;
							}
						}
						if(bool==1){
							js.push(jason);
							localStorage.setItem("event_db", JSON.stringify(js));					
						}
					} else {
						alert("localStorage is undefined");
					}
					$('.pop-up').hide();
				}
			}else{
				if(get_event !=""){
					if (typeof(Storage) !== "undefined") {
						localStorage.setItem("event_db", JSON.stringify([jason]));
					} else {
						alert("localStorage is undefined");
					}
					$('.pop-up').hide();
				}
			}
			blind_data();
			draw_chart(td);
			e.preventDefault();
		});
	};

	var td_click = function(){
		$("td").unbind('click');
		$("td").click(function(e){
			picked_date($(this));
			$(".year-picker").hide();
			$(".month-picker").hide();	
			$(".cl_td").removeClass("cl_td");
			$(this).addClass("cl_td");
			var x = e.pageX;	
			var y = e.pageY;
			$('.pop-up').replaceWith("<form class='pop-up' value='"+$(this).attr('value')+"'><label>Thêm tiền tiêu vặt cho ngày:</label></form>");
			if($(this).text()!=""){
				$('.pop-up').css({"display":"block", "position":"absolute", "top":""+y+"px", "left":""+x+"px","height":"150px"});
				$('.pop-up').append("<div>"+$(this).attr('value')+"</div>");
				$('.pop-up').append("<input id='event' type='text'><br>");
				$('.pop-up').append("<input type='submit' id='submit'>");
				/**/
				data_popup();
				/**/
				/**/
			}			
			$('#submit').unbind("click");
			popup_submit();
			/**/
			draw_chart($(this));			
			/**/
		}
	)};
	
	$('.m').click(function(event){
		event.stopPropagation();
		for(var i=0;i<month.length;i++){
			if($(this).text()==month[i].slice(0,3).toUpperCase())
			{
				$("div.month").html(""+month[i]+"");
				get_month_txt = month[i]; 
			}
		}
		picked_month();
		cre_cal();
		td_click();
		blind_data();
		$(".month-picker").hide(100);
	});

	$('.y').click(function(event){
		event.stopPropagation();		
		$("div.year").html(""+$(this).text()+"");
		get_year_txt = $(this).text();
		get_year = parseInt($(this).text());
		cre_cal();
		picked_year();
		td_click();
		blind_data();
		$(".year-picker").hide(100);
	});

	$(".container").click(function(){
		$(".year-picker").hide();
		$(".month-picker").hide();
		$('.pop-up').hide();	
		$('.pop-up').replaceWith("<form class='pop-up'></form>");
		/*draw_current();*/
	});

	$('.year').click(function(e){
		e.stopPropagation();
		$(".pop-up").hide();		
		$(".year-picker").css("display","flex");
		$(".month-picker").hide();
		picked_year();	
	});

	$('.month').click(function(e){
		e.stopPropagation();	
		$(".pop-up").hide();	
		$(".month-picker").css("display","flex");
		$(".year-picker").hide();
		picked_month();
	});


	$("#prev-week").click(function(e){
		e.stopPropagation();
		$(".pop-up").hide();
		$(".year-picker").hide();
		$(".month-picker").hide();
		var dem = parseInt(kt_p_m(get_month_txt));
		dem--;
		if(dem>=0 && dem<=11){
			kt_m_r(kt_p_m(get_month_txt)-1);
			$("div.month").html(""+kt_m_r(kt_p_m(get_month_txt))+"");
			picked_month();
			cre_cal();			
		}else{
			dem++;
		}
		td_click();
		blind_data();
	});

	$("#next-week").click(function(e){
		e.stopPropagation();
		$(".pop-up").hide();
		$(".year-picker").hide();
		$(".month-picker").hide();
		var dem = parseInt(kt_p_m(get_month_txt));
		dem++;		
		if(dem>=0 && dem<=11){
			kt_m_r(kt_p_m(get_month_txt)+1);
			$("div.month").html(""+kt_m_r(kt_p_m(get_month_txt))+"");
			picked_month();
			cre_cal();				
		}else{
			dem--;
		}	
		td_click();
		blind_data();
	});

	$('.content').click(function(e){
			e.stopPropagation();
	});	
	td_click();
});