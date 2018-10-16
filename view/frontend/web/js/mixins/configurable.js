define([
    'jquery',
    'CtiDigital_CatalogJS/js/model/configurable-option'
], function($, configurableOption) {
    'use strict';

    return function (widget) {
        $.widget('mage.configurable', widget, {
            _configureElement: function(element) {
                this._super(element);
                configurableOption.simpleProduct(this.simpleProduct);
            }
        });
        return $.mage.configurable;
    }
});
