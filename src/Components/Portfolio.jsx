/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/Sujal.jpg";

const imageAltText = "I am Sujal Shrestha and I am speaking at welcome programme.";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "My Figma Design",
    description:
      "This is figma design of BScIT final year project i.e. Collab-pro.",
    url: "https://www.figma.com/proto/4V93usINzIJGKH6Nf1gL0c/InfuLab?type=design&node-id=179-1133&t=YRkb9WqMJeOeqCH5-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=179%3A1133&show-proto-sidebar=1&mode=design",
  },

  {
    title: "E-Commerce Webpage",
    description:
      "This is E-Commerce Webpage created using HTML, CSS and JavaScript. I have used google map api in this webpage for to add loaction services",
    url: "https://suj41.github.io/ECommerce_Webpage/",
  },
  {
    title: "My Portfolio Practice",
    description:
      "I have created my portfolio using HTML, CSS and JavaScript.",
    url: "https://suj41.github.io/Portfolio_Practice/",
  },
  {
    title: "Python Library : Pandas",
    description:
      "I have created a repository for Pandas library in python.",
    url: "https://github.com/Suj41/Python_Pandas",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
