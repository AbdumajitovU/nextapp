import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-10">
      {data.length > 0 &&
        data.map((stadion) => {
          return (
            <>
              <p className="border-2 mx-8 border-purple-600 my-4 text-purple-600">
                {stadion.title}
              </p>
            </>
          );
        })}
    </div>
  );
}
