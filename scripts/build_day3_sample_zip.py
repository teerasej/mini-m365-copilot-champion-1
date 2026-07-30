#!/usr/bin/env python3
"""Build the committed Day 3 sample-file archive deterministically."""

from __future__ import annotations

import os
from pathlib import Path
from zipfile import ZIP_DEFLATED, ZipFile, ZipInfo


REPOSITORY_ROOT = Path(__file__).resolve().parents[1]
SOURCE_DIRECTORY = REPOSITORY_ROOT / "day-3-copilot-studio" / "files"
OUTPUT_DIRECTORY = REPOSITORY_ROOT / "day-3-copilot-studio" / "downloads"
OUTPUT_FILE = OUTPUT_DIRECTORY / "day-3-sample-files.zip"
ARCHIVE_ROOT = Path("day-3-sample-files")


def include_file(path: Path) -> bool:
    """Return True for learner files and False for common local temp files."""
    return (
        path.is_file()
        and not path.is_symlink()
        and path.name != ".DS_Store"
        and not path.name.startswith("~$")
    )


def archive_info(name: str) -> ZipInfo:
    """Create stable metadata so identical inputs produce an identical ZIP."""
    info = ZipInfo(name, date_time=(1980, 1, 1, 0, 0, 0))
    info.compress_type = ZIP_DEFLATED
    info.create_system = 3
    info.external_attr = 0o100644 << 16
    return info


def main() -> None:
    source_files = sorted(
        (path for path in SOURCE_DIRECTORY.rglob("*") if include_file(path)),
        key=lambda path: path.relative_to(SOURCE_DIRECTORY).as_posix(),
    )
    if not source_files:
        raise SystemExit(f"No sample files found in {SOURCE_DIRECTORY}")

    OUTPUT_DIRECTORY.mkdir(parents=True, exist_ok=True)
    temporary_file = OUTPUT_FILE.with_suffix(".zip.tmp")

    with ZipFile(temporary_file, "w", compression=ZIP_DEFLATED, compresslevel=9) as archive:
        for source_file in source_files:
            relative_path = source_file.relative_to(SOURCE_DIRECTORY)
            archive_path = (ARCHIVE_ROOT / relative_path).as_posix()
            archive.writestr(
                archive_info(archive_path),
                source_file.read_bytes(),
                compress_type=ZIP_DEFLATED,
                compresslevel=9,
            )

    os.replace(temporary_file, OUTPUT_FILE)
    print(f"Built {OUTPUT_FILE.relative_to(REPOSITORY_ROOT)}")
    for source_file in source_files:
        print(f"- {source_file.relative_to(SOURCE_DIRECTORY).as_posix()}")


if __name__ == "__main__":
    main()