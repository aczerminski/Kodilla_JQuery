var span = $("span");
var ignored = ['first', 'third', 'fifth'];
var currentId = element.getAttribute('id');
span.each(function(index, element) {
	if(currentId.indexOf(ignored) > -1) {
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

// obj.getAttribute('id')
