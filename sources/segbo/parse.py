from urllib.request import urlopen
from collections import defaultdict
from csvw.dsv import UnicodeDictReader

req = urlopen('https://raw.githubusercontent.com/segbo-db/segbo/master/data/segbo_merged.csv')
text = req.read().decode('utf-8')
with open('segbo-merged.csv', 'w') as f:
    f.write(text)
sounds = defaultdict(list)
with UnicodeDictReader('segbo-merged.csv') as reader:
    for row in reader:
        sounds[row['BorrowedSound']] += [row['InventoryID']]

with open('graphemes.tsv', 'w') as f:
    f.write('BIPA\tGRAPHEME\tCOUNT\n')
    for a, b in sounds.items():
        f.write('\t'+a+'\t'+str(len(b))+'\n')
print('found {0} sounds'.format(len(sounds)))
