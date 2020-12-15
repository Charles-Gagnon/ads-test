import * as azdata from 'azdata';
import * as vscode from 'vscode';
/**
 * Stub input box to use for testing
 */
export declare class StubInputBox implements azdata.InputBoxComponent {
    readonly id = "input-box";
    enabled: boolean;
    onTextChanged: vscode.Event<any>;
    onEnterKeyPressed: vscode.Event<string>;
    updateProperties(properties: {
        [key: string]: any;
    }): Thenable<void>;
    updateProperty(key: string, value: any): Thenable<void>;
    updateCssStyles(cssStyles: {
        [key: string]: string;
    }): Thenable<void>;
    readonly onValidityChanged: vscode.Event<boolean>;
    readonly valid: boolean;
    validate(): Thenable<boolean>;
    focus(): Thenable<void>;
}
