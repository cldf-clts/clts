from urllib.request import urlopen
from collections import defaultdict
from csvw.dsv import UnicodeDictReader

req = urlopen('https://raw.githubusercontent.com/bdproto/bdproto/master/bdproto.csv')
text = req.read().decode('utf-8')
with open('bdproto-merged.csv', 'w') as f:
    f.write(text)
sounds = defaultdict(list)
with UnicodeDictReader('bdproto-merged.csv') as reader:
    for row in reader:
        sounds[row['Phoneme']] += [row['BdprotoID']]

with open('graphemes.tsv', 'w') as f:
    f.write('BIPA\tGRAPHEME\tCOUNT\n')
    for a, b in sounds.items():
        f.write('\t'+a+'\t'+str(len(b))+'\n')
print('found {0} sounds'.format(len(sounds)))
