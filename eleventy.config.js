module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("stylesheets/");
  eleventyConfig.addPassthroughCopy("public/");
};