# Stewardship OS V14.0 Development Candidate

- Added an always-discoverable, expandable **Deeper Study** area to The Word, preserving the existing passage-specific study appendix.
- Grouped original languages / translations and church elders / historical writings, with clear distinctions between Scripture and noncanonical material.
- Replaced the obsolete V9 header label and V10 asset query identifiers with V14.0 DEV.
- Updated service worker cache identity and precache list, adding `classic-layout.js`, excluding legacy art and large music from required install.
- Prevented offline script/image requests from receiving HTML as fallback; navigation requests alone may receive the offline app shell.
- Preserved existing pages, app logic, saved-data schema, artwork, music and navigation icons.

## Verification limits

Static checks and archive validation do not substitute for browser-based interaction, responsive layout testing, external-link verification, security assessment or full regression testing. Deploy to a test branch/environment first.
