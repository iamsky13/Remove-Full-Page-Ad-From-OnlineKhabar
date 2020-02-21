var readyStateCheckInterval = setInterval(function() {	
		$('.ok_roadblock').hide();
    		if(document.readyState === "complete"){
			clearInterval(readyStateCheckInterval);
			$('.ok_roadblock').hide();
		}	
	}, 1);