console.log('tekst');
var span = $("span");
var ignored = ['first', 'third', 'fifth'];
span.each(function(index, element) {
	if(index != ignored) {
		$(element).css('color', 'red');
	};
	var currentId = element.getAttribute('id');
	console.log('element', element.getAttribute('id'));
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
