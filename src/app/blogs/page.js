import NavBar from "@/components/navBar";
import Footer from "@/components/footer";
import FloatingButton from "@/components/floatingButton";
import BlogPage from "@/components/blogPage";
import Parser from "rss-parser";

export const metadata = {
  title: "Calisthenics Blogs & Training Insights",
  description:
    "Explore training insights, workout guides, and fitness advice from Pure Calisthenics coaches in Mumbai.",
  alternates: {
    canonical: "/blogs",
  },
  openGraph: {
    title: "Calisthenics Blogs & Training Insights | Pure Calisthenics",
    description:
      "Explore training insights, workout guides, and fitness advice from Pure Calisthenics coaches in Mumbai.",
    url: "https://purecalisthenics.com/blogs",
    images: [
      {
        url: "/images/thumbnail.webp",
        width: 1200,
        height: 630,
        alt: "Pure Calisthenics Blogs",
      },
    ],
  },
};

export const revalidate = 3600;

async function getBlogs() {
  const parser = new Parser({
    customFields: {
      item: ["item"],
    },
  });

  try {
    const feed = await parser.parseURL(
      "https://punitkshah5.wixsite.com/mysite/blog-feed.xml"
    );
    return (feed.items || []).map((item) => ({
      title: item.title || "",
      desc: item.contentSnippet || "",
      thumbnail: item.enclosure?.url || null,
      date: item.pubDate || "",
      link: item.link || "#",
      content: item["content:encoded"] ? [item["content:encoded"]] : [],
    }));
  } catch (error) {
    console.error("Error pre-fetching blogs on server:", error);
    return [];
  }
}

export default async function Blogs() {
  const posts = await getBlogs();

  return (
    <main className="flex justify-center items-center flex-col overflow-x-hidden bg-secondary">
      <FloatingButton />
      <NavBar />
      <BlogPage initialPosts={posts} />
      <Footer />
    </main>
  );
}
