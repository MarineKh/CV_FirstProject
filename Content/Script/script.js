window.onload =  function() {

	(function () {
	    var check = $('[type = checkbox]');
	    for (var i = 0; i < check.length; i++) {
	        check[i].indeterminate = true;
	    }
	})();
}
function changeMedia(event) {
    var link = document.getElementById('link');
    link.setAttribute('href', 'Content/Style/' + event.target.value + '.css')

    var ico = document.getElementById('ico');
    ico.setAttribute('href', 'Content/Icons/' + event.target.value + '.png');

}
function OnOff() {
    var $tbl = document.getElementById('tb');
    if ('none' == $tbl.style.display) {
         $tbl.style.display = 'table'
    }
    else {
        $tbl.style.display = 'none'
    }
}
