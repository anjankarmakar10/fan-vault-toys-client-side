import useTitle from "../../hooks/useTitle";
import BlogCard from "./Card/BlogCard";

const Blog = () => {
  useTitle("Blog");

  return (
    <div className="bg-[#E5AD82]">
      <div className="">
        <h1 className="md:text-6xl text-white py-8 text-4xl uppercase font-bold mt-3 mb-2 mx-auto w-fit">
          Ours Bologs
        </h1>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-8 ">
        <BlogCard
          question={
            "What is an access token and refresh token? How do they work and where should we store them on the client-side?"
          }
          answere={
            "An access token and a refresh token are commonly used in authorization. Using an access token, you can check that the user has permissions for some resources or not, and access tokens have some expiration time. On the other hand, a refresh token is used to generate a new access token if your current one expires. You can store access tokens in local storage or HTTP-only cookies, but it's most secure to store access tokens in memory."
          }
        />
        <BlogCard
          question={"Compare SQL and NoSQL databases?"}
          answere={
            "SQL databases use a structured data model based on tables with predefined schemas. Data is organized into rows and columns, and relationships between tables are established by keys. And NoSQL databases use key-value, document, or graph, depending on the specific NoSQL database type. These models offer flexibility in handling unstructured data."
          }
        />

        <BlogCard
          question={"What is express js? What is Nest JS ?"}
          answere={
            "Express.js is a minimalist web application framework for Node.js, and NestJS is a powerful, full-featured web application framework built with TypeScript. Express.js is commonly used for building simple and flexible apps, and Nest.js is used for building large, complex applications."
          }
        />
        <BlogCard
          question={"What is MongoDB aggregate and how does it work?"}
          answere={
            "MongoDB aggregate is a powerful tool for performing advanced data processing and analysis. You can match, find, group, and sort data using this tool, and you can also limit and skip data. MongoDB processes the documents in the collection sequentially as part of chaining. The final output of chaining is the result of the last stage."
          }
        />
      </div>
    </div>
  );
};

export default Blog;
