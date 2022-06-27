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
        <title>Natalie Artemis</title>
      </Head>

      <Image
        src="/logo.png"
        alt="Logo"
        width={900}
        height={400}
        layout={"responsive"}
        className="py-12 grid place-items-center"
      />

      <PhotoAlbum
        layout="masonry"
        photos={photos}
        columns={(containerWidth) => {
          if (containerWidth < 376) return 1;
          if (containerWidth < 600) return 2;
          if (containerWidth < 1200) return 2;
          return 5;
        }}
      />
    </div>
  );
}
