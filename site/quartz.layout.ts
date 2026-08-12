import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// emoji icons สำหรับโฟลเดอร์ใน Explorer sidebar
const folderIcons: Record<string, string> = {
  concepts: "🧠",
  entities: "👤",
  sources: "📚",
  syntheses: "🔬",
  events: "🗓️",
  MOCs: "🗺️",
  memory: "🧠",
  Bases: "🗄️",
  canvases: "🖼️",
}

const explorer = Component.Explorer({
  sortFn: (a, b) => a.displayName.localeCompare(b.displayName, undefined, { numeric: true }),
  mapFn: (node) => {
    if (node.isFolder) {
      const key = (node as { name?: string }).name ?? node.slugSegment
      const icon = folderIcons[key] ?? folderIcons[key?.toLowerCase()]
      if (icon) node.displayName = `${icon}  ${node.displayName}`
    }
  },
})

const graph = Component.Graph({
  localGraph: {
    drag: true,
    zoom: true,
    depth: 2,
    scale: 1.1,
    repelForce: 0.6,
    centerForce: 0.35,
    linkDistance: 90,
    fontSize: 0.6,
    opacityScale: 1,
    showTags: false,
  },
  globalGraph: {
    drag: true,
    zoom: true,
    depth: -1,
    scale: 0.9,
    repelForce: 0.4,
    centerForce: 0.3,
    linkDistance: 110,
    fontSize: 0.6,
    opacityScale: 1,
    showTags: false,
  },
})

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/KritKunGXGC/krit-wiki",
      Obsidian: "https://obsidian.md",
      Quartz: "https://quartz.jzhao.xyz",
    },
  }),
}

const left: NonNullable<PageLayout["left"]> = [
  Component.PageTitle(),
  Component.MobileOnly(Component.Spacer()),
  Component.Search(),
  Component.Darkmode(),
  explorer,
]

// components for content pages
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta({ showReadingTime: true }),
    Component.TagList(),
  ],
  left,
  right: [graph, Component.DesktopOnly(Component.TableOfContents()), Component.Backlinks()],
}

// components for listing pages (folder/tag pages)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta({ showReadingTime: true }),
    Component.TagList(),
  ],
  left,
  right: [graph],
}
