$(function () {
	$("#navbarToggle").blur(function (event) {
		var screenWidth=window.innerWidth;
		if(screenWidth < 768){
			$("#collapsable-nav").collapse('hide');
		}
	});
	});

	(function (global) {
		var dc={};
		var homeHtml = "snippets/home-snippet.html";
		var insertHtml = document.querySelector(selector,html);{
			var targetElem=document.querySelector(selector);
		targetElem.innerHTML=html;
	};
	var showLoading = function(selector){
		var html = " <div class='text-center'>";
		html += "<img src='images/a.gif'></div>";
		insertHtml(selector,html);
	};
	document.addEventListner("DOMContentLoaded",function (event) {

		showLoading("#main-content");
		$ajaxUtils.sendGetRequest(
			homeHtml,
			function (responeText) {
				document.querySelector("#main-content")
		.innerHTML = responeText;
	},
	false);
});
global.$dc = dc;


})(window);
