define(
    ['ko'],
    function (ko) {
        'use strict';
        let qty = ko.observable('');
        return {
            qty: qty
        };
    }
);
