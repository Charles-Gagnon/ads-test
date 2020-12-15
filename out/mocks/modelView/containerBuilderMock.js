"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.createContainerBuilderMock = void 0;
var TypeMoq = require("typemoq");
var componentBuilderMock_1 = require("./componentBuilderMock");
function createContainerBuilderMock() {
    var mockContainerBuilder = componentBuilderMock_1.createComponentBuilderMock();
    // For now just have these be passthrough - can hook up additional functionality later if needed
    mockContainerBuilder.mockBuilder.setup(function (b) { return b.withItems(TypeMoq.It.isAny(), undefined); }).returns(function () { return mockContainerBuilder.mockBuilder.object; });
    mockContainerBuilder.mockBuilder.setup(function (b) { return b.withLayout(TypeMoq.It.isAny()); }).returns(function () { return mockContainerBuilder.mockBuilder.object; });
    return mockContainerBuilder;
}
exports.createContainerBuilderMock = createContainerBuilderMock;
