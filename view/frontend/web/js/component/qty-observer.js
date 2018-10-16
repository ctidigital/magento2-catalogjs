define([
    'jquery',
    'uiComponent',
    'ko',
    'CtiDigital_CatalogJS/js/model/qty'
], function($, Component, ko, qtyObserver) {
    'use strict';

    return Component.extend({
        initialize: function() {
            this._super();
            this.updateQtyObs($(this.qty_element));
            this.subscribeToQuantityBoxUpdate();
        },
        updateQtyObs: function (e) {
            if (e.target) {
                var e = $(e.target);
            }
            qtyObserver.qty(parseInt(e.val()));
        },
        subscribeToQuantityBoxUpdate: function() {
            $(this.qty_element).on("change paste keyup select", $.proxy(this.updateQtyObs, this));
        }
    });
});
