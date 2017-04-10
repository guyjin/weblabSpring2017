/**
 * Created by ben on 4/8/15.
 */

$(function() {
	$('.alert button').on('click', function(){
		$('.alert').animate({
			opacity: 0,
			height: 0,
			margin: 0
		},function(){
			$(this).remove();
		})
	})
});
