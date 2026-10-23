# Stewardship OS V14.1 DEV — Stabilization Candidate

## Changes
- Draw Near: one visible invitation button now controls prayer menu disclosure. Removed the conflicting forced-open logic from the classic layout script.
- God's Goodness: removed ornamental fleurons and dots; kept symmetrical crosses and replaced the ornate image frame with a restrained double-line antique-gold frame.
- Offline: updated cache version and precache URLs to match the HTML's versioned stylesheet/scripts; added the active leather texture asset. Cache fallback ignores version query parameters, and only navigation requests can fall back to HTML.
- Displayed version updated to V14.1 DEV.

## Tested automatically
- JavaScript syntax checks for every .js file.
- Referenced service-worker shell files exist.
- ZIP integrity checks.

## Manual browser checks required
1. Online: Prayer > Draw Near, tap the combined invitation once; menu opens. Close and reopen repeatedly, select a prayer, navigate away and back, and retest on mobile.
2. Gratitude: save a marked God's Goodness entry; open card and verify crosses-only and simplified frame on desktop/mobile.
3. Offline: with internet on, load app and wait for service worker activation, refresh once, then disable network and reload. Verify styling, quilted texture, scripts, navigation, and saved data. The first offline load before service worker installation is not supported.
4. Backups: export, import a test backup, and confirm restored records. Do not test import with important personal data.
5. Verify The Word, passage-specific study links, My Walk, Temple, and music still function.

This is not a security certification or a completed cross-device browser regression test.
