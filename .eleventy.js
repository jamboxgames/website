module.exports = function(eleventyConfig) {
    // Output directory: _site
  
    // Copy `img/` to `_site/img`
    eleventyConfig.addPassthroughCopy("img"); 
    eleventyConfig.addPassthroughCopy("videos"); 
    eleventyConfig.addPassthroughCopy("js"); 
    eleventyConfig.addPassthroughCopy("site.webmanifest"); 
    eleventyConfig.addPassthroughCopy("*.xml"); 
    eleventyConfig.addPassthroughCopy("*.png"); 
    eleventyConfig.addPassthroughCopy("json"); 
    eleventyConfig.addPassthroughCopy("*.svg"); 
    eleventyConfig.addPassthroughCopy("*.html"); 
    // Copy `css/fonts/` to `_site/css/fonts`
    // If you use a subdirectory, it’ll copy using the same directory structure.
    eleventyConfig.addPassthroughCopy("css"); 
    eleventyConfig.addPassthroughCopy("_redirects"); 
    eleventyConfig.setTemplateFormats([
      "md",
      "css", // css is not yet a recognized template extension in Eleventy
      "txt",
      "njk"
    ]);
  }