/* ==========
	INITIALIZE VARIABLE AND POPULATE APP DATA
 ==========*/

// GENERIC VARIABLES (optimized)
var windowHeight = $(window).height(),
	baseTime = "<span>" + "00" + "</span>" + "<i> \| </i>" + "<span>" + "00" + "</span>" + "<i> \| </i>" + "<span>" + "00" + "</span>",
	selectionData = "",
	selection = "",
	formatClass;
var totalTime = baseTime;	

// ACTIVITY MENU VARIABLES (optimized)
var selectionMenu = $("#activities-container"),
	menuHeight = selectionMenu.height(),
	currentActivity = $("#current-activity"),
	menuItemsArray = $("#activities li h4"),
	exitModal = $("#activities-exit");
var menuItemsCount = menuItemsArray.length;

// STAT VARIABLES (optimized)
var stats = $("#stats"),
    statList = $("#stats ul li p"),
	listHeight = stats.height(),
	statHeight = listHeight + 70, // nudged value based on box-sizing values
	statItemsArray = $("#stats h5"),
	statItemsCount = statItemsArray.length,
	enterStatsMenu = $("#enter-stats"),
	exitStatsMenu = $("#exit-stats"),
	saveResponse = $("#save-response"),
	statAdd = $(".increment"),
	statSubtract = $(".decrement"),
	singleStatEraser = $(".erase-stat"),
	allStatsEraser = $("#stats-erase");	

// SETTINGS VARIABLES (optimized)
var settings = $("#settings"),
	setAlarm = 	$("#submit-button"),
	alarmHour = $("#set-hour"),
	alarmMin = $("#set-min"),
	alarmSec = $("#set-sec"),
    alarmResponse = $("#alarm-response");
	
// TIMER VARIABLES (optimized)
var sec = min = hour = 00;
var intervalId;
var startButton = $("#start-watch"),
	pauseButton = $("#pause-watch"),
	resetButton = $("#reset-watch"),
	saveButton = $("#save-watch"),
	theTime = $("#time-count");

// POPULATE TIMER ONLOAD (optimized)
theTime.html( totalTime );

// POPULATE CURRENT ACTIVITY ONLOAD (optimized)
var firstActivity = menuItemsArray.first().attr("id").replace(/-/g, ' ').toUpperCase();
$(currentActivity).html( firstActivity ); // firstActivity

//POPULATE STATS ONLOAD (optimized)
$(statItemsArray).each(function() {
    var thisQuery = $(this);
	var thisClass = thisQuery.attr("class");
	var thisKey = thisClass.substr(0, thisClass.indexOf(" ") );	
	var statStorage = localStorage.getItem( thisKey );
	var thisStatHolder = thisQuery.siblings("p");		
	if ( statStorage !== null ) {
		$(thisStatHolder).html( statStorage ).css("font-weight", "700");
	} else {
		$(thisStatHolder).html( baseTime ).css("font-weight", "300");
	}
});

// GLOBAL FUNCTIONS

// formatting
function formatToClass(elem) {
	formatClass = elem.replace(/\s+/g, '-').toLowerCase();
};

function getZeros(elem) {
	recordedHour = elem.slice(6, 8);
    recordedMin = elem.slice(31, 33);
    recordedSec = elem.slice(56, 58);
	recHourNum = parseInt(recordedHour);
	recMinNum = parseInt(recordedMin);
	recSecNum = parseInt(recordedSec);		
};

function getUncle(s, e) {
	selection = $(s).parent().siblings( e );
	selectionData = $(selection).html();
};

function resetUncle() {
	selection = selectionData = null;
};

/* ==========
	ACTIVITY - STATS - SETTINGS CLICKTHROUGHS (optimized)
========== */

/* --- 
	Event Handlers
--- */

// activities
currentActivity.on("click", enterActivities );

menuItemsArray.on("click", exitActivities );

exitModal.on("click", function(event) {
	event.preventDefault();
	exitActivities();
});

// stats
enterStatsMenu.on("click", enterStats );

exitStatsMenu.on("click", exitStats );

// settings
$("#enter-settings, #exit-settings").on("click", function() {
	toggleSettings();
});


/* --- 
	Functions
--- */

// activities
function toggleMenu() {
	selectionMenu.toggleClass("activities-active"); 
};

function enterActivities() {
	toggleMenu();
	window.resizeTo(605, 600); // 600
};

function exitActivities() {
	toggleMenu();
    window.resizeTo(605, 315);  
};

// stats
function toggleStats() {
	setTimeout(function() {
		stats.toggleClass('stats-active');
	}, 100); 	
};

function enterStats() {
	window.resizeTo(605, statHeight);
    toggleStats();
};

function exitStats() {
	window.resizeTo(605, 315);
    toggleStats(); 	
};

// settings
function toggleSettings() {
	$("#settings").toggleClass("settings-active");
};


/* ==========
	ACTIVITY - STATS - SETTINGS PRIMARY FUNCTIONS
========== */

// select activities
menuItemsArray.on("click", function() {
    //thisActivity = $(this);
	activityId = this.id;
	formattedID = activityId.replace(/-/g, ' ').toUpperCase();
	currentActivity.html( formattedID );
	resetTime();
});

// edit stats
statAdd.on("click",function() {
    getUncle(this, "p");
	getZeros( selectionData );
    hour = recordedHour -= '0';
	recordedMin++;		
	if( recordedMin == 60) {
		recordedMin = 00;
		recordedHour += 1;
	  }  	
	thisAddedTime = "<span>" + ((recordedHour<=9) ? '0' + recordedHour : recordedHour) + "</span>" + "<i> \| </i>" + "<span>" + ((recordedMin<=9) ? '0' + recordedMin : recordedMin) + "</span>" + "<i> \| </i>" + "<span>" + recordedSec + "</span>";
    $(selection).html( thisAddedTime ).css("font-weight", 700);
	var thisTimeText = $(this).parent().siblings("h5").html().replace(/\s+/g, '-').toLowerCase();
	localStorage.setItem( thisTimeText , thisAddedTime);	
});

statSubtract.on("click",function() {
    getUncle(this, "p");
	getZeros( selectionData );	
	var formattedTime = $(this).parent().siblings("h5").html().replace(/\s+/g, '-').toLowerCase();
	if ( recordedMin == "01" && recordedSec == "00" ) {	
	    $(selection).css("font-weight", 300);
		hour = recordedHour -= '0';
		recordedMin--;			
		thisSubtractedTime = "<span>" + ((recordedHour<=9) ? '0' + recordedHour : recordedHour) + "</span>" + "<i> \| </i>" + "<span>" + ((recordedMin<=9) ? '0' + recordedMin : recordedMin) + "</span>" + "<i> \| </i>" + "<span>" + recordedSec + "</span>";
		$(selection).html( thisSubtractedTime );
		localStorage.setItem( formattedTime , thisSubtractedTime);			
	} else if ( recordedMin != "00" ) {
		hour = recordedHour -= '0';
		recordedMin--;			
		thisSubtractedTime = "<span>" + ((recordedHour<=9) ? '0' + recordedHour : recordedHour) + "</span>" + "<i> \| </i>" + "<span>" + ((recordedMin<=9) ? '0' + recordedMin : recordedMin) + "</span>" + "<i> \| </i>" + "<span>" + recordedSec + "</span>";
		$(selection).html( thisSubtractedTime );
		localStorage.setItem( formattedTime , thisSubtractedTime);			
	} else {
		return false;
	}
});

singleStatEraser.on("click",function() {
	if (window.confirm("Erase this time?")) {
		getUncle(this, "p");
		$(selection).html(baseTime).css("font-weight", 300);
		resetUncle();
		getUncle(this, "h5");
		formatToClass(selectionData);
		localStorage.removeItem( formatClass );
		resetUncle();
		formatClass = null;			
	}
});

allStatsEraser.on("click", function() {
	if (window.confirm("Erase all recorded times?")) {
		statList.css( "font-weight", 300 ).html( baseTime );
		statList.each(function() {
		    var thisStat = $(this);
			var thisClass = thisStat.siblings("h5").attr("class");
			var thisKey = thisClass.substr(0, thisClass.indexOf(" ") );
			localStorage.removeItem( thisKey );
		});
	};
});



/* ==========
	TIMER SECTION (optimized)
========== */

/* --- 
	Event Handlers
--- */
 
// start click
startButton.on("click", function() {
	startWatch();
	$(this).addClass("button-active");	
	pauseButton.removeClass("button-active");   
});

// pause click
$(pauseButton).on("click", function() {
	pauseWatch();
	$(this).addClass("button-active");
	startButton.removeClass("button-active");  
});

// reset click
$(resetButton).on("click", function() {
	if (window.confirm("Reset the time?")) {
	resetWatch();
	resetButtons();
	}    
});

// save click
$(saveButton).on("click", function() {
	saveWatch();
	indicateSave();
	resetButtons();
});

/* --- 
	Functions
--- */

// start
function startWatch() {
	intervalId = setInterval(startCounting, 1000);
};

// pause
function pauseWatch() {
	window.clearInterval(intervalId);
};

// reset
function resetWatch() {
	window.clearInterval(intervalId);
	resetTime();
};

// save
function saveWatch() {
	window.clearInterval(intervalId);
	var statText = currentActivity.html();
	formatToClass(statText);
	var statSelection = $( "." + formatClass );
	var statHolder = statSelection.siblings("p");
	var statNumber = statHolder.html();
	preHour = statNumber.slice(6, 8);
    preMin = statNumber.slice(31, 33);
    preSec = statNumber.slice(56, 58);	
	preHourNum = window.parseInt(preHour);
	preMinNum = window.parseInt(preMin);
	preSecNum = window.parseInt(preSec);
	getZeros(totalTime);	
	compoundHour = preHourNum + recHourNum;
	compoundMin = preMinNum + recMinNum;
	compoundSec = preSecNum + recSecNum;	
	var compoundTime = "<span>" + (( compoundHour <=9) ? '0' + compoundHour : compoundHour) + "</span>" + "<i> \| </i>" + "<span>" + ((compoundMin<=9) ? '0' + compoundMin : compoundMin) + "</span>" + "<i> \| </i>" + "<span>" + (( compoundSec <=9) ? '0' + compoundSec : compoundSec) + "</span>";
    localStorage.setItem( formatClass , compoundTime);
	statHolder.html( compoundTime ).css("font-weight", 700);
	resetTime();
	formatClass = null;
};

// reset times
function resetTime() {
	totalTime = baseTime;
	theTime.html( baseTime );  
	sec = min = hour = 00;
};

function indicateSave() {
	saveResponse.show(100);
	saveResponse.delay(2500).hide(300);
};

// reset button states
function resetButtons() {
	startButton.removeClass("button-active");
	pauseButton.removeClass("button-active");
};

// counter
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
	theTime.html( totalTime );
	if( hour == setHour && min == setMin && sec == setSec ) {
		alert("time\'s up!");
		pauseWatch();
		saveWatch();
		indicateSave();	
		startButton.toggleClass("button-active");	
	};
};

// alarm
setAlarm.on("click", function() {
  setHour = alarmHour.val();
  setMin = alarmMin.val();
  setSec = alarmSec.val();
  settings.removeClass("settings-active");
  indicateAlarmSet();
});

function indicateAlarmSet() {
  alarmResponse.delay(300).show(100).delay(2500).hide(300);
};

// color schemes
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





















