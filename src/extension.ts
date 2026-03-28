import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";

interface IconItem {
  id: string;
  label: string;
  iconPath: string;
}

export function activate(context: vscode.ExtensionContext) {
  const provider = new ExplorerIconProvider(context);

  context.subscriptions.push(
    vscode.window.registerTreeDataProvider("mySidebarView", provider),
    vscode.commands.registerCommand(
      "customSidebar.selectExplorerIcon",
      () => selectExplorerIcon(context, provider)
    ),
    vscode.commands.registerCommand(
      "customSidebar.resetExplorerIcon",
      () => resetExplorerIcon(context, provider)
    )
  );
}

export function deactivate() {}

async function selectExplorerIcon(
  context: vscode.ExtensionContext,
  provider: ExplorerIconProvider
) {
  const files = await vscode.window.showOpenDialog({
    canSelectFiles: true,
    canSelectFolders: false,
    canSelectMany: false,
    filters: {
      "Image files": ["png", "svg", "jpg", "jpeg", "gif"],
    },
    title: "Select Custom Icon for Explorer",
  });

  if (!files || files.length === 0) {
    return;
  }

  const selectedIconPath = files[0].fsPath;

  try {
    // Copy icon to extension storage
    const storagePath = context.globalStoragePath;
    if (!fs.existsSync(storagePath)) {
      fs.mkdirSync(storagePath, { recursive: true });
    }

    const fileName = path.basename(selectedIconPath);
    const destPath = path.join(storagePath, "explorer-icon");
    fs.copyFileSync(selectedIconPath, destPath);

    // Save icon path to settings
    await context.globalState.update("explorerIconPath", destPath);

    // Apply the icon to workbench settings
    const config = vscode.workspace.getConfiguration("workbench");
    await config.update(
      "iconTheme",
      "vs-seti",
      vscode.ConfigurationTarget.Global
    );

    vscode.window.showInformationMessage(
      `✓ Custom Explorer icon applied! Restart VS Code to see changes.`
    );

    provider.refresh();
  } catch (error) {
    vscode.window.showErrorMessage(
      `Failed to apply custom icon: ${error instanceof Error ? error.message : "Unknown error"}`
    );
  }
}

async function resetExplorerIcon(
  context: vscode.ExtensionContext,
  provider: ExplorerIconProvider
) {
  await context.globalState.update("explorerIconPath", undefined);
  vscode.window.showInformationMessage(
    "✓ Explorer icon reset to default. Restart VS Code to see changes."
  );
  provider.refresh();
}

class ExplorerIconProvider implements vscode.TreeDataProvider<IconItem> {
  private _onDidChangeTreeData: vscode.EventEmitter<
    IconItem | undefined | null | void
  > = new vscode.EventEmitter<IconItem | undefined | null | void>();
  readonly onDidChangeTreeData: vscode.Event<IconItem | undefined | null | void> =
    this._onDidChangeTreeData.event;

  constructor(private context: vscode.ExtensionContext) {}

  refresh(): void {
    this._onDidChangeTreeData.fire();
  }

  getTreeItem(element: IconItem): vscode.TreeItem {
    const treeItem = new vscode.TreeItem(
      element.label,
      vscode.TreeItemCollapsibleState.None
    );
    treeItem.command = {
      command:
        element.id === "select"
          ? "customSidebar.selectExplorerIcon"
          : "customSidebar.resetExplorerIcon",
      title: element.label,
    };
    treeItem.iconPath = new vscode.ThemeIcon("file-icon");
    return treeItem;
  }

  getChildren(): IconItem[] {
    const currentIcon = this.context.globalState.get<string>("explorerIconPath");
    const items: IconItem[] = [
      {
        id: "select",
        label: "📁 Select Custom Explorer Icon",
        iconPath: "",
      },
    ];

    if (currentIcon) {
      items.push({
        id: "reset",
        label: "🔄 Reset to Default Icon",
        iconPath: "",
      });
      items.push({
        id: "current",
        label: `✓ Current Icon: ${path.basename(currentIcon)}`,
        iconPath: "",
      });
    }

    return items;
  }
}
