/** 
 * Description or Responsability 
 * 
 * @namespace KINOUT
 * @class Route
 *
 * @author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
 */

KINOUT.Url = (function(knt, undefined) {

    var read = function() {
        // Break the hash down to separate components
        var bits = window.location.hash.slice(2).split('/');
        
        // Read the index components of the hash
        var indexh = bits[0] ? parseInt( bits[0] ) : 0;
        var indexv = bits[1] ? parseInt( bits[1] ) : 0;
        
        knt.View.slide( indexh, indexv );
    };
    
    /**
     * Updates the page URL (hash) to reflect the current
     * navigational state. 
     */
    function write(horizontal_idx, vertical_idx) {
    	var url = '/';
    	
    	// Only include the minimum possible number of components in the URL
    	if( horizontal_idx > 0 || vertical_idx > 0 ) url += horizontal_idx
    	if( vertical_idx > 0 ) url += '/' + vertical_idx
    	
    	window.location.hash = url;
    };
        
    return {
        read: read,
        write: write
    };

})(KINOUT);