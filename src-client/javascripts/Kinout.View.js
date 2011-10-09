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
     * Initializes the automatic subscription events by markup of the project.
     *
     * @method init
     *
     */
    var slide = function(horizontal, vertical) {
        _saveNewIndexes(horizontal, vertical);
        _updateSlideIndexes();
        
        knt.Url.write(_index.horizontal, _index.vertical);    
    };
    
    var index = function(){
        return _index;
    }
    
    var _saveNewIndexes = function(horizontal, vertical) {
        _index.horizontal = horizontal === undefined ? _index.horizontal : horizontal;
        _index.vertical = vertical === undefined ? _index.vertical : vertical;        
    };
    
    var _updateSlideIndexes = function() {
        _index.horizontal = _updateSlides( '#kinout>section', _index.horizontal );
        _index.vertical = _updateSlides( 'section.present>section', _index.vertical );
    };
    
    /**
     * Updates one dimension of slides by showing the slide with the specified index.
     * 
     * @param {String} selector A CSS selector that will fetch
     * the group of slides we are working with
     * @param {Number} index The index of the slide that should be
     * shown
     * 
     * @return {Number} The index of the slide that is now shown,
     * might differ from the passed in index if it was out of 
     * bounds.
     */
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
        slide: slide,
        index: index
    };

})(KINOUT);