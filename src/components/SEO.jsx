import { Helmet } from "react-helmet-async";

export default function SEO() {
  return (
    <Helmet>
      <title>Suraj Gawade | MERN Stack Developer</title>

      <meta
        name="description"
        content="Suraj Gawade MERN Stack Developer portfolio. Building scalable web applications using React, Node.js, MongoDB and modern UI."
      />

      <meta
        name="keywords"
        content="Suraj Gawade, MERN Developer, React Developer, Node Developer, Portfolio"
      />

      <meta property="og:title" content="Suraj Gawade | MERN Developer" />
      <meta
        property="og:description"
        content="Portfolio of Suraj Gawade MERN Stack Developer"
      />
      <meta property="og:type" content="website" />

      <meta name="robots" content="index, follow" />
    </Helmet>
  );
}
