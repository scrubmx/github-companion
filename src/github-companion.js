(function($) {

    'use strict';

    let toggleButton = $('<button>', {
        text: 'Collapse',
        class: 'btn btn-sm git-companion__toggle-blob-wrapper'
    });

    $.fn.toggleText = function (active, inactive) {
        return this.text(this.text() === active ? inactive : active);
    };

    // Add a button to each file-actions container.
    $(".file-actions .btn:contains('View')").before(toggleButton);

    // Attach event listener to the buttons.
    $('.git-companion__toggle-blob-wrapper').click(event => {
        $(event.target)
            .toggleText('Collapse', 'Expand')
            .closest('.file-header').next('.blob-wrapper, .render-wrapper').toggle();
    });

})(jQuery);
