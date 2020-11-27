# Contributing to CLTS

## Contributing Transcription Systems

Contributing transcription systems is currently still a bit complicated, involving the manual editing of several files which then need to be tested with the help of the Python library. If you wish to contribute to the CLTS project and want to add a transcription system, we ask you to get in contact with us, and we will then add detailed descriptions of what you need to do.

## Contributing Transcription Data

Contributing transcription data is largely facilitated with a new workflow which we have set up now. Thus, if you want to contribute, you need to provide a file with the graphemes in the transcription data system. This file should be placed in the folder `sources/TS/graphemes.tsv`. `TS` here refers to the identifier you use for the transcription data (e.g., `phoible`), which usually is lowercase containing only alphabetic characters.

This file `graphemes.tsv` is a tab-separated file with a header that should at least contain one column called `BIPA`, which does not need to have any content, and a column called `GRAPHEME`. 

Once this first list has been compiled (which can also be supplemented by a Python script to parse the data automatically, which may be convenient for updates), you should check how well the CLTS system can interpret it in terms of the BIPA transcription system. In order to do so, cd into the `sources` folder and type:

```shell
$ clts map TS/graphemes.tsv
```

This will provide you with basic information on the characters that could be automatically mapped (that is: interpreted in the light of the BIPA system). The results of this can be found in the file `TS/graphemes.mapped.tsv`. Here, all so far empty BIPA cells now either contain a `<NA>`, or a grapheme in the BIPA system. The mapping script also makes educated guesses. For example, `nts` will be interpreted as `ⁿts`. These guesses are marked by an asterisk preceding the BIPA symbol, and you should manually check them and correct them by either deleting the asterisk (means: you accept the suggestion of the system) or providing an alternative reading that is BIPA conform, or by setting the symbol to `<NA>`, which means that no attempt will be undertaken to map it. 

Further "warnings" that you should manually check include clusters, since the sounds we accept as clusters should be a small group only. They are marked by `(!)` preceding the grapheme, and you should also decide about them by deleting the `(!)` or modifying the transcription. 

Once this has been done, you can replace the file `graphemes.tsv` with the manually corrected file `graphemes.mapped.tsv`, which can, for example be done with the terminal:

```shell
$ cp TS/graphemes.mapped.tsv graphemes.tsv
```

Now, you should add the bibliographic information of your new transcription data system to CLTS. Please prepare them in BibTeX and add them to the file `data/references.bib`. 

As a last point, you should provide the description for the dataset in the file `sources/index.tsv`, where you add the NAME (the name of the folder, that is, the "identifier"), a short description (field DESCRIPTION), references (field REFS) as bibtex-keys separated by a comma, the type (TYPE), which should be `td`, and (if this comes along with the data) the template for the resolution of the URL, where the datapoint can be found (URITEMPLATE). 

Now you can update the CLTS data in our package. This can be done with the help of the command:

```
$ clts make_dataset TS
```

This will add a final check on your data and add a file of your transcription data to the folder `pkg/transcriptiondata/`, named `TS.tsv`. 

Now, you can make a pull request in which you send this updated code for review by our CLTS team. Once all problems in the manually corrected mapping have been resolved, we will add this transcription system as a source, and list you as a contributor.

For this pull request, you first branch the data:

```shell
$ git branch TS
$ git checkout TS
$ git add sources/TS/graphemes.tsv
$ git add data/references.bib
$ git add sources/index.tsv
$ git add pkg/transcriptiondata/TS.tsvv
$ git commit -m "add TS"
$ git push --set-upstream TS origin/TS
```

Once this has been done, you can go to the GitHub repository and make the pull request.
