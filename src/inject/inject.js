chrome.extension.sendMessage({}, function(response) {
    var readyStateCheckInterval = setInterval(function() {
        if (document.readyState === "complete") {
            clearInterval(readyStateCheckInterval);

            // This part of the script triggers when page is done loading
            console.log("Hello. This message was sent from scripts/inject.js");

            (function($){
                var newToggleButton = function () {
                    return $('<button>', {
                        'text': 'Collapse',
                        'aria-label': 'Expand or collapse this file',
                        'class': 'btn btn-sm tooltipped tooltipped-nw GitCompanion__toggle-blob-wrapper'
                    })
                };

                $('.file-actions').map(function(index, el){
                    $(el).find('.btn').before(newToggleButton);
                });

                $('.GitCompanion__toggle-blob-wrapper').click(function() {
                    $this = $(this);
                    $this.text($this.text() === 'Expand' ? 'Collapse' : 'Expand');
                    $this.closest('.file-header').next('.blob-wrapper, .render-wrapper').toggle();
                });
            })(jQuery);

        }
    }, 10);
});