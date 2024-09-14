import Card from "@/components/Card";
import { getData } from "@/Services/postApi";
import Link from "next/link";
import React from "react";

const BlogsPage = async () => {
  const postData = await getData();

  return (
    <div className=" max-w-screen-xl mx-auto mt-10 ">
      <h1 className="text-white bg-yellow-500 text-center font-2xl py-5">
        This is Blog Page
      </h1>

      <div className="mt-10 grid grid-cols-3 gap-5">
        {postData?.slice(0, 15).map((infos) => (
          <div key={infos.id}>
            <div className="card bg-primary text-primary-content w-96">
              <div className="card-body">
                <h2 className="card-title">{infos.title}!</h2>
                <h1>{infos.id}</h1>
                <div className="card-actions justify-end">
                  <button className="btn">
                    <Link href={`/blogs/${infos.id}`}>view</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
