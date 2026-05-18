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
    window.scrollTo(0, 0);
  }, [path]);

  const Page = useMemo(() => ROUTES[path] || HomePage, [path]);

  const navigate = (href) => {
    if (href === path) return;
    window.history.pushState({}, "", href);
    startTransition(() => setPath(href));
  };

  return (
    <div className="app-shell">
      <Navbar currentPath={path} onNavigate={navigate} />
      <Page onNavigate={navigate} />
      <Downbar />
    </div>
  );
}
