import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home({ data }) {
  console.log(data);
  return (
    <div className="max-w-5xl mx-auto p-10">
      {data.length > 0 &&
        data.map((stadion) => {
          return (
            <p className="border-2 mx-8 border-purple-600 my-4 text-purple-600">
              {stadion.body}
            </p>
          );
        })}
    </div>
  );
}

export async function getServerSideProps(context) {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}
