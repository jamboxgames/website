const { DateTime } = require("luxon");

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
    // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
    eleventyConfig.addFilter('htmlDateString', (dateObj) => {
      return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
    });
    eleventyConfig.addCollection('featuredPosts', collection => {
      return collection.getFilteredByGlob('./posts/*.md')
        .filter(
          post => post.data.featured_post
        )
        .sort((a,b) => {
          return a.data.post_weight - b.data.post_weight;
        });
     });
  }