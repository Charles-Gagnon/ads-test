/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as azdata from 'azdata';
import * as TypeMoq from 'typemoq';
import { createContainerBuilderMock } from './containerBuilderMock';

export function createFormContainerBuilderMock(): TypeMoq.IMock<azdata.FormBuilder> {
	const mockContainerBuilder = createContainerBuilderMock<azdata.FormContainer, azdata.FormBuilder>();
	mockContainerBuilder.mockBuilder.setup(b => b.withFormItems(TypeMoq.It.isAny(), TypeMoq.It.isAny())).returns(() => mockContainerBuilder.mockBuilder.object);
	return mockContainerBuilder.mockBuilder;
}