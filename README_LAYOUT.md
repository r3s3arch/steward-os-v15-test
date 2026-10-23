# Stewardship OS — Scripture First layout prototype

## Status
This is an architectural integration prototype, **not** a production-hardened release. Serve over localhost or HTTPS (not file://), e.g. `python -m http.server 8000`, then open `/`.

## Preservation
- `reader/` is extracted without modification from the approved `Stewardship_OS_V15_Reader_Chapter_Navigation.zip`. All Scripture book JSON files and reader JavaScript/CSS are unchanged.
- `legacy_v14_reference/` is an untouched extracted copy of V14.2; Temple links to that entire legacy app pending a dedicated extraction.
- `SCRIPTURE_INTEGRITY_SHA256.json` contains SHA-256 baseline hashes for reader book JSON files. This is an audit artifact only; the prototype does **not** verify these hashes at runtime.
- The reader is embedded as a same-origin iframe so it retains its own app code and storage. The shell does not read, write, or transform Scripture text.
- Study and Connections shell pages are deliberately placeholders. They do not claim to show saved reader records yet.
- Invocation text and default prayers in the new shell are draft content for curation; the Lord's Prayer uses familiar traditional wording.

## Security and production gates
1. Verify each Scripture JSON against an independently approved canonical source and chapter/verse inventory, not hashes alone.
2. Add runtime integrity verification for immutable Scripture resources, signed release checksums and release review.
3. Audit and preserve V14.2 hardening measures, CSP, offline behavior, sanitization, backups and storage boundaries before production integration. This prototype does not certify that those controls survive the new shell.
4. Integrate a single versioned study library for Notes/Highlights/Connections and tested import/export, without altering canonical Scripture records.
5. Build a dedicated Temple module from V14.2 and conduct mobile and desktop regression testing.
6. Review embedded reader height and navigation UX across mobile browsers.
