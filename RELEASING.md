# Releasing clts

- Recreate the CLDF dataset:
  ```shell
  cldfbench makecldf cldfbench_clts.py
  ```
- Check statistics
  ```shell
  clts stats
  clts tdstats
  ```
- Validate the CLDF dataset:
  ```shell
  pytest --cldf-metadata=cldf-metadata.json test.py
  ```
- Create the metadata for Zenodo:
  ```shell
  cldfbench zenodo cldfbench_clts.py
  ```
- Create the release commit:
  ```shell
  git commit -a -m "release <VERSION>"
  ```
- Create a release tag:
  ```shell
  git tag -a v<VERSION> -m"<VERSION> release"
  ```
- Push to github:
  ```shell
  git push origin
  git push --tags
  ```
- Create the release on GitHub, thereby triggering publishing with Zenodo.
