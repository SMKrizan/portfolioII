const pdfMobile = `
<div className='badge' id='pdf'>
<a href="https://drive.google.com/file/d/1sQ9kBGvVXRuROj97ZTW61djTUFuxxBDt/view?usp=sharing"
    target='_blank' rel="noreferrer">
    <img id='pdf' src={res} 
    alt='link to resume' />
</a>
</div>
`

const pdfDsktop = `
<div className='display-pdf'>
<Document
file='smk-res.pdf'
onLoadSuccess={onDocumentLoadSuccess}>
<Page pageNumber={pageNumber} />
</Document>
<p>Page {pageNumber} of {numPages}</p>
</div>
`