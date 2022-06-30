import Head from "next/head";
import PhotoAlbum from "react-photo-album";
import styles from "../styles/Home.module.css";
import Image from "next/image";

const importAll = (context) =>
  context.keys().map((key) => context(key).default);
const photos = importAll(
  require.context("../public/gallery/", false, /\.png$/)
);

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>We miss you, Mike</title>
      </Head>

      <PhotoAlbum
        layout="masonry"
        photos={photos}
        columns={(containerWidth) => {
          if (containerWidth < 676) return 1;
          if (containerWidth < 900) return 2;
          if (containerWidth < 1300) return 3;
          if (containerWidth < 1800) return 4;
          return 5;
        }}
      />
      
      <Footer />
    </div>
    
  );
}

export function Footer() {
  return (
    <div className="w-full flex justify-center">
      <div className="border-gray-200 border my-8 text-gray-600 text-left w-full sm:w-112 md:w-1/3 xl:w-1/4 bg-white p-4 rounded-lg">
        <div className="font-semibold mb-2">About this project</div>
        <p>
          This is a small sampling of the tweets sent when our friend passed.
          We miss you, Mike <span className="text-red-500">❤︎</span>
        </p>

        <p className="mt-4">
        (Thanks to <a href="http://twitter.com/stammy" className="text-blue-500 hover:text-blue-800">@stammy</a> {} 
         and <a href="http://twitter.com/lessachu" className="text-blue-500 hover:text-blue-800">@lessachu</a> for their help)
        </p>
                
        
      </div>
    </div>
  );
}