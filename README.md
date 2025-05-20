# Swarm Links - Astro

## 🚀 Editing Content

Most of the content is placed in the `src/content/` directory. Each file is a markdown file with a frontmatter section at the top. The frontmatter section is used to define metadata about the content, like the title, subtitle, and status.

The status can be omitted, but it's used to define the status of the content. The status can be `done`, `in-progress`, or `to-do`.

The `items` field in the milestones is used to define the items that are part of the milestone. The items are defined by their filename without the `.md` extension. The `subtitle` field is used to define the list on the homepage.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
