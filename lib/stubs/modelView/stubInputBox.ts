/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as azdata from 'azdata';
import * as vscode from 'vscode';

/**
 * Stub input box to use for testing
 */
export class StubInputBox implements azdata.InputBoxComponent {
	readonly id = 'input-box';
	public enabled: boolean = false;

	onTextChanged: vscode.Event<any> = undefined!;
	onEnterKeyPressed: vscode.Event<string> = undefined!;

	updateProperties(properties: { [key: string]: any }): Thenable<void> { throw new Error('Not implemented'); }

	updateProperty(key: string, value: any): Thenable<void> { throw new Error('Not implemented'); }

	updateCssStyles(cssStyles: { [key: string]: string }): Thenable<void> { throw new Error('Not implemented'); }

	readonly onValidityChanged: vscode.Event<boolean> = undefined!;

	readonly valid: boolean = true;

	validate(): Thenable<boolean> { throw new Error('Not implemented'); }

	focus(): Thenable<void> { return Promise.resolve(); }
}