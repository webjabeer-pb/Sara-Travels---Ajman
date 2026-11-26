import { useEffect } from "react";

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  path: string;
  ogImage?: string;
  ogType?: string;
  breadcrumbs?: BreadcrumbItem[];
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
}

function setMetaTag(attr: "name" | "property", key: string, content: string) {
  let tag = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function setCanonicalLink(url: string) {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", url);
}

export default function SEO({
  title,
  description,
  keywords,
  path,
  ogImage = "/assets/aistudio/WhatsApp_Image_2026-11-26_at_2.02_c5a43ed9.png",
  ogType = "website",
  breadcrumbs,
  structuredData,
}: SEOProps) {
  useEffect(() => {
    const origin = window.location.origin;
    const canonicalUrl = `${origin}${path === "/" ? "/" : path}`;
    const absoluteImage = ogImage.startsWith("http") ? ogImage : `${origin}${ogImage}`;

    document.title = title;
    setMetaTag("name", "description", description);
    if (keywords) {
      setMetaTag("name", "keywords", keywords);
    }
    setMetaTag("name", "robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    setCanonicalLink(canonicalUrl);

    // OpenGraph
    setMetaTag("property", "og:type", ogType);
    setMetaTag("property", "og:site_name", "SARA TRAVELS");
    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:url", canonicalUrl);
    setMetaTag("property", "og:image", absoluteImage);

    // Twitter
    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", title);
    setMetaTag("name", "twitter:description", description);
    setMetaTag("name", "twitter:image", absoluteImage);

    // Dynamic per-page JSON-LD graph
    const graph: Record<string, unknown>[] = [
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: title,
        description,
        isPartOf: { "@id": `${origin}/#website` },
        inLanguage: "en-AE",
      },
    ];

    const crumbs = breadcrumbs ?? [
      { name: "Home", path: "/" },
      ...(path !== "/" ? [{ name: title.split("|")[0].split("–")[0].trim(), path }] : []),
    ];

    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${canonicalUrl}#breadcrumb`,
      itemListElement: crumbs.map((crumb, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: crumb.name,
        item: `${origin}${crumb.path}`,
      })),
    });

    if (structuredData) {
      if (Array.isArray(structuredData)) {
        graph.push(...structuredData);
      } else {
        graph.push(structuredData);
      }
    }

    let script = document.getElementById("page-seo-schema") as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = "page-seo-schema";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": graph,
    });
  }, [title, description, keywords, path, ogImage, ogType, breadcrumbs, structuredData]);

  return null;
}
