# Overview

The _CatalogJS_ module creates several JavaScript observers on the product page. By listening to these observers, your script can respond to specific events.

The primary use case for this is to find out which option a customer has selected on a configurable product so that your component can perform its own action. For example you may want to display some specific information about the selected simple product option.

# Observers

The following section documents the observers that are available and how you may use them.

## configurable-option

### Purpose

The configurable option observer will be updated every time a customer updates the configurable options. The observer will return the selected simple product ID. In your own UI component, you could search against a JSON object which contains the information for the simple products or you could make an AJAX request to get information about the ID.

### Available Values

The following values can be subscribed to on the `configurable-option` model.

```
simpleProduct // The currently selected simple product ID
```

### Usage

```javascript
define([
    'jquery',
    'uiComponent',
    'CtiDigital_CatalogJS/js/model/configurable-option'
], function($, Component, configurableOption) {
    'use strict';
    
    return Component.extend({
        selectedProduct: undefined,
        
        initialize: function() {
            this._super();
            this.subscribeToConfigurableOptionChange();
        },
        subscribeToConfigurableOptionChange: function() {
            let _this = this;
            configurableOption.simpleProduct.subscribe(function(simpleProduct) {
                _this.selectedProduct = simpleProduct;
                _this.myCustomMethod();
            });
        },
        myCustomMethod: function() {
            // Access this.selectedProduct to perform some sort of action
        }
    });
});
```

## qty

### Purpose

The qty observer will be updated every time a customer changes the quantity box and will return the value they've entered.

### Available Values

The following values can be subscribed to on the `qty` model.

```
qty // The current quantity specified by the customer
```

### Usage

```javascript
define([
    'jquery',
    'uiComponent',
    'CtiDigital_CatalogJS/js/model/qty'
], function ($, Component, qtyObserver) {
    'use strict';
    
    return Component.extend({
        qty: 1,
        
        initialize: function() {
            this._super();
            this.subscribeToQtyChange();
        },
        subscribeToQtyChange: function() {
            let _this = this;
            qtyObserver.qty.subscribe(function(qty) {
                _this.qty = qty;
                _this.myCustomMethod();
            });
        },
        myCustomMethod: function() {
            // Access this.qty to retrieve the current quantity
        }
    });
});
```