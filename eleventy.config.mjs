import toml from "@iarna/toml";

export default function (eleventyConfig) {
  eleventyConfig.setFrontMatterParsingOptions({
    delimiters: "+++",
    language: "toml",
    engines: { toml: toml.parse },
  });
  eleventyConfig.addPassthroughCopy({
    "docs/assets": "assets",
    skills: "source/skills",
  });
  eleventyConfig.addWatchTarget("skills");
  eleventyConfig.addFilter("focusableCode", (content) =>
    content.replaceAll("<pre>", '<pre tabindex="0">')
  );
  eleventyConfig.addFilter("sectionPages", (pages, section) =>
    pages.filter((page) => page.data.section === section)
      .sort((a, b) => (a.data.order ?? 0) - (b.data.order ?? 0))
  );
  return {
    dir: { input: "docs", output: "_site" },
    templateFormats: ["md", "njk"],
    markdownTemplateEngine: false,
    htmlTemplateEngine: "njk",
  };
}
