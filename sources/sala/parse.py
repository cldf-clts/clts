from urllib.request import urlopen
from html import unescape
import re

sounds = []
req = urlopen('http://sumale.vjf.cnrs.fr/phono/Init00.php')
text = req.read().decode('utf-8')
for idx, sound in re.findall("<A href=.*?ChoixCellule=([A-Z0-9]*)[^A-Z0-9][^>]*>([^>]*)</A>",
        text, re.DOTALL):
    sounds += [[idx, sound]]
with open('graphemes.tsv', 'w') as f:
    f.write('BIPA\tGRAPHEME\tID\n')
    for a, b in sounds:
        f.write('\t'+unescape(b)+'\t'+a+'\n')
print('found {0} sounds'.format(len(sounds)))
