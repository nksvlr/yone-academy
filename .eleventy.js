module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy("src/assets");
  
  eleventyConfig.addFilter("year", () => new Date().getFullYear());

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    pathPrefix: "/yone-academy/"   // ← Adiciona essa linha (com vírgula no fechamento de cima)
  };
};