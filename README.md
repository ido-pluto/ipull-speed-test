# IPull Speed Test Repo

This purpose of this repo is running [ipull](https://github.com/ido-pluto/ipull) at all versions on the ci and comparing there download speed, to ensure ipull is always the fastest downloader.

### Version testing
- 3
- 4
- beta

## 📊 Live Performance Reports

View the latest clinic.js performance profiles:

- **Beta:** [https://ido-pluto.github.io/ipull-speed-test/beta/](https://ido-pluto.github.io/ipull-speed-test/beta/)
- **v3:** [https://ido-pluto.github.io/ipull-speed-test/v3/](https://ido-pluto.github.io/ipull-speed-test/v3/)
- **v4:** [https://ido-pluto.github.io/ipull-speed-test/v4/](https://ido-pluto.github.io/ipull-speed-test/v4/)

Or browse all reports: [https://ido-pluto.github.io/ipull-speed-test/](https://ido-pluto.github.io/ipull-speed-test/)

## 🚀 Usage

Run a single version profile locally:

```bash
npm run clinic:beta
```

Or profile all versions:

```bash
npm run clinic:all
```

View the generated reports by opening `clinic-reports/<version>/index.html` in your browser.

Direct report files are generated as:

- `clinic-reports/beta/doctor/beta-doctorclinic-reports-doctor.html`
- `clinic-reports/beta/flame/beta-flameclinic-reports-flame.html`
- `clinic-reports/beta/bubbleprof/beta-bubbleprofclinic-reports-bubbleprof.html`