// to get user's time
function time() {
	var d = new Date();
	var    day = d.getDay();
	var    date = d.getDate();
	var    year = d.getFullYear();
	var    month = d.getMonth();
	var    hrs = d.getHours();
	var    mins = d.getMinutes();
	var    days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
	var    mons = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
	var    hs = ["12","1","2","3","4","5","6","7","8","9","10","11","12","1","2","3","4","5","6","7","8","9","10","11"];
	var    min = ["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20",
	    "21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43",
	    "44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59"];

	if  (0 <= hrs <= 11) {
	    var ap = "AM";
	}
	else if (12 <= hrs <= 23){
	    ap = "PM";
	}

	var time = days[day] + ", " + mons[month] + " " + date + ", " +  year + ", " +  hs[hrs] + ":" + min[mins] + " " + ap;
	localStorage.setItem("TIME", time);
}

// warns the user that the form fields is not complete or it is the form validation onsubmit
function FormS() {
	event.preventDefault();
	var check = 0;

	if (document.getElementById("uname").value == "") {
		document.getElementById("luname").innerHTML = "Username:<span class='red'>* (please enter a name)</span>";
		check++;
	}

	else {
		document.getElementById("luname").innerHTML = "Username:<span class='red'>*</span>";
	}

	if (document.getElementById("email").value == "") {
		document.getElementById("lemail").innerHTML = "Email:<span class='red'>* (please enter an email)</span>";
		check++;
	}

	else if (!document.getElementById("email").value.match("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$")) {
		document.getElementById("lemail").innerHTML = "Email:<span class='red'>* (please enter a valid email)</span>";
		check++;
	}
	else {
		document.getElementById("lemail").innerHTML = "Email:<span class='red'>*</span>"
	}

	if (document.getElementById("comment").value == "") {
		document.getElementById("texta").innerHTML = "Comment:<span class='red'>* (please enter a comment)</span>";
		check++;
	}

	else {
		document.getElementById("texta").innerHTML = "Comment:<span class='red'>*</span>";
	}

	//places the comment on the comment thread on #thread
	if (check == 0) {
		document.getElementById("thread").innerHTML = "<img src='images/userimg.jpeg' id='userimg'><span id='username'></span><br><span id='useremail'></span><span id='date'></span><br><p id='comments'></p><hr>" + document.getElementById("thread").innerHTML;
		var x = document.getElementById("uname").value + "&nbsp";
		var y = document.getElementById("email").value + "&nbspcomment added on:&nbsp";
		var z = document.getElementById("comment").value + "&nbsp";
		document.getElementById("username").innerHTML = x;
		document.getElementById("useremail").innerHTML = y;
		document.getElementById("comments").innerHTML = z;
		document.getElementById("date").innerHTML = localStorage.getItem("TIME");
		document.getElementById("uname").value = "";
		document.getElementById("email").value = "";
		document.getElementById("comment").value = "";
	}
}

function ename() {
	var check = 0;
	if (document.getElementById("uname").value == "") {
		document.getElementById("luname").innerHTML = "Username:<span class=red>* (please enter a name)</span>";
	}

	else {
		document.getElementById("luname").innerHTML = "Username:<span class=red>*</span>";
		
	}
}

function eemail() {
	if (document.getElementById("email").value == "") {
		document.getElementById("lemail").innerHTML = "Email:<span class=red>* (please enter an email)</span>";
	}

	else if (!document.getElementById("email").value.match("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$")) {
		document.getElementById("lemail").innerHTML = "Email:<span class=red>* (please enter a valid email)</span>";
	}
	else {
		document.getElementById("lemail").innerHTML = "Email:<span class=red>*</span>"
	}
}

function ecomment() {
	if (document.getElementById("comment").value == "") {
		document.getElementById("texta").innerHTML = "Comment:<span class=red>* (please enter a comment)</span>";
	}

	else {
		document.getElementById("texta").innerHTML = "Comment:<span class=red>*</span>";
	}
}

// warns the user that the form field is not complete or it is the form validation
document.getElementById("uname").onblur = function() {ename()};
document.getElementById("email").onblur = function() {eemail()};
document.getElementById("comment").onblur = function() {ecomment()};
document.getElementById("uname").onfocus = function() {ename()};
document.getElementById("email").onfocus = function() {eemail()};
document.getElementById("comment").onfocus = function() {ecomment()};