# Custom Explorer Icon Tool

A VS Code extension that lets you customize the Explorer sidebar icon with your own image files. Choose from PNG, SVG, JPG, or GIF formats to personalize your VS Code interface.

## Features

🎨 **Custom Icon Selection** - Replace the default Explorer icon with any custom image
- Supports PNG, SVG, JPG, JPEG, and GIF formats
- Simple file picker interface
- One-click icon selection

🔄 **Reset to Default** - Instantly revert to VS Code's default Explorer icon

📍 **Icon Management** - View your currently selected custom icon in the sidebar

🔒 **Persistent Storage** - Your custom icon setting is saved and persists across VS Code sessions

---

## Installation

### From VS Code Marketplace
1. Open VS Code
2. Press `Ctrl+Shift+X` (Windows/Linux) or `Cmd+Shift+X` (Mac) to open the Extensions panel
3. Search for "Custom Explorer Icon Tool"
4. Click **Install**
5. Reload VS Code

### Manual Installation (Development)
1. Clone or download this repository
2. Run `npm install` in the project directory
3. Run `npm run compile` to build the extension
4. Press `F5` in VS Code to launch the extension in debug mode

---

## Usage

### Setting a Custom Explorer Icon

1. Click the **Custom Icon Tool** icon in the VS Code activity bar (left sidebar)
2. In the sidebar panel, click **"🎨 Select Custom Explorer Icon"**
3. A file picker dialog will open - select your desired image file
4. The extension will confirm: **"✓ Custom Explorer icon applied! Restart VS Code to see changes."**
5. **Restart VS Code** to apply the new icon

### Resetting to Default

1. Open the **Custom Icon Tool** sidebar
2. If a custom icon is set, you'll see **"🔄 Reset to Default Icon"**
3. Click it to remove your custom icon
4. **Restart VS Code** to revert to the default Explorer icon

### Viewing Current Icon

When you have a custom icon selected, the sidebar displays:
- **✓ Current Icon:** Shows the filename of your custom icon

---

## Supported Image Formats

- **PNG** - Recommended for best quality
- **SVG** - Scalable vector graphics (ideal for crisp icons)
- **JPG/JPEG** - Standard image format
- **GIF** - Animated or static images

**Best Practices:**
- Use square images (e.g., 64x64px or 128x128px)
- For SVG, ensure it renders well at small sizes
- Keep file size small for optimal performance

---

## Commands

This extension provides the following VS Code commands:

| Command | Description |
|---------|-------------|
| `customSidebar.selectExplorerIcon` | Open file picker to select a custom Explorer icon |
| `customSidebar.resetExplorerIcon` | Reset Explorer icon to VS Code default |

**Access Commands:**
- Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac)
- Type the command name

---

## Troubleshooting

### Icon not appearing after restart
- Ensure you've **restarted VS Code** after selection
- Check that the image file is valid and not corrupted
- Try selecting a different image format

### Extension not activating
- Make sure the extension is installed and enabled
- Check VS Code's extension panel to confirm installation status
- Try reloading VS Code

### File picker won't open
- Ensure VS Code has file access permissions
- Try again with administrator privileges
- Check your system clipboard for conflicts

---

## Known Issues

- Changes require VS Code restart to take effect
- Very large image files may impact performance
- Some image formats may not render correctly (use PNG/SVG for best results)

---

## Release Notes

### 1.0.0

Initial release of Custom Explorer Icon Tool

**Features:**
- Select custom Explorer icon from file picker
- Reset to default icon
- Persistent icon storage across sessions
- Simple sidebar interface
- Support for PNG, SVG, JPG, GIF formats

---

## Contributing

Found a bug or have a feature request? Feel free to open an issue or submit a pull request!

## License

MIT License - feel free to use this extension for personal or commercial purposes.

## Following extension guidelines

Ensure that you've read through the extensions guidelines and follow the best practices for creating your extension.

* [Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines)

## Working with Markdown

You can author your README using Visual Studio Code. Here are some useful editor keyboard shortcuts:

* Split the editor (`Cmd+\` on macOS or `Ctrl+\` on Windows and Linux).
* Toggle preview (`Shift+Cmd+V` on macOS or `Shift+Ctrl+V` on Windows and Linux).
* Press `Ctrl+Space` (Windows, Linux, macOS) to see a list of Markdown snippets.

## For more information

* [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
* [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

**Enjoy!**
