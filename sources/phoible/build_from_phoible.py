"""
Build a news `graphemes.tsv` from a Phoible `dev` release.
"""

# TODO: consider moving to `pycldf`, which would add many dependencies

from collections import Counter
import csv
import sys
from pathlib import Path


def main(phoible_path):
    # Normalize path
    phoible_path = Path(phoible_path).absolute()

    # Load grapheme data
    graphemes = {}
    with open(phoible_path / "parameters.csv") as csvfile:
        reader = csv.DictReader(csvfile)
        features = [
            feature
            for feature in reader.fieldnames
            if feature not in ["ID", "Name", "Description", "SegmentClass"]
        ]

        for row in reader:
            graphemes[row["Name"]] = {
                "ID": row["ID"],
                "FEATURES": ":".join([row[feature] for feature in features]),
            }

    # Collect counts
    with open(phoible_path / "values.csv") as csvfile:
        counts = Counter([row["Value"] for row in csv.DictReader(csvfile)])

    # Build list of rows that can be sorted
    rows = []
    for key, value in graphemes.items():
        rows.append(
            {
                "BIPA": "",
                "GRAPHEME": key,
                "FEATURES": value["FEATURES"],
                "COUNT": counts[key],
                "ID": value["ID"],
            }
        )
    rows = sorted(rows, reverse=True, key=lambda g: (g["COUNT"], g["FEATURES"]))

    # Write results
    with open("graphemes.tsv", "w") as tsvfile:
        writer = csv.DictWriter(
            tsvfile,
            delimiter="\t",
            fieldnames=["BIPA", "GRAPHEME", "FEATURES", "COUNT", "ID"],
        )
        writer.writeheader()
        writer.writerows(rows)


if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: build_from_phoible.py PHOIBLE_CLDF")
    else:
        main(sys.argv[1])
