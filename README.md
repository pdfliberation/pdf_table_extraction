experiment_table-extraction
===========================

using poppler, pdf-table-extract and numpy to extract tabular data

# visuals

The "visuals" folder contains the output of `pdftotext -bbox`  with additional css and js code to visualize the locations of all detected text.

    pdftoppm -r 150 -png -f 1 -l 1 pdf_documents/DHS.TSA.2013.pdf visuals/DHS.TSA.2013.png

    pdftotext -r 150 -bbox -f 1 -l 1 pdf_documents/DHS.TSA.2013.pdf visuals/DHS.TSA.2013.html

# table-extract

The "table-extract" folder looks at the performance of the pdf-table-extract library on various source documents. Also some rough code for generating pandas dataframes from the output.
