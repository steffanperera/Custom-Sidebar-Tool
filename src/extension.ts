import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  const provider = new SimpleViewProvider();

  context.subscriptions.push(
    vscode.window.registerTreeDataProvider(
      "mySidebarView",
      provider
    )
  );
}

class SimpleViewProvider implements vscode.TreeDataProvider<string> {
  getTreeItem(element: string): vscode.TreeItem {
    return new vscode.TreeItem(element);
  }

  getChildren(): string[] {
    return ["Hello VS Code 👋"];
  }
}
