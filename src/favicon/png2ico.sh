mkdir out

inkscape --export-png out/16.png -w 16 favicon.svg
inkscape --export-png out/32.png -w 32 favicon.svg
inkscape --export-png out/48.png -w 48 favicon.svg

png2ico ../../favicon.ico out/16.png out/32.png out/48.png

rm -r out
