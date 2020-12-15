/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as azdata from 'azdata';
import * as TypeMoq from 'typemoq';
import { createComponentBuilderMock as createComponentBuilderMock } from './componentBuilderMock';
import { ComponentAndMockComponentBuilder } from './modelViewMock';

export function createContainerBuilderMock<C extends azdata.Container<any, any>, B extends azdata.ContainerBuilder<C, any, any, any> = azdata.ContainerBuilder<C, any, any, any>>(): ComponentAndMockComponentBuilder<C, B> {
	const mockContainerBuilder = createComponentBuilderMock<C, B>();
	// For now just have these be passthrough - can hook up additional functionality later if needed
	mockContainerBuilder.mockBuilder.setup(b => b.withItems(TypeMoq.It.isAny(), undefined)).returns(() => mockContainerBuilder.mockBuilder.object);
	mockContainerBuilder.mockBuilder.setup(b => b.withLayout(TypeMoq.It.isAny())).returns(() => mockContainerBuilder.mockBuilder.object);
	return mockContainerBuilder;
}
