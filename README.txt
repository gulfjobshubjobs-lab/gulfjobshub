GulfJobsHub - targeted website file fixes

Upload these files to the ROOT of the existing GitHub repository, replacing same-named files:
- jobs.html
- site.js
- job-details.html
- robots.txt
- sitemap.xml

Do NOT delete or replace index.html or google3ffb6ca04912510c.html. The Google verification file is intentionally not included.

What these fixes do:
- Search results remain empty until the visitor presses Search Jobs; existing search behavior in site.js is retained.
- The jobs page keeps its index,follow directive and canonical URL.
- The job details page keeps its Back, Apply and Share behavior, with the report form hidden until requested.
- robots.txt allows normal crawling and points Google to the sitemap.
- sitemap.xml lists only public pages intended for indexing; it excludes utility pages such as saved-jobs.html and menu.html, plus files such as site.js and the Google verification file.

Important SEO notes:
- saved-jobs.html and menu.html have noindex by design in the current prototype. Saved Jobs is device-specific, and Menu is a navigation utility page; these are not necessarily errors.
- robots.txt, site.js and the Google verification HTML file do not need to appear as indexed search results. URL is not on Google for those resource URLs is normally expected.
- Do not submit repeated indexing requests for the same URL. This package does not require using Google Search Console or its daily quota.
- Job data remains sample/demo content.
