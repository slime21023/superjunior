import { HtmlBasePlugin } from "@11ty/eleventy";
import toml from "@iarna/toml";

// GitHub Pages serves the project site under /superjunior/; pages keep root links and the plugin prefixes them.
export const pathPrefix = "/superjunior/";

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(HtmlBasePlugin);
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
    pathPrefix,
    dir: { input: "docs", output: "_site" },
    templateFormats: ["md", "njk"],
    markdownTemplateEngine: false,
    htmlTemplateEngine: "njk",
  };
}
