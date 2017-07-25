var span = $("span");
var ignored = ['first', 'third', 'fifth'];


span.each(function(index, element) {
	var currentId = element.getAttribute('id');
	if(ignored.indexOf(currentId) <= -1) {
		$(element).css('color', 'red');
	};
});
var paragraphs = $('p');
paragraphs.each(function(index, element) {
    var button = '<button class="btn" data-tmp="' + index + '">Click me</button>'
    $(element).append(button)
});

$("button").click(function(){
	alert($(this).attr("data-tmp"));
});
