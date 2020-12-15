/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as azdata from 'azdata';
import * as TypeMoq from 'typemoq';
import { ComponentAndMockComponentBuilder } from './modelViewMock';

export function createComponentBuilderMock<C extends azdata.Component, B extends azdata.ComponentBuilder<C, any> = azdata.ComponentBuilder<C, any>>(component?: C): ComponentAndMockComponentBuilder<C, B> {
	const mockComponentBuilder = TypeMoq.Mock.ofType<B>();
	// Create a mocked dynamic component if we don't have a stub instance to use.
	// Note that we don't use ofInstance here for the component because there's some limitations around properties that I was
	// hitting preventing me from easily using TypeMoq. Passing in the stub instance lets users control the object being stubbed - which means
	// they can use things like sinon to then override specific functions if desired.
	if (!component) {
		const mockComponent = TypeMoq.Mock.ofType<C>();
		// Need to setup then for when a dynamic mocked object is resolved otherwise the test will hang : https://github.com/florinn/typemoq/issues/66
		mockComponent.setup((x: any) => x.then).returns(() => undefined);
		component = mockComponent.object;
	}
	// For now just have these be passthrough - can hook up additional functionality later if needed
	mockComponentBuilder.setup(b => b.withProperties(TypeMoq.It.isAny())).returns(() => mockComponentBuilder.object);
	mockComponentBuilder.setup(b => b.withValidation(TypeMoq.It.isAny())).returns(() => mockComponentBuilder.object);
	mockComponentBuilder.setup(b => b.component()).returns(() => component! /*mockComponent.object*/);
	return {
		component: component!,
		mockBuilder: mockComponentBuilder
	};
}
