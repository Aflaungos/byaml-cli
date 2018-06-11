# BYAML CLI
![alt Ice-Spear](logo.png)

BYAML-CLI is a command line tool to en/decode BYAML files.

It's using NodeJS and the byaml-lib from the same project-group.

## Installation
To install it globally run:
```
npm install -g gitlab:ice-spear-tools/byaml-cli
```
## Usage
A help page can be shown with:
```
byaml --help
```
When installed globally, you can use it with
```
byaml [encode|decode] [fileIn] <fileOut>
```
The "fileOut" parameter at the end is optional, if set, it's writing the result to the set file.

If empty, the result is printed directly to the stdout and can be used to pipe it.

