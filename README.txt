GulfJobsHub responsive prototype package

FILES
- index.html: homepage with compact search, desktop and mobile layouts
- jobs.html: separate job search page with keyword, country, city, category, experience, job type and optional salary field
- job-details.html: full details, Back to Jobs, Apply Now, Share Job, Save Job and report preview
- apply.html: application form preview; does not transmit data
- profile.html: browser-only profile and saved demo jobs
- employers.html: employer job draft preview; not published
- admin-preview.html: public visual concept only; NOT secure and no real admin controls
- job-guide.html: safety guide, country search links and browser-only rating preview
- assets/site.css: responsive mobile/desktop styling
- assets/site.js: sample data and prototype interactions
- sitemap.xml and robots.txt: GitHub Pages URL set as the canonical site

IMPORTANT LIMITS
1. All job listings are sample demonstration content and are NOT real or verified vacancies. Remove them before launch or replace with verified job data and sources.
2. This is a static GitHub Pages frontend. No secure login, shared database, real job applications, CV upload, email alerts, live analytics, employer verification, or secure admin permissions are implemented.
3. Profile, saved jobs, employer drafts and demo ratings use browser localStorage on the current device only. Do not enter sensitive information.
4. Google Search Console verification meta tag from the existing project was preserved. Do not delete it unless Search Console no longer needs it.
5. Canonical URLs and sitemap point to https://gulfjobshubjobs-lab.github.io/gulfjobshub/ based on the currently selected primary URL. Confirm this before uploading if the primary domain choice has changed.
6. admin-preview.html is intentionally marked noindex and must not be used for real administration.

UPLOAD
Make a backup of the current GitHub repository first. Then upload/replace these files in the repository root, preserving any Google verification HTML file already in the repository. Commit to main and wait for GitHub Pages to publish. Do not upload this package to Netlify Drop.

NEXT GOOGLE WORK
After publishing, open the homepage and test mobile/desktop, then inspect the homepage in Google Search Console, submit /sitemap.xml, and inspect the key static URLs. Request indexing only where available and do not repeatedly submit the same URL.
