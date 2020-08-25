import React from "react";
import "./site-nav.css";

const pages = [
  { title: "Home", url: "/" },
  { title: "Projects", url: "#projects" },
  { title: "Blog", url: "/blog" },
  { title: "Notes", url: "/notes" }
];


function renderLinks(pages) {
  return pages.map(page => (
    <a className="nav-item mx-auto" key={page.title} href={page.url}>
      {page.title}
    </a>
  ));
}

const SiteNav = () => <nav class="top-nav">{renderLinks(pages)}</nav>;

export default SiteNav;
