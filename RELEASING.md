
Releasing clts
================

- Do a general test of clts:

```
clts test
```

- add all data

```
clts make_pkg
```

- Check statistics

```
clts stats
clts tdstats
```

- make the application

```
clts make_app
```

- dump the data to a zip file

```
clts dump
```

- Update the version number, by removing the trailing `.dev0` in:
  - `setup.py`
  - `src/pyclts/__init__.py`

- Create the release commit:
```shell
git commit -a -m "release <VERSION>"
```

- Create a release tag:
```
git tag -a v<VERSION> -m"<VERSION> release"
```

- Release to PyPI (see https://github.com/di/markdown-description-example/issues/1#issuecomment-374474296):
```shell
rm dist/*
python setup.py sdist
twine upload dist/*
rm dist/*
python setup.py bdist_wheel
twine upload dist/*
```

- Push to github:
```
git push origin
git push --tags
```

- Change version for the next release cycle, i.e. incrementing and adding .dev0

  - `setup.py`
  - `src/pyclts/__init__.py`

- Commit/push the version change:
```shell
git commit -a -m "bump version for development"
git push origin
```
