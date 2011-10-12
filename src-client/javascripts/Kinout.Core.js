/** 
 * Description or Responsability 
 * 
 * @namespace KINOUT
 * @class Core
 *
 * @author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
 */

KINOUT.Core = (function(knt, undefined) {

    /**
     * ?
     *
     * @method init
     *
     * @params {object} ?
     */
    var init = function(config) {
        knt.View.init(config);
	    knt.Events.init();
	    knt.Url.read();
    };

    return {
        init: init
    };

})(KINOUT);