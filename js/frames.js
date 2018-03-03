var counter = 0;

function addCounter() {
	if ((counter<4) && (counter > 0)) {
		counter++;
		document.getElementById('frame').src = "images/"  + stationName + counter + ".jpg";
		changeClock();
	}
} 

function subCounter() {
	if (counter>1) {
		counter--;
		document.getElementById('frame').src = "images/"  + stationName + counter + ".jpg";
		changeClock();
	}
}


function changeClock(){
	
	if(stationName == "zhongxing"){
		if (counter==1) {
			setTime(ctx, radius, {'hour': 10, 'minute': 30}, .5);
		}
		if (counter == 2) {
			setTime(ctx, radius, {'hour': 10, 'minute': 35}, .5);
		}
		if (counter == 3) {
			setTime(ctx, radius, {'hour': 10, 'minute': 40}, .5);
		}
		if (counter == 4) {
			setTime(ctx, radius, {'hour': 10, 'minute': 45}, .5);
		}
	}

	if(stationName == "peoples"){
			if (counter==1) {
			setTime(ctx, radius, {'hour': 10, 'minute': 50}, .5);
		}
		if (counter == 2) {
			setTime(ctx, radius, {'hour': 10, 'minute': 55}, .5);
		}
		if (counter == 3) {
			setTime(ctx, radius, {'hour': 11, 'minute': 01}, .5);
		}
		if (counter == 4) {
			setTime(ctx, radius, {'hour': 11, 'minute': 05}, .5);
		}
	}

		if(stationName == "laoximen"){
			if (counter==1) {
			setTime(ctx, radius, {'hour': 11, 'minute': 10}, .5);
		}
		if (counter == 2) {
			setTime(ctx, radius, {'hour': 11, 'minute': 15}, .5);
		}
		if (counter == 3) {
			setTime(ctx, radius, {'hour': 11, 'minute': 20}, .5);
		}
		if (counter == 4) {
			setTime(ctx, radius, {'hour': 11, 'minute': 25}, .5);
		}
	}

	if(stationName == "xizang"){
			if (counter==1) {
			setTime(ctx, radius, {'hour': 11, 'minute': 30}, .5);
		}
		if (counter == 2) {
			setTime(ctx, radius, {'hour': 11, 'minute': 35}, .5);
		}
		if (counter == 3) {
			setTime(ctx, radius, {'hour': 11, 'minute': 40}, .5);
		}
		if (counter == 4) {
			setTime(ctx, radius, {'hour': 11, 'minute': 45}, .5);
		}
	}
}