/**************************** Parse JSON format Javascript ******************************/

(function (){
	update();
	remove();	
}());

function remove() {
$("span#remove").click(function(str) {
		var id = str;
				
		$.ajax({
		   type: "GET",
		   url: "server/remove_list.php?id="+id,
		   data: string,
		   cache: false,
		   success: function(data) {
				commentContainer.slideUp('slow', function() { 
					$(this).remove(data);
				});
		   }
		});

		return false;
	});
}	


function update() {
	var request = new XMLHttpRequest();
	
	request.open("GET", "server/catalog.php", true);
	request.onreadystatechange = function(e) {
		if(request.readyState == 4 && request.status == 200) {
			var output = "";
		
		   for(var i = 0, arr = JSON.parse(request.responseText); i < arr.length; i++) {
		   	output += "<li><span id='remove'>&times;</span> Name: <b>" + arr[i].name + "</b>, <br />age: <b>" + 
		      arr[i].age + "</b>, <br />works in: <b>" + arr[i].company + "</b></li>";
		   }
		
		   document.getElementsByClassName('catalog-list')[0].innerHTML = output;  
	   }  
	}	
	
	setTimeout(function () {		
		request.send();
		
		update();
	}, 200);
}

/**********************************************************


//get content with JSON data format using jQuery
update();	

function update() {
	setTimeout(function () {
		$.getJSON('server/catalog.php', function (data) {
			var items = [];	

		  	$.each(data, function() {
		  		items.push("<li>"+ this['name'] +" is "+ this['age'] +" years old, works in "+ this['work'] +"</li>");
		  	});	
		});

		update();	
	}, 1000);
}
