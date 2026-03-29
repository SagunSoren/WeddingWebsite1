import { cormorant_garamod, cormorant_garamod_italic } from "@/app/font";
import BlogCard from "./cards/BlogCard";
import { weddingPosts } from "@/data/blog";

function Blog() {
  return (
    <div className="text-black w-full">
      <div
        className="text-center mb-10
      "
      >
        <h1 className={`text-4xl ${cormorant_garamod.className} tracking-[7]`}>
          READ OUR BLOG
        </h1>
        <p
          className={`${cormorant_garamod_italic.className} text-xl tracking-wide`}
        >
          Inspiration,Stories & Tips for Your Day
        </p>
      </div>
      <div className="max-w-7xl mx-auto mb-30">
        <div className="flex justify-center items-start gap-10 flex-wrap">
          {weddingPosts.map((post, index) => (
            <BlogCard
              key={index}
              title={post.title}
              story={post.story}
              imgSrc={post.imgSrc}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Blog;
