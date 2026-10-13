GulfJobsHub — Website Update Package

UPLOAD
1. Extract this ZIP. It contains files to upload to the ROOT of the existing GitHub repository.
2. In GitHub choose Add file > Upload files and select these extracted files.
3. Keep the existing Google verification file google3ffb6ca04912510c.html in the repository. It is intentionally not included in this ZIP.
4. Commit to main and wait for GitHub Pages to publish.

WHAT CHANGED
- Homepage: one main Search Jobs button; the search form is on jobs.html.
- Search filters: Job Title/Keyword, Country, City, Job Category, Job Type. No Salary or Experience search filters.
- Bottom navigation: Home, Profile, Saved, Menu. Menu is at the bottom-right and opens menu.html.
- Added separate pages: menu.html, saved-jobs.html, applied-jobs.html, job-alerts.html, companies.html.
- Profile and application pages have CV file-selection controls. File selection is local only and does NOT upload a CV online.
- Language selector saves the choice and translates the main bottom navigation and Search Jobs button only. Most page content remains English.
- Company job-post form includes company-entered title, location, category, type and description. It saves a local draft only; it does not publish jobs.

IMPORTANT LIMITS
- Current jobs are demonstration listings, not real or verified vacancies.
- This is a static GitHub Pages frontend. Secure login, shared database, real applications, online CV storage, employer verification, email alerts, live analytics and secure admin controls require a secure backend.
- Profile and saved jobs use browser localStorage on this device only. Do not enter sensitive personal information.
- Sitemap points to https://gulfjobshubjobs-lab.github.io/gulfjobshub/. Confirm this remains the primary URL.
