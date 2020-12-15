import * as azdata from 'azdata';
import * as vscode from 'vscode';
/**
 * Stub ModelView Input Box to use for testing
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
export declare class StubCheckbox implements azdata.CheckBoxComponent {
    private _onChanged;
    private _checked;
    readonly id = "stub-checkbox";
    enabled: boolean;
    get checked(): boolean;
    set checked(value: boolean);
    onChanged: vscode.Event<any>;
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
