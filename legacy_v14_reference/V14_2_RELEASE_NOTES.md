# Stewardship OS V14.2 — Connectivity recovery candidate

- My Walk verse lookup retries after network reconnection and periodically while online if its Bible service is unavailable.
- Chapter-only Scripture saving remains available while verse lookup is unavailable.
- Cached verse counts remain available offline after successful prior retrieval.
- Version label and service-worker cache updated to V14.2 DEV.

## Important limitation
This release **does not** yet bundle complete offline verse counts for all 1,189 chapters. Unvisited chapter verse lists still depend on the external Bible API and cannot be promised offline. This candidate fixes recovery after reconnecting, not full offline independence.

## Manual test
1. Online: choose a book and a previously unvisited chapter; verify verse options.
2. Offline: choose a different, unvisited chapter; verify whole-chapter save and an informative status.
3. Reconnect without refreshing; verify the verse options return automatically.
4. Repeat across different books and after a reload.
5. Verify existing passages and other pages still work.
