// var nav = document.getElementById('nav-3');
// var nav2 = document.getElementById('nav-3.4');

// nav.addEventListener('mouseover', function(){
// 	var sub = document.getElementById('submenu');
// 	submenuOver(sub);
// });

// nav2.addEventListener('mouseover', function(){
// 	var sub = document.getElementById('threemenu');
// 	submenuOver(sub);
// });

// nav.addEventListener('mouseout', function(){
// 	var sub = document.getElementById('submenu');
// 	submenuOut(sub);
// });

// nav2.addEventListener('mouseout', function(){
// 	var sub = document.getElementById('threemenu');
// 	submenuOut(sub);
// });

// function submenuOver(el){
// 	var time = 0;
// 	var mheight = parseInt(el.style.maxHeight) || 0;

// 	if (mheight < 400){
// 		el.style.display = 'block';

// 		interval = setInterval(function(){

// 			if (time >= 1000 || mheight >= 400){
// 				clearInterval(interval);
// 				el.style.overflow = "unset";
// 			}

// 			mheight += 16;
// 			time += 40;

// 			el.style.maxHeight = mheight + 'px';

// 		}, 40);
// 	}

// }

// function submenuOut(el){

// 	var mheight = parseInt(el.style.maxHeight);
// 	clearInterval(interval);
// 	el.style.overflow = "hidden";

// 	var interval1 = setInterval(function(){

// 		if (mheight <= 0){

// 			clearInterval(interval1);
			
// 			el.style.display = 'none';
// 		}

// 		mheight -= 16;

// 		el.style.maxHeight = mheight + 'px';

// 	}, 40);

// }


 $(document).ready(function() {
        $( '.dropdowns' ).hover(
            function(){
                $(this).children('.sub-menu').slideDown(200);
            },
            function(){
                $(this).children('.sub-menu').slideUp(200);
            }
        );
    });