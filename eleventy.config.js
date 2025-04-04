const lightningcss = require('lightningcss');

module.exports = function(eleventyConfig) {
  eleventyConfig.addTemplateFormats("css");
  
  // Configuration de base pour Lightning CSS
  eleventyConfig.addExtension("css", {
    outputFileExtension: "css",
    compile: async function(inputContent) {
      return async () => {
        const { code } = await lightningcss.transform({
          code: Buffer.from(inputContent),
          minify: true, // Minification
          sourceMap: false, // Désactiver les sourcemaps en production
          targets: { // Définir les navigateurs cibles
            chrome: 95,
            firefox: 90,
            safari: 14,
          },
          // Options supplémentaires possibles :
          drafts: {
            nesting: true, // Activer le nesting CSS
            customMedia: true, // Activer les custom media queries
          },
          // Pour gérer les imports
          projectRoot: "./src",
        });
        
        return code.toString();
      };
    }
  });
}; 
