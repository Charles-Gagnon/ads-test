"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.StubCheckbox = exports.StubInputBox = void 0;
var vscode = require("vscode");
/**
 * Stub ModelView Input Box to use for testing
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
var StubCheckbox = /** @class */ (function () {
    function StubCheckbox() {
        this._onChanged = new vscode.EventEmitter();
        this._checked = false;
        this.id = 'stub-checkbox';
        this.enabled = false;
        this.onChanged = this._onChanged.event;
        this.onValidityChanged = undefined;
        this.valid = true;
    }
    Object.defineProperty(StubCheckbox.prototype, "checked", {
        get: function () {
            return this._checked;
        },
        set: function (value) {
            this._checked = value;
            this._onChanged.fire();
        },
        enumerable: false,
        configurable: true
    });
    StubCheckbox.prototype.updateProperties = function (properties) { throw new Error('Not implemented'); };
    StubCheckbox.prototype.updateProperty = function (key, value) { throw new Error('Not implemented'); };
    StubCheckbox.prototype.updateCssStyles = function (cssStyles) { throw new Error('Not implemented'); };
    StubCheckbox.prototype.validate = function () { throw new Error('Not implemented'); };
    StubCheckbox.prototype.focus = function () { return Promise.resolve(); };
    return StubCheckbox;
}());
exports.StubCheckbox = StubCheckbox;
