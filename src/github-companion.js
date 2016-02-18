'use strict';

chrome.extension.sendMessage({}, response => {

    let readyStateCheck = setInterval(() => {

        (function($) {

            clearInterval(readyStateCheck);

            let toggleButton = $('<button>', {
                text: 'Collapse',
                class: 'btn btn-sm git-companion__toggle-blob-wrapper'
            });

            // Add a button to each file-actions container.
            $(".file-actions .btn:contains('View')").before(toggleButton);

            // Attach event listener to the buttons.
            $('.git-companion__toggle-blob-wrapper').click(event => {
                let $button = $(event.target);

                // Toggle the text between 'Expand' and 'Collapse'.
                $button.text($button.text() === 'Expand' ? 'Collapse' : 'Expand');

                // Toggle the content or media container.
                $button.closest('.file-header').next('.blob-wrapper, .render-wrapper').toggle();
            });

        })(jQuery);

    }, 10);

});