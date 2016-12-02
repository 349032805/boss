var currentFirstDate;
	function initBetweenDate(){
        var weekPeriod = setDate(new Date());
        var dataStr = weekPeriod[0]+" ~ "+weekPeriod[6];
        $("#betweenDate").text(dataStr);

        $("#startDateParam").val(weekPeriod[0]);
	}

	function formatDate(date){
		var year = date.getFullYear();
        var month = (date.getMonth()+1);
        if(month<10){
        	month = "0"+month;
        }
        var day = date.getDate();
        if(day <10){
        	day = "0"+day;
        }
        day
        return year+"-"+month+"-"+day;
	}


	function addDate(date,n){
		 date.setDate(date.getDate()+n); 
        return date;
	}

	function setDate(date){             
        var week = date.getDay()-1;
        date = addDate(date,week*-1);
        currentFirstDate = new Date(date);

        var arr = [];
        for(var i = 0;i<7;i++){                 
            arr.push(formatDate(i==0 ? date : addDate(date,1)));
        }
        return arr;             
    }


    //获取当月第一天和最后一天
	function getCurrentMonthFirst(){
		 var date=new Date();
		 date.setDate(1);
		 var currentMonthFirst = formatDate(date);

		 $("#startDateParam").val(currentMonthFirst);
		 return currentMonthFirst;
	}

	function getCurrentMonthLast(){
		 var date=new Date();
		 var currentMonth=date.getMonth();
		 var nextMonth=++currentMonth;
		 var nextMonthFirstDay=new Date(date.getFullYear(),nextMonth,1);
		 var oneDay=1000*60*60*24;
		 var  endDate = new Date(nextMonthFirstDay-oneDay);
		 endDate = formatDate(endDate);
		 return endDate;
	}

	//获取上一个月第一天和最后一天
	function getPrevMonth(){
		var year = $("#yearParam").val();
	    var month = $("#monthParam").val();
	     if(year ==""){
	    	year = new Date().getFullYear();
	    }else{
	    	year = parseInt(year);
	    }

	    if(month==""){
	    	month = new Date().getMonth();
	    }else{
	    	month = parseInt(month)-1;
	    }

	    if(month==0)
	    {
	        month=12;
	        year=year-1;
	    }

	     $("#yearParam").val(year);
	    $("#monthParam").val(month);

	    if (month < 10) {
	        month = "0" + month;
	    }
	    var firstDay = year + "-" + month + "-" + "01";
	    $("#startDateParam").val(firstDay);

	    var myDate = new Date(year, month, 0);
	    var lastDay = year + "-" + month + "-" + myDate.getDate();
	    var str = firstDay+" ~ "+lastDay;
	    return str;
	}

	//获取下一个月第一天和最后一天
	function getNextMonth(){
		var year = $("#yearParam").val();
	    var month = $("#monthParam").val();
	    if(year ==""){
	    	year = new Date().getFullYear();
	    }else{
	    	year = parseInt(year);
	    }

	    if(month==""){
	    	month = new Date().getMonth()+2;
	    }else{
	    	month = parseInt(month)+1;
	    }

	    if(month==13)
	    {
	        month=1;
	        year=year+1;
	    }
	    $("#yearParam").val(year);
	    $("#monthParam").val(month);

	    if (month < 10) {
	        month = "0" + month;
	    }
	    var firstDay = year + "-" + month + "-" + "01";
	     $("#startDateParam").val(firstDay);

	    var myDate = new Date(year, month, 0);
	    var lastDay = year + "-" + month + "-" + myDate.getDate();
	    var str = firstDay+" ~ "+lastDay;
	    return str;
	}

	//获取当前季度的第一天和最后一天
	function getCurrentSeason(){
		var startDate;
		var endDate;
		var whichSeason;
		var currentYear =  new Date().getFullYear();
		var currentMonth = new Date().getMonth()+1;
		if(currentMonth ==1 || currentMonth==2 || currentMonth ==3){
			startDate = currentYear+"-01-01";
			endDate = currentYear+"-03-31";
			whichSeason =1;
		}
		if(currentMonth ==4 || currentMonth==5 || currentMonth ==6){
			startDate = currentYear+"-04-01";
			endDate = currentYear+"-06-30";
			whichSeason =2;
		}

		if(currentMonth ==7 || currentMonth==8 || currentMonth ==9){
			startDate = currentYear+"-07-01";
			endDate = currentYear+"-09-30";
			whichSeason=3;
		}

		if(currentMonth ==10 || currentMonth==11 || currentMonth ==12){
			startDate = currentYear+"-10-01";
			endDate = currentYear+"-12-31";
			whichSeason=4;
		}

		$("#whichSeason").val(whichSeason);
		 $("#startDateParam").val(startDate);
		return startDate +" ~ "+endDate;
	}

	//获取上一个季度的第一天和最后一天
	function getPrevSeason(){
		var year = $("#yearParam").val();
	    var whichSeason = $("#whichSeason").val();
	    if(year ==""){
	    	year = new Date().getFullYear();
	    }else{
	    	year = parseInt(year);
	    }

	  	whichSeason = parseInt(whichSeason) -1;

	    if(whichSeason==0){
	        whichSeason=4;
	        year=year-1;
	    }
	    $("#yearParam").val(year);
	    $("#whichSeason").val(whichSeason);

	    var startDate;
		var endDate;
		if(whichSeason==1){
			startDate = year+"-01-01";
			endDate = year+"-03-31";
		}
		if(whichSeason==2){
			startDate = year+"-04-01";
			endDate = year+"-06-30";
		}

		if(whichSeason==3){
			startDate = year+"-07-01";
			endDate = year+"-09-30";
		}

		if(whichSeason==4){
			startDate = year+"-10-01";
			endDate = year+"-12-31";
		}
		$("#whichSeason").val(whichSeason);
		 $("#startDateParam").val(startDate);

		return startDate +" ~ "+endDate;
	}

	//获取下一个季度的第一天和最后一天
	function getNextSeason(){
		var year = $("#yearParam").val();
	    var whichSeason = $("#whichSeason").val();
	    if(year ==""){
	    	year = new Date().getFullYear();
	    }else{
	    	year = parseInt(year);
	    }

	  	whichSeason = parseInt(whichSeason) +1;

	    if(whichSeason==5){
	        whichSeason=1;
	        year=year+1;
	    }
	    $("#yearParam").val(year);
	    $("#whichSeason").val(whichSeason);

	    var startDate;
		var endDate;
		if(whichSeason==1){
			startDate = year+"-01-01";
			endDate = year+"-03-31";
		}
		if(whichSeason==2){
			startDate = year+"-04-01";
			endDate = year+"-06-30";
		}

		if(whichSeason==3){
			startDate = year+"-07-01";
			endDate = year+"-09-30";
		}

		if(whichSeason==4){
			startDate = year+"-10-01";
			endDate = year+"-12-31";
		}

		$("#whichSeason").val(whichSeason);
		 $("#startDateParam").val(startDate);
		return startDate +" ~ "+endDate;
	}



	function lastPeriod(){
		$("#spellData").html("");

		var periodType = $("#periodType").val();
		var dataStr="";
		var urlParam ="";

		var startDateParam;
		if(periodType=="week"){
			var arr = setDate(addDate(currentFirstDate,-7));
			dataStr = arr[0]+" ~ "+arr[6];
			urlParam = "/?startDate="+arr[0]+"&reportType=1";

			$("#startDateParam").val(arr[0]);
			startDateParam = $("#startDateParam").val();

		}

		if(periodType=="month"){
			var prevMonthDate = getPrevMonth();
			dataStr = prevMonthDate;

			startDateParam = $("#startDateParam").val();
			urlParam = "/?startDate="+startDateParam+"&reportType=2";
		}

		if(periodType=="season"){
			var prevSeasonDate = getPrevSeason();
			dataStr = prevSeasonDate;

			startDateParam = $("#startDateParam").val();
			urlParam = "/?startDate="+startDateParam+"&reportType=3";
		}

		if(periodType=="year"){
			var yearParam = $("#yearParam").val();
			var year = parseInt(yearParam);
			year = year -1;
			$("#yearParam").val(year);
			dataStr = year+"-01-01"+" ~ "+year+"-12-31";

			startDateParam = year+"-01-01";
			urlParam = "/?startDate="+startDateParam+"&reportType=4";
		}

 		 $("#betweenDate").text(dataStr);
 		 var page =$("#page").val();
         window.open("boss://"+page+urlParam);
	}

	function nextPeriod(){
		$("#spellData").html("");
		
		var periodType = $("#periodType").val();
		var dataStr="";
		var urlParam ="";

		var startDateParam;
		if(periodType=="week"){
			var arr = setDate(addDate(currentFirstDate,7));
			dataStr = arr[0]+" ~ "+arr[6];
			urlParam = "/?startDate="+arr[0]+"&reportType=1";

			$("#startDateParam").val(arr[0]);
			startDateParam = $("#startDateParam").val();
		}

		if(periodType=="month"){
			var nextMonthDate = getNextMonth();
			dataStr = nextMonthDate;

			startDateParam = $("#startDateParam").val();
			urlParam = "/?startDate="+startDateParam+"&reportType=2";
		}

		if(periodType=="season"){
			var nextSeasonDate = getNextSeason();
			dataStr = nextSeasonDate;

			startDateParam = $("#startDateParam").val();
			urlParam = "/?startDate="+startDateParam+"&reportType=3";
		}

		if(periodType=="year"){
			var yearParam = $("#yearParam").val();
			var year = parseInt(yearParam);
			year = year +1;
			$("#yearParam").val(year);
			dataStr = year+"-01-01"+" ~ "+year+"-12-31";

			startDateParam = year+"-01-01";
			urlParam = "/?startDate="+startDateParam+"&reportType=4";
		}

 		 $("#betweenDate").text(dataStr);
 		 var page =$("#page").val();
          window.open("boss://"+page+urlParam);
	}


$(document).ready(function(){
	initBetweenDate();

  $(".period-btn").click(function(){
  	$(this).addClass("active-btn").siblings().removeClass("active-btn");
    var dataType = $(this).attr("data-type");
    var periodType = $("#periodType").val();
    if(dataType != periodType){

    	$("#yearParam").val("");
    	$("#monthParam").val("");

    	var reportType;

	    if(dataType =="week"){
	    	$('#periodType').val("week");
	    	initBetweenDate();

	    	reportType = 1;

	    }

	    if(dataType=="month"){
	    	 $('#periodType').val("month");

	    	var firstDay = getCurrentMonthFirst();
	    	var endDate = getCurrentMonthLast();
	    	var dataStr = firstDay +" ~ "+endDate;
	    	 $("#betweenDate").text(dataStr);

	    	 reportType = 2;

	    }

	    if(dataType=="season"){
	    	 $('#periodType').val("season");
	    	 var dataStr = getCurrentSeason();
	    	 $("#betweenDate").text(dataStr);

	    	 reportType = 3;

	    }

	    if(dataType=="year"){
	    	 $('#periodType').val("year");
	    	 var currentYear = new Date().getFullYear();
	    	 $("#yearParam").val(currentYear);
	    	 $("#startDateParam").val(currentYear+"-01-01");
	    	 dataStr = currentYear+"-01-01"+" ~ "+currentYear+"-12-31";
	    	 $("#betweenDate").text(dataStr);

	    	 reportType = 4;

	    }
	    //清空table内容
	     $("#spellData").html("");
	     $("#loadmore").hide();

	    var startDateParam = $("#startDateParam").val();
	    var page = $("#page").val();
	    window.open("boss://"+page+"/?startDate="+startDateParam+"&reportType="+reportType);
    }

  });

});


function gotoRank(dataType){
	window.open("boss://waiterRanking?type="+dataType);
}