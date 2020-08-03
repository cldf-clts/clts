# encoding: utf-8

import re
import time
import urllib.request
import warnings

try:
    from pyclts.util import pkg_path
except ImportError:
    warnings.warn('requires pyclts < 2.0')

LANGUAGES_URL = 'http://www.lapsyd.ddl.ish-lyon.cnrs.fr/lapsyd/index.php?data=explore'
INVENTORY_URL = 'http://www.lapsyd.ddl.ish-lyon.cnrs.fr/lapsyd/index.php?data=inv&code='

RE_LANGCODE = re.compile(r'index.php\?data=view&code=([^"]+)', re.UNICODE)
RE_SEGMENT = re.compile(r'title="([^"]+)" style="[^"]+">([^<]+)</font></td><td>([^<]+)</td><td>[^<]+</td><td>([^<]+)</td>', re.UNICODE)
RE_GRAPHEME = re.compile(r'&#(\d+);', re.UNICODE)

def fetch_lang_codes():
    with urllib.request.urlopen(LANGUAGES_URL) as handler:
        source = handler.read().decode('utf-8')

    return re.findall(RE_LANGCODE, source)

def fetch_inventory(lang_code):
    inventory = []

    with urllib.request.urlopen(INVENTORY_URL+lang_code) as handler:
        source = handler.read().decode('utf-8')
        for match in re.findall(RE_SEGMENT, source):
            # build grapheme from unicode escape
            grapheme = [chr(int(m)) for m in re.findall(RE_GRAPHEME, match[1])]
            grapheme = ''.join(grapheme)

            # add to language inventory (use LAPSyD id)
            inventory.append([match[3], grapheme, match[2]])

    return inventory

def main():
    # fetch language codes
    print("Fetching language codes...")
    lang_codes = fetch_lang_codes()

    # fetch inventories
    catalog = {}
    inventories = set()
    for lang_code in lang_codes:
        # make sure we retry fetching if it fails (e.g., network failure,
        # hitting server limit, etc.)
        while True:
            try:
                print("Fetching %s..." % lang_code)
                time.sleep(1)
                inventory = fetch_inventory(lang_code)
                # update global catalogue
                for segment in inventory:
                    catalog[segment[0]] = [segment[1], segment[2]]
                # update global in-inventory count
                inventories.update([segment[0] for segment in inventories])
            except:
                print("WARNING: Error while fetching '%s', retrying in some seconds." % lang_code)
                time.sleep(30)
                continue
            break

    # output
    with open(pkg_path('sources', 'lapsyd.tsv').as_posix(), 'w') as handler:
        handler.write('LAPSyD ID\tGRAPHEME\tLAPSyD DESCRIPTION\n')
        for segment_id in sorted(catalog):
            buf = [segment_id, catalog[segment_id][0], catalog[segment_id][1]]
            handler.write('\t'.join(buf))
            handler.write('\n')

if __name__ == '__main__':
    main()
