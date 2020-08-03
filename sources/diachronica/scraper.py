# encoding: utf-8

import urllib.request
import re
import warnings

try:
    from pyclts.util import pkg_path
except ImportError:
    warnings.warn('requires pyclts < 2.0')


DATASET = 'https://chridd.nfshost.com/diachronica/full-table'
PREFIX = 'https://chridd.nfshost.com/diachronica/'
def main():
    # iterate over all lines, collecting data from the appropriate ones
    in_data = False
    
    with urllib.request.urlopen(DATASET) as handler:
        data = handler.read().decode('utf-8')
    sounds = re.findall(
            '<a.href="(.*?search.q=.*?)">(.*?)<.a>',
            data)
    print(len(sounds))

    # output
    with open(pkg_path('sources', 'diachronica.tsv').as_posix(), 'w') as handler:
        handler.write('GRAPHEME\tURL\n')
        for url, segment in sounds:
            handler.write(segment + '\t' + PREFIX + url + '\n')

if __name__ == '__main__':
    main()
