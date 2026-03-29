import { cormorant_garamod, cormorant_garamod_italic } from "@/app/font";
import { posts } from "@/data/posts";
import BlogCard from "@/MyComponents/cards/BlogCard";
import { categoryCovers } from "@/data/coverImagePhotography";
import Navbar from "@/MyComponents/Navbar";
import Image from "next/image";
import Link from "next/link";
export default async function ({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const CategoryName = (await params).category;
  // console.log(CategoryName);

  //cover photo
  const selectedCategory = CategoryName.toLowerCase();
  const categoryInfo =
    categoryCovers[selectedCategory as keyof typeof categoryCovers];

  const filteredPosts = posts.filter(
    (p) =>
      p.category.toLowerCase().replace(" ", "-") === CategoryName.toLowerCase(),
  );
  console.log(filteredPosts);

  return (
    <div>
      <div className="pb-40">
        <Navbar dark={true} />
      </div>
      <div className="w-full relative h-60 mb-20">
        <Image
          src={categoryInfo?.src}
          alt={categoryInfo?.alt}
          fill
          sizes="100vw"
          className="object-cover"
        ></Image>
      </div>
      <div className="text-center max-w-7xl mx-auto mb-20">
        <h1
          className={`text-4xl ${cormorant_garamod.className} tracking-[7] text-black/60 uppercase font-bold`}
        >
          {CategoryName} photography
        </h1>
        <p
          className={`${cormorant_garamod_italic.className} text-xl tracking-wide mt-6`}
        >
          Explore our diverse collection of wedding galleries, showcasing
          beautiful moments captured across various styles and traditions. From
          intimate, traditional ceremonies to modern celebrations, Mystic
          Studios highlights the essence of each couple’s unique love story. Our
          galleries feature weddings from different cultures and settings, with
          every shot meticulously crafted to preserve the emotions, details, and
          timeless memories. Dive into our wedding stories and find inspiration
          for your own special day.
        </p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-3 max-md:grid-cols-1 gap-2 mb-50">
        {filteredPosts.map((post) => (
          <div key={post.id} className=" w-full h-105 ">
            <Link
              className="block w-full h-full relative"
              key={post.id}
              href={`/Photography/${post.category}/${post.id}`}
            >
              <Image
                src={post?.coverImage}
                alt={`image-${post.id}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
