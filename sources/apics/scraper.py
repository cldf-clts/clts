import urllib.request
import re
import warnings

try:
    from pyclts.util import pkg_path
except ImportError:
    warnings.warn('requires pyclts < 2.0')


URL = 'http://apics-online.info/parameters/{0}'
sounds = []
for i in range(131, 308):
    with urllib.request.urlopen(URL.format(i)) as handler:
        data = handler.read().decode('utf-8')
    print('Downloading parameter', i)
    id_, sound, feature = re.findall(
            '<h2>([1-3][0-9][0-9]) ([^\s]+) . ([^<]*)</h2>',
            data)[0]
    sounds += [[id_, sound, feature]]
with open(pkg_path('sources', 'apics.tsv'), 'w') as f:
    f.write('BIPA\tGRAPHEME\tURL\tFEATURES\n')
    for line in sounds:
        f.write('\t{0[1]}\thttp://apics-online.info/parameters/{0[0]}\t{0[2]}\n'.format(line))

