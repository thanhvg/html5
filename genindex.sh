# https://stackoverflow.com/questions/3785055/how-can-i-create-a-simple-index-html-file-which-lists-all-files-directories
tree -H '.' -L 1 --noreport --charset utf-8 -P ".html" > index.html
