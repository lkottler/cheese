var images = [
	{name: "guatemalamap", extension: "png", width: 674, height: 800},
	{name: "banana", extension: "png", width: 300, height: 261},
	{name: "beans", extension: "png", width: 320, height: 355},
	{name: "cacao", extension: "png", width: 412, height: 329},
	{name: "coffee", extension: "png", width: 600, height: 312},
	{name: "corn", extension: "png", width: 448, height: 314},
	{name: "cotton", extension: "png", width: 567, height: 560},
	{name: "female_farmer", extension: "png", width: 312, height: 500},
	{name: "hemp", extension: "png", width: 600, height: 601},
	{name: "male_farmer", extension: "png", width: 340, height: 500},
	{name: "sugarcane", extension: "png", width: 552, height: 598},
	{name: "cloud", extension: "png", width: 600, height: 326},
	{name: "map", extension: "png", width: 640, height: 554},
	{name: "car", extension: "png", width: 800, height: 410},

	{name: "placeholder", extension: "png", width: 500, height: 500},

	{name: "farmercat", extension: "gif", width: 720, height: 404},

	{name: "cities/Cobán", extension: "jpg", width: 640, height: 480},
	{name: "cities/San Pedro Carchá", extension: "jpg", width: 500, height: 375},
	{name: "cities/guatemalatemple", extension: "jpg", width: 2477, height: 1393},
	{name: "cities/SpanishMarket", extension: "jpg", width: 630, height: 322},
	{name: "cities/undergroundmarket", extension: "jpg", width: 800, height: 450},
	{name: "cities/shadymerchant", extension: "jpg", width: 777, height: 666}
];

displayedGraphics = [];

var deviceScale = 1;

/* Initialize images */
for (var i = 0; i < images.length; i++) {
	var new_image = document.createElement("IMG");
	new_image.src = "res/images/" + images[i].name + "." + images[i].extension;
	new_image.id = images[i].name;
	new_image.width = images[i].width;
	new_image.height = images[i].height;
	new_image.style.display = "none";
	new_image.style.position = "fixed";
	document.body.appendChild(new_image);
}


function travel(arg){
	console.log(arg);
}

var
scale = 0.5;

guatheight = 1600*scale*deviceScale,
guatwidth = 1348*scale*deviceScale;
/* Initialize circles */
var circles = [
	{ color: "red", x: 750/1348*guatwidth, y: 400/1600*guatheight, size: 20, id: "Flores"},
	{ color: "red", x: 800/1348*guatwidth, y: 300/1600*guatheight, size: 20, id: "Tikal" },
	{ color: "red", x: 325/1348*guatwidth, y: 835/1600*guatheight, size: 20, id: "Huehuetenango"},
	{ color: "red", x: 630/1348*guatwidth, y: 800/1600*guatheight, size: 20, id: "Cobán"},
	{ color: "red", x: 690/1348*guatwidth, y: 810/1600*guatheight, size: 20, id: "San Pedro Carchá"},
	{ color: "red", x: 610/1348*guatwidth, y: 1080/1600*guatheight, size: 20, id: "La Ciudad de Guatemala"},
	{ color: "red", x: 360/1348*guatwidth, y: 1120/1600*guatheight, size: 20, id: "Mazatenango"},
	{ color: "red", x: 540/1348*guatwidth, y: 1280/1600*guatheight, size: 20, id: "San José"},
	{ color: "red", x: 1050/1348*guatwidth, y: 750/1600*guatheight, size: 20, id: "Livingston"}
];
for (var i = 0; i < circles.length; i++) {
	var new_circle = document.createElement("BUTTON");
	new_circle.style.position = "fixed";
	new_circle.style.display = "block";
	new_circle.style.height = circles[i].size*deviceScale + "px";
	new_circle.style.width = circles[i].size*deviceScale + "px";
	new_circle.style.borderRadius = circles[i].size*deviceScale / 2;
	new_circle.style.top = circles[i].y*deviceScale + "px";
	new_circle.style.left = circles[i].x*deviceScale + "px";
	new_circle.id = circles[i].id;
	new_circle.x = circles[i].x;
	new_circle.y = circles[i].y;
	new_circle.style.backgroundColor = circles[i].color;
	new_circle.style.borderRadius = "50%";
	new_circle.style.display = "none";
	new_circle.onclick = function() { travel(this.id); };
	document.body.appendChild(new_circle);
}

function disableDOMs(){
	for (var i = 0; i < displayedGraphics.length; i++){
		var temp = document.getElementById(displayedGraphics[i]);
		temp.style.display = "none";
	}
}

function displayButton(id, text, x, y, color, big){

	if (document.getElementById(id)){
		var sampleButton = document.getElementById(id);
		sampleButton.style.display = "inline";
		sampleButton.style.left = x*deviceScale+"px";
		sampleButton.style.top = y*deviceScale+"px";
	}
	else{
		var sampleButton = document.createElement("BUTTON");

		if (big){
			sampleButton.style.fontSize = 26*deviceScale+"px";
			sampleButton.style.height = 60*deviceScale+"px";
			sampleButton.style.width = 140*deviceScale+"px";
		}
		else {
			sampleButton.style.fontSize = 16.9*deviceScale+"px";
			sampleButton.style.height = 39*deviceScale+"px";
			sampleButton.style.width = 91*deviceScale+"px";
		}

		sampleButton.id = id;
		sampleButton.style.position = "fixed";
		sampleButton.style.display = "block";
		sampleButton.style.color = color;
		sampleButton.textContent = text;
		sampleButton.style.top = y*deviceScale+"px";
		sampleButton.style.left = x*deviceScale+"px";
		sampleButton.style.color = color;
		sampleButton.style.zIndex = 1000;
		displayedGraphics.push(id);
		document.body.appendChild(sampleButton);
}	

}





/*
function showRepeating(imgId, height, width, x, y){

	var image = document.getElementById(imgId);

}
*/

var cropArr = ["corn", "banana", "cacao", "beans", "cotton", "hemp", "sugarcane", "coffee"];
var cropArrPrices = [0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.1, 1.2];
var cropArrToSpanish = ["Maíces", "Platanos", "Cacaos", "Frijoles", "Algodones", "Cáñamos", "Caña de azúcar", "Café"];
var cityCrops = [
	{ name: "Flores", cropbool: [false, false, false, false, false, false, false, false], harvesters: [0, 0, 0, 0, 0, 0, 0, 0]},
	{ name: "Tikal", cropbool: [false, false, false, false, false, false, false, false], harvesters: [0, 0, 0, 0, 0, 0, 0, 0]},
	{ name: "Huehuetenango", cropbool: [false, false, false, false, false, false, false, false], harvesters: [0, 0, 0, 0, 0, 0, 0, 0]},
	{ name: "Cobán", cropbool: [true, false, false, false, false, false, false, false], harvesters: [0, 0, 0, 0, 0, 0, 0, 0]},
	{ name: "San Pedro Carchá", cropbool: [false, true, true, false, false, false, false, false], harvesters: [0, 0, 0, 0, 0, 0, 0, 0]},
	{ name: "La Ciudad de Guatemala", cropbool: [false, false, false, false, false, false, false, false], harvesters: [0, 0, 0, 0, 0, 0, 0, 0]},
	{ name: "Mazatenango", cropbool: [false, false, false, false, false, false, false, false], harvesters: [0, 0, 0, 0, 0, 0, 0, 0]},
	{ name: "San José", cropbool: [false, false, false, false, false, false, false, false], harvesters: [0, 0, 0, 0, 0, 0, 0, 0]},
	{ name: "Livingston", cropbool: [false, false, false, false, false, false, false, false], harvesters: [0, 0, 0, 0, 0, 0, 0, 0]}
]




var
money = 3;
cropVals = [
	corn = 0,
	bananas = 0,
	cacao = 0,
	beans = 0,
	cotton = 0,
	hemp = 0,
	sugarcane = 0,
	coffee = 0,
],

animatingDOMs = [],

currentcityId = "Cobán",

cutsceneboolarr = [true, true, true],
// map, car, ...
BMInfo = [{purchased: false, price: 25, imgId: "map", spanishName: "Mapa"}, {purchased: false, price: 2000, imgId: "car", spanishName: "Coche"},
		  {purchased: false, price: 100000, imgId: "placeholder", spanishName: "nada"}, {purchased: false, price: 100000, imgId: "placeholder", spanishName: "nada"},
		  {purchased: false, price: 100000, imgId: "placeholder", spanishName: "nada"}, {purchased: false, price: 100000, imgId: "placeholder", spanishName: "nada"}];
blackmarketpurchases = [false, false, false, false, false, false],
blackmarketpurchaseprice = [10, 200, 10000, 10000, 10000, 10000],
running = true,
isMale = true,
tickCount = 0;



function tick(){	

	tickCount++;
	deviceScale = document.documentElement.clientWidth / 1536;

	displayInventory();
	for (var i = 0; i < cropVals.length; i++){
		var sumHarvesters = 0;
		for (var j = 0; j < cityCrops.length; j++){
			sumHarvesters += cityCrops[j].harvesters[i];
		}
		if (sumHarvesters == 0 ){
			continue;
		}
		var tempRate = Math.ceil(1 / (sumHarvesters / 150));
		var extra = (sumHarvesters > 150) ? (1 - (sumHarvesters / 150)) : 0;
		if (tickCount % tempRate == 0){ 
			cropVals[i]+= (1 + extra);
		}
	}

	for (var i = 0; i < cityCrops[0].cropbool.length; i++){
		for (var j = 0; j < cropVals.length; j++){
			if (cityCrops[j].harvesters[i] > 0){

				cropArrPrices[i] += 0.000005;
				break;
			}
		}
	}

	for (var i = 0; i < animatingDOMs.length; i++){
		if (animatingDOMs[i].anim == "fade"){
			var rate = 50 / animatingDOMs[i].time;
			var currOp = animatingDOMs[i].currOp;
			if (animatingDOMs[i].fadeIn){
				currOp += rate;
				document.getElementById(animatingDOMs[i].id).style.opacity = currOp;
				animatingDOMs[i].currOp = currOp;

				if (currOp >= 1) {
					animatingDOMs.splice(i, 1);
				}
			}
			else {
				currOp -= rate;
				document.getElementById(animatingDOMs[i].id).style.opacity = currOp;
				animatingDOMs[i].currOp = currOp;

				if (currOp <= 0) {
					animatingDOMs.splice(i, 1);
				}
			}

		}
		else if (animatingDOMs[i].anim == "type"){
			if (tickCount % animatingDOMs[i].rate == 0){

				animatingDOMs[i].currstr += animatingDOMs[i].text.charAt(animatingDOMs[i].currind);
				animatingDOMs[i].currind++;

				document.getElementById(animatingDOMs[i].id).innerHTML = animatingDOMs[i].currstr;

				if (animatingDOMs[i].currind >= animatingDOMs[i].text.length){
					animatingDOMs.splice(i, 1);
				}
			}
		}

	}

}

function displayText(id, text, size, x, y, isBold, color, backgroundColor, typed, rate){

	if (document.getElementById(id)){
		var sampleText = document.getElementById(id);
		sampleText.style.display = "inline";
		sampleText.style.left = x*deviceScale+"px";
		sampleText.style.top = y*deviceScale+"px";
	}
	else{
		var sampleText = document.createElement("DIV");
		sampleText.style.color = color;
		sampleText.style.fontSize = size*deviceScale+"px";
		sampleText.innerHTML = text;
		sampleText.id = id;
		sampleText.style.position = "absolute";
		if (isBold)
			sampleText.style.fontWeight = "bold";
		sampleText.style.left = x*deviceScale+"px";
		sampleText.style.top = y*deviceScale+"px";
		sampleText.style.zIndex = 10;
		if (backgroundColor)
			sampleText.style.backgroundColor = backgroundColor;
		document.body.appendChild(sampleText);
		displayedGraphics.push(id);
	}	

	if (typed){
		sampleText.innerHTML = "";
		animatingDOMs.push({anim: "type", id: id, text: text, currstr: "", currind: 0, rate: rate, skip: false});
	}

}

function showImage(imgId, imgScale, x, y, zIndex, time, fadeIn) {

	var image = document.getElementById(imgId);
	image.style.width = image.width*deviceScale*imgScale+"px";
	image.style.height = image.height*deviceScale*imgScale+"px";
	image.style.top = y*deviceScale+"px";
	image.style.left = x*deviceScale+"px";
	image.style.zIndex = zIndex;

	displayedGraphics.push(imgId);
	image.style.display = "inline";

	if (time) {
		var currAnnInd = animatingDOMs.length-1;
		var opp = (fadeIn) ? 0 : 1;
		image.style.opacity = opp;
		animatingDOMs.push({anim: "fade", id: imgId, fadeIn: fadeIn, time: time, currOp: opp});
	}
}

function getIdIndex(arr, val){
	for (var i = 0; i < arr.length; i++){
		if (val === arr[i].id)
			return i;
	}
	console.log("error");
	return -1;
}

function cutscene(imgId, scale, zIndex, linetext, scenenum){

	showImage(imgId, scale, 0, 0, zIndex, 2000, true);
	var currLine = 0;
	var startTime = tickCount;

	function write() {
		if (document.getElementById(currLine-1+"cutscene"+scenenum))
			document.getElementById(currLine-1+"cutscene"+scenenum).style.display = "none";
		displayText(currLine+"cutscene"+scenenum, linetext[currLine], 40, 100, 530, false, "red", "black", true, 1);
		currLine++;
	}

	function disappear() {
		showImage(imgId, 1, 0, 0, zIndex, 2000, false);
		document.getElementById(currLine-1+"cutscene"+scenenum).style.display = "none";
		cutsceneboolarr[scenenum] = false;
	}

	var bankedtime = 0;
	for (var i = 0; i < linetext.length; i++){
		bankedtime += (linetext[i].length/20)*1000 + 300;
		setTimeout(write, bankedtime);
	}
	bankedtime += (linetext[linetext.length-1].length/20)*1000 + 300;
	setTimeout(disappear, bankedtime);
	return bankedtime + 1100;

}

function initInventory(){

	displayText("moneyvalue", "Quetzales: " + money.toFixed(2), 30, 1030, 15, false, "green", "black");
	for (var i = 0; i < cropArr.length; i++){
		displayText(cropArr[i] + "value", cropArrToSpanish[i] + ": " + Math.floor(cropVals[i]), 30, 1030, 50+35*i, false, "green", "black");
		if (cropVals[i] < 1) document.getElementById(cropArr[i] + "value").style.display = "none";
	}

}

function displayInventory(){
	document.getElementById("moneyvalue").innerHTML =  "Quetzales: " + money.toFixed(2);
	document.getElementById("moneyvalue").style.display = "inline";
	for (var i = 0; i < cropArr.length; i++){
		var tempelem = document.getElementById(cropArr[i] + "value");
		tempelem.innerHTML = cropArrToSpanish[i] + ": " + cropVals[i];
		if(cropVals[i] < 1){
			tempelem.style.display = "none";
		} else{
			tempelem.style.display = "inline";
		}
	}
}

function getCityIndex(cityname){
	for (var i = 0; i < cityCrops.length; i++){
		if (cityname === cityCrops[i].name)
			return i;
	}
	console.log("error");
	return -1;
}

function purchaseHarvester(cityIndex, cropIndex){


	var
	harvesters = cityCrops[cityIndex].harvesters[cropIndex],
	harvesterPrice = Math.round((0.5 + Math.pow(1.3, harvesters) + 2*harvesters)*100)/100;

	if (money >= harvesterPrice){

		money -= harvesterPrice;
		cityCrops[cityIndex].harvesters[cropIndex]++;
		harvesterPrice = Math.round((0.5 + Math.pow(1.3, harvesters+1) + 2*(harvesters+1))*100)/100;

		document.getElementById(cropArr[cropIndex]+"harvesters").innerHTML = ("Cosechadores: " + (harvesters+1) + "<br />" + harvesterPrice + " Quetzales");
		displayInventory();
	}

}

function sellCrops(i){
	money += cropVals[i]*(Math.round(cropArrPrices[i]*100)/100);
	cropArrPrices[i] *= Math.pow(0.5, (cropVals[i] / 10000));
	cropVals[i] = 0;
	document.getElementById(cropArr[i]+"priceper").innerHTML = "Cada uno: " + Math.round(cropArrPrices[i]*100)/100;
}

function purchaseStall(i){

	var stallCost = Math.round((cropArrPrices[i] * 10000)*100)/100;
	var cityIndex = getCityIndex(currentcityId);

	if (money >= stallCost){
		money-=stallCost;
		cityCrops[cityIndex].cropbool[i] = true;
		walkToMarket();
	}
}

function displayMarketOptions(){
	var
	cityIndex = getCityIndex(currentcityId),

	currNumCrop = 0,
	xOffset = 0,
	yOffset = 0;

	for (var i = 0; i < cityCrops[cityIndex].cropbool.length; i++){
		if (cityCrops[cityIndex].cropbool[i]){
			var tempY = 0;

			var tempImg = document.getElementById(cropArr[i])

			var ratio = 150/tempImg.height;

			if (ratio*tempImg.width > 140){
				var tempScale = 140 / tempImg.width;
				tempY = 100-(tempScale*tempImg.height);
			}
			else {
				tempScale = ratio;
			}

			showImage(cropArr[i], tempScale, 15+xOffset, 20 + tempY + currNumCrop*150+yOffset, 1);
			displayButton(cropArr[i]+"sellbutton", "Vender", 180+xOffset, 80 + currNumCrop*150+yOffset, false);
			displayText(cropArr[i]+"priceper", "Cada uno: " + Math.round(cropArrPrices[i]*100)/100, 20, 170+xOffset, 20 + currNumCrop*150+yOffset, true, "white", "black");
			(function(i) {
				document.getElementById(cropArr[i]+"sellbutton").onclick = function() { sellCrops(i); };
			})(i);
			currNumCrop++;
		}
		else { 

			displayText(cropArr[i]+"createplottext", "Costo de Constuir: " + Math.round((cropArrPrices[i] * 10000)*100)/100, 20, 160+xOffset, 20 + currNumCrop*150+yOffset, true, "white", "black")
			displayButton(cropArr[i]+"createplot", "Construir", 180+xOffset, 80 + currNumCrop*150+yOffset, true);
			currNumCrop++;
			(function(i) {
				document.getElementById(cropArr[i]+"createplot").onclick = function() { purchaseStall(i); };
			})(i); 
		}
		if (currNumCrop > 3) {xOffset = 450; yOffset = -600;}
	}

}


function displayCropImages(){
	var
	cityIndex = getCityIndex(currentcityId),

	currNumCrop = 0,
	xOffset = 0,
	yOffset = 0;


	for (var i = 0; i < cityCrops[cityIndex].cropbool.length; i++){
		if (cityCrops[cityIndex].cropbool[i]){
			var tempY = 0;

			var tempImg = document.getElementById(cropArr[i])

			var ratio = 150/tempImg.height;

			if (ratio*tempImg.width > 140){
				var tempScale = 140 / tempImg.width;
				tempY = 100-(tempScale*tempImg.height);
			}
			else {
				tempScale = ratio;
			}

			showImage(cropArr[i], tempScale, 15+xOffset, 20 + tempY + currNumCrop*150+yOffset, 1);
			displayButton(cropArr[i]+"buybutton", "Comprar", 180+xOffset, 80 + currNumCrop*150+yOffset, false);
			var tempHarvesters = cityCrops[cityIndex].harvesters[i];
			var tempHarvesterPrice = Math.round((0.5 + Math.pow(1.2, tempHarvesters) + 2*tempHarvesters)*100)/100;
			displayText(cropArr[i]+"harvesters", "Cosechadores: " + tempHarvesters + "<br />" + tempHarvesterPrice + " Quetzales", 20, 170+xOffset, 20 + currNumCrop*150+yOffset, true, "white", "black");
			(function(i) {
				document.getElementById(cropArr[i]+"buybutton").onclick = function() { purchaseHarvester(cityIndex, i); };
			})(i);
			currNumCrop++;
			if (currNumCrop > 3) {xOffset = 450; yOffset = -600;}
		}
	}

}

function purchaseBlackMarket(i){

	if (money >= BMInfo[i].price){
		money-=BMInfo[i].price;
		BMInfo[i].purchased = true;
	}
}

function blackMarket(){
	disableDOMs();
	showImage("cities/undergroundmarket", 1.5, 0, 0, 0);
	if (cutsceneboolarr[0]){
		var lineText = ["Ay, ¿Quién crees que eres?", "No debes estar aquí si no es necesario.", "Adelántese entonces, pero ten cuidado..."];
		setTimeout(shopping, cutscene("cities/shadymerchant", 1.2, 1, lineText, 0));
	}
	else {
		shopping();
	}

	function shopping(){
		initInventory();
		displayText("bmtext", "Estás en el mercado NEGRO.", 60, 90, 575, false, "red", "transparent", true, 1);
		var
		currVal = 0,
		xOffset = 0,
		yOffset = 0;
		

		for (var i = 0; i < BMInfo.length; i++){
			var tempY = 0;

			var tempImg = document.getElementById(BMInfo[i].imgId);

			var ratio = 150/tempImg.height;

			if (ratio*tempImg.width > 140){
				var tempScale = 140 / tempImg.width;
				tempY = 100-(tempScale*tempImg.height);
			}
			else {
				tempScale = ratio;
			}

			showImage(BMInfo[i].imgId, tempScale, 15+xOffset, 20 + tempY + currVal*150+yOffset, 1);

			if (!BMInfo[i].purchased){
				displayButton(BMInfo[i].imgId+"purchase", "Comprar", 180+xOffset, 80 + currVal*150+yOffset, false);
				tempStr = "";
				(function(i) {
					document.getElementById(BMInfo[i].imgId+"purchase").onclick = function() {	
						purchaseBlackMarket(i);
						blackMarket();
					};
				})(i);
			}
			else {
				displayText(BMInfo[i].imgId+"alreadybought", "Ya lo compraste", 20, 180+xOffset, 80 + currVal*150+yOffset, true, "white", "black");
			}
			
			displayText(BMInfo[i].imgId+"price", "Un(a) " + BMInfo[i].spanishName + ": " + BMInfo[i].price, 20, 170+xOffset, 20 + currVal*150+yOffset, true, "white", "black");
			currVal++;
			if (currVal > 3) {xOffset = 450; yOffset = -600;}
		}

		displayButton("leaveBMbutton", "Salir", 1065, 550, true, "black");
		document.getElementById("leaveBMbutton").onclick = function() { walkToMarket(); };
	}
}

function travelTo(i){
	currentcityId = circles[i].id;
	youAreIn("cities/"+currentcityId);
}

function viewMap(){

	disableDOMs();

	showImage("guatemalamap", 1, 0, 0, 0);
	if (BMInfo[1].purchased){
		for (var i = 0; i < circles.length; i++){
			document.getElementById(circles[i].id).style.display = "inline";
			displayedGraphics.push(circles[i].id);
			(function(i) {
				document.getElementById(circles[i].id).onclick = function() { travelTo(i); };
			})(i); 
		}
	} else {
		for (var i = 3; i < 5; i++){

			document.getElementById(circles[i].id).style.display = "inline";
			displayedGraphics.push(circles[i].id);
			(function(i) {
				document.getElementById(circles[i].id).onclick = function() { travelTo(i); };
			})(i); 
			}
		}
	}


function walkToMarket(){
	disableDOMs();
	initInventory();
	showImage("cities/SpanishMarket", 2, 0, 0, 0);
	displayButton("leavemarketbutton", "Salir", 1065, 550, true, "black");
	displayText("markettext", "Estás en el mercado.", 60, 90, 575, false, "black", "transparent", true, 1);
	if (money > 10){
		displayText("blackmarkettext", "Mercado Negro", 40, 1000, 430, true, "red", "black");
		displayButton("blackmarketbutton", "Cuidate", 1065, 480, true, "black");
		document.getElementById("blackmarketbutton").onclick = function() { blackMarket();};

	}
	displayMarketOptions();
	document.getElementById("leavemarketbutton").onclick = function() { youAreIn("cities/" + currentcityId); };
}

function initBasicButtons(){

	displayText("market", "Al mercado", 30, 1050, 515, true, "black");
	displayButton("marketbutton", "Caminar", 1065, 550, true, "black");
	document.getElementById("marketbutton").onclick = function() { 
		walkToMarket();
	};
	if (BMInfo[0].purchased){
		displayText("maptext", "La mapa", 30, 1050, 415, true, "black");
		displayButton("mapbutton", "Mirar", 1065, 450, true, "black");
		document.getElementById("mapbutton").onclick = function() { 
			viewMap();
		};
	}	


}

function youAreIn(cityId){

	disableDOMs();

	var cityImg = document.getElementById(cityId);
	var imgStretch = 1000/cityImg.width;
	
	showImage(cityId, imgStretch, 0, 0, 0);
	displayText("citytext", "Estás en la ciudad de " + currentcityId + ".", 50, 60, 575, false, "white", "transparent", true, 1);
	displayCropImages();
	initInventory();
	initBasicButtons();


}

function run(){
	setInterval(function() { tick(); }, 50);

	youAreIn("cities/"+currentcityId)

}

function startgame(male){

	isMale = male;

	disableDOMs();

	showImage("cities/guatemalatemple", 0.5, 0, 0, 0);
	displayText("welcometext", "Bienvenido a Guatemala!", 70, 100, 550, true, "white");
	displayButton("continuetogamebutton", "Continuar", 650, 75, "black", true);

	document.getElementById("continuetogamebutton").onclick = function() { 
		disableDOMs(["cities/guatemalatemple", "welcometext", "continuetogamebutton"]);
		run();
	};
}


function begingame(){

	deviceScale = document.documentElement.clientWidth / 1536;

	setTimeout(function(){
		// Hide the address bar!
		window.scrollTo(0, 1);
	}, 0);


	showImage("farmercat", 1.5, 0, 160, 0);

	displayText("introtext", "Bienvenido!", 150, 100, 0, true, "blue");
	displayText("starttext",
				"Macho&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hembra",
				60, 30, 200, true, "red");
	displayButton("malebutton", "Jugar", 70, 280, "black", true);
	displayButton("femalebutton", "Jugar", 860, 280, "black", true);

	document.getElementById("malebutton").onclick = function() {startgame(true);};
	document.getElementById("femalebutton").onclick = function() {startgame(false);};

}

begingame();
