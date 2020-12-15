import * as azdata from 'azdata';
import { ComponentAndMockComponentBuilder } from './modelViewMock';
export declare function createContainerBuilderMock<C extends azdata.Container<any, any>, B extends azdata.ContainerBuilder<C, any, any, any> = azdata.ContainerBuilder<C, any, any, any>>(): ComponentAndMockComponentBuilder<C, B>;
