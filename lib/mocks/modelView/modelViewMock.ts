/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as azdata from 'azdata';
import * as TypeMoq from 'typemoq';
import { createComponentBuilderMock } from './componentBuilderMock';
import { createContainerBuilderMock } from './containerBuilderMock';
import { createFormContainerBuilderMock } from './formContainerBuilderMock';

export type ComponentAndMockComponentBuilder<C, B> = {
	component: C,
	mockBuilder: TypeMoq.IMock<B>
};

export function createModelViewMock(): {
	modelBuilder: TypeMoq.IMock<azdata.ModelBuilder>,
	modelView: TypeMoq.IMock<azdata.ModelView>
} {
	const mockModelView = TypeMoq.Mock.ofType<azdata.ModelView>();
	const mockModelBuilder = TypeMoq.Mock.ofType<azdata.ModelBuilder>();
	const mockTextBuilder = createComponentBuilderMock<azdata.TextComponent>();
	const mockGroupContainerBuilder = createContainerBuilderMock<azdata.GroupContainer>();
	const mockFormContainerBuilder = createFormContainerBuilderMock();
	mockModelBuilder.setup(b => b.text()).returns(() => mockTextBuilder.mockBuilder.object);
	mockModelBuilder.setup(b => b.groupContainer()).returns(() => mockGroupContainerBuilder.mockBuilder.object);
	mockModelBuilder.setup(b => b.formContainer()).returns(() => mockFormContainerBuilder.object);
	mockModelView.setup(mv => mv.modelBuilder).returns(() => mockModelBuilder.object);
	return {
		modelBuilder: mockModelBuilder,
		modelView: mockModelView
	};
}