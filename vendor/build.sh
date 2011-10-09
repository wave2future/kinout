#!/bin/bash
VERSION="0.0.1"

#define paths
COMPILER=google-compiler/compiler.jar
KINOUT_SOURCES=../src/Kinout/
KINOUT_JS_FILES=Kinout*js
Kinout_STYLESHEETS=../src/assets/stylesheets/
Kinout_LESS_FILES=Kinout.*.less
BUILDPATH=../build/

#script
#RUNPATH=/repositories/Kinout/vendor
#cd $RUNPATH
clear

echo -e "\033[0m"
echo ============================ Kinout COMPILER ============================
echo -e "\033[33m  [DIR]: "$Kinout_SOURCES
for file in $Kinout_SOURCES$Kinout_JS_FILES
do
	echo "   - "$file
	files=$files" --js "$file
done

echo -e "\033[33m  [DIR]: "$Kinout_SOURCES"data/"
for file in $Kinout_SOURCES"data/"$Kinout_JS_FILES
do
	echo "   - "$file
	files=$files" --js "$file
done

echo -e "\033[33m  [DIR]: "$Kinout_SOURCES"view/"
for file in $Kinout_SOURCES"view/"$Kinout_JS_FILES
do
	echo "   - "$file
	files=$files" --js "$file
done

echo -e "\033[33m  [DIR]: "$Kinout_SOURCES"sugars/"
for file in $Kinout_SOURCES"sugars/"$Kinout_JS_FILES
do
	echo "   - "$file
	files=$files" --js "$file
done

java -jar $COMPILER $files  --js_output_file $BUILDPATH/Kinout.min.$VERSION.js
echo -e "\033[32m  [BUILD]: Kinout.min."$VERSION.js"\033[0m"
echo ============================ /Kinout COMPILER ============================