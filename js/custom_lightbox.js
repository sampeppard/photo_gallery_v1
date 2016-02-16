
	var imageWidth = 600;


	$('.gallery li').click(function() {
		event.preventDefault();
		$('.overlay').slideDown(1000);
		var currentImage = $(this).index();

		var allImages = $('#slideshow li img').length;

		$('#slideshow ul').width(allImages*imageWidth);

 		function setFramePosition(pos){
            //calculate position
            var px = imageWidth * pos * -1;
            //set ul left position
            $('#slideshow ul').animate({
                left: px
            }, 1);
        }

        setFramePosition(currentImage);

        $('.close-space').click(function() {
			$('.overlay').slideUp(1000);
		});

        $('.slideshow-prev').click(function(){     
            //decrease image counter
            currentImage--;
            //if we are at the end let set it to 0
            if(currentImage<0) currentImage = allImages-1;
            //calcualte and set position
            setFramePosition(currentImage);
        });

        $('.slideshow-next').click(function(){      
            //increase image counter
            currentImage++;
            //if we are at the end let set it to 0
            if(currentImage>=allImages) currentImage = 0;
            //calcualte and set position
            setFramePosition(currentImage);
        });
	});




