$(function() {
	console.log("Load color list");
	
	function loadColors() {
		$.getJSON("/api/color/", function(colors) {
			var content = "<p>Colors : </p>";
			
			if(colors.length > 0) {
				var content = "";
				for(var i = 0; i < colors.length; i++){
					content += "<p style='color: " + colors[i] + ";'>Color " + i + "</p>";
				}
			}
			
			$(".desc").html(content);
		});
	}
	
	setInterval(loadColors, 2000);
});