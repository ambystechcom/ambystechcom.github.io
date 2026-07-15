---
name: elaris.ui
repo: Ambystech.Elaris.UI
url: https://github.com/ambystechcom/Ambystech.Elaris.UI
language: C#
registry: NuGet
packageName: Ambystech.Elaris.UI
install: dotnet add package Ambystech.Elaris.UI
accent: fuchsia
terminalAbout: true-color terminal UI
tagline: True-color terminal UI for .NET
description: A lightweight terminal UI library with true 24-bit RGB color support. Built for modern terminals, cross-platform on Windows, macOS and Linux.
topics: [dotnet, terminal-ui, cross-platform]
order: 1
---

Elaris.UI is a lightweight Terminal UI library for .NET with true 24-bit RGB color support, built for modern terminals with cross-platform support.

## Features

- **True 24-bit RGB color** — full truecolor support via ANSI escape sequences
- **Zero dependencies** — pure .NET implementation with no external packages
- **Cross-platform** — works on Windows, macOS and Linux
- **Modern architecture** — clean, extensible widget-based design
- **High performance** — double-buffered rendering with minimal overhead
- **Multi-target** — supports .NET 8.0, .NET 9.0 and .NET 10.0

## Quick start

```bash
dotnet add package Ambystech.Elaris.UI
```

```csharp
using Ambystech.Elaris.UI;

// Create application
var app = new Application();

// Create main window
var window = new Window("Hello Elaris")
{
    Width = 80,
    Height = 24
};

// Add widgets
var label = new Label("Welcome to Elaris!")
{
    ForegroundColor = Color.FromRgb(100, 200, 255)
};
window.Add(label);

// Run application
app.Run(window);
```

Elaris.UI works in any terminal that supports ANSI escape codes — make sure yours supports truecolor for the best experience. A plugin package for code editing is also available as `Ambystech.Elaris.UI.CodeEditor.Plugins`.

## Architecture

The library is organized around a small set of core components:

- **Screen** — terminal screen abstraction with buffering
- **Widget** — base class for all UI components
- **EventLoop** — main application loop and event handling
- **AnsiRenderer** — 24-bit RGB color rendering via ANSI codes
- **InputHandler** — keyboard and mouse input processing

```
Widget (abstract base)
├── Container
│   ├── Window
│   ├── Frame
│   └── Panel
├── Label
├── TextField
├── TextView
└── StatusBar
```

## Building from source

```bash
git clone https://github.com/ambystechcom/Ambystech.Elaris.UI.git elaris
cd elaris/lib

dotnet restore
dotnet build
dotnet test
```
