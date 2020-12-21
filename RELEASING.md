
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

- Create the release commit:
```shell
git commit -a -m "release <VERSION>"
```

- Create a release tag:
```
git tag -a v<VERSION> -m"<VERSION> release"
```

- Push to github:
```
git push origin
git push --tags
```

