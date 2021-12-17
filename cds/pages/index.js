import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Head from "next/head";
import Image from "next/image";
import watches from "../public/watches.jpg";

const images = [{ src: watches, key: "watches" }];

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <Grid container component="main">
        <Grid item xs={12} container justifyContent="center">
          <Typography variant="h2">Welcome to My Website!</Typography>
        </Grid>
        <Grid xs={12} item container>
          {images.map((image) => (
            <Grid item key={image.key}>
              <Image height={300} src={image.src} alt={image.key} />
            </Grid>
          ))}
        </Grid>
      </Grid>

      <footer></footer>
    </div>
  );
}
