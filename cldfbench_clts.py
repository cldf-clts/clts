import pathlib
import subprocess

import attr
from clldutils.jsonlib import update, load
from cldfbench import Dataset as BaseDataset
from cldfbench.metadata import Metadata


@attr.s(auto_attribs=True, auto_detect=True)
class CLTSMetadata(Metadata):
    def __init__(self, **kw):
        kwmap = {
            'dc:bibliographicCitation': 'citation',
            'dc:description': 'description',
            'dc:identifier': 'url',
        }
        newkw = {kwmap.get(k, k): v for k, v in kw.items()}
        newkw.update(id='clts', title='CLTS. Cross-Linguistic Transcription Systems')
        self.__attrs_init__(**newkw)


class Dataset(BaseDataset):
    dir = pathlib.Path(__file__).parent
    id = "clts"
    metadata_cls = CLTSMetadata

    def cldf_specs(self):  # A dataset must declare all CLDF sets it creates.
        return super().cldf_specs()

    def cmd_makecldf(self, args):
        subprocess.check_call(['clts', '--repos', str(self.dir), 'test'])
        subprocess.check_call(['clts', '--repos', str(self.dir), 'make_pkg'])
        subprocess.check_call(['clts', '--repos', str(self.dir), 'make_app'])
        subprocess.check_call(['clts', '--repos', str(self.dir), 'dist'])
        with update(self.dir / 'cldf-metadata.json', indent=4) as md:
            md.update(load(self.dir / 'metadata.json'))
            md.update({
                'rdf:ID': self.id,
                'dc:license': 'https://creativecommons.org/licenses/by/4.0/'})
