"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFormContainerBuilderMock = void 0;
var TypeMoq = require("typemoq");
var containerBuilderMock_1 = require("./containerBuilderMock");
function createFormContainerBuilderMock() {
    var mockContainerBuilder = containerBuilderMock_1.createContainerBuilderMock();
    mockContainerBuilder.mockBuilder.setup(function (b) { return b.withFormItems(TypeMoq.It.isAny(), TypeMoq.It.isAny()); }).returns(function () { return mockContainerBuilder.mockBuilder.object; });
    return mockContainerBuilder.mockBuilder;
}
exports.createFormContainerBuilderMock = createFormContainerBuilderMock;
