"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.createModelViewMock = void 0;
var TypeMoq = require("typemoq");
var componentBuilderMock_1 = require("./componentBuilderMock");
var containerBuilderMock_1 = require("./containerBuilderMock");
var formContainerBuilderMock_1 = require("./formContainerBuilderMock");
function createModelViewMock() {
    var mockModelView = TypeMoq.Mock.ofType();
    var mockModelBuilder = TypeMoq.Mock.ofType();
    var mockTextBuilder = componentBuilderMock_1.createComponentBuilderMock();
    var mockGroupContainerBuilder = containerBuilderMock_1.createContainerBuilderMock();
    var mockFormContainerBuilder = formContainerBuilderMock_1.createFormContainerBuilderMock();
    mockModelBuilder.setup(function (b) { return b.text(); }).returns(function () { return mockTextBuilder.mockBuilder.object; });
    mockModelBuilder.setup(function (b) { return b.groupContainer(); }).returns(function () { return mockGroupContainerBuilder.mockBuilder.object; });
    mockModelBuilder.setup(function (b) { return b.formContainer(); }).returns(function () { return mockFormContainerBuilder.object; });
    mockModelView.setup(function (mv) { return mv.modelBuilder; }).returns(function () { return mockModelBuilder.object; });
    return {
        modelBuilder: mockModelBuilder,
        modelView: mockModelView
    };
}
exports.createModelViewMock = createModelViewMock;
