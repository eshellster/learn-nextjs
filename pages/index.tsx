import Layout from "../components/Layout";
import Link from "next/link";
import { withApollo } from "../apollo/client";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const Blog = () => {
  return (
    <Layout>
      <div className="page">
        <h1>My Blog</h1>
        <main>POST</main>
      </div>
      <style jsx>{`
        .post {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }

        .post:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .post + .post {
          margin-top: 2rem;
        }
      `}</style>
    </Layout>
  );
};

export default withApollo(Blog);
