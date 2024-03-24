import { ReactNode } from "react";

interface NavbarProps {
  title: string;
  children?: ReactNode;
}

export default function Navbar({ title, children }: NavbarProps) {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            {title}
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0"></ul>
            <div className="d-flex my-2 my-lg-0">{children}</div>
          </div>
        </div>
      </nav>
    </>
  );
}
