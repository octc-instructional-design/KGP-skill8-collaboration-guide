# Designing Collaboration That Works

**A Faculty Guide to Essential Skill 8: Collaborate and Work in Teams**

This guide helps faculty design, run, and grade group work for **Essential Skill 8** of the [Kentucky Graduate Profile](https://cpe.ky.gov/ourwork/kygradprofile.html) (Kentucky Council on Postsecondary Education). Its main argument is that most courses can meet the skill with small, low-risk activities, and that a multi-week team project is just one option at the far end of the range.

The guide is part of the [Essential Skills Faculty Guide](https://octc-instructional-design.github.io/KGP-10essential-skills-guide/). It was developed by the KCTCS Online Learning Peer Team.

**Live site:** `https://octc-instructional-design.github.io/KGP-skill8-collaboration-guide/`

## What's inside

| # | Chapter | Pages |
|---|---|---|
| 1.0 | Start Here: You Need Less Than You Think | |
| 2.0 | Facilitating Effective Group Work | |
| 3.0 | The Four Indicators | 3.1–3.4 one card per indicator (8.1–8.4) |
| 4.0 | Choosing Your Approach | 4.1–4.4 one page per level (Quick, Structured, Coordinated, Sustained) |
| 5.0 | Design Your Assessment | |
| 6.0 | Build Your Rubric | |
| 7.0 | Group Work Tools | 7.1 survey · 7.2 self-check · 7.3 contract · 7.4 peer evaluation |
| 8.0 | Technology Tools | 8.1 Blackboard · 8.2 Microsoft Teams |
| 9.0 | Examples | 9.1–9.3 idea banks · 9.4 GLY 111 · 9.5 COM 252 exemplars |
| 10.0 | From Your Colleagues | placeholder for contributed activities |

`print.html` assembles every section into one document. Use it to print or save the whole guide as a PDF. Any single page also prints cleanly on its own.

## Folder layout

```
index.html      home page and contents
print.html      the whole guide on one page, for print or PDF
pages/          one file per section, named by number (4-1-quick-collaboration.html)
css/styles.css  shared site styles, the same system as the Essential Skills Faculty Guide
css/guide.css   this guide's layout and content components
images/         logos, the Skill 8 coin, and favicons
CHANGES.md      what changed from the Blackboard version
```

It's plain HTML and CSS, with no build step and no framework. Edit any page in a text editor, commit the change, and GitHub Pages republishes it within a minute or two.

## Adapting this guide for your college

You're welcome to copy this guide and make it your own under the license below. Click **Use this template** at the top of the repository. You'll get your own independent copy with no history.

Then work through these steps:

1. **Swap the logos.** Replace the files in `images/` and keep the file names:
   - `kctcs-horiz-reverse.png` is the white-text logo for the navy header and footer.
   - `kctcs-horiz-color.png` is the full-color logo used in print.
   - `kctcs-vert-color.png` goes on the print cover.

   Also update the `alt` text where the logos appear. Search all files for `Kentucky Community and Technical College System`.
2. **Change the colors.** Edit the tokens in the `:root` block at the top of `css/styles.css`: `--brand-blue`, `--brand-blue-dark`, `--brand-gold`, and their `-soft` tints. Every page reads its colors from these tokens. The only hard-coded shades are the four level colors at the top of the content section of `css/guide.css`.
3. **Update the footer and the equal-opportunity statement.** Each page's footer names the system and carries the KCTCS EEO statement. Search all files for `eeo` and replace the statement with your institution's.
4. **Check the platform pages (8.1 and 8.2).** Each one ends with a line that reads "Platform behavior last verified: [DATE] · [WHO]." Walk through the steps in your own Blackboard and Teams environment, fix anything that differs, and fill in that line. Guest and dual-credit access to Teams is the claim most likely to differ between campuses.
5. **Localize the examples.** Comments marked `<!-- LOCALIZE: ... -->` flag examples you may want to replace with local ones, such as a community business or a Kentucky field site.
6. **Point "All 10 Skills" somewhere useful.** The header link goes to the OCTC Essential Skills Faculty Guide. Change it, or remove it, in every page's `<nav class="site-links">`.

**Keep the CPE rubric language unchanged.** The Benchmark, Milestone, and Capstone wording in 3.0 comes straight from the CPE rubric (dated 9/15/2025). The 8.1–8.4 numbers and the short indicator names were added for this guide.

## Editing tips

- **Adding or renaming a page.** Each page has the previous/next arrows, the chapter tabs, and the bottom navigation written into it. If you add or rename a page, update those on its neighbors and on the chapter's other tab pages, then add the page to the `pages` list near the bottom of `print.html`.
- **Refreshing styles.** After you change a stylesheet, bump the version number in its link on every page (`guide.css?v=1` becomes `?v=2`) so browsers load the new file.
- **Previewing.** Open a page in a browser before committing. The full-guide print page loads the other pages, so preview it on the published site or run a local server (`python3 -m http.server` in this folder). Opening it straight from your computer won't work.

## License

The guide's content is licensed under [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)](https://creativecommons.org/licenses/by-nc-sa/4.0/). You may share and adapt it for noncommercial purposes. Credit the original, and release your adaptation under the same license. See [`LICENSE.md`](LICENSE.md).

The license does **not** cover the KCTCS name and logos. Those are trademarks, so replace them in your adaptation. The CPE rubric language belongs to the Kentucky Council on Postsecondary Education.

**Suggested credit:** *Adapted from "Designing Collaboration That Works: A Faculty Guide to Essential Skill 8," KCTCS Online Learning Peer Team, licensed CC BY-NC-SA 4.0.*
