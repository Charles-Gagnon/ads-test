"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.createComponentBuilderMock = void 0;
var TypeMoq = require("typemoq");
function createComponentBuilderMock(component) {
    var mockComponentBuilder = TypeMoq.Mock.ofType();
    // Create a mocked dynamic component if we don't have a stub instance to use.
    // Note that we don't use ofInstance here for the component because there's some limitations around properties that I was
    // hitting preventing me from easily using TypeMoq. Passing in the stub instance lets users control the object being stubbed - which means
    // they can use things like sinon to then override specific functions if desired.
    if (!component) {
        var mockComponent = TypeMoq.Mock.ofType();
        // Need to setup then for when a dynamic mocked object is resolved otherwise the test will hang : https://github.com/florinn/typemoq/issues/66
        mockComponent.setup(function (x) { return x.then; }).returns(function () { return undefined; });
        component = mockComponent.object;
    }
    // For now just have these be passthrough - can hook up additional functionality later if needed
    mockComponentBuilder.setup(function (b) { return b.withProperties(TypeMoq.It.isAny()); }).returns(function () { return mockComponentBuilder.object; });
    mockComponentBuilder.setup(function (b) { return b.withValidation(TypeMoq.It.isAny()); }).returns(function () { return mockComponentBuilder.object; });
    mockComponentBuilder.setup(function (b) { return b.component(); }).returns(function () { return component; } /*mockComponent.object*/);
    return {
        component: component,
        mockBuilder: mockComponentBuilder
    };
}
exports.createComponentBuilderMock = createComponentBuilderMock;
