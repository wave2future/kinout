/** 
 * Description or Responsability 
 * 
 * @namespace KINOUT
 * @class Router
 *
 * @author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
 */

KINOUT.Router = (function(knt, undefined) {
    var _index = {};


    var direction = function(direction) {
        _index = knt.View.index();
                
        switch(direction) {
        	case 'left': 
        	    _left(); 
        	    break;
        	    
        	case 'right': 
        	    _right();
        	    break;
        	    
        	case 'up': 
        	    _up();
        	    break;
        	    
        	case 'down':
        	    _down();
        	    break;
        }
    };
    
    var _left = function() {
        _index.horizontal--;
        knt.View.slide(_index.horizontal, 0);
    };
    
    var _right = function() {    
        _index.horizontal++;
        knt.View.slide(_index.horizontal, 0);        
    };
    
    var _up = function() {
        _index.vertical--;
        knt.View.slide(_index.horizontal, _index.vertical);      
    };
    
    var _down = function() {
        _index.vertical++;
        knt.View.slide(_index.horizontal, _index.vertical);  
    };
        
    return {
        direction: direction
    };

})(KINOUT);