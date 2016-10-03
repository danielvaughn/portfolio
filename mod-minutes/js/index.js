// COLOR SCHEMES
$('#cherry-garcia').click(function() {
  $("#my-stylesheet").attr("href", "css/color_cherry_garcia.css");
});

$('#strawberry-cheesecake').click(function() {
  $("#my-stylesheet").attr("href", "css/color_strawberry_cheesecake.css");
});

$('#disney-create').click(function() {
  $("#my-stylesheet").attr("href", "css/color_disney_create.css");
});

$('#mint-chocolate').click(function() {
  $("#my-stylesheet").attr("href", "css/color_mint_chocolate.css");
});

// OPTIMIZED VARIABLES AND FUNCTIONS
// var queueMenuItem = $("#activities li h4");
// var queueMenuId = queueMenuItem.attr("id");
// var formattedMenuId = formatToStorage(queueMenuId);

// var statsSection = $("#stats");
// var statItemName = $("#stat-list li h5");
// var statItemHolder = statItemName.siblings("p");
//var statKey = statItemName.substr(0, statItemName.indexOf(" ") );


// function formatToStorage(elem, x) {
	// x = $(elem).replace(/\s+/g, '-').toLowerCase();
// };

// function getZeros(elem) {
	// recordedHour = elem.slice(6, 8);
    // recordedMin = elem.slice(31, 33);
    // recordedSec = elem.slice(56, 58);
	// recHourNum = parseInt(recordedHour);
	// recMinNum = parseInt(recordedMin);
	// recSecNum = parseInt(recordedSec);		
// };

// var selectionData = "";
// var selection = "";
// function getUncle(s, e) {
	// selection = $(s).parent().siblings( e );
	// selectionData = $(selection).html();
// };


// END OPTIMIZED SECTION



// ENTER AND EXIT ACTIVITIES MENU
// function toggleMenu() {
	// $("#activities-container").toggleClass("activities-active"); 
// };

// function enterActivities() {
	// window.resizeTo(605, 550);
	// toggleMenu();
// };

// function exitActivities() {
	// toggleMenu();
    // window.resizeTo(605, 315);  
// };

// $("#current-activity").on("click", enterActivities );

// $("#activities li").on("click", exitActivities );

// $("#activities-exit").on("click", function(event) {
	// event.preventDefault();
	// exitActivities();
// });

// ENTER AND EXIT STATS
// function enterStats() {
    // var statElement = $("#stats");
	// var elementHeight = statElement.height();
	// var statHeight = elementHeight + 70; // nudged value based on box-sizing values
	// window.resizeTo(605, statHeight);
	// setTimeout(function() {
		// $("#stats").addClass("stats-active");
	// }, 100);
// };

// function exitStats() {
	// $("#stat-list").animate({height:"209px"});
	// setTimeout(function() {
		// $("#stats").removeClass('stats-active')
	// }, 100); 	
	// window.resizeTo(605, 315); 	
// };

// $("#enter-stats").on("click", enterStats );

// $("#exit-stats").on("click", exitStats );

//EDIT STATS
// $(".increment").on("click",function() {
    // getUncle(this, "p");
	// getZeros( selectionData );
    // hour = recordedHour -= '0';
	// recordedMin++;		
	// if( recordedMin == 60) {
		// recordedMin = 00;
		// recordedHour += 1;
	  // }  	
	// thisAddedTime = "<span>" + ((recordedHour<=9) ? '0' + recordedHour : recordedHour) + "</span>" + "<i> \| </i>" + "<span>" + ((recordedMin<=9) ? '0' + recordedMin : recordedMin) + "</span>" + "<i> \| </i>" + "<span>" + recordedSec + "</span>";
    // $(selection).html( thisAddedTime );
    // $(selection).css("font-weight", 700);
    // var thisTimeHolder = $(this).parent().siblings("h5");
    // var thisTimeHTML = thisTimeHolder.html();	
	// var formattedTime = thisTimeHTML.replace(/\s+/g, '-').toLowerCase();
    // localStorage.setItem( formattedTime , thisAddedTime);	
// });

// $(".decrement").on("click",function() {
    // getUncle(this, "p");
	// getZeros( selectionData );	
    // var thisTimeHolder = $(this).parent().siblings("h5");
    // var thisTimeHTML = thisTimeHolder.html();	
	// var formattedTime = thisTimeHTML.replace(/\s+/g, '-').toLowerCase();
	// if ( recordedMin == "01" && recordedSec == "00" ) {	
	    // $(selection).css("font-weight", 300);
		// hour = recordedHour -= '0';
		// recordedMin--;			
		// thisSubtractedTime = "<span>" + ((recordedHour<=9) ? '0' + recordedHour : recordedHour) + "</span>" + "<i> \| </i>" + "<span>" + ((recordedMin<=9) ? '0' + recordedMin : recordedMin) + "</span>" + "<i> \| </i>" + "<span>" + recordedSec + "</span>";
		// $(selection).html( thisSubtractedTime );
		// localStorage.setItem( formattedTime , thisSubtractedTime);			
	// } else if ( recordedMin != "00" ) {
		// hour = recordedHour -= '0';
		// recordedMin--;			
		// thisSubtractedTime = "<span>" + ((recordedHour<=9) ? '0' + recordedHour : recordedHour) + "</span>" + "<i> \| </i>" + "<span>" + ((recordedMin<=9) ? '0' + recordedMin : recordedMin) + "</span>" + "<i> \| </i>" + "<span>" + recordedSec + "</span>";
		// $(selection).html( thisSubtractedTime );
		// localStorage.setItem( formattedTime , thisSubtractedTime);			
	// } else {
		// return false;
	// }
// });

// $(".erase-stat").on("click",function() {
    // getUncle(this, "p");
	//thisStat = $(this).parent().siblings(".stat-holder");
	// var thisTimeHolder = $(this).parent().siblings("h5");
    // var thisTimeHTML = thisTimeHolder.html();	
	// var formattedTime = thisTimeHTML.replace(/\s+/g, '-').toLowerCase();	
	// if (window.confirm("Erase this time?")) {
	    // resetTime = "<span>" + "00" + "</span>" + "<i> \| </i>" + "<span>" + "00" + "</span>" + "<i> \| </i>" + "<span>" + "00" + "</span>";
		// $(selection).html( resetTime );
		// $(selection).css("font-weight", 300);
		// localStorage.removeItem( formattedTime );		
	// }	
// });

// ERASE STATS
// $("#stats-erase").on("click", function() {
	// if (window.confirm("Erase all recorded times?")) {
	    // thisResetTime = "<span>" + "00" + "</span>" + "<i> \| </i>" + "<span>" + "00" + "</span>" + "<i> \| </i>" + "<span>" + "00" + "</span>";
	    // savedStatList = $("#stat-list li p");
		// savedStatList.css( "font-weight", 300 );
		// savedStatList.html( thisResetTime );
		// savedStatList.each(function() {
		    // var thisItem = $(this);
		    // var thisH5 = thisItem.siblings("h5");
			// var singleClass = $(thisH5).attr("class");
			// var thisKey = singleClass.substr(0, singleClass.indexOf(" ") );	
			// localStorage.removeItem( thisKey );
			// thisItem.css("font-weight", "300");
		// });
	// };
// });

// ENTER AND EXIT SETTINGS
// function toggleSettings() {
	// $("#settings").toggleClass("settings-active");
// };

// $("#enter-settings, #exit-settings").on("click", function() {
	// toggleSettings();
// });

// SET ALARM
// document.getElementById("submit-button").onclick = function() {
  // alarmHour = $("#set-hour").val();
  // alarmMin = $("#set-min").val();
  // alarmSec = $("#set-sec").val();
  // $("#settings").removeClass("settings-active");
  // indicateAlarmSet();
// };

// function indicateAlarmSet() {
  // $("#alarm-response").delay(300).show(100);
  // $("#alarm-response").delay(2500).hide(300);
// };

// ACTIVITY MENU VARIABLES
// var selectionMenu = document.getElementById("activities");
// var currentActivity = document.getElementById("current-activity");
// var menuItems = $("#activities h4");
// var itemsCount = menuItems.length;

// STAT VARIABLES
// var statItems = document.getElementsByTagName("h5");
// var statCount = statItems.length;


// TIMER VARIABLES
// sec = 00;
// min = 00;
// hour = 00;
// var intervalId;
// var startButton = document.getElementById("start-watch");
// var pauseButton = document.getElementById("pause-watch");
// var resetButton = document.getElementById("reset-watch");
// var saveButton = document.getElementById("save-watch");
// var theTime = document.getElementById("time-count");
// var totalTime = "<span>" + "00" + "</span>" + "<i> \| </i>" + "<span>" + "00" + "</span>" + "<i> \| </i>" + "<span>" + "00" + "</span>";

// POPULATE CURRENT ACTIVITY ONLOAD
// var onLoadActivity = menuItems[0].innerHTML;
// var activityKey = onLoadActivity.replace(/\s+/g, '-').toLowerCase();
// var storedActivity = localStorage.getItem( activityKey );
// var formattedLoadActivity = onLoadActivity.toUpperCase();
// currentActivity.innerHTML = ( formattedLoadActivity );

// POPULATE TIME ONLOAD
// PREVIOUS FUNCTIONALITY
// if ( storedActivity !== null ) {
	// theTime.innerHTML = ( storedActivity );
	// storedSec = storedActivity.slice(56, 58);	
	// storedMin = storedActivity.slice(31, 33);
	// storedHour = storedActivity.slice(6, 8);
	// sec = storedSec -= '0';
	// min = storedMin -= '0';
	// hour = storedHour -= '0';
// } else {
	// theTime.innerHTML = ( totalTime );
// };
// theTime.innerHTML = ( totalTime );

// START BUTTON
// $(startButton).click( function() {
	// startWatch();
	// $(pauseButton).removeClass("button-active");   
	// $(this).addClass("button-active");
// });
// function startWatch() {
	// intervalId = setInterval(startCounting, 1000);
// };

// PAUSE
// $(pauseButton).click( function() {
	// pauseWatch();
	// $(this).addClass("button-active");
	// $(startButton).removeClass("button-active");  
// });
// function pauseWatch() {
	// window.clearInterval(intervalId);
// };

// RESET TIMER
// $(resetButton).click( function() {
	// if (window.confirm("Reset the time?")) {
	// resetWatch();
	// $(startButton).removeClass("button-active");
	// $(pauseButton).removeClass("button-active");
	// }    
// });
// function resetWatch() {
	// window.clearInterval(intervalId);
	// totalTime = "<span>" + "00" + "</span>" + "<i> \| </i>" + "<span>" + "00" + "</span>" + "<i> \| </i>" + "<span>" + "00" + "</span>";
	// theTime.innerHTML = ( totalTime );  
	// sec = 00;
	// min = 00;
	// hour = 00;
// };

// SAVE
// $(saveButton).click( function() {
	// saveWatch();
	// indicateSave();
	// $(startButton).removeClass("button-active");
	// $(pauseButton).removeClass("button-active");    
// });

// function indicateSave() {
	// $("#save-response").show(100);
	// $("#save-response").delay(2500).hide(300);
// };

// function saveWatch() {
	// window.clearInterval(intervalId);
	// var stat = currentActivity.innerHTML;
	// var formattedStat = stat.replace(/\s+/g, '-').toLowerCase();
	// var activityStat = $( "." + formattedStat );
	// var statTime = $(activityStat).siblings(".stat-holder");
	// var statHTML = statTime.html();
	// preHour = statHTML.slice(6, 8);
    // preMin = statHTML.slice(31, 33);
    // preSec = statHTML.slice(56, 58);
	
	// preHourNum = parseInt(preHour);
	// preMinNum = parseInt(preMin);
	// preSecNum = parseInt(preSec);

	// getZeros(totalTime);	
	
	// compoundHour = preHourNum + recHourNum;
	// compoundMin = preMinNum + recMinNum;
	// compoundSec = preSecNum + recSecNum;	
	
	// var compoundTime = "<span>" + (( compoundHour <=9) ? '0' + compoundHour : compoundHour) + "</span>" + "<i> \| </i>" + "<span>" + ((compoundMin<=9) ? '0' + compoundMin : compoundMin) + "</span>" + "<i> \| </i>" + "<span>" + (( compoundSec <=9) ? '0' + compoundSec : compoundSec) + "</span>";
	
    // localStorage.setItem( formattedStat , compoundTime);

	// $(statTime).html( compoundTime );
	// $(statTime).css("font-weight", 700);
	// totalTime = "<span>" + "00" + "</span>" + "<i> \| </i>" + "<span>" + "00" + "</span>" + "<i> \| </i>" + "<span>" + "00" + "</span>";
	// theTime.innerHTML = ( totalTime );

	// sec = 00;
	// min = 00;
	// hour = 00;	
	
// };

// BEGIN COUNTER
function startCounting() {
	sec ++;
	if( sec == 60 ) {
		sec = 00;
		min += 1;
	}
	if( min == 60) {
		min = 00;
		hour += 1;
	}  
	totalTime = "<span>" + ((hour<=9) ? '0' + hour : hour) + "</span>" + "<i> \| </i>" + "<span>" + ((min<=9) ? '0' + min : min) + "</span>" + "<i> \| </i>" + "<span>" + ((sec<=9) ? '0' + sec : sec) + "</span>";
	theTime.innerHTML = ( totalTime );
	if( hour == alarmHour && min == alarmMin && sec == alarmSec ) {
		alert("time\'s up!");
		pauseWatch();
		saveWatch();
		indicateSave();	
		$(startButton).removeClass("button-active");
		//$(pauseButton).addClass("button-active"); 	
	};
};// end counter

// ACTIVITIES SELECTION
menuItems.on("click", function() {
	activityId = this.id;
	formattedStat = activityId;
	formattedID = activityId.replace(/-/g, ' ').toUpperCase();
	currentActivity.innerHTML = ( formattedID );

	// PREVIOUS FUNCTIONALITY
	// var activityStatId = $( "." + formattedStat );
	// var statTime = $(activityStatId).siblings(".stat-holder");
	// recordedStatTime = $(statTime).html();		
	// if ( recordedStatTime.length > 0 ) {
		// theTime.innerHTML = ( recordedStatTime );
	// } else {
		// theTime.innerHTML = ( "<span>" + "00" + "</span>" + "<i> \| </i>" + "<span>" + "00" + "</span>" + "<i> \| </i>" + "<span>" + "00" + "</span>" );
	// }
	// recordedHour = recordedStatTime.slice(6, 8);
	// recordedMin = recordedStatTime.slice(31, 33);
	// recordedSec = recordedStatTime.slice(56, 58);
	// sec = recordedSec -= '0';
	// min = recordedMin -= '0';  
	// hour = recordedHour -= '0';

	totalTime = "<span>" + "00" + "</span>" + "<i> \| </i>" + "<span>" + "00" + "</span>" + "<i> \| </i>" + "<span>" + "00" + "</span>";
	theTime.innerHTML = ( totalTime );	
	
});

// POPULATE STATS
// $("#stat-list li h5").each(function() {
    // thisQuery = $(this);

	// var singleClass = thisQuery.attr("class");
	// var thisKey = singleClass.substr(0, singleClass.indexOf(" ") );	
	// var queryStat = $( "." + thisKey );
	// var thisStatHolder = queryStat.siblings("p");
	// var statStorage = localStorage.getItem( thisKey );

	// if ( statStorage !== null ) {
		// $(thisStatHolder).html( statStorage );
		// $(thisStatHolder).css("font-weight", "700");
	// } else {
		// $(thisStatHolder).html( "<span>" + "00" + "</span>" + "<i> \| </i>" + "<span>" + "00" + "</span>" + "<i> \| </i>" + "<span>" + "00" + "</span>" );
		// $(thisStatHolder).css("font-weight", "300");
	// }
	
// });