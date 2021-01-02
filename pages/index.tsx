import Head from 'next/head';
import ButtonGradient from '../components/buttons/button-gradient';

import Layout from '../components/layout';

const Home = () => (
  <Layout>
    <Head>
      <title>World Class WordPress Boilerplate | Cratio</title>
      <meta name="description" content="Get ready to start coding your own WordPress theme right away. Just name it, and download." />
    </Head>
    <div className="grid grid-cols-1 lg:grid-cols-10 lg:gap-20 items-center">
      <div className="col-span-4 mb-10">
        <h1 className="text-7xl font-bold mb-3">
          Think it.
          <br />
          Name it.
          <br />
          Get it.
        </h1>

        <p className="mb-5">Get ready to start coding your own WordPress theme right away. Just name it, and download.</p>

        <div className="bg-opacity-10 focus-within:bg-opacity-20 transition-all bg-white flex justify-between rounded-full">
          <label htmlFor="theme-name" className="sr-only">Theme name</label>
          <input type="text" placeholder="Theme name" id="theme-name" className="rounded-l-full bg-opacity-0 px-4 bg-white min-w-0 flex-grow outline-none" />
          <ButtonGradient>Download</ButtonGradient>
        </div>
      </div>

      <div className="col-span-6 mb-10">
        <img src="/images/github.png" alt="GitHub screenshot with the theme files" className="rounded-lg shadow-2xl" />
      </div>
    </div>
  </Layout>
);

export default Home;
