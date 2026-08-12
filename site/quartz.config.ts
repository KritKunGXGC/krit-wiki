import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Krit Wiki — Quartz 4 configuration
 * Thai fonts + th-TH locale + Catppuccin palette (ตามธีมของ vault)
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Krit Wiki",
    pageTitleSuffix: " · Krit Wiki",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "th-TH",
    baseUrl: "kritkunxgxc.github.io/krit-wiki",
    ignorePatterns: [],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Noto Sans Thai",
        body: "IBM Plex Sans Thai",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#eff1f5",
          lightgray: "#ccd0da",
          gray: "#9ca0b0",
          darkgray: "#6c6f85",
          dark: "#4c4f69",
          secondary: "#1e66f5",
          tertiary: "#8839ef",
          highlight: "#e6e9ef",
          textHighlight: "#df8e1d",
        },
        darkMode: {
          light: "#1e1e2e",
          lightgray: "#45475a",
          gray: "#6c7086",
          darkgray: "#bac2de",
          dark: "#cdd6f4",
          secondary: "#89b4fa",
          tertiary: "#cba6f7",
          highlight: "#313244",
          textHighlight: "#f9e2af",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      // Plugin.Latex() ถูกปิด — vault ใช้เครื่องหมาย $ เป็นสัญลักษณ์เงิน ไม่ใช่ math mode
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Plugin.CustomOgImages() — omitted to speed up builds
    ],
  },
}

export default config
