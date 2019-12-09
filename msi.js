const { MSICreator } = require('electron-wix-msi');
const path = require('path')

const APP_DIR = path.resolve(__dirname, './dist/link-win32-x64/');
const OUT_DIR = path.resolve(__dirname, './dist/link-win32-x64-msi/');

// Step 1: Instantiate the MSICreator
const msiCreator = new MSICreator({
  appDirectory: APP_DIR,
  description: 'My amazing link simulator',
  exe: 'link',
  name: 'link',
  manufacturer: 'link Technologies',
  version: '1.1.2',
  outputDirectory: OUT_DIR
});

// Step 2: Create a .wxs template file
msiCreator.create().then(() => {
  // Step 3: Compile the template to a .msi file
  msiCreator.compile()
})

// msiCreator.compile();

// import { MSICreator } from 'electron-wix-msi';

// // Step 1: Instantiate the MSICreator
// const msiCreator = new MSICreator({
//   appDirectory: APP_DIR,
//   description: 'My amazing link simulator',
//   exe: 'link',
//   name: 'link',
//   manufacturer: 'link Technologies',
//   version: '1.1.2',
//   outputDirectory: OUT_DIR
// });

// // Step 2: Create a .wxs template file
// await msiCreator.create();

// // Step 3: Compile the template to a .msi file
// await msiCreator.compile();