import React from "react";
import Link from "next/link";
import styles from '../../styles/Home.module.css'
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: {
      engineers: data,
    },
  };
};
const Engineers = ({ engineers }) => {
  return (
    <div >
      <h1> Engineers List </h1>
      {engineers.map((engineer) => (
        <Link href={'/engineers/' + engineer.id} key={engineer.id}>
         
            <h3 className={styles.single}>{engineer.name}</h3>
         
        </Link>
      ))}
    </div>
  );
};

export default Engineers;
