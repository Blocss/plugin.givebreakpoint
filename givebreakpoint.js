/*  giveBreakpoint - v1.0.1
    MIT License
    A Blocss plugin to read out the rendered breakpoint with javascript.
    @author Bram Smulders - @bramsmulders
\*----------------------------------------------------------------------------*/

window.giveBreakpoint = (function () {
    'use strict';
    if (!window.getComputedStyle) {
        window.getComputedStyle = function(el) {
            this.el = el;
            this.getPropertyValue = function(prop) {
                var re = /(\-([a-z]){1})/g;
                if (prop === 'float') {
                    prop = 'styleFloat';
                }
                if (re.test(prop)) {
                    prop = prop.replace(re, function () {
                        return arguments[2].toUpperCase();
                    });
                }
                return el.currentStyle[prop] ? el.currentStyle[prop] : null;
            };
            return this;
        };
    }
    var i = window.getComputedStyle(document.body,':before').getPropertyValue('content');
    if(i !== null) {
        i = i.replace(/['"]/g,'');
    }
    return i;
})(window, document);