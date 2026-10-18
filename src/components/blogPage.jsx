"use client";
import React, { useState, useEffect } from "react";
import localFont from "next/font/local";
import Masonry from "react-masonry-css";
import AOS from "aos";
import "aos/dist/aos.css";

const aspekta = localFont({
  src: "../fonts/AspektaVF.woff2",
});

const ppeditorialul = localFont({
  src: "../fonts/ppeditorialold-ultralightitalic.otf",
});

const BlogPage = ({ initialPosts = [] }) => {
  const [posts, setPosts] = useState(initialPosts);
  const [loading, setLoading] = useState(initialPosts.length === 0);
  const [error, setError] = useState(null);

  useEffect(() => {
    AOS.init();
    if (initialPosts.length === 0) {
      const fetchBlogs = async () => {
        try {
          const response = await fetch("/api/blogs");

          if (!response.ok) {
            throw new Error("Failed to fetch blogs");
          }

          const data = await response.json();
          setPosts(data);
          setLoading(false);
        } catch (err) {
          setError(err.message);
          setLoading(false);
        }
      };

      fetchBlogs();
    }
  }, [initialPosts]);

  // Define breakpoints for the masonry layout
  const breakpointColumnsObj = {
    default: 5, // 5 columns for xl screens
    1280: 5, // 5 columns for xl screens
    1024: 3, // 3 columns for md screens
    640: 1, // 1 column for small screens
  };

  if (loading)
    return (
      <div
        className={`${aspekta.className} w-screen h-screen bg-white py-20 flex justify-center items-center text-5xl md:text-6xl xl:text-7xl font-normal`}
      >
        Loading blogs...
      </div>
    );
  if (error)
    return (
      <div
        className={`${aspekta.className} w-screen h-screen bg-white py-20 flex justify-center items-center text-5xl md:text-6xl xl:text-7xl font-normal`}
      >
        Error: {error}
      </div>
    );

  return (
    <div className="w-screen bg-white">
      <h1
        data-aos="fade-left"
        data-aos-duration="500"
        className={`${aspekta.className} text-5xl md:text-6xl xl:text-7xl text-start md:text-center pt-20 mt-10 mx-5`}
      >
        India's{" "}
        <span className={`${ppeditorialul.className} text-main`}>1st</span>{" "}
        Calisthenics Blog Page
      </h1>
      {posts.length === 0 ? (
        <div
          className={`${aspekta.className} w-screen min-h-screen bg-white flex justify-center items-center text-5xl md:text-6xl xl:text-7xl font-normal`}
        >
          No Blog Posts Found
        </div>
      ) : (
        <div className={`${aspekta.className} py-10 px-5`}>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="flex w-auto -ml-5"
            columnClassName="pl-5 bg-clip-padding"
          >
            {posts.map((post, index) => (
              <div
                data-aos="zoom-in-up"
                data-aos-duration="500"
                key={index}
                className="mb-5 border border-black overflow-hidden"
              >
                <img
                  src={post.thumbnail}
                  alt={post.title ? `${post.title} blog thumbnail` : "Pure Calisthenics blog post"}
                  loading="lazy"
                  className="w-full h-auto"
                />
                <div className="p-5">
                  <div className="mb-3 flex">
                    <img
                      src="/images/punit.webp"
                      alt="Punit Shah - Head Coach"
                      loading="lazy"
                      className="w-10 h-10 rounded-full bg-cover"
                    />
                    <div className="ml-2">
                      <p className="text-sm font-semibold">Punit Shah</p>
                      <p className="text-sm">{post.date}</p>
                    </div>
                  </div>
                  <h2 className={`${aspekta.className} text-2xl font-bold`}>
                    {post.title}
                  </h2>
                  <p className={`${aspekta.className} text-base mt-3`}>
                    {post.desc}{" "}
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500"
                    >
                      Read More
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </Masonry>
        </div>
      )}
    </div>
  );
};

export default BlogPage;
