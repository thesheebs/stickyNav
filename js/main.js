$(document).ready(function() {
    
        $(window).scroll(function(event) {
    
            var y = $(this).scrollTop();
    
            if (y >= 200) {
    
                $('#iphone').addClass('animate');
            }
        });
    });

    $(document).ready(function() {
        
            $(window).scroll(function(event) {
        
                var y = $(this).scrollTop();
        
                if (y >= 800) {
        
                    $('#map').addClass('animate');
                }
            });
        });
    