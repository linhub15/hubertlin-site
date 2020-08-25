import React from "react";

const pages = [
  { title: "Home", url: "/" },
  { title: "Projects", url: "#projects" },
  { title: "Blog", url: "/blog" },
  { title: "Notes", url: "/notes" }
];

function renderLinks(pages) {
  return pages.map(page => (
    <a className="nav-item pb-1 mx-3" key={page.title} href={page.url}>
      {page.title}
    </a>
  ));
}

const SiteNav = () => <nav>{renderLinks(pages)}</nav>;

export default SiteNav;
