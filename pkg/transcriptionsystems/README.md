# Data Structure in CLTS

Our code on cross-linguistic transcription system aims at providing means to translate sounds into a meta-language from which they can then be transcribed back into another transcription system and to normalize how sounds are displayed in a given system. Our main target is a system we call "Broad IPA", which is supposed to reflect the common understanding and practice of many rsearchers who work on original language data and also attempt to reflect the IPA standard but add some general idiosyncrasies which are usually accepted by the community.

As an example, consider how people mark aspiration. Here, the IPA standard would require scholars to use the superscript `<`ʰ`>`, but scholars often just assume that it is anyway clear what is meant even when writing the normal `<`h`>` symbol.

## List of Data Required

Our internal system that guarantees comparability of different transcription systems are features strings much similar to the ones provided by the IPA. These are different depending on the sound type we are dealing with. So far, we distinguish the following types (and each alphabet needs to specify them by adding a file, albeit an empty one):

* consonants
* vowels
* diacritics
* markers
* tones
* clicks

An additional requirement is a file called `normalize.tsv` in which we store normalization information (e.g., that `:` is rendered internally as `ː`.




