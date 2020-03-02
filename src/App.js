import React from 'react';
import './App.css';
import './cart.css';


const files = [
    {
        "output_type": "subreads",
        "file_type": "bam",
        "assembly": "hg19",
        "@id": "/files/ENCFF333SBR/",
        "lab": {
            "title": "Ali Mortazavi, UCI"
        },
        "title": "ENCFF333SBR",
        "file_format": "bam",
        "assay_term_name": "long read RNA-seq",
        "status": "released",
        "biosample_ontology": {
            "term_name": "midbrain"
        }
    },
    {
        "output_type": "alignments",
        "file_type": "bam",
        "assembly": "hg19",
        "@id": "/files/ENCFF011EPI/",
        "lab": {
            "title": "Robert Waterston, UW"
        },
        "title": "ENCFF011EPI",
        "file_format": "bam",
        "assay_term_name": "ChIP-seq",
        "status": "released",
        "biosample_ontology": {
            "term_name": "K562"
        }
    },
    {
        "output_type": "transcriptome annotations",
        "file_type": "gtf",
        "assembly": "hg19",
        "@id": "/files/ENCFF807TRA/",
        "lab": {
            "title": "ENCODE Processing Pipeline"
        },
        "title": "ENCFF807TRA",
        "file_format": "gtf",
        "assay_term_name": "microRNA-seq",
        "status": "released",
        "biosample_ontology": {
            "term_name": "midbrain"
        }
    },
    {
        "file_format_type": "gff3",
        "output_type": "miRNA annotations",
        "file_type": "gff gff3",
        "assembly": "hg19",
        "@id": "/files/ENCFF783YZT/",
        "lab": {
            "title": "ENCODE Processing Pipeline"
        },
        "title": "ENCFF783YZT",
        "file_format": "gff",
        "assay_term_name": "microRNA-seq",
        "status": "released",
        "biosample_ontology": {
            "term_name": "midbrain"
        }
    },
    {
        "output_type": "alignments",
        "file_type": "bam",
        "assembly": "hg19",
        "@id": "/files/ENCFF009EPI/",
        "lab": {
            "title": "Robert Waterston, UW"
        },
        "title": "ENCFF009EPI",
        "file_format": "bam",
        "assay_term_name": "ChIP-seq",
        "status": "released",
        "biosample_ontology": {
            "term_name": "K562"
        },
        "target": {
            "label": "H3K27me3"
        }
    },
    {
        "output_type": "alignments",
        "file_type": "bam",
        "assembly": "hg19",
        "@id": "/files/ENCFF010EPI/",
        "lab": {
            "title": "Robert Waterston, UW"
        },
        "title": "ENCFF010EPI",
        "file_format": "bam",
        "assay_term_name": "ChIP-seq",
        "status": "released",
        "biosample_ontology": {
            "term_name": "K562"
        },
        "target": {
            "label": "H3K9me3"
        }
    },
    {
        "output_type": "alignments",
        "file_type": "bam",
        "assembly": "hg19",
        "@id": "/files/ENCFF002CON/",
        "lab": {
            "title": "Robert Waterston, UW"
        },
        "title": "ENCFF002CON",
        "file_format": "bam",
        "assay_term_name": "ChIP-seq",
        "status": "released",
        "biosample_ontology": {
            "term_name": "A549"
        },
        "target": {
            "label": "TCF4"
        }
    },
    {
        "output_type": "alignments",
        "file_type": "bam",
        "assembly": "hg19",
        "@id": "/files/ENCFF002REP/",
        "lab": {
            "title": "Robert Waterston, UW"
        },
        "title": "ENCFF002REP",
        "file_format": "bam",
        "assay_term_name": "Repli-seq",
        "status": "released",
        "biosample_ontology": {
            "term_name": "SK-N-SH"
        }
    },
    {
        "output_type": "gene quantifications",
        "file_type": "tsv",
        "assembly": "hg19",
        "@id": "/files/ENCFF946MFS/",
        "lab": {
            "title": "J. Michael Cherry, Stanford"
        },
        "title": "ENCFF946MFS",
        "file_format": "tsv",
        "assay_term_name": "RNA-seq",
        "status": "released",
        "biosample_ontology": {
            "term_name": "K562"
        }
    },
    {
        "output_type": "gene quantifications",
        "file_type": "tsv",
        "assembly": "hg19",
        "@id": "/files/ENCFF413RGP/",
        "lab": {
            "title": "J. Michael Cherry, Stanford"
        },
        "title": "ENCFF413RGP",
        "file_format": "tsv",
        "assay_term_name": "RNA-seq",
        "status": "released",
        "biosample_ontology": {
            "term_name": "K562"
        }
    },
    {
        "output_type": "alignments",
        "file_type": "bam",
        "assembly": "hg19",
        "@id": "/files/ENCFF000VWO/",
        "lab": {
            "title": "Michael Snyder, Stanford"
        },
        "title": "ENCFF000VWO",
        "file_format": "bam",
        "assay_term_name": "ChIP-seq",
        "status": "released",
        "biosample_ontology": {
            "term_name": "GM12878"
        }
    },
    {
        "output_type": "chromatin interactions",
        "file_type": "hic",
        "assembly": "hg19",
        "@id": "/files/ENCFF355OWW/",
        "lab": {
            "title": "Ali Mortazavi, UCI"
        },
        "title": "ENCFF355OWW",
        "file_format": "hic",
        "assay_term_name": "HiC",
        "status": "released",
        "biosample_ontology": {
            "term_name": "cell-free sample"
        }
    },
    {
        "output_type": "chromatin interactions",
        "file_type": "hic",
        "assembly": "hg19",
        "@id": "/files/ENCFF784GFP/",
        "lab": {
            "title": "Ali Mortazavi, UCI"
        },
        "title": "ENCFF784GFP",
        "file_format": "hic",
        "assay_term_name": "HiC",
        "status": "released",
        "biosample_ontology": {
            "term_name": "cell-free sample"
        }
    },
    {
        "output_type": "mapping quality thresholded chromatin interactions",
        "file_type": "hic",
        "assembly": "hg19",
        "@id": "/files/ENCFF812THZ/",
        "lab": {
            "title": "Ali Mortazavi, UCI"
        },
        "title": "ENCFF812THZ",
        "file_format": "hic",
        "assay_term_name": "HiC",
        "status": "released",
        "biosample_ontology": {
            "term_name": "cell-free sample"
        }
    },
    {
        "output_type": "restriction enzyme site locations",
        "file_type": "txt",
        "assembly": "hg19",
        "@id": "/files/ENCFF123HIC/",
        "lab": {
            "title": "Ali Mortazavi, UCI"
        },
        "title": "ENCFF123HIC",
        "file_format": "txt",
        "assay_term_name": "HiC",
        "status": "released",
        "biosample_ontology": {
            "term_name": "cell-free sample"
        }
    },
    {
        "output_type": "alignments",
        "file_type": "bam",
        "assembly": "hg19",
        "@id": "/files/ENCFF002EPI/",
        "lab": {
            "title": "Robert Waterston, UW"
        },
        "title": "ENCFF002EPI",
        "file_format": "bam",
        "assay_term_name": "RNA-seq",
        "status": "released",
        "biosample_ontology": {
            "term_name": "K562"
        }
    },
    {
        "output_type": "plus strand signal of all reads",
        "file_type": "bigWig",
        "assembly": "hg19",
        "@id": "/files/ENCFF119LNR/",
        "lab": {
            "title": "Ali Mortazavi, UCI"
        },
        "title": "ENCFF119LNR",
        "file_format": "bigWig",
        "assay_term_name": "DNA methylation profiling by array assay",
        "status": "released",
        "biosample_ontology": {
            "term_name": "basal cell of epithelium of terminal bronchiole"
        }
    },
    {
        "output_type": "alignments",
        "file_type": "bam",
        "assembly": "hg19",
        "@id": "/files/ENCFF004EPI/",
        "lab": {
            "title": "Robert Waterston, UW"
        },
        "title": "ENCFF004EPI",
        "file_format": "bam",
        "assay_term_name": "RRBS",
        "status": "released",
        "biosample_ontology": {
            "term_name": "K562"
        }
    },
    {
        "output_type": "alignments",
        "file_type": "bam",
        "assembly": "hg19",
        "@id": "/files/ENCFF003CON/",
        "lab": {
            "title": "Robert Waterston, UW"
        },
        "title": "ENCFF003CON",
        "file_format": "bam",
        "assay_term_name": "ChIP-seq",
        "status": "released",
        "biosample_ontology": {
            "term_name": "A549"
        },
        "target": {
            "label": "TCF4"
        }
    },
    {
        "output_type": "alignments",
        "file_type": "bam",
        "assembly": "hg19",
        "@id": "/files/ENCFF001RCV/",
        "lab": {
            "title": "J. Michael Cherry, Stanford"
        },
        "title": "ENCFF001RCV",
        "file_format": "bam",
        "assay_term_name": "shRNA knockdown followed by RNA-seq",
        "status": "released",
        "biosample_ontology": {
            "term_name": "K562"
        }
    },
    {
        "output_type": "alignments",
        "file_type": "bam",
        "assembly": "hg19",
        "@id": "/files/ENCFF001RCW/",
        "lab": {
            "title": "J. Michael Cherry, Stanford"
        },
        "title": "ENCFF001RCW",
        "file_format": "bam",
        "assay_term_name": "shRNA knockdown followed by RNA-seq",
        "status": "released",
        "biosample_ontology": {
            "term_name": "K562"
        }
    },
    {
        "output_type": "signal of all reads",
        "file_type": "bigWig",
        "assembly": "hg19",
        "@id": "/files/ENCFF001RCZ/",
        "lab": {
            "title": "J. Michael Cherry, Stanford"
        },
        "title": "ENCFF001RCZ",
        "file_format": "bigWig",
        "assay_term_name": "shRNA knockdown followed by RNA-seq",
        "status": "released",
        "biosample_ontology": {
            "term_name": "K562"
        }
    },
    {
        "output_type": "alignments",
        "file_type": "bam",
        "assembly": "hg19",
        "@id": "/files/ENCFF001REP/",
        "lab": {
            "title": "Robert Waterston, UW"
        },
        "title": "ENCFF001REP",
        "file_format": "bam",
        "assay_term_name": "Repli-seq",
        "status": "released",
        "biosample_ontology": {
            "term_name": "SK-N-SH"
        }
    },
    {
        "output_type": "alignments",
        "file_type": "bam",
        "assembly": "hg19",
        "@id": "/files/ENCFF000VUS/",
        "lab": {
            "title": "Michael Snyder, Stanford"
        },
        "title": "ENCFF000VUS",
        "file_format": "bam",
        "assay_term_name": "DNA methylation profiling by array assay",
        "status": "released",
        "biosample_ontology": {
            "term_name": "basal cell of epithelium of terminal bronchiole"
        }
    },
    {
        "output_type": "alignments",
        "file_type": "bam",
        "assembly": "hg19",
        "@id": "/files/ENCFF003REP/",
        "lab": {
            "title": "Robert Waterston, UW"
        },
        "title": "ENCFF003REP",
        "file_format": "bam",
        "assay_term_name": "Repli-seq",
        "status": "released",
        "biosample_ontology": {
            "term_name": "SK-N-SH"
        }
    },
    {
        "output_type": "alignments",
        "file_type": "bam",
        "assembly": "hg19",
        "@id": "/files/ENCFF008EPI/",
        "lab": {
            "title": "Robert Waterston, UW"
        },
        "title": "ENCFF008EPI",
        "file_format": "bam",
        "assay_term_name": "ChIP-seq",
        "status": "released",
        "biosample_ontology": {
            "term_name": "K562"
        },
        "target": {
            "label": "H3K36me3"
        }
    },
    {
        "file_format_type": "narrowPeak",
        "output_type": "IDR thresholded peaks", //
        "file_type": "bed narrowPeak", //
        "assembly": "hg19", //
        "@id": "/files/ENCFF002COS/",
        "lab": {
            "title": "J. Michael Cherry, Stanford"
        },
        "title": "ENCFF002COS", // **
        "file_format": "bed", //
        "assay_term_name": "ChIP-seq", //
        "status": "released", // **
        "biosample_ontology": {
            "term_name": "GM12878" //
        },
        "target": {
            "label": "EBF1" //
        }
    },
    {
        "file_format_type": "narrowPeak",
        "output_type": "IDR thresholded peaks",
        "file_type": "bigBed narrowPeak",
        "assembly": "hg19",
        "@id": "/files/ENCFF003COS/",
        "lab": {
            "title": "J. Michael Cherry, Stanford"
        },
        "title": "ENCFF003COS",
        "file_format": "bigBed",
        "assay_term_name": "ChIP-seq",
        "status": "released",
        "biosample_ontology": {
            "term_name": "GM12878"
        },
        "target": {
            "label": "EBF1"
        }
    },
    {
        "output_type": "alignments",
        "file_type": "bam",
        "assembly": "hg19",
        "@id": "/files/ENCFF001CON/",
        "lab": {
            "title": "Robert Waterston, UW"
        },
        "title": "ENCFF001CON",
        "file_format": "bam",
        "assay_term_name": "ChIP-seq",
        "status": "released",
        "biosample_ontology": {
            "term_name": "A549"
        },
        "target": {
            "label": "TCF4"
        }
    }
];


const App = () => {
    return (
        <div className="App cart-file-list">
            {files.map(file =>
                <div key={file['@id']} className="cart-file-item">
                    <div className={`cart-file-item__identifier cart-file-item__identifier--${file.file_format.toLowerCase()}`}>
                        <div className="cart-file-item__format">{file.file_format}</div>
                        <div className="cart-file-item__assembly">{file.assembly}</div>
                    </div>
                    <div className="cart-file-item__details">
                        <div className="cart-file-details__output-type">
                            {file.output_type}
                        </div>
                        <div className="cart-file-details__type">
                            <div className="cart-file-details-label">Type</div>
                            <div className="cart-file-details-value">{file.file_type}</div>
                        </div>
                        <div className="cart-file-details__assay">
                            <div className="cart-file-details-label">Assay</div>
                            <div className="cart-file-details-value">{file.assay_term_name}</div>
                        </div>
                        <div className="cart-file-details__biosample">
                            <div className="cart-file-details-label">Biosample</div>
                            <div className="cart-file-details-value">{file.biosample_ontology && file.biosample_ontology.term_name}</div>
                        </div>
                        <div className="cart-file-details__target">
                            <div className="cart-file-details-label">Target</div>
                            <div className="cart-file-details-value">{file.target && file.target.label}</div>
                        </div>
                    </div>
                    <div className="cart-file-item__status">
                        {file.status}
                    </div>
                    <div className="cart-file-item__title">
                        {file.title}
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;
