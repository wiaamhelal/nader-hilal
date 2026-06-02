import { Helmet } from "react-helmet";
import React from "react";
import styled from "styled-components";

export default function About() {
  return (
    <Main className="container mt-5 pt-4">
      {/* FULL SEO META TAGS */}
      <Helmet>
        <title>About — Nader Hilal | Interior Designer</title>

        <meta
          name="description"
          content="Learn about Nader Hilal, an interior designer known for modern luxury interiors, refined aesthetics, and artistic spatial design."
        />

        <meta
          name="keywords"
          content="Nader Hilal, Interior Designer, Luxury Interior Design, Modern Interiors, Elegant Design, UAE Designer, Home Interiors, Commercial Interiors"
        />

        <meta property="og:title" content="About — Nader Hilal" />
        <meta
          property="og:description"
          content="Discover the background, vision, and design philosophy of interior designer Nader Hilal."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://naderhilal.online/about" />
        <meta property="og:image" content="/your-image.jpg" />

        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Nader Hilal",
            "jobTitle": "Interior Designer",
            "url": "https://naderhilal.online",
            "description": "Interior designer known for refined aesthetics, modern luxury spaces, and artistic spatial harmony.",
            "image": "https://naderhilal.online/your-image.jpg"
          }
          `}
        </script>
      </Helmet>

      <h1>About — Nader Hilal</h1>
      <p>
        Nader Hilal is an interior designer recognized for his refined
        aesthetics, modern luxury style, and commitment to crafting interiors
        that balance elegance, function, and artistic harmony. His work focuses
        on creating expressive, timeless spaces that reflect both emotional
        depth and architectural clarity.
      </p>

      <p>
        With a thoughtful approach to design, Nader blends contemporary
        structure with warm, sophisticated elements to produce environments that
        feel both inviting and visually striking. Each project he undertakes is
        guided by a strong sense of storytelling—aiming to transform spaces into
        meaningful experiences.
      </p>

      <p>
        Inspired by nature, material texture, and modern artistic composition,
        his design philosophy emphasizes balance, proportion, and intentional
        detail. Through every concept, Nader remains devoted to elevating spaces
        with a calm, luxurious atmosphere that aligns with the identity and
        lifestyle of each client.
      </p>

      <p>
        His work continues to evolve, driven by creativity, precision, and a
        vision for crafting interiors that remain timeless, expressive, and
        deeply connected to human experience.
      </p>
    </Main>
  );
}
const Main = styled.div`
color: #b89564;
min-height: 100vh;
  line-height: 1.7;

}`;
