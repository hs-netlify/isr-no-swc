import * as React from "react";
import Button from "@mui/material/Button";

export const getStaticProps = ({ params }) => {
  const { slug } = params;
  return {
    props: {
      id: slug,
    },
    revalidate: 60,
  };
};

export const getStaticPaths = () => {
  let paths = [];
  for (var i = 1; i <= 10000; i++) {
    paths.push(`/test/${i}`);
  }
  return { paths, fallback: "blocking" };
};

const Page = ({ id }) => {
  return (
    <div>
      <h1>This is page number {`${id}`}</h1>
      <Button></Button>
      <img src={`https://source.unsplash.com/random/800x800/?img=${id}`} />
    </div>
  );
};

export default Page;
