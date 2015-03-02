/*
 * March 2014
 * passwordGenerator 1.1.0
 * @author Mario Vidov
 * @url http://vidov.it
 * @twitter MarioVidov
 * GPL license
 */

$.fn.passwordGenerator = function(options) {
    var settings = $.extend({
        upperCase: true,
        lowerCase: true,
        numbers: true,
        punctuation: true,
        size: 8,
        wrapperClass: "generatorWrapper",
        button: {
            isVisible: true,
            text: "New Password"
        }
    }, options );

    var selector = this.selector;
    var selectorClass = this.attr("class") || "";
    var selectorId = this.attr("id") || "";
    var pass = "", x = 0, chars = [];

    $(selector).wrap("<div class='" + settings.wrapperClass + "'></div>");
    if (settings.button.isVisible) {
        $(selector).parent().append("<button class='generatePassword' data-class='" +
        selectorClass + "' data-id='" + selectorId + "'>" + settings.button.text + "</button>");

        $(".generatePassword").click(function() {
            init();
        });
        $(selector).click(function() {
            $(this).select();
        });
    }

    for(i = 0; i < 33; i++)
        chars[ chars.length ] = 0;
    for(; i < 48; i++)
        chars[chars.length] = settings.punctuation ? 1 : 0;
    for(; i < 58; i++)
        chars[chars.length] = settings.numbers ? 1 : 0;
    for(; i < 65; i++)
        chars[chars.length] = settings.punctuation ? 1 : 0;
    for(; i < 91; i++)
        chars[chars.length] = settings.upperCase ? 1 : 0;
    for( ; i < 97; i++ )
        chars[ chars.length] = settings.punctuation ? 1 : 0;
    for(; i < 123; i++)
        chars[chars.length] = settings.lowerCase ? 1 : 0;
    for(; i < 127; i++)
        chars[chars.length] = settings.punctuation ? 1 : 0;

    if( settings.size < 1 ) settings.size = 1;
    if( settings.size > 128 ) settings.size = 128;

    var init = function () {
        pass = "";
        do {
            x = Math.floor(Math.random() * 128);
            if (chars[x] == 1)
                pass += String.fromCharCode(x);
        }
        while (pass.length < settings.size)
        $(selector).val(pass);
    }
    init();
}
