'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import http = require('http');
var request = require('request');
import {IotDevice} from './iotDevice';



// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Windows Iot Core Extension for VS Code is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposableGetDeviceInfo = vscode.commands.registerCommand('extension.getDeviceInfo', () => {       
        let iotDevice = new IotDevice();
        iotDevice.GetDeviceInfo();       
    });
    context.subscriptions.push(disposableGetDeviceInfo);

    let disposableGetPackages = vscode.commands.registerCommand('extension.getPackages', () => {       
        let iotDevice = new IotDevice();
        iotDevice.GetPackages();       
    });
    context.subscriptions.push(disposableGetPackages);

    let disposableInstallPackage = vscode.commands.registerCommand('extension.installPackage', () => {       
        let iotDevice = new IotDevice();
        iotDevice.InstallPackage();       
    });
    context.subscriptions.push(disposableInstallPackage);

    let disposableUploadFile = vscode.commands.registerCommand('extension.uploadFile', () => {       
        let iotDevice = new IotDevice();
        iotDevice.UploadFile();       
    });
    context.subscriptions.push(disposableUploadFile);
    
    let disposableGetDeviceName = vscode.commands.registerCommand('extension.getDeviceName', () => {       
        let iotDevice = new IotDevice();
        iotDevice.GetDeviceName();       
    });
    context.subscriptions.push(disposableGetDeviceName);

    let disposableSetDeviceName = vscode.commands.registerCommand('extension.setDeviceName', () => {
        let iotDevice = new IotDevice();
        iotDevice.SetDeviceName();       
    });
    
    context.subscriptions.push(disposableSetDeviceName);
}

// this method is called when your extension is deactivated
export function deactivate() {
}