# Repository maintenance scripts

## Refresh the Day 2 sample ZIP

Whenever a file is added, modified, renamed, or removed under
`day-2-m365-copilot/files/`, run:

```text
python3 scripts/build_day2_sample_zip.py
```

Commit the updated
`day-2-m365-copilot/downloads/day-2-sample-files.zip` in the same pull request.
The GitHub Actions check named **Day 2 ZIP is current** rebuilds the archive and
fails when the committed ZIP does not match the current source files.

The script uses stable file ordering, timestamps, and permissions so the ZIP
changes only when its source files change.

## Refresh the Day 3 sample ZIP

Whenever a file is added, modified, renamed, or removed under
`day-3-copilot-studio/files/`, run:

```text
python3 scripts/build_day3_sample_zip.py
```

Commit the updated
`day-3-copilot-studio/downloads/day-3-sample-files.zip` in the same pull
request.
The script uses the same deterministic ZIP settings as Day 2 so the archive
changes only when its source files change.
