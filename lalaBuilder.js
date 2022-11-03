var img = document.getElementById("imgHolder");


var changeImage = function changeImage(a) {
    document.getElementById("img").src=a;
}

var loadFile = function(event) {
	var image = document.getElementById('replaceImg');
	image.src = URL.createObjectURL(event.target.files[0]);
};