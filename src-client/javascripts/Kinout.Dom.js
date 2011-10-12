/** 
 * Description or Responsability 
 * 
 * @namespace KINOUT
 * @class Dom
 *
 * @author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
 */

KINOUT.Dom = (function(knt, undefined) {

    /**
     * ?
     *
     * @method addClass
     *
     * params {string} Selector
     * params {string} Class name to append to container
     */
    var addClass = function(selector, css_class) {
        var elements = _findElements(selector);
        for (index in elements) {
            var element = elements[index];
            var element_hasClass = _hasClass(element, css_class);

            if (!element_hasClass) {
                element.className += ' ' + css_class;
            }
        }
    };

    /**
     * ?
     *
     * @method removeClass
     *
     * params {string} Selector
     * params {string} Class name to append to container
     */
    function removeClass(selector, css_class) {
        var elements = _findElements(selector);
        for (index in elements) {
            var element = elements[index];
            var element_hasClass = _hasClass(element, css_class);

            if (element_hasClass) {
                var reg = new RegExp('(\\s|^)' + css_class + '(\\s|$)');
                element.className = element.className.replace(reg, ' ');
            }
        }
    };

    /**
     * ?
     *
     * @method append
     *
     * params {string} Selector
     * params {string} Markup to append
     */
    var append = function(selector, markup) {
        var element = get(selector);
        if (element) {
            element.innerHTML += markup;
        }
    };

    /**
     * ?
     *
     * @method prepend
     *
     * params {string} Container selector
     * params {string} Markup to prepend
     */
    var prepend = function(selector, markup) {
        var element = get(selector);
        if (element) {
            element.innerHTML = markup + element.innerHTML;
        }
    };

    /**
     * ?
     *
     * @method get
     *
     * params {string} Container selector
     */
    var get = function(selector) {
        return document.querySelector(selector);
    };

    var _findElements = function(selector) {
        var elements = [];

        try {
            var elements = Array.prototype.slice.call(document.querySelectorAll(selector));
        } catch (e) {
            console.error(e);
        }
        return elements;
    };

    function _hasClass(element, css_class) {
        return element.className.match(new RegExp('(\\s|^)' + css_class + '(\\s|$)'));
    }


    return {
        addClass: addClass,
        removeClass: removeClass,
        append: append,
        prepend: prepend,
        get: get
    };

})(KINOUT);