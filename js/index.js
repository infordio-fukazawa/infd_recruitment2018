window.onload = function(){

	var settings = {
		interval : 3000, // cubeを出す間隔
		dur : 30000, // 	cubeが持続する時間
		windowWidth : $(window).width(),
		windowHeight : $(window).height()
	}

	// cubeの最終スタイル設定
	var styleFor = {
		height : 22, // cubeの高さ
		width : 22, // cubeの幅
		'border-width' : 10 // cubeの罫線幅
	}

	// cubeの初期スタイル設定
	var styleInit = {
		position:'absolute',
		'z-index' : 1,
		display : 'inline-block',
		border : 'solid 4px #eaeaea',
		height : 8,
		width : 8,
		adj : 0
	}

	var cube = {
		init : function(){
			$('body')
				.wrapInner('<div style="position:relative;z-index:2"></div>')
				.append('<div style="position:fixed;top:0;left:0;z-index:1" id="cube-area"></div>');

			$('#cube-area').css({
				height : settings.windowHeight,
				width : settings.windowWidth
			});

			styleInit.adj = styleFor['border-width'] + styleFor['width'];
		},
		add : function(){
			var initX = cube.getRandomX();
			var initY = cube.getRandomY();

			var endX = cube.getRandomX();
			var endY = cube.getRandomY();

			styleFor.left = endX;
			styleFor.top = endY;

			$('#cube-area').append($('<div class="block" />')
				.css(styleInit) // end init
				.css({
					top : initY,
					left : initX,
				})
				.animate(styleFor,{
						easing : 'linear',
						duration : settings.dur,
						complete : function(){
							$(this).fadeOut(300,function(){
								$(this).remove();
							});
						}
					}
				)
			);
		},
		getRandomX : function(){
			return Math.floor( Math.random() * settings.windowWidth - styleInit.adj);
		},
		getRandomY : function(){
			return Math.floor( Math.random() * settings.windowHeight );
		}
	}


	// execute
	cube.init();
	setInterval(function(){
		cube.add();
	},settings.interval);
}