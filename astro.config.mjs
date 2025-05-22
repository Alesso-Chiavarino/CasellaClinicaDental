// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import vercel from "@astrojs/vercel";
import flowbiteReact from "flowbite-react/plugin/astro";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  vite: {
      plugins: [tailwindcss()],
  },
  site: 'https://www.ccbdental.com',
  integrations: [react(), flowbiteReact(), sitemap()],
  adapter: vercel(),
});