Streak Strike
A colorful habit tracker and daily diary, built as an installable web app (PWA). Track streaks, set goals, journal short notes for each day, and see your progress on a monthly calendar — all from your phone's home screen, no app store needed.
Why I built this
I used to track my habits in a paper diary — a simple table with a row per habit and a tick for each day. This app is that same idea, digitized: same simplicity, but with streak counts, goals, and a place to jot a quick note about how the day went.
Features
Daily streak tracking — tap to mark a habit done, streaks calculate automatically
Best streak — see your longest-ever run per habit, not just the current one
Goals — set a target (7 / 21 / 30 / 66 days) and watch a progress bar fill up, with a small celebration when you hit it
Daily notes — a short journal entry attached to any day
Monthly view — a calendar heatmap of a habit's history
Reminders — optional daily reminder per habit (fires while the app is open on your device)
Installable — add it to your phone's home screen and it behaves like a native app, including offline access
Private by design — no account, no server, no data leaves your device (everything is stored locally in the browser)
Tech
Plain HTML, CSS, and JavaScript — no frameworks, no build step
PWA: manifest.json + a service worker for installability and offline support
Local storage for all data (habits, streaks, notes) — nothing is sent anywhere
Running it
Option 1 — Live app: [add your Netlify link here once deployed]
Option 2 — Locally: download the files and open index.html in a browser.
Design notes
The visual direction is deliberately warm and playful (rounded shapes, a soft color palette, a hand-picked icon set) rather than clinical — the goal was to make daily check-ins feel more like a diary ritual than a productivity chore.
License
MIT
