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
          if (containerWidth < 376) return 1;
          if (containerWidth < 600) return 2;
          if (containerWidth < 1200) return 3;
          return 3;
        }}
      />
    </div>
  );
}
