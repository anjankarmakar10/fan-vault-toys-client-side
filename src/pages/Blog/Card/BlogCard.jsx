import { Card } from "flowbite-react";

const BlogCard = ({ question, answere }) => {
  return (
    <>
      <Card className="h-fit mb-4 bg-teal-400">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {question}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {answere}
        </p>
      </Card>
    </>
  );
};

export default BlogCard;
