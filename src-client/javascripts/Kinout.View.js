/** 
 * Description or Responsability 
 * 
 * @namespace KINOUT
 * @class View
 *
 * @author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
 */

KINOUT.View = (function(knt, undefined) {
    var _index = {
        horizontal: 0,
        vertical: 0
    };

    /**
     * ?
     *
     * @method init
     *
     * @params {object} ?
     */
    var init = function(config) {
        //@TODO >> Refactor to KINOUT.View.Markup
        if (config.template) {
            knt.Dom.addClass('.kinout', config.template);
        }
        knt.Dom.prepend('body', '<div class="glow"></div>');
    };

    /**
     * ?
     *
     * @method slide
     *
     * @params {number} Horizontal index
     * @params {number} Vertical index
     */
    var slide = function(horizontal, vertical) {
        _saveNewIndexes(horizontal, vertical);
        _updateSlideIndexes();
        
        knt.Url.write(_index.horizontal, _index.vertical);    
    };

    /**
     * ?
     *
     * @method index
     *
     * @return {object} Index object that contains horizontal & vertical indexes
     */
    var index = function(){
        return _index;
    }
    
    var _saveNewIndexes = function(horizontal, vertical) {
        _index.horizontal = horizontal === undefined ? _index.horizontal : horizontal;
        _index.vertical = vertical === undefined ? _index.vertical : vertical;        
    };
    
    var _updateSlideIndexes = function() {
        _index.horizontal = _updateSlides( '.kinout>section', _index.horizontal );
        _index.vertical = _updateSlides( 'section.present>section', _index.vertical );
    };

    var _updateSlides = function( selector, index ) {    	
    	// Select all slides and convert the NodeList result to an array
    	var slides = Array.prototype.slice.call( document.querySelectorAll( selector ) );
    	
    	if( slides.length ) {
    		// Enforce max and minimum index bounds
    		index = Math.max(Math.min(index, slides.length - 1), 0);
    		
    		slides[index].setAttribute('class', 'present');
    		
    		// Any element previous to index is given the 'past' class
    		slides.slice(0, index).map(function(element){
    			element.setAttribute('class', 'past');
    		});
    		
    		// Any element subsequent to index is given the 'future' class
    		slides.slice(index + 1).map(function(element){
    			element.setAttribute('class', 'future');
    		});
    	}
    	else {
    		// Since there are no slides we can't be anywhere beyond thezeroth index
    		index = 0;
    	}
    	
    	return index;
    };

    return {
        init: init,
        slide: slide,
        index: index
    };

})(KINOUT);