module.exports = function (eleventyConfig) {
  eleventyConfig.addShortcode("shortDate", function (date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, 0);
    return `${year}/${month}`;
  });
};
