(function($) {  
    $.fn.newresize = function(f,time) {  
        var version = '1.1';
        var resizeTimer = null;  
        var waittime = time;
        var wresize = {  
            run : false,  
            width : 0  
        };  
 
    function resizeOnce() {
        let msie=/msie/.test(navigator.userAgent.toLowerCase());
        if (msie) {  
            if (!wresize.run) {  
                wresize.run = true;  
            }else{  
                version = parseInt(navigator.appVersion, 10);  
                wresize.run = false;  
                if (version < 7) {  
                    return false;  
                } else if (version == 7) {  
                    // a vertical resize is run once, an horizontal resize  
                    // twice  
                    var width = $(window).width();  
                    if (width != wresize.width) {  
                            wresize.width = width;  
                            return false;  
                    }  
                }  
            }  
        }  
        return true;  
    }  
 
    function handleWResize(e) { 
        if (resizeTimer) clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function(){
                if (resizeOnce()) { 
                return f.apply(this, [ e ]);  
            }  
        } , waittime);
        
    }  
    this.each(function() {  
        if (this == window) {
            $(this).resize(handleWResize);  
            
        } else {  
            $(this).resize(f,time);  
        }  
    });  
    return this;  
    }; 

})(jQuery);  