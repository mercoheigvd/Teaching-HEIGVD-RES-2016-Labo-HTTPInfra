$(function() {
	console.log("Load color list");
	
	function loadColors() {
		$.getJSON("/api/color/", function(colors) {
			var content = "<p>No colors...</p>";
			
			if(colors.length > 0) {
				for(var i = 0; i < colors.length; i++){
					content += "<p style='color: " + colors[i] + ";'>Color " + i + "</p>";
				}
			}
			
			$(".desc").html(content);
		});
	}
	
	loadColors();
});