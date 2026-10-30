# The Satoshi Times — Vol. I · No. 6

October 31, 2026 edition, prepared from Fiach-Dubh/TST5.1.

## Included in this release

- The complete new front-page article by Christopher Wallace, also at `/whitepapers/`.
- All 12 original article illustrations with full-resolution links, source links and numbered notes.
- Vol. I · No. 6 and the October 31, 2026 issue date throughout the site.
- Consistent navigation, footer links and archive sidebars. The encyclopedia feature is the previous front page; older articles retain their original publication dates.
- The existing newspaper masthead, dark/light themes, article layouts, contact details, PGP key and analytics.

## Publish with GitHub Pages

1. Unzip this package and upload the **contents** of `TST6.0-main` into the repository root, replacing the corresponding older files. Keep the `whitepapers` and `assets/whitepapers` folders.
2. Use GitHub Pages **Deploy from a branch**, selecting the publishing branch and **/(root)**. No build tools or paid hosting are needed.
3. Keep the included `CNAME` for SatoshiTimes.com and the existing domain configuration.
4. Publish on October 31, 2026. The date printed in the site is fixed editorial text; uploading the files to the publishing branch makes them public immediately. This package does not schedule publication.
5. After deployment, the new article is available on the front page and at `https://satoshitimes.com/whitepapers/` (GitHub Pages redirects `/whitepapers` to the directory URL).

Open `index.html` locally for a basic preview, or serve the folder with a static HTTP server. The custom 404 page uses domain-root paths so its navigation and assets work from missing nested URLs on SatoshiTimes.com.


## RSS

- Subscription page: `https://satoshitimes.com/rss/`
- Feed address: `https://satoshitimes.com/feed.xml`
- Every page has an RSS button beside the theme control, a footer link, and an RSS discovery link in its HTML head.
- The feed is a static RSS 2.0 XML file. GitHub Pages serves it directly; subscribers can read it without running JavaScript, a server application, or a paid service.
- The feed includes the six articles in this edition, newest first, with summaries and permanent article URLs. The front page is not included as a duplicate entry.
- The whitepapers article retains its October 31, 2026 publication date. Some readers may withhold future-dated entries until that date. No publication scheduler is included.
- The site’s publication dates do not specify exact times, so RSS dates use midnight in America/Toronto. These times are a formatting convention, not recorded publication timestamps.

### Adding future articles

1. Publish the article at its own permanent URL.
2. In `feed.xml`, copy an existing `<item>` block and place the new item before the older items. Update its title, link, guid, pubDate, dc:creator, category, and description. Use the article’s permanent URL for both link and guid; keep existing guids unchanged so readers do not treat old articles as new.
3. Update the channel’s `lastBuildDate`. Dates use the RSS format, for example `Sat, 31 Oct 2026 00:00:00 -0400`. Use the correct timezone offset for the publication date. Escape XML characters such as `&` as `&amp;`.
4. Update the “In this edition” article list in `rss/index.html` when you release a new edition, and upload the changed files with the article. The static feed does not automatically discover new HTML pages.

The RSS button opens the subscription page. “Open RSS feed” opens the XML that readers subscribe to. “Copy feed URL” uses the browser clipboard where allowed and selects the address for manual copying otherwise.
