// Panels
(function ($) {

    $(function () {
        $('.panel')
            .on('panel:toggle', function () {
                var $this,
                    direction;

                $this = $(this);
                direction = $this.hasClass('panel-collapsed') ? 'Down' : 'Up';

                $this.find('.panel-body, .panel-footer')['slide' + direction](200, function () {
                    $this[(direction === 'Up' ? 'add' : 'remove') + 'Class']('panel-collapsed');
                });
            })
            .on('panel:dismiss', function () {
                var $this = $(this);

                if (!!($this.parent('div').attr('class') || '').match(/col-(xs|sm|md|lg)/g) && $this.siblings().length === 0) {
                    $row = $this.closest('.row');
                    $this.parent('div').remove();
                    if ($row.children().length === 0) {
                        $row.remove();
                    }
                } else {
                    $this.remove();
                }
            })
            .on('click', '[data-panel-toggle]', function (e) {
                e.preventDefault();
                $(this).closest('.panel').trigger('panel:toggle');
            })
            .on('click', '[data-panel-dismiss]', function (e) {
                e.preventDefault();
                $(this).closest('.panel').trigger('panel:dismiss');
            })
            /* Deprecated */
            .on('click', '.panel-actions a.fa-caret-up', function (e) {
                e.preventDefault();
                var $this = $(this);

                $this
                    .removeClass('fa-caret-up')
                    .addClass('fa-caret-down');

                $this.closest('.panel').trigger('panel:toggle');
            })
            .on('click', '.panel-actions a.fa-caret-down', function (e) {
                e.preventDefault();
                var $this = $(this);

                $this
                    .removeClass('fa-caret-down')
                    .addClass('fa-caret-up');

                $this.closest('.panel').trigger('panel:toggle');
            })
            .on('click', '.panel-actions a.fa-times', function (e) {
                e.preventDefault();
                var $this = $(this);

                $this.closest('.panel').trigger('panel:dismiss');
            });
    });

})(jQuery);


$(document).ready(function () {
    //hover tabs
    $('.tabs-hover> li > a').hover(function () {
        $(this).tab('show');
    });


    //tooltip
    $('[data-toggle=tooltip]').tooltip();
    //popover
    $('[data-toggle=popover]').popover();
    //slim scroll
    $('.scrollDiv').slimScroll({
        color: '#eee',
        size: '5px',
        height: '280px',
        alwaysVisible: false
    });
});