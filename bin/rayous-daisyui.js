#!/usr/bin/env node

const { Command } = require('commander');
const fs = require('fs');
const https = require('https');

const program = new Command();


function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    const fileStream = fs.createWriteStream(destPath);

    https.get(url, (response) => {
      response.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });

      fileStream.on('error', (err) => {
        fs.unlinkSync(destPath);
        reject(err);
      });
    });
  });
}


function listAndDownloadAllTSFiles() {
  listAllTSFiles((files) => {
    addWidgets(...files.map(file => file.substring(0, file.length-3).split('/').pop()));
  });
}

function addWidgets(...widgets){
  if (widgets.length === 1 && widgets[0] === '*') {
    // If the argument is "*", list and download all .ts files from the repository
    listAndDownloadAllTSFiles();
  } else {
    // Implement the add function here
    for (const widget of widgets) {
      const widgetPath = `components/${widget}.ts`;
      const sourceURL = `https://raw.githubusercontent.com/kevinJ045/rayous-daisyui/main/components/${widget}.ts`;

      // Check if the 'components' directory exists, create if not
      if (!fs.existsSync('components')) {
        fs.mkdirSync('components');
      }

      // Fetch and write the widget content
      // const content = fs.readFileSync(sourceURL, 'utf8');
      // fs.writeFileSync(widgetPath, content);

      downloadFile(sourceURL, widgetPath)
        .then(() => {
          console.log(`Added ${widget} to components/${widget}.ts`);
        })
        .catch((error) => {
          console.error(`Error downloading ${widget}: ${error.message}`);
        });
    }
  }
}

program
  .command('add [widgets...]')
  .description('Add widgets to components/widget.ts')
  .action((widgets) => {
    addWidgets(...widgets);
  });

  program
  .command('list')
  .description('List all components from the repository')
  .action(() => {
    listAllTSFiles((files) => {
      console.log('List of components:');
      files.forEach((file) => {
        console.log(file.substring(0, file.length-3).split('/').pop());
      });
    });
  });

function listAllTSFiles(callback) {
  const repoURL = 'https://api.github.com/repos/kevinJ045/rayous-daisyui/contents/components';
  // Fetch the list of .ts files from the repository
  fetch(repoURL)
    .then((response) => response.json())
    .then((fileList) => {
      const files = fileList.map(file => file.download_url).filter(Boolean);
      const tsFiles = files.filter((file) => file.endsWith('.ts'));

      if (tsFiles.length > 0) {
        callback(tsFiles);
      } else {
        console.log('No components found in the repository.');
      }
    })
    .catch((error) => {
      console.error(`Error fetching the list of components: ${error.message}`);
    });
}

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
          /"plugins"\:\s*\[/,
          `"plugins": [\n\trequire('daisyui'),`
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
