# Releasing clts

- Do a general test of clts:
  ```shell
  clts test
  ```
- Adapt the metadata in `metadata.json`
- Create the package accessible from the `pyclts` API
  ```shell
  clts make_pkg
  ```
- Check statistics
  ```shell
  clts stats
  clts tdstats
  ```
- Create the javascript application
  ```shell
  clts make_app
  ```
- Create the CLDF dataset for distribution (and make sure that there are no
  warnings, e.g. about missing feature values)
  ```shell
  clts dist
  pytest --cldf-metadata=cldf-metadata.json test.py
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
