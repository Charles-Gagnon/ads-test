"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runTests = void 0;
var cp = require("child_process");
var download_1 = require("./download");
/**
 * Run VS Code extension test
 *
 * @returns The exit code of the command to launch VS Code extension test
 */
function runTests(options) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, args;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!!options.vscodeExecutablePath) return [3 /*break*/, 2];
                    _a = options;
                    return [4 /*yield*/, download_1.downloadAndUnzipVSCode(options.version, options.platform)];
                case 1:
                    _a.vscodeExecutablePath = _b.sent();
                    _b.label = 2;
                case 2:
                    args = [
                        // https://github.com/microsoft/vscode/issues/84238
                        '--no-sandbox',
                        '--extensionDevelopmentPath=' + options.extensionDevelopmentPath,
                        '--extensionTestsPath=' + options.extensionTestsPath
                    ];
                    if (options.launchArgs) {
                        args = options.launchArgs.concat(args);
                    }
                    return [2 /*return*/, innerRunTests(options.vscodeExecutablePath, args, options.extensionTestsEnv)];
            }
        });
    });
}
exports.runTests = runTests;
function innerRunTests(executable, args, testRunnerEnv) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    var fullEnv = Object.assign({}, process.env, testRunnerEnv);
                    var cmd = cp.spawn(executable, args, { env: fullEnv });
                    cmd.stdout.on('data', function (data) {
                        console.log(data.toString());
                    });
                    cmd.stderr.on('data', function (data) {
                        console.error(data.toString());
                    });
                    cmd.on('error', function (data) {
                        console.log('Test error: ' + data.toString());
                    });
                    var finished = false;
                    function onProcessClosed(code, signal) {
                        if (finished) {
                            return;
                        }
                        finished = true;
                        console.log("Exit code:   " + code);
                        if (code === null) {
                            reject(signal);
                        }
                        else if (code !== 0) {
                            reject('Failed');
                        }
                        console.log('Done\n');
                        resolve(code);
                    }
                    cmd.on('close', onProcessClosed);
                    cmd.on('exit', onProcessClosed);
                })];
        });
    });
}
