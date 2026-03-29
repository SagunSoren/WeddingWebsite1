import Navbar from "@/MyComponents/Navbar";
import { posts } from "@/data/posts";
import Image from "next/image";
import { cormorant_garamod, cormorant_garamod_italic } from "@/app/font";

export default async function Page({
  params,
}: {
  params: Promise<{ category: string; id: string }>;
}) {
  const { id, category } = await params;

  const post = posts.find((p) => p.id === id);
  console.log(post);

  if (!post) return <h1>Page was not found</h1>;

  return (
    <div>
      <div className="pb-1">
        <Navbar dark={true} />
      </div>

      {/* copypaste */}
      <div className="mt-40 max-w-7xl mx-auto text-center">
        {/* cover photo same as galleryIdCard */}
        <div className="">
          <div className="relative pb-20">
            <h1
              className={`${cormorant_garamod_italic.className} text-xl tracking-wider`}
            >
              {/* March 14,2026 — Engagement — admin */}
              {post?.date}
            </h1>
            <h1
              className={`${cormorant_garamod.className} text-4xl tracking-widest uppercase`}
            >
              {/* Engagement Photography in Tirupur */}
              {post?.category} Photography in {post?.location}
            </h1>
            <Image
              src={post.coverImage}
              alt="image"
              width={0}
              height={0}
              className="w-full h-auto mt-10"
              sizes="100vw"
              loading="eager"
            />

            <p className="text-sm mt-10 max-w-6xl mx-auto px-4">
              Engagement Photography in Tirupur An engagement ceremony is one of
              the most memorable milestones in a couple’s love story. It is the
              moment when two families come together to celebrate love,
              commitment, and the beginning of a lifelong journey. Capturing
              these precious memories through beautiful photographs makes the
              day even more special. Irich Photography had the wonderful
              opportunity{" "}
            </p>
          </div>
        </div>

        {/* Image gallery */}
        <div className="max-w-7xl mx-auto mb-40">
          {post?.images.map((img: string, index: number) => (
            <div key={index} className="relative mb-2 w-full">
              <Image
                src={img}
                alt={`image-${index}`}
                width={800}
                height={500}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
