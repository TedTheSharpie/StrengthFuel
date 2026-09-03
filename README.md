# StrengthFuel PWA

A dependency-free, local-first meal planning and nutrition tracker designed for iPhone and GitHub Pages.

## Publish on GitHub Pages

1. Upload the **contents of this folder** to the root of your GitHub repository. `index.html` must be visible at the repository's top level.
2. In GitHub, open **Settings → Pages**.
3. Choose **Deploy from a branch**, select `main` and `/(root)`, then save.
4. Open the `github.io` address shown by GitHub Pages—not the normal `github.com` repository page.
5. On iPhone, open that address in Safari and choose **Share → Add to Home Screen**.

The app stores all logs, plans, check-ins and settings locally in the browser. Clearing Safari website data will clear the app data.

## Personal planning and training

- Enter body weight, activity level and goal to calculate starting calorie and macro targets.
- Meal portions and displayed meal macros adjust to the calorie target.
- Create workouts for any day and add your own exercise list.
- Log sets, reps and working weight after each session.
- Review recent sessions and the best recorded weight for every exercise.

## Files

- `index.html` — app entry point
- `styles.css` — responsive iPhone-first design
- `training.css` — profile and workout interface styles
- `app.js` — meals, planner, tracking and local storage
- `manifest.webmanifest` — installable app metadata
- `service-worker.js` — offline support
- `icon.svg` — app icon
