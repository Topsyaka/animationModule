/**
 * @category  Tallium
 * @author      Tallium Inc (https://tallium.com)
 * @copyright   Copyright (C) 2017 Tallium Inc. All rights reserved.
 * @version    1
 * @link        https://tallium.com
 *
 * Created by Anton on 21.04.2017.
 */

var AnimationModule = (function ($) {

    var init = function (){

    }

    var addAnimationToElement = function (array,scrollTop) {
        if (scrollTop) {

            /**
             * object template
             * {
             *  elementID : string,
             *  elementAnimationClass: string,
             *  onload : boolean,
             *  afterAnimation: object
             * }
             *
             * */

            var windowHeight = $(window).height();

            function objectParse(obj) {
                if (obj.elementID && obj.elementAnimationClass && $(obj.elementID).length) {
                    var elem = $(obj.elementID),
                        animateClass = obj.elementAnimationClass,
                        elemOffsetTop = elem.offset().top;
                    console.log(elemOffsetTop+' '+scrollTop);
                    if ((elemOffsetTop <= (scrollTop + windowHeight/4)) || obj.onload) {
                        elem.addClass(`animated ${animateClass}`);
                        if (obj.afterAnimation) {
                            elem.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                                objectParse(obj.afterAnimation, 1);
                            });
                        }
                    }

                }
            }

            if (array.length) {
                if (typeof array.forEach == 'function') {
                    array.forEach(function (item) {
                        objectParse(item);
                    })
                }
            }
        }
    }

    return {
        addAnimationToElement : addAnimationToElement
    }

})($);