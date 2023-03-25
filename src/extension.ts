import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "splitwithnewfile" is now active!');

	let overdefsplit = vscode.commands.registerCommand('workbench.action.splitEditor', () => {
		vscode.workspace.openTextDocument({ content: '' }).then((doc) => {
			vscode.window.showTextDocument(doc, { viewColumn: vscode.ViewColumn.Beside });
		});
	});

	context.subscriptions.push(overdefsplit);

	let splitdown = vscode.commands.registerCommand('workbench.action.splitEditorDown', () => {
		vscode.workspace.openTextDocument({ content: '' }).then((doc) => {
			const activeEditor = vscode.window.activeTextEditor;
			const viewColumn = activeEditor?.viewColumn ?? vscode.ViewColumn.One;
			vscode.window.showTextDocument(doc, { viewColumn: viewColumn, preserveFocus: true, preview: false }).then((editor) => {
				vscode.commands.executeCommand('workbench.action.moveEditorToBelowGroup');
			});
		});
	});

	context.subscriptions.push(splitdown);

	let splitup = vscode.commands.registerCommand('workbench.action.splitEditorUp', () => {
		vscode.workspace.openTextDocument({ content: '' }).then((doc) => {
			const activeEditor = vscode.window.activeTextEditor;
			const viewColumn = activeEditor?.viewColumn ?? vscode.ViewColumn.One;
			vscode.window.showTextDocument(doc, { viewColumn: viewColumn, preserveFocus: true, preview: false }).then((editor) => {
				vscode.commands.executeCommand('workbench.action.moveEditorToAboveGroup');
			});
		});
	});

	context.subscriptions.push(splitup);

	let splitleft = vscode.commands.registerCommand('workbench.action.splitEditorLeft', () => {
		vscode.workspace.openTextDocument({ content: '' }).then((doc) => {
			const activeEditor = vscode.window.activeTextEditor;
			const viewColumn = activeEditor?.viewColumn ?? vscode.ViewColumn.One;
			vscode.window.showTextDocument(doc, { viewColumn: viewColumn, preserveFocus: true, preview: false }).then((editor) => {
				vscode.commands.executeCommand('workbench.action.moveEditorToLeftGroup');
			});
		});
	});

	context.subscriptions.push(splitleft);

	let splitright = vscode.commands.registerCommand('workbench.action.splitEditorRight', () => {
		vscode.workspace.openTextDocument({ content: '' }).then((doc) => {
			const activeEditor = vscode.window.activeTextEditor;
			const viewColumn = activeEditor?.viewColumn ?? vscode.ViewColumn.One;
			vscode.window.showTextDocument(doc, { viewColumn: viewColumn, preserveFocus: true, preview: false }).then((editor) => {
				vscode.commands.executeCommand('workbench.action.moveEditorToRightGroup');
			});
		});
	});

	context.subscriptions.push(splitright);
}

export function deactivate() {}
