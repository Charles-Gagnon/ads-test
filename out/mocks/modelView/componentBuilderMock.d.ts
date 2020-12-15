import * as azdata from 'azdata';
import { ComponentAndMockComponentBuilder } from './modelViewMock';
export declare function createComponentBuilderMock<C extends azdata.Component, B extends azdata.ComponentBuilder<C, any> = azdata.ComponentBuilder<C, any>>(component?: C): ComponentAndMockComponentBuilder<C, B>;
