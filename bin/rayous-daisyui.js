#!/usr/bin/env node

const { Command } = require('commander');
const fs = require('fs');

const program = new Command();

program
  .command('add [widgets...]')
  .description('Add widgets to components/widget.ts')
  .action((widgets) => {
    // Implement the add function here
    for (const widget of widgets) {
      const widgetPath = `components/${widget}.ts`;
      const sourceURL = `https://github.com/kevinJ045/rayous-daisyui/raw/main/components/${widget}.ts`;

      // Check if the 'components' directory exists, create if not
      if (!fs.existsSync('components')) {
        fs.mkdirSync('components');
      }

      // Fetch and write the widget content
      const content = fs.readFileSync(sourceURL, 'utf8');
      fs.writeFileSync(widgetPath, content);

      console.log(`Added ${widget} to components/widget.ts`);
    }
  });

program
  .command('remove [widgets...]')
  .description('Remove widgets from components/widget.ts')
  .action((widgets) => {
    // Implement the remove function here
    const widgetFilePath = 'components/widget.ts';

    if (!fs.existsSync(widgetFilePath)) {
      console.log('components/widget.ts does not exist. No widgets to remove.');
      return;
    }

    for (const widget of widgets) {
      const widgetPattern = `import { ${widget}.*`;

      // Read the existing content
      let content = fs.readFileSync(widgetFilePath, 'utf8');

      // Remove the widget import statement
      content = content.replace(new RegExp(widgetPattern, 'g'), '');

      // Write the updated content back
      fs.writeFileSync(widgetFilePath, content);

      console.log(`Removed ${widget} from components/widget.ts`);
    }
  });

program
  .command('styles')
  .description('Generate styles/daisy.tail.css')
  .action(() => {
    // Implement the styles function here
    const tailwindCSS = `
@tailwind base;
@tailwind components;
@tailwind variants;
@tailwind utilities;
`;

    const stylesPath = 'styles/daisy.tail.css';

    if (!fs.existsSync('styles')) {
      fs.mkdirSync('styles');
    }

    fs.writeFileSync(stylesPath, tailwindCSS);

    console.log('Generated daisy.tail.css in styles/ directory.');
  });

program
  .command('create')
  .description('Add daisyui to tailwind.config.js')
  .action(() => {
    // Implement the create function here
    const tailwindConfigPath = 'tailwind.config.js';

    if (fs.existsSync(tailwindConfigPath)) {
      let content = fs.readFileSync(tailwindConfigPath, 'utf8');

      if (!content.includes('daisyui')) {
        content = content.replace(
          'plugins: [',
          `plugins: [\n    require('daisyui'),`
        );

        fs.writeFileSync(tailwindConfigPath, content);
        console.log('Added daisyui to tailwind.config.js plugins.');
      } else {
        console.log('daisyui is already added to tailwind.config.js plugins.');
      }
    } else {
      console.log('tailwind.config.js does not exist. Please create it.');
    }
  });

program.parse(process.argv);
