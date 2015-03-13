/*
 *  Navigation with support for hover and touch events
 */
(function($) {
    $(document).ready(function() {

        // Global -------------------------------------------
        var navMenu         = '.main-nav-list',
            navLink         = '.main-nav-link',
            navLinkActive   = navMenu + ' ' + '.active',

            navDrop         = '.main-nav-drop',
            navDropMenu     = navDrop + ' ' + '.drop-menu',
            navDropActive   = navDrop + ' ' + '.active';

        // Hide drop menu
        function hideMenu() {
            if ($('html').hasClass('no-csstransitions')) {
                $(navDropActive).slideUp(500);
            }

            $(navDropActive).removeClass('active');
            $(navLinkActive).removeClass('active');
            $(navMenu).removeClass('is-active');
        }

        // Display drop menu
        function displayMenu(activeMenuItem) {
            var dropMenu = navDropMenu + '[data-nav-item*="' + activeMenuItem + '"]';

            hideMenu();

            if ($('html').hasClass('no-csstransitions')) {
                $(dropMenu).slideDown(500);
            }

            $(dropMenu).addClass('active');
            $(navMenu).addClass('is-active');
        }

        // Timers ---------------------------------------------
        var hideTimer,
            displayTimer,

            hideDelay           = 300,
            switchHideDelay     = 200,
            displayDelay        = 200,
            switchDisplayDelay  = 400;

        function startHideTimer(delayTime) {
            hideTimer = window.setTimeout(hideMenu, delayTime);
        }

        // Detect touch events --------------------------------
        var enterEvent = 'touchstart';

        if (!('ontouchstart' in window)) {
            enterEvent = 'mouseenter';
        }

        if (enterEvent === 'touchstart') {
            $(document).on('touchstart', function(e) {
                if ((!$(e.target).closest(navMenu).length) &&
                    (!$(e.target).closest(navDrop).length)) {
                    if ($(navMenu).hasClass('is-active')) {
                        hideMenu();
                    }
                }
            });
        }

        // Menu item Events ----------------------------------

        // Menu item: mouseenter/touchstart
        $(navLink).on(enterEvent, function() {
            var menuLink        = $(this),
                activeMenuItem  = menuLink.parent().attr("data-nav-item");

            // clear displayTimer & hide siblings
            window.clearTimeout(hideTimer);
            window.clearTimeout(displayTimer);

            if ($(navMenu).hasClass('is-active')) {
                if ($(menuLink).hasClass('active')) {
                    // touch - re-select active link
                    if (enterEvent === 'touchstart') {
                        hideMenu();
                    }
                } else {
                    // moving from sibling to sibling

                    // The following line allows the drop menu to close when
                    // moving between menu items (timing may need adjustment)
                    // hideMenu();

                    // The following line allows the drop menu to persist when
                    // moving between menu items (and accidental mouseover
                    // events on neighboring menu items)
                    startHideTimer(switchHideDelay);

                    displayTimer = window.setTimeout(function(){
                        // displayMenu(dropMenu);
                        displayMenu(activeMenuItem);
                        $(menuLink).addClass('active');
                    }, switchDisplayDelay);
                }
            } else {
                // initial menu drop event
                hideMenu();
                displayTimer = window.setTimeout(function(){
                    // displayMenu(dropMenu);
                    displayMenu(activeMenuItem);
                    $(menuLink).addClass('active');
                }, displayDelay);
            }
        });

        // Menu item: mouseleave
        $(navMenu).on('mouseleave', function() {
            window.clearTimeout(hideTimer);
            startHideTimer(hideDelay);
        });

        // Drop menu events ---------------------------------

        // Drop menu: mouseenter
        $(navDropMenu).on('mouseenter', function() {
            window.clearTimeout(hideTimer);
            window.clearTimeout(displayTimer);
        });

        // Drop menu: mouseleave
        $(navDropMenu).on('mouseleave', function() {
            window.clearTimeout(hideTimer);
            startHideTimer(hideDelay);
        });

    });
})(jQuery);