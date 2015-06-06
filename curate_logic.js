function display(arr, id) {
    var out = "";
    var i;
    for(i = 0; i < arr.length; i++) {
        out += '<h3>' + arr[i].title + '</h3>';

		for (j=0; j< arr[i].text.length; j++) {
			 out += '<p>' + arr[i].text[j] + '</p>';
		}
    }
	document.getElementById(id).innerHTML=out;
}



function getData(url, id) {
// this function sets up the action to take when XMLHttpRequest() is ready
// this function can return the answer from that inner function that will
// be called after this function has completed.
	if (url=="") url="curdata.json";
	var arr;
	var xmlhttp = new XMLHttpRequest();
	var raw;

	xmlhttp.onreadystatechange = function() {
		raw=3333;
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			raw=xmlhttp.responseText;
			arr = JSON.parse(raw);
			display(arr, id);
			console.log(arr);
		}
	}

	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	//return formatForDisplay(arr);
	return("just kidding"); 
}
