module.exports = {
  pages: {
    display: {
      // entry for the page
      entry: 'src/display.ts',
      // the source template
      template: 'public/display.html',
      // output as dist/index.html
      filename: 'display.html',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      //title: 'Index Page',
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      //chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    remote: {
      // entry for the page
      entry: 'src/remote.ts',
      // the source template
      template: 'public/remote.html',
      // output as dist/index.html
      filename: 'remote.html',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      //title: 'Index Page',
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      //chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },
  baseUrl: process.env.NODE_ENV === 'production'
    ? ''
    : 'localhost:8080/'
}