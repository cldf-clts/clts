import csv
import sys
from pathlib import Path
from collections import Counter


def main(jipa_path):
    jipa_path = Path(jipa_path).absolute() / "values.csv"

    values = []
    with open(jipa_path.as_posix()) as csvfile:
        for row in csv.DictReader(csvfile):
            graphemes = row["Value"].split()
            graphemes = [
                gr[1:-1] if gr[0] == "(" and gr[-1] == ")" else gr for gr in graphemes
            ]
            for grapheme in graphemes:
                values.append(grapheme)

    rows = []
    for grapheme, count in Counter(values).items():
        rows.append({"BIPA": "", "GRAPHEME": grapheme, "COUNT": count})

    rows = sorted(rows, reverse=True, key=lambda r: (r["COUNT"], r["GRAPHEME"]))
    with open("graphemes.tsv", "w") as tsvfile:
        writer = csv.DictWriter(
            tsvfile, delimiter="\t", fieldnames=["BIPA", "GRAPHEME", "COUNT"]
        )
        writer.writeheader()
        writer.writerows(rows)


if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("usage: build_data_from_cldf.py jipa_dataset_path")
    else:
        main(sys.argv[1])
