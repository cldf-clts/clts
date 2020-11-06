from urllib.request import urlopen
import re

sounds = []
req = urlopen('https://linguistics.berkeley.edu/~saphon/en/phonemes.php')
text = req.read().decode('utf-8')
for idx, sound in re.findall('<span[^>]*f=([0-9]+)[^>]*>([^<]*)</span>', text, re.DOTALL):
    sounds += [[idx, sound]]
with open('graphemes.tsv', 'w') as f:
    f.write('BIPA\tGRAPHEME\tID\n')
    for a, b in sounds:
        f.write('\t'+b+'\t'+a+'\n')
print('found {0} sounds'.format(len(sounds)))
