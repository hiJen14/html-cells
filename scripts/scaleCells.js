/*Script to rock the cells. Or scale them!*/
/******************************************/

function InitializeCells() 
{
    /*
    JS variable names, initialised outside JS file.
	
	Vars:
	totalMainCells
	cellsOnRow

	Arrays:
    widthCells
    heightCells
    lockedCells
    ********************************************
    */
	
	/* Performances calculation */
	if(debugModus)
	{
		var startTime = new Date();
	}
    
	var rows = totalMainCells / cellsOnRow;
	
	//needed for calculating each row.
	for(var j = 0; j < rows; j++)
	{
		//Calculate beginning each row.
		var startOfRow = j * cellsOnRow;
		
		var totalWidthCount = 0;
		//look at all cells in a "row". 
		//A row isn't defined by <div>, but by cellsOnRow
		for (var i = 1; i <= cellsOnRow; i++) 
		{	
			/*Count up the widthCells percentage count*/
			totalWidthCount += parseInt(widthCells[i + startOfRow - 1]);
		}
	
		//  100% / totalWidthCount 
		var percentage = 100 / totalWidthCount;
    
		/*Put width on <div id="cell">*/
		for (i = 1; i <= cellsOnRow; i++) 
		{	
			var element = document.getElementById("cell" + (i + startOfRow).toString());
		
			//Calculate width of each cell.
			var percentageOfElement = parseInt(widthCells[i + startOfRow - 1]) * percentage;
			element.style.width = percentageOfElement.toString() + "%";
		}	
	
		var biggestHeight = 0; 
		if(debugModus)
		{
			console.log("Height: " + biggestHeight);
		}
		//look at all cells in a "row". 
		//A row isn't defined by <div>, but by cellsOnRow
		for (var i = 1; i <= cellsOnRow; i++) 
		{
			/*Find biggest element height*/
			var elementHeight = document.getElementById("cell" + (i + startOfRow).toString()).clientHeight;
			if(elementHeight > biggestHeight)
			{
				biggestHeight = elementHeight;
			}
		}
		
		console.log("document.getElementById().clientHeight " + document.getElementById("cell1").clientHeight);
		console.log("document.getElementById().innerHeight " + document.getElementById("cell1").innerHeight);
		
		if(debugModus)
		{
			console.log("Height: " + biggestHeight);
		}
	
		/*Put height on <div id="cell">*/
		for (i = 1; i <= cellsOnRow; i++) 
		{
			var element = document.getElementById("cell" + (i + startOfRow).toString());
			
			//Height
			var thisHeight = heightCells[i + startOfRow - 1];
			
			//Lock height or not.
			if(thisHeight != "")
			{
				element.style.height = thisHeight.toString() + "px";
			}
			else
			{
				element.style.height = biggestHeight.toString() + "px";
			}
		}	
	}
	
	/* Performances calculation */
	if(debugModus)
	{
		var Duration = new Date() - startTime;
		console.log(Duration + "ms");
	}
}