# encoding: utf-8

import re
import time
import urllib.request
import warnings

try:
    from pyclts.util import pkg_path
except ImportError:
    warnings.warn('requires pyclts < 2.0')


INVENTORY_URL = 'http://pbase.phon.chass.ncsu.edu/language/'

RE_INVENTORY = re.compile(r'<div class="ipa">([^<]+)</div>', re.UNICODE)

def fetch_inventory(lang_id):
    with urllib.request.urlopen('%s%i' % (INVENTORY_URL, lang_id)) as handler:
        source = handler.read().decode('utf-8')

    # grab all IPA entries in source, where many items will be repeated
    inventories = ','.join(re.findall(RE_INVENTORY, source))
    return set(inventories.split(','))

def main():
    # There is no language catalog on the on-line PBASE interface;
    # while we could loop over index until we hit a 404 or a 500, this is too
    # complicated and not guaranteed to work if they reorganize their
    # interface. I manually checked for the last entry and I'm looping
    # over this range (the '+1' is to make it clear that last entry is
    # 629 and not 630)
    catalog = set()
    for lang_id in range(1, 629+1):
        while True:
            try:
                print('Fetching language #%i...' % lang_id)
                catalog.update(fetch_inventory(lang_id))
            except:
                print('WARNING: error fetching #i, waiting a few seconds...' % lang_id)
                time.sleep(30)
                continue

            break

    # output
    with open(pkg_path('sources', 'pbase.tsv').as_posix(), 'w') as handler:
        handler.write('GRAPHEME\n')
        for grapheme in sorted(catalog):
            handler.write('%s\n' % grapheme)

if __name__ == '__main__':
    main()
