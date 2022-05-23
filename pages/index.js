import Head from "next/head";
import Header from "../components/Header";
import { getSession, useSession } from "next-auth/react";
import Login from "../components/Login";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Widgets from "../components/Widgets";
import { collection, getDocs, query } from "firebase/firestore";
import { orderBy } from "firebase/firestore";
import { db } from "../firebase";

export default function Home({ posts }) {
  const { data: session } = useSession();

  if (!session) return <Login />;

  return (
    <div className="h-screen bg-white overflow-hidden">
      <Head>
        <title>Facebook</title>
      </Head>

      {/* Header */}
      <Header />

      <main className="flex">
        {/* Sidebar */}
        <Sidebar />
        {/* Feed */}
        <Feed posts={posts} />
        {/* Widgets */}
        <Widgets />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  // Get the user
  const session = await getSession(context);

  // if (!session)
  //
  // const posts = await db.collection("posts").orderBy("timestamp", "desc").get();

  const posts = await getDocs(
    collection(db, "posts"),
    orderBy("timestamp", "desc")
  );

  const docs = posts.docs.map((post) => ({
    id: post.id,
    ...post.data(),
    timestamp: null,
  }));

  return {
    props: {
      session: session,
      posts: docs,
    },
  };
}
