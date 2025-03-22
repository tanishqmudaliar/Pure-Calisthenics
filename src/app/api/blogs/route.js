import { NextResponse } from "next/server";
import Parser from "rss-parser";

export async function GET() {
  const parser = new Parser({
    customFields: {
      item: ["item"],
    },
  });

  try {
    const feed = await parser.parseURL(
      "https://punitkshah5.wixsite.com/mysite/blog-feed.xml"
    );
    const posts = feed.items.map((item) => {
      return {
        title: item.title,
        desc: item.contentSnippet,
        thumbnail: item.enclosure?.url || null,
        date: item.pubDate,
        link: item.link,
        content: item["content:encoded"] ? [item["content:encoded"]] : [],
      };
    });

    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch blog posts" },
      { status: 500 }
    );
  }
}
