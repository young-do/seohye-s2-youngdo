const autoPreprocess = require('svelte-preprocess');

module.exports = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: autoPreprocess({
    // @NOTE:
    // In auto-preprocessing mode, you can set `postcss: true` if `postcss-load-config` is installed
    // and `svelte-preprocess` will look for a PostCSS config file in your project.
    postcss: true,
  }),
};
