// var webpack = require('webpack');
// var path = require('path');

// // const VENDOR_LIBS = [
// //   'react', 'faker', 'lodash', 'redux', 'react-redux', 
// //   'react-dom', 'react-input-range', 
// //   'redux-form', 'redux-thunk'
// // ];

// module.exports = {
//   entry: {
//     bundle: './client/src/index.js', // tells Webpack to produce a file called 'bundle', starting with the src folder's index.js file, since that is updated more frequently
//     vendor: VENDOR_LIBS // builds a separate bundle out of the library dependencies listed in the VENDOR_LIBS array, since those are updated less frequently; The purpose of this is to improve load speed!
//   },
//   output: {
//     path: path.join(__dirname, 'dist'),
//     filename: '[name].[chunkhash].js' 
//     // [name] will evaluate to 'bundle' the first time, but 
//     // 'vendor' the second time;
//     // [chunkhash] will evaluate to the hash of the contents of 
//     // the new bundle file (which is itself a unique string of characters 
//     // that identifies an instance of a bundle;
//   },
//   module: {
//     // rules: [
//     //   {
//     //     use: 'babel-loader',
//     //     test: /\.js$/,
//     //     exclude: /node_modules/
//     //   },
//     //   {
//     //     use: ['style-loader', 'css-loader'],
//     //     test: /\.css$/
//     //   }
//     // ]
//   },
//   optimization: {
//     splitChunks: {
//       chunks: 'all'
//     }
//   }
//   // plugins: [
//   //   // The plugin below tells Webpack to look at the sum total 
//   //   // of Webpack's output between bundle and vendor outputs;
//   //   // It then tells Webpack that, if any of those outputs are duplicates, 
//   //   // to pull them out, and only add them to the vendor entry point.
//   //   new webpack.optimize.splitChunks({
//   //     names: ['vendor', 'manifest']
//   //     // ^^^ Creates a third file in /dist that helps tell the browser
//   //     // whether or not the vendor file has actually changed;
//   //     // ^^^ This will 'bust the cache', and re-download vendor files;
//   //   }),
//   //   // The plug-in below automatically generates an html template for us, based on the
//   //   // file we pass in at the 'template' property, and puts it in the /dist directory.
//   //   // The below code will eventually tell React to 
//   //   // behave as if in it's production mode, NOT development
//   //   // mode — for example, it will check for less errors, so it runs more quickly —
//   //   // once we've defined NODE_ENV in the package.json file's "build" script (where we
//   //   // also need to add a -p tag to webpack, which minifies our javasript code, 
//   //   // once again helping with  performance issues);
//   //   // The plug-in below also makes the NODE_ENV variable that we defined in our package.json 
//   //   // file available on the window; the syntax is to put the variable on the left, and the
//   //   // value we want to assign it to on the right:
//   // ]
// };

// // NOTES ON PLUG-INS (general)
// // 1.) Plugins are like loaders, but they are more about looking at
// // the sum total output or input going through Webpack, while loaders 
// // are more about working with individual files);
// // 2.) 

// // NOTES ON Html-Webpack-Plugin:
// // 1.) Its purpose is to replace the need to manually maintain the script tags
// // inside our index.html file as we update our webpack file.

// // NOTES on Webpack-Dev-Server:
// // 1.) It saves files in memory.
// // 2.) 
// //
// // By default, Webpack puts out only static files;
// // 
// // When we deploy with Webpack, we have to ask ourselves:
// // —Is this a static app (with only frontend)?
// // —Or a dynamic one (frontend AND backend)?

// // If it's a dynamic one, we ask ourselves:
// // —do we have a server that both serves the app and does API calls?
// // —or do we have 2 servers that each do only one of those things?

// // Making webpack work with Node is difficult, because
// // Webpack is the center of our development universe, and 
// // so it takes a compatibility layer to make them
// // work together well.

// // Node has to serve up our webpack bundle in both a development
// // AND production environment. 

// // In a production world, we don't want to run webpack at all, because
// // it's a huge resource hog!