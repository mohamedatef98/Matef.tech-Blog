import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import styled from "@mui/system/styled";
import Head from "next/head";
import Image from "next/image";
import ButtonLink from "../components/ButtonLink";
import watches from "../public/watches.jpg";
import sw from "../public/sw.jpg";
import embedded from "../public/embedded.jpg";
import web from "../public/web.png";

const ImagesBox = styled(Grid)(({ theme }) => ({
  overflowY: "scroll",
  "& > .MuiGrid-item": {
    marginRight: 10,
    "&:last-of-type": {
      marginRight: 0,
    },
  },
}));

const LinksBox = styled(Grid)(({ theme }) => ({
  marginTop: "2rem",
}));

const images = [
  { src: sw, key: "sw", width: 533, height: 300 },
  { src: embedded, key: "embedded", width: 533, height: 300 },
  { src: web, key: "web", width: 304, height: 300 },
  { src: watches, key: "watches", width: 600, height: 300 },
];

const links = [
  { title: "My Blog", href: "/post" },
  { title: "About Me", href: "/about" },
  { title: "Contact Me", href: "/contact" },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <Grid container component="main">
        <Grid item xs={12} container justifyContent="center">
          <Typography variant="h3">Welcome to My Website!</Typography>
        </Grid>
        <ImagesBox container wrap="nowrap">
          {images.map((image, index) => (
            <Grid item flexShrink={0} key={index}>
              <Image
                width={image.width}
                height={image.height}
                src={image.src}
                alt={image.key}
              />
            </Grid>
          ))}
        </ImagesBox>
        <LinksBox container flexDirection="column" alignItems="center">
          {links.map((link) => (
            <ButtonLink key={link.href} href={link.href}>
              <Typography variant="h5">{link.title}</Typography>
            </ButtonLink>
          ))}
        </LinksBox>
      </Grid>

      <footer></footer>
    </div>
  );
}
