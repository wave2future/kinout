/** 
 * Description or Responsability 
 * 
 * @namespace KINOUT
 * @class Events
 *
 * @author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
 */

KINOUT.Events = (function(knt, undefined) {
    var EVENTS = {
        KEYDOWN: 'keydown',
        CLICK: 'click',
        TOUCH: 'touchstart',
        HASHCHANGE: 'hashchange'
    };
    
    var DIRECTION = {
        LEFT: 'left',
        RIGHT: 'right',
        UP: 'up',
        DOWN: 'down'
    };
    
    
    /**
     * Initializes the automatic subscription events by markup of the project.
     *
     * @method init
     *
     */
    var init = function() {
        _subscribeEvents();
    };
    
    var _subscribeEvents = function() {
        document.addEventListener(EVENTS.KEYDOWN, _onKeyDown, false);
        document.addEventListener(EVENTS.TOUCH, _onTouch, false);
        document.addEventListener(EVENTS.CLICK, _onClick, false);
        window.addEventListener(EVENTS.HASHCHANGE, _onHashChange, false);
    };
    
    var _onKeyDown = function(event) {
        if( event.keyCode >= 37 && event.keyCode <= 40 ) {
        	_analizeKeyEvent(event);
        	
        	event.preventDefault();        	
        }
    };
    
    var _onTouch = function(event) {
        if (event.touches.length == 1) {
            event.preventDefault();
            
            var point = {
        	    x: event.touches[0].clientX,
        	    y: event.touches[0].clientY
            };
        
        	_analizePoint(point);
        }
    };    
    
    var _onClick = function(event) {    
        event.preventDefault();
        
        var point = {
        	x: event.clientX,
        	y: event.clientY
        };      
          
        _analizePoint(point);        
    };
    
    var _onHashChange = function() {
        knt.Url.read();
    };
    
    var _analizeKeyEvent = function(event) {
        switch( event.keyCode ) {
        	case 37: 
        	    knt.Router.direction(DIRECTION.LEFT); 
        	    break;
        	    
        	case 39: 
        	    knt.Router.direction(DIRECTION.RIGHT);
        	    break;
        	    
        	case 38: 
        	    knt.Router.direction(DIRECTION.UP); 
        	    break;
        	    
        	case 40:
        	    knt.Router.direction(DIRECTION.DOWN); 
        	    break;
        }
    };
    
    var _analizePoint = function(point) {
        var window_width = window.innerWidth * 0.3;
        var window_height = window.innerHeight * 0.3;
        
        if( point.x < window_width ) {
        	knt.Router.direction(DIRECTION.LEFT);
        }
        else if( point.x > window.innerWidth - window_width ) {
        	knt.Router.direction(DIRECTION.RIGHT);
        }
        else if( point.y < window_height ) {
        	knt.Router.direction(DIRECTION.UP);
        }
        else if( point.y > window.innerHeight - window_height ) {
        	knt.Router.direction(DIRECTION.DOWN);
        }
    };
    
    return {
        init: init
    };

})(KINOUT);