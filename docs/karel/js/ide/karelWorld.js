
// Karel World class	
function KarelWorld(appWidth, appHeight) {

	alert('depricated class')

	// var BORDER_SIZE = 0;
	// var CROSS_FRACTION = 0.15;

	// var cornerSize;

	// var rows, cols;

	// var worldWidth, worldHeight;

	// var top, left;
	// var bottom, right;

	// var beepers, virtualBeepers;
	// var walls;

	// var squareColors = new Array();

	// this.draw = function(c) {
	// 	console.error('depricated')
	// }

	// this.drawWalls = function(c) {
	// 	walls.draw(c, cornerSize);
	// }

	// this.loadWorld = function(worldText, karel) {

	// 	console.log(worldText)
	// 	console.log('is this even a thing???')

	// 	var lines = worldText.split("\n");

	// 	// get world dimension
	// 	var dimensionTxt = lines[0];
	// 	var dimensionStrings = lines[0].split(":");

	// 	rows = parseInt(dimensionStrings[1]);
	// 	cols = parseInt(dimensionStrings[2]);

	// 	// reset variables
	// 	cornerSize = Const.DEFAULT_CORNER_SIZE;
	// 	gutterSize = Const.GUTTER_SIZE;
	// 	worldWidth = cols * cornerSize;
	// 	worldHeight = rows * cornerSize;

	// 	// the main goal of this part is to calculate cornerSize
	// 	var canvasWidth = appWidth - BORDER_SIZE * 2 - gutterSize;
	// 	var canvasHeight = appHeight - BORDER_SIZE * 2 - gutterSize;
	// 	if(worldWidth > canvasWidth || worldHeight > canvasHeight) {
	// 		var xScale = canvasWidth / worldWidth;
	// 		var yScale = canvasHeight / worldHeight;
	// 		var maxScale = Math.min(xScale, yScale);
	// 		worldWidth = worldWidth * maxScale;
	// 		worldHeight = worldHeight * maxScale;
	// 		cornerSize = cornerSize * maxScale;
	// 	}

	// 	// I feel confident that these values are ignored and
	// 	// instead the drawing logic is in KarelView
	// 	top = (appHeight - worldHeight)/2;
	// 	left = (appWidth - worldWidth)/2;
	// 	bottom = top + worldHeight;
	// 	right = left + worldWidth;

	// 	beepers = new Beepers(rows, cols, left, top);
	// 	virtualBeepers = new Beepers(rows, cols, left, top);
	// 	walls = new Walls(rows, cols, left, top);

	// 	for (var i = 0; i < rows; i++) {
	// 		squareColors[i] = new Array();
	// 		for (var j = 0; j < cols; j++) {
	// 			squareColors[i][j] = null;
	// 		}
	// 	}

	// 	karel.reset(rows - 1, 0);

	// 	// load world details
	// 	for (var i = 1; i < lines.length; i++) {
	// 		loadLine(lines[i], karel);
	// 	}

	// }

	// function loadLine(line, karel) {
	// 	var elements = line.split(":");
	// 	if (elements.length != 3) {
	// 		return;
	// 	}
	// 	var key = elements[0];
	// 	var v1 = parseInt(elements[1]);
	// 	var v2 = parseInt(elements[2]);

	// 	if (key == "karel")  {
	// 		karel.reset(v1, v2);
	// 	} else if (key == "top")  {
	// 		walls.addTopWall(v1, v2);
	// 	} else if (key == "right") {
	// 		walls.addRightWall(v1, v2);
	// 	} else if (key == "beeper") {
	// 		beepers.putBeeper(v1, v2);
	// 		virtualBeepers.putBeeper(v1, v2);
	// 	}
	// }

	// this.isMoveValid = function(startX, startY, endX, endY) {
	// 	if(endX < 0 || endX >= cols) return false;
	// 	if(endY < 0 || endY >= rows) return false;
		
	// 	if(startX + 1 == endX && walls.rightWall(startY, startX)) return false;
	// 	if(startX - 1 == endX && walls.rightWall(endY, endX)) return false;

	// 	if(startY + 1 == endY && walls.topWall(endY, endX)) return false;
	// 	if(startY - 1 == endY && walls.topWall(startY, endX)) return false;

	// 	return true;
	// }

	// this.putBeeper = function(r, c) {
	// 	beepers.putBeeper(r, c);
	// }

	// this.putVirtualBeeper = function(r, c) {
	// 	virtualBeepers.putBeeper(r, c);
	// }

	// this.pickBeeper = function(r, c) {
	// 	beepers.pickBeeper(r, c);

	// }

	// this.paintCorner = function(r, c, color) {
	// 	squareColors[r][c] = color;
	// }

	// this.pickVirtualBeeper = function(r, c) {
	// 	if (virtualBeepers.beeperPresent(r, c)) {
	// 		virtualBeepers.pickBeeper(r, c);
	// 	}
	// }

	// this.virtualBeeperPresent = function(r, c) {
	// 	return virtualBeepers.beeperPresent(r, c);
	// }

	// this.beeperPresent = function(r, c) {
	// 	return beepers.beeperPresent(r, c);
	// }

	// this.getRows = function() {
	// 	return rows;
	// }

	// this.getCols = function() {
	// 	return cols;
	// }

	// this.getBottom = function() {
	// 	return bottom;
	// }

	// this.getTop = function() {
	// 	return top;
	// }

	// this.getLeft = function() {
	// 	return left;
	// }
}


