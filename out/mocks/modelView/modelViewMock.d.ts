import * as azdata from 'azdata';
import * as TypeMoq from 'typemoq';
export declare type ComponentAndMockComponentBuilder<C, B> = {
    component: C;
    mockBuilder: TypeMoq.IMock<B>;
};
export declare function createModelViewMock(): {
    modelBuilder: TypeMoq.IMock<azdata.ModelBuilder>;
    modelView: TypeMoq.IMock<azdata.ModelView>;
};
