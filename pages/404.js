import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const NotFound = () => {
    const router = useRouter()
 useEffect(()=>{

    setTimeout(()=>{
        router.push('/')
    },3000)
 },[])
  return (
    <div className="not-found">
      <p>Oooops...</p>
      <h2>
        page cannot be found <Link href="/">Homepage</Link>
      </h2>
    </div>
  );
};

export default NotFound;
