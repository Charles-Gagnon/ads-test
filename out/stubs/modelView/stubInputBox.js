"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.StubInputBox = void 0;
/**
 * Stub input box to use for testing
 */
var StubInputBox = /** @class */ (function () {
    function StubInputBox() {
        this.id = 'input-box';
        this.enabled = false;
        this.onTextChanged = undefined;
        this.onEnterKeyPressed = undefined;
        this.onValidityChanged = undefined;
        this.valid = true;
    }
    StubInputBox.prototype.updateProperties = function (properties) { throw new Error('Not implemented'); };
    StubInputBox.prototype.updateProperty = function (key, value) { throw new Error('Not implemented'); };
    StubInputBox.prototype.updateCssStyles = function (cssStyles) { throw new Error('Not implemented'); };
    StubInputBox.prototype.validate = function () { throw new Error('Not implemented'); };
    StubInputBox.prototype.focus = function () { return Promise.resolve(); };
    return StubInputBox;
}());
exports.StubInputBox = StubInputBox;
