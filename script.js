//JUMBOTRON
var $jumbotronContainerBefore = $('#jumbotronContainerBefore'),
	 $jumbotronFigure = $('#jumbotronFigure'),
	 $jumbotronCategory = $('#jumbotronCategory'),
	 $jumbotronTitle = $('#jumbotronTitle'),
	 $jumbotronBody = $('#jumbotronBody'),
	 $jumbotronFooter = $('#jumbotronFooter');

var jumbotron = {
	init: function() {
		jumbotron.figure.visible();
		console.log('jumbotron.init()');
	},
	containerBefore: {
		visible: function() {
			var flagStepOpacity = 0;
			$jumbotronContainerBefore
				.delay(300)
				.animate({
					width: '5px',
					opacity: 1
				}, {
					duration: 600,
					step: function(now, fx) {
						if(flagStepOpacity == 0 && fx.prop == 'opacity' && now > '0.5') {
							jumbotron.category.visible();
							flagStepOpacity = 1;
						}
					},
					complete: function() {
						console.log('jumbotron.containerBefore.visible()');
					}
				});
		}
	},
	figure: {
		visible: function() {
			var flagStepOpacity = 0;
			$jumbotronFigure
				.animate({
					opacity: 1
				}, {
					duration: 900,
					step: function(now, fx) {
						if(flagStepOpacity == 0 && fx.prop == 'opacity' && now > '0.25') {
							var $this = $(this);
							$this.addClass('visible');
							flagStepOpacity = 1;
						}
					},
					complete: function() {
						jumbotron.containerBefore.visible()
						console.log('jumbotron.figure.visible()');
					}
				});
		}
	},
	category: {
		visible: function() {
			var flagStepOpacity = 0;
			$jumbotronCategory
				.animate({
					left: 0,
					opacity: 1
				}, {
					duration: 600,
					step: function(now, fx) {
						if(flagStepOpacity == 0 && fx.prop == 'opacity' && now > '0.25') {
							jumbotron.title.visible();
							flagStepOpacity = 1;
						}
					},
					complete: function() {
						console.log('jumbotron.category.visible()');
					}
				});
		}
	},
	title: {
		visible: function() {
			var flagStepOpacity = 0;
			$jumbotronTitle
				.animate({
					left: 0,
					opacity: 1
				}, {
					duration: 600,
					step: function(now, fx) {
						if(flagStepOpacity == 0 && fx.prop == 'opacity' && now > '0.25') {
							jumbotron.body.visible();
							flagStepOpacity = 1;
						}
					},
					complete: function() {
						console.log('jumbotron.title.visible()');
					}
				});
		}
	},
	body: {
		visible: function() {
			var flagStepLeft = 0;
			$jumbotronBody
				.animate({
					left: 0,
					opacity: 1
				}, {
					duration: 600,
					complete: function() {
						jumbotron.footer.visible();
						console.log('jumbotron.body.visible()');
					}
				});
		}
	},
	footer: {
		visible: function() {
			$jumbotronFooter
				.delay(600)
				.animate({
					opacity: 1
				}, {
					duration: 600,
					complete: function() {
						console.log('jumbotron.footer.visible()');
					}
				});
		}
	}
};

$(document).ready(function() {
	jumbotron.init();
});



	//Page cursor start //

    document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
        t.style.left = n.clientX + "px", 
		t.style.top = n.clientY + "px", 
		e.style.left = n.clientX + "px", 
		e.style.top = n.clientY + "px", 
		i.style.left = n.clientX + "px", 
		i.style.top = n.clientY + "px"
    });
    var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");
    function n(t) {
        e.classList.add("hover"), i.classList.add("hover")
    }
    function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover")
    }
    s();
    for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }
    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    }


	// Page cursors end //