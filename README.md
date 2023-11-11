# rayous-daisyui

**rayous-daisyui** is a component loader utility for [rayous](https://github.com/kevinJ045/guilib). It allows you to easily fetch and add components from the rayous-daisyui GitHub repository into your project. It's a handy tool for extending your rayous app with external [daisyui](https://daisyui.com/) components and managing your project's styling.

## Table of Contents

- [Usage](#usage)
- [Add Components](#add-components)
- [Remove Components](#remove-components)
- [Generate Styles](#generate-styles)
- [Add DaisyUI](#add-daisyui)
- [Components](#components)

## Usage

You can use `rayous-daisyui` with `npx` without installing it globally. Here's how you can use the available commands:

### Add Components

To add components from a GitHub repository, use the `add` command. This will fetch the specified components and add them to your project's `components/widget.ts` file.

```bash
npx rayous-daisyui add button card ...
``` 

### Remove Components

To remove components from your project, use the `remove` command. This will remove the specified components from your project's `components/widget.ts` file.

```bash
npx rayous-daisyui remove button card ...
``` 

### Generate Styles

You can generate the styles for your project using the `styles` command. This will create a `styles/daisy.tail.css` file with the basic Tailwind CSS configuration.

```bash
npx rayous-daisyui styles
``` 

### Add DaisyUI

To add DaisyUI to your Tailwind CSS configuration, use the `create` command. This will add DaisyUI to your `tailwind.config.js` file.

```bash
npx rayous-daisyui create
```

### Components

You can find available components in the [GitHub repository](https://github.com/kevinJ045/rayous-daisyui/tree/main/components). 
Or you can just list them with:
```bash
npx rayous-daisyui list
```