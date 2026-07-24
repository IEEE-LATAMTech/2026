import { startTransition, useEffect, useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import Downbar from "@/components/Downbar";
import HomePage from "@/app/page";
import TracksPage from "@/app/tracks/page";
import AgendaPage from "@/app/agenda/page";
import SponsorsPage from "@/app/sponsors/page";
import VenuePage from "@/app/venue/page";
import AnniversaryPage from "@/app/anniversary/page";
import "@/app/styles/global.css";

const ROUTES = {
  "/": HomePage,
  "/tracks": TracksPage,
  "/agenda": AgendaPage,
  "/sponsors": SponsorsPage,
  "/venue": VenuePage,
  "/anniversary": AnniversaryPage,
};

function getCurrentPath() {
  const pathname = window.location.pathname || "/";
  return ROUTES[pathname] ? pathname : "/";
}

function scrollToCurrentHash() {
  const id = decodeURIComponent(window.location.hash.slice(1));
  if (!id) return false;

  window.requestAnimationFrame(() => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  });
  return true;
}

export default function AppLayout() {
  const [path, setPath] = useState(getCurrentPath);

  useEffect(() => {
    const onPopState = () => {
      startTransition(() => setPath(getCurrentPath()));
    };

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    if (!scrollToCurrentHash()) {
      window.scrollTo(0, 0);
    }
  }, [path]);

  const Page = useMemo(() => ROUTES[path] || HomePage, [path]);

  const navigate = (href) => {
    const target = new URL(href, window.location.origin);
    const nextPath = ROUTES[target.pathname] ? target.pathname : "/";
    const nextLocation = `${nextPath}${target.hash}`;
    const currentLocation = `${window.location.pathname}${window.location.hash}`;

    if (nextLocation !== currentLocation) {
      window.history.pushState({}, "", nextLocation);
    }

    if (nextPath === path) {
      if (!scrollToCurrentHash()) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    startTransition(() => setPath(nextPath));
  };

  return (
    <div className="app-shell">
      <Navbar currentPath={path} onNavigate={navigate} />
      <Page onNavigate={navigate} />
      <Downbar onNavigate={navigate} />
    </div>
  );
}
