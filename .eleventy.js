module.exports = function (eleventyConfig) {

  // Copia os arquivos de assets (css, js, imagens) pra pasta final sem processar
  eleventyConfig.addPassthroughCopy("src/assets");

  // Filtro pra pegar o ano atual (usado no footer)
  eleventyConfig.addFilter("year", () => new Date().getFullYear());

  return {
    dir: {
      input: "src",          // Pasta onde ficam os arquivos que você edita
      includes: "_includes", // Pasta de templates reutilizáveis
      data: "_data",         // Pasta de dados JSON
      output: "_site"        // Pasta onde o site pronto vai ficar
    }
  };
};
