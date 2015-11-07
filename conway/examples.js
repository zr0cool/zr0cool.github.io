function startGame( initialCells ) {
	function game_toggle(game, force) {
	  var interval = game.getInterval();
	  if (force == "stop" || interval !== null) {
		// Stop
		clearInterval(interval);
		game.setTheInterval(null);
	  } else {
		// start
		interval = setInterval(game.step, 100);
		game.setTheInterval(interval);
	  }
	}

	function add_listeners(game, example_num) {
	  $("#" + example_num + " .toggle, #" + example_num + " canvas").click(function(){
		game_toggle(game);
	  });
	  $("#" + example_num + " .step").click(function(){
		game_toggle(game, "stop");
		game.step();
	  });
	}

	var example1_cells = [
	  [0,0,0,0,0,0],
	  [0,0,0,0,0,0],
	  [0,0,0,0,0,0],
	  [0,0,0,0,0,0],
	  [0,0,0,0,0,0],
	  [0,0,0,0,0,0]
	];

	if( initialCells && Object.prototype.toString.call(initialCells) == "[object Array]" ) {
		for(var j = 0, len = initialCells.length; j<len; j++) {
			var initPos = initialCells[j]-1;
			example1_cells[ Math.floor(initPos/6) ][ initPos%6 ] = 1; 
		}
	}

	var game1 = new GameOfLife({
	  canvas_id:    "life-example1",
	  colorful: "white",
	  cell_width:   20,
	  cell_height:  20,
	  init_cells:   example1_cells
	});
	add_listeners(game1, "example1");
};

startGame([1,3,11,13,12,21]);
