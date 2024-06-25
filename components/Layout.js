import Footer from "./Footer";
import Navbar from "./Navbar";

import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>PokeNext | Home</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </Head>

      <Navbar />
      <main className="main-container">{children}</main>
      <Footer />
    </>
  );
}
