import { copyFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDirectory = path.join(projectRoot, "dist");
const indexFile = path.join(distDirectory, "index.html");
const routes = ["tracks", "team", "agenda", "sponsors", "venue", "anniversary"];

for (const route of routes) {
  const routeDirectory = path.join(distDirectory, route);
  await mkdir(routeDirectory, { recursive: true });
  await copyFile(indexFile, path.join(routeDirectory, "index.html"));
}
