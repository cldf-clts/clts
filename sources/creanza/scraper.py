# encoding: utf-8

import urllib.request

from pyclts.util import pkg_path

CREANZA_DATASET = 'http://www.pnas.org/content/suppl/2015/01/15/1424033112.DCSupplemental/pnas.1424033112.sd02.txt'

HEADER_STR = 'Column\tPhoneme\tNumber_of_occurrences\tConsonant\tVowel\tModified_consonant\tModified_Vowel\tClick'

BLACKLIST = [
    'nasalharmony',
    'vowelharmony',
    'vowelharmony_TR',
]

def main():
    catalog = {}

    # iterate over all lines, collecting data from the appropriate ones
    in_data = False
    with urllib.request.urlopen(CREANZA_DATASET) as handler:
        for line in handler:
            # clean line
            line = line.decode('utf-8').strip()

            if in_data:
                fields = line.split('\t')
                catalog[fields[1]] = [fields[0], fields[2]]
            if line == HEADER_STR:
                # enter into collecting data mode
                in_data = True

    # output
    with open(pkg_path('sources', 'creanza.tsv').as_posix(), 'w') as handler:
        handler.write('GRAPHEME\tCOLUMN (ID)\tCOUNT\n')
        for segment in sorted(catalog):
            if segment not in BLACKLIST:
                buf = [segment, catalog[segment][0], catalog[segment][1]]
                handler.write('\t'.join(buf))
                handler.write('\n')

if __name__ == '__main__':
    main()
