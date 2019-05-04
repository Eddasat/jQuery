var EventsUtility = {
    addEvent: function (element, type, callback) {
        if (typeof addEventListener !== 'undefined') {
            element.addEventListener(type, callback, false);
        } else if (typeof attachEvent !== 'undefined') {
            element.attachEvent('on' + type, callback); // IE, legacy browser
        } else {
            element['on' + type] = callback;
        }
    },

    removeEvent: function (element, type, callback) {
        if (typeof removeEventListener !== 'undefined') {
            element.removeEventListener(type, callback, false);
        } else if (typeof detachEvent !== 'undefined') {
            element.detachEvent('on' + type, callback); // IE, legacy browser
        } else {
            element['on' + type] = null;
        }
    },

    getTarget: function (event) {
        if (typeof event.target !== 'undefined') {
            return event.target;
        } else {
            return event.srcElement; // IE, legacy browser
        }
    },

    preventDefault: function (event) {
        if (typeof event.preventDefault !== 'undefined') {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },

    getCharCode: function (event) {
        if (typeof event.charCode === 'number') {
            return event.charCode;
        } else {
            return event.keyCode; // IE, legacy browser
        }
    }
};