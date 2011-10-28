#!/bin/bash
VERSION="1.0.0"

#define paths
COMPILER=google-compiler/compiler.jar
COMPRESSOR=yuicompressor/yuicompressor-2.4.2.jar
KINOUT_SOURCES=../src-client/javascripts/
KINOUT_STYLESHEETS=../src-client/stylesheets/
KINOUT_THIRDS=../src/
KINOUT_NAMESPACE=Kinout.
BUILDPATH=../build/
MINIFIED="min"

clear

echo -e "\033[0m"
echo ============================ KINOUT COMPILER ============================
## Files to compile
FILES_TO_COMPILE=""
FILES_TO_JOIN=""

#JavaScripts
DIR=$KINOUT_SOURCES$KINOUT_NAMESPACE
echo -e "\033[0m  [DIR]: "$KINOUT_SOURCES"\033[33m"
FILES=(js Core.js Dom.js Editor.js Events.js Router.js Url.js View.js View.Markup.js)
for file in "${FILES[@]}"
do
    echo "     - "$KINOUT_NAMESPACE$file
    FILES_TO_COMPILE=$FILES_TO_COMPILE" --js "$DIR$file
    FILES_TO_JOIN=$FILES_TO_JOIN" "$DIR$file
done

echo -e "\033[0m     - [BUILD]: "$BUILDPATH"\033[0m"
#UNCOMPRESED Version
cat $FILES_TO_JOIN > $BUILDPATH/kinout-$VERSION.js
echo -e "\033[32m          - kinout-"$VERSION.js"\033[0m"
#MINIFIED Version
java -jar $COMPILER $FILES_TO_COMPILE --js_output_file $BUILDPATH/kinout-$VERSION.$MINIFIED.js
echo -e "\033[32m          - kinout-"$VERSION.$MINIFIED.js"\033[0m"


FILES_TO_COMPRESS=""
DIR=$KINOUT_STYLESHEETS
echo -e "\033[0m  [DIR]: "$DIR"\033[33m"
FILES=(reset layout widgets)
for file in "${FILES[@]}"
do  
    echo "    - "$file".css"
    java -jar $COMPRESSOR $DIR$file".css" -o $DIR$file".min.css"
    FILES_TO_COMPRESS=$FILES_TO_COMPRESS" "$DIR$file".min.css"
done
cat $FILES_TO_COMPRESS > $BUILDPATH/kinout-$VERSION.$MINIFIED.css
echo -e "\033[0m    - [BUILD]: "$BUILDPATH"\033[0m"
echo -e "\033[32m          - kinout-"$VERSION.$MINIFIED.css"\033[0m"

for file in "${FILES[@]}" 
do 
    rm $KINOUT_STYLESHEETS$file".min.css" 
done

	#DIR=$KINOUT_STYLESHEETS'themes/'
	#FILES=(default.css facebook.css perfomance.css)
	#echo -e "\033[33m  [DIR]: "$DIR
	#for file in "${FILES[@]}"
	#do
	#	echo "   - [THEME] "$file
	#	cp $DIR"lungo.theme."$file $BUILDPATH'themes/lungo.theme.'$file
	#done
	#echo -e "\033[32m  [BUILD]: kinout-"$VERSION.$MINIFIED".css\033[0m"
echo ============================ /KINOUT COMPILER ============================