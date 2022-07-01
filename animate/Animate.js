(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC99").s().p("AyOSPQnjnkAAqrQAAqqHjnkQHjnjKrAAQKsAAHiHjQHkHkAAKqQAAKrnkHkQniHjqsAAQqrAAnjnjg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-165,-165,330,330);


(lib.Tween8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC99").s().p("AyOSPQnjnkAAqrQAAqqHjnkQHknjKqAAQKrAAHkHjQHjHkAAKqQAAKrnjHkQnkHjqrAAQqqAAnknjg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-165,-165,330,330);


(lib.Tween7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6633FF").s().p("AAlBUIglhxIAGgQIgKAAIAEAQIglBxIgqAAIg2inIAoAAIAmB1IgLAfIAVAAIgKgfIAnh1IAjAAIAmB2IAoh2IAlAAIg3CngABDBBIgKgeIAKAeIgTAAIAJgeIgJAeIATAAgABDBBgAhCBBIALgfIAKAfgAg3AigAAAgdIgEgQIAKAAIgGAQg");
	this.shape.setTransform(162.725,1.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6633FF").s().p("AhABUIAAinIB+AAIAAAfIhXAAIAAAkIBNAAIAAAeIhNAAIAAgeIgDAAIAAAeIADAAIAAAnIBaAAIAAAfgAgZAOgAgZAOgAgcAOIAAgeIADAAIAAAegAgZgQg");
	this.shape_1.setTransform(141.15,1.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6633FF").s().p("AgSBUIAAinIAlAAIAACng");
	this.shape_2.setTransform(128.75,1.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6633FF").s().p("AgSBUIhJinIAqAAIAyB3IgLAdIAXAAIgMgdIA0h3IAnAAIhJCngAANBBgAgKBBIALgdIAMAdgAABAkg");
	this.shape_3.setTransform(115.875,1.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6633FF").s().p("AhABUIAAinIB+AAIAAAfIhXAAIAAAkIBNAAIAAAeIhNAAIAAgeIgDAAIAAAeIADAAIAAAnIBaAAIAAAfgAgZAOgAgZAOgAgcAOIAAgeIADAAIAAAegAgZgQg");
	this.shape_4.setTransform(99.3,1.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6633FF").s().p("AAgBUIgggvQAVAAAPgHIgEgHIgpAAIAJAOIgBAAIgiAAIAAgMIAAgFIAAgOIgRAAIAPAQIgPAPIARAAIAAAvIgmAAIAAinIBIAAQAVAAARAHQAQAIAJAOQAJANAAATQAAASgJANQgJAOgQAHIgBAAIAnA2gAgDAGQARAAAJgGQAJgJAAgNQAAgOgJgHQgJgJgRAAIggAAIAAgSIgRASIARAAIAAA6IAgAAgAAAAlIAAAAgAgJAXIApAAIAEAHQgPAHgVAAgAgjAlgAgjAlgAg0AlIAPgPIACgCIAAAFIgCgDIACADIAAAMgAgjAZgAg0AGIARAAIAAAOIgCACgAgDAGIggAAIAAg6IAgAAQARAAAJAJQAJAHAAAOQAAANgJAJQgJAGgRAAgAgjg0gAgjg0IgRAAIARgSIAAASg");
	this.shape_5.setTransform(82.6,1.65);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6633FF").s().p("AhIBUIAAinIBIAAQAWAAARAHQAQAIAJAOQAJANAAATQAAASgJAOQgJANgQAHQgRAIgWAAIghAAIAAgNIAAgFIAAgOIgRAAIAPAQIgPAQIARAAIAAAugAgBAGQARAAAJgGQAIgJAAgNQAAgOgIgHQgJgJgRAAIggAAIAAgSIgRASIARAAIAAA6IAAg6IAgAAQARAAAJAJQAIAHAAAOQAAANgIAJQgJAGgRAAIggAAgAghAmgAgyAmIAPgQIgPgQIARAAIAAAOIgCACIACADIAAANgAgjAWIACgCIAAAFgAghAUgAghg0IgRAAIARgSIAAASg");
	this.shape_6.setTransform(64.875,1.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6633FF").s().p("AgTBUIAAiIIg1AAIAAgfICRAAIAAAfIg2AAIAACIg");
	this.shape_7.setTransform(41.375,1.65);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6633FF").s().p("AgYBRQgRgHgMgLQgMgNgIgPQgGgQAAgTQAAgSAGgQQAIgPAMgMQAMgMARgGQARgHASAAQAWAAARAHQASAJAMAOIgZAXQgIgKgLgFQgLgFgMAAQgMAAgIAEQgLAEgGAHQgIAIgEAJQgDAKgBALQABAMADAKQAEAJAIAIQAGAHALAEQAIAEAMAAQAMAAALgFQALgFAIgKIAZAXQgMAPgSAHQgRAIgWAAQgSAAgRgGg");
	this.shape_8.setTransform(25.3,1.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6633FF").s().p("AhABUIAAinIB+AAIAAAfIhXAAIAAAkIBMAAIAAAeIhMAAIAAgeIgEAAIAAAeIAEAAIAAAnIBaAAIAAAfgAgZAOIgEAAIAAgeIAEAAIAAAeg");
	this.shape_9.setTransform(8.75,1.65);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6633FF").s().p("AghBPQgOgHgKgLIAWgaQAHAJAIAFQAHAFAJgBQAXAAAAgcIAAhPIg6AAIAAgfIBhAAIAABsQAAAfgQAQQgPAPgdAAQgRAAgOgGg");
	this.shape_10.setTransform(-7.375,1.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6633FF").s().p("AgkBRQgQgHgNgMQgMgMgHgPQgHgRAAgSQAAgSAHgQQAHgPAMgMQANgMARgGQAQgHATAAQAUAAARAHQAQAGANAMQAMAMAHAPQAHAQAAASQAAASgHARQgHAQgMAMQgNALgQAHQgRAGgUAAQgTAAgRgGgAgUgxQgJAEgHAHQgIAIgEAJQgDAKAAALQAAAMADAKQAEAJAIAIQAHAHAJAEQAKAEAKAAQALAAAKgEQAJgEAIgHQAHgIAEgJQAEgKAAgMQAAgLgEgKQgEgJgHgIQgIgHgJgEQgKgEgLAAQgKAAgKAEg");
	this.shape_11.setTransform(-22.875,1.65);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6633FF").s().p("AAgBUIgggvQAVAAAQgHQgQAHgVAAIgJgOIAoAAIAGAHIAlA2gAhKBUIAAinIBJAAQAWAAAQAHQARAIAIAOQAJANAAATQAAASgJANQgIAOgRAHIAAAAIgGgHIgoAAIAJAOIgBAAIghAAIAAgMIAAgFIgDACIADADIAAAMIgSAAIAPgPIgPgQIASAAIAAAOIAAgOIgSAAIAPAQIgPAPIASAAIAAAvgAgDAGQARAAAJgGQAIgJAAgNQAAgOgIgHQgJgJgRAAIgfAAIAAgSIgSASIASAAIAAA6gAgiAlgAgiAZgAglAWIADgCIAAAFgAgiAGIAAg6IAfAAQARAAAJAJQAIAHAAAOQAAANgIAJQgJAGgRAAgAgiAGgAg0g0IASgSIAAASg");
	this.shape_12.setTransform(-41.2,1.65);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#6633FF").s().p("AhIBUIAAinIBIAAQAWAAARAHQAQAIAJAOQAJANAAATQAAASgJAOQgJANgQAHQgRAIgWAAIghAAIAAgNIAAgFIgCACIACADIAAANIgRAAIAPgQIgPgQIARAAIAAAOIAAgOIgRAAIAPAQIgPAQIARAAIAAAugAgBAGQARAAAJgGQAIgJAAgNQAAgOgIgHQgJgJgRAAIggAAIAAgSIgRASIARAAIAAA6IAAg6IAgAAQARAAAJAJQAIAHAAAOQAAANgIAJQgJAGgRAAIggAAgAghAmgAghAZgAghAZIgCgDIACgCIAAAFgAghg0IgRAAIARgSIAAASg");
	this.shape_13.setTransform(-58.925,1.65);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#6633FF").s().p("AgTBUIAAiIIg1AAIAAgfICRAAIAAAfIg2AAIAACIg");
	this.shape_14.setTransform(-82.425,1.65);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6633FF").s().p("AAtBUIhThlIAAgTIgPAAIAPATIAABlIgmAAIAAinIAgAAIBTBlIAAhlIAmAAIAACngAAnAlIAPAAIgPgTIAPATIgPAAIAAgTIAAATgAgmgRIgPgTIAPAAIAAATg");
	this.shape_15.setTransform(-99.55,1.65);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#6633FF").s().p("AhABUIAAinIB+AAIAAAfIhYAAIAAAkIBOAAIAAAeIhOAAIAAgeIgCAAIAAAeIACAAIAAAnIBbAAIAAAfgAgaAOIgCAAIAAgeIACAAIAAAeg");
	this.shape_16.setTransform(-116.85,1.65);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#6633FF").s().p("AgYBRQgRgHgMgLQgMgNgIgPQgGgQAAgTQAAgSAGgQQAIgPAMgMQAMgMARgGQARgHASAAQAWAAARAHQASAJAMAOIgZAXQgIgKgLgFQgLgFgMAAQgMAAgIAEQgLAEgGAHQgIAIgEAJQgDAKgBALQABAMADAKQAEAJAIAIQAGAHALAEQAIAEAMAAQAMAAALgFQALgFAIgKIAZAXQgMAPgSAHQgRAIgWAAQgSAAgRgGg");
	this.shape_17.setTransform(-134,1.65);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#6633FF").s().p("AhABUIAAinIB+AAIAAAfIhXAAIAAAkIBMAAIAAAeIhMAAIAAgeIgEAAIAAAeIAEAAIAAAnIBaAAIAAAfgAgZAOIgEAAIAAgeIAEAAIAAAeg");
	this.shape_18.setTransform(-150.55,1.65);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#6633FF").s().p("AAgBUIgggvQAVAAAPgHIgEgHIgpAAIAJAOIgJgOIApAAIAEAHQgPAHgVAAIgBAAIgiAAIAAgMIAAAMIgRAAIAPgPIgPgQIARAAIAAAOIgCACIACADIgCgDIACgCIAAAFIAAgFIAAgOIAgAAQARAAAJgGQAJgJAAgNQAAgOgJgHQgJgJgRAAIggAAIAAgSIgRASIARAAIAgAAQARAAAJAJQAJAHAAAOQAAANgJAJQgJAGgRAAIggAAIAAg6IAAA6IgRAAIAPAQIgPAPIARAAIAAAvIgmAAIAAinIBIAAQAWAAAQAHQAQAIAJAOQAJANAAATQAAASgJANQgJAOgQAHIgBAAIAmA2gAgjAGgAgjg0IgRAAIARgSIAAASg");
	this.shape_19.setTransform(-167.25,1.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-178.7,-18.5,357.5,37.1);


(lib.recentproject = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6633FF").s().p("AAlBUIglhxIAGgQIgKAAIAEAQIgEgQIAKAAIgGAQIglBxIgqAAIg2inIAoAAIAmB1IAnh1IAjAAIAnB2IAnh2IAlAAIg3CngAAwBBIATAAIgJgeIAJAeIgTAAIAKgeIgKAegAhCBBIAVAAIgKgfIAKAfIgVAAIALgfIgLAfg");
	this.shape.setTransform(341.475,20.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6633FF").s().p("AhABUIAAinIB+AAIAAAfIhXAAIAAAkIBNAAIAAAeIhNAAIAAgeIgDAAIAAAeIADAAIAAAnIBaAAIAAAfgAgcAOIAAgeIADAAIAAAeg");
	this.shape_1.setTransform(319.9,20.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6633FF").s().p("AgTBUIAAinIAmAAIAACng");
	this.shape_2.setTransform(307.5,20.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6633FF").s().p("AgSBUIhJinIAqAAIAyB3IgLAdIAXAAIgMgdIA0h3IAnAAIhJCngAANBBgAgKBBIALgdIAMAdgAABAkg");
	this.shape_3.setTransform(294.625,20.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6633FF").s().p("AhABUIAAinIB+AAIAAAfIhYAAIAAAkIBOAAIAAAeIhOAAIAAgeIgCAAIAAAeIACAAIAAAnIBbAAIAAAfgAgaAOIgCAAIAAgeIACAAIAAAeg");
	this.shape_4.setTransform(278.05,20.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6633FF").s().p("AAgBUIgggvQAVAAAPgHIAnA2gAhKBUIAAinIBJAAQAVAAARAHQAQAIAJAOQAJANAAATQAAASgJANQgJAOgQAHIgBAAQgPAHgVAAIgBAAIgiAAIAAAvgAAAAlIgJgOIApAAIAEAHIgEgHIgpAAgAg0AlIARAAIAAgMIAAgFIgCACIgPgQIARAAIAAAOIAAgOIgRAAIAPAQIgPAPgAgjAGIAgAAQARAAAJgGQAJgJAAgNQAAgOgJgIQgJgIgRAAIggAAIAAgSIgRASIARAAIAAA6gAg0AlIAPgPIACADIAAAMgAglAWIACgCIAAAFgAglAWgAgjAGIAAg6IgRAAIARgSIAAASIAgAAQARAAAJAIQAJAIAAAOQAAANgJAJQgJAGgRAAgAgjg0g");
	this.shape_5.setTransform(261.35,20.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6633FF").s().p("AhIBUIAAinIBIAAQAWAAARAHQAQAIAJAOQAJANAAATQAAASgJANQgJAOgQAHQgRAIgWgBIghAAIAAgMIAAgFIAAgOIAgAAQARAAAJgGQAIgJAAgNQAAgOgIgIQgJgIgRAAIggAAIAAgSIgRASIARAAIAAA6IAAg6IAgAAQARAAAJAIQAIAIAAAOQAAANgIAJQgJAGgRAAIggAAIgRAAIAPAQIgPAPIARAAIAAAvgAghAlgAgyAlIAPgPIACADIAAAMgAgjAWIACgCIAAAFgAgjAWgAgyAGIARAAIAAAOIgCACgAghg0gAghg0IgRAAIARgSIAAASg");
	this.shape_6.setTransform(243.625,20.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6633FF").s().p("AgTBUIAAiIIg1AAIAAgfICRAAIAAAfIg2AAIAACIg");
	this.shape_7.setTransform(220.125,20.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6633FF").s().p("AgYBRQgRgHgMgLQgNgNgGgPQgHgQAAgTQAAgSAHgQQAGgQANgMQAMgLARgHQARgGASAAQAWAAARAHQASAJAMAOIgZAXQgIgKgLgFQgLgFgMAAQgMAAgIAEQgLAEgGAHQgIAIgEAJQgDAKgBALQABAMADAKQAEAKAIAHQAGAHALAEQAIAEAMAAQAMAAALgFQALgFAIgKIAZAXQgMAPgSAHQgRAIgWAAQgTAAgQgGg");
	this.shape_8.setTransform(204.05,20.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6633FF").s().p("AhABUIAAinIB+AAIAAAfIhXAAIAAAkIBNAAIAAAeIhNAAIAAgeIgDAAIAAAeIADAAIAAAnIBaAAIAAAfgAgcAOIAAgeIADAAIAAAegAgZgQg");
	this.shape_9.setTransform(187.5,20.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6633FF").s().p("AghBPQgOgHgKgLIAWgaQAHAJAIAFQAHAFAJAAQAXAAAAgdIAAhOIg6AAIAAggIBhAAIAABsQAAAggQAPQgPAPgdAAQgRAAgOgGg");
	this.shape_10.setTransform(171.375,20.35);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6633FF").s().p("AgkBRQgQgHgNgMQgMgMgHgPQgHgQAAgTQAAgSAHgQQAHgQAMgLQANgMARgHQAQgGATAAQAUAAARAGQAQAHANAMQAMALAHAQQAHAQAAASQAAATgHAQQgHAPgMANQgNALgQAHQgRAGgUAAQgTAAgRgGgAgUgxQgJAEgHAHQgIAIgEAJQgDAKAAALQAAAMADAKQAEAKAIAHQAHAHAJAEQAKAEAKAAQALAAAKgEQAJgEAIgHQAHgHAEgKQAEgKAAgMQAAgLgEgKQgEgJgHgIQgIgHgJgEQgKgEgLAAQgKAAgKAEg");
	this.shape_11.setTransform(155.875,20.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6633FF").s().p("AAgBUIgggvQAVAAAQgHQgQAHgVAAIgJgOIAoAAIAGAHIgGgHIgoAAIAJAOIgBAAIghAAIAAgMIAAgFIAAgOIgSAAIAPAQIgPAPIASAAIAAAvIgnAAIAAinIBIAAQAWAAAQAHQARAIAIAOQAJANAAATQAAASgJANQgIAOgRAHIAAAAIAlA2gAgDAGQARAAAJgGQAJgJgBgNQABgOgJgIQgJgIgRAAIgfAAIAAgSIgSASIASAAIAAA6gAg0AlIAPgPIADADIgDgDIADgCIAAAFIAAAMgAglAWgAg0AGIASAAIAAAOIgDACgAgiAGIAAg6IAfAAQARAAAJAIQAJAIgBAOQABANgJAJQgJAGgRAAgAgiAGgAgig0gAg0g0IASgSIAAASg");
	this.shape_12.setTransform(137.55,20.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#6633FF").s().p("AhIBUIAAinIBIAAQAWAAARAHQAQAIAJAOQAJANAAATQAAASgJANQgJAOgQAHQgRAIgWgBIghAAIAAgMIAAgFIAAgOIAgAAQARAAAJgGQAIgJAAgNQAAgOgIgIQgJgIgRAAIggAAIAAgSIgRASIARAAIAAA6IgRAAIAPAQIgPAPIARAAIAAAvgAghAlIgRAAIAPgPIACADIAAAMgAghAZgAgjAWIACgCIAAAFgAgjAWIgPgQIARAAIAAAOIgCACgAghAGIAAg6IAgAAQARAAAJAIQAIAIAAAOQAAANgIAJQgJAGgRAAgAghg0gAghg0IgRAAIARgSIAAASg");
	this.shape_13.setTransform(119.825,20.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#6633FF").s().p("AgTBUIAAiIIg1AAIAAgfICRAAIAAAfIg2AAIAACIg");
	this.shape_14.setTransform(96.325,20.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6633FF").s().p("AAtBUIhThlIAAgTIgPAAIAPATIAABlIgmAAIAAinIAgAAIBTBlIAPATIgPAAIAAgTIAAATIAPAAIgPgTIAAhlIAmAAIAACngAg1gkIAPAAIAAATg");
	this.shape_15.setTransform(79.2,20.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#6633FF").s().p("AhABUIAAinIB+AAIAAAfIhYAAIAAAkIBNAAIAAAeIhNAAIAAgeIgCAAIAAAeIACAAIAAAnIBbAAIAAAfgAgaAOgAgaAOgAgcAOIAAgeIACAAIAAAegAgagQg");
	this.shape_16.setTransform(61.9,20.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#6633FF").s().p("AgYBRQgRgHgMgLQgNgNgGgPQgHgQAAgTQAAgSAHgQQAGgQANgMQAMgLARgHQARgGASAAQAWAAARAHQASAJAMAOIgZAXQgIgKgLgFQgLgFgMAAQgMAAgIAEQgLAEgGAHQgIAIgEAJQgDAKgBALQABAMADAKQAEAKAIAHQAGAHALAEQAIAEAMAAQAMAAALgFQALgFAIgKIAZAXQgMAPgSAHQgRAIgWAAQgTAAgQgGg");
	this.shape_17.setTransform(44.75,20.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#6633FF").s().p("AhABUIAAinIB+AAIAAAfIhXAAIAAAkIBNAAIAAAeIhNAAIAAgeIgDAAIAAAeIADAAIAAAnIBaAAIAAAfgAgZAOIgDAAIAAgeIADAAIAAAeg");
	this.shape_18.setTransform(28.2,20.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#6633FF").s().p("AAgBUIgggvQAVAAAPgHIAnA2gAhKBUIAAinIBJAAQAVAAARAHQAQAIAJAOQAJANAAATQAAASgJANQgJAOgQAHIgBAAIgEgHIgpAAIAJAOIgBAAIgiAAIAAAvgAg0AlIARAAIAAgMIAAgFIgCACIgPgQIARAAIAAAOIAAgOIgRAAIAPAQIgPAPgAgDAGQARAAAJgGQAJgJAAgNQAAgOgJgIQgJgIgRAAIggAAIAAgSIgRASIARAAIAAA6IAAg6IAgAAQARAAAJAIQAJAIAAAOQAAANgJAJQgJAGgRAAIggAAgAAAAlIgJgOIApAAIAEAHQgPAHgVAAgAg0AlIAPgPIACgCIAAAFIgCgDIACADIAAAMgAglAWgAgjg0gAgjg0IgRAAIARgSIAAASg");
	this.shape_19.setTransform(11.5,20.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.recentproject, new cjs.Rectangle(0,0,357.5,37.1), null);


// stage content:
(lib.Animate = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.instance = new lib.recentproject();
	this.instance.setTransform(237.3,62.7,2.7945,2.7945,0,0,0,178.6,18.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance_1 = new lib.Tween7("synched",0);
	this.instance_1.setTransform(237.5,62.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},9).to({state:[{t:this.instance_1}]},14).wait(73));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({_off:true,regX:0,regY:0,scaleX:1,scaleY:1,x:237.5,y:62.5,alpha:1,mode:"synched",startPosition:0},14,cjs.Ease.cubicInOut).wait(73));

	// shape
	this.instance_2 = new lib.Tween8("synched",0);
	this.instance_2.setTransform(672,55.05);

	this.instance_3 = new lib.Tween9("synched",0);
	this.instance_3.setTransform(434,55.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},14).wait(82));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true,x:434},14,cjs.Ease.cubicInOut).wait(82));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-24.3,-47.4,861.3,267.5);
// library properties:
lib.properties = {
	id: 'C0873DD59A5CD44A836E746AD3BB9B73',
	width: 475,
	height: 125,
	fps: 24,
	color: "#FFFFCC",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['C0873DD59A5CD44A836E746AD3BB9B73'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;