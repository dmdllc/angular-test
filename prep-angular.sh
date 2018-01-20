#!/usr/bin/env sh +x

BLACK='\033[0;30m'
RED='\033[0;31m'
LTRED='\033[1;31m'
GREEN='\033[0;32m'
LTGREEN='\033[1;32m'
ORANGE='\033[0;33m'
YELLOW='\033[1;33m'
YBAR='\033[7;33m'
BLUE='\033[4;34m'
LTBLUE='\033[1;34m'
PURPLE='\033[0;35m'
LTPURPLE='\033[1;35m'
CYAN='\033[0;36m'
LTCYAN='\033[1;36m' # 1; brighter 2; darker 3; normal 4; underline 5; blink 6; normal; 7; reverse 8; invisible
LTGRAY='\033[0;37m'
DKGRAY='\033[1;37m'
LTRED='\033[0;31m'
WHITE='\033[0;31m'


NC='\033[0m' # No Color

clear
echo "" ; echo ""
echo "${LTCYAN}This script will prepare the base Meteor project"
echo "To use Angular as the visualization layer.${NC}"
echo ""
# First, remove Blaze templates
echo "${YBAR}Removing blaze-html-templates from Meteor project${NC}" #&& sleep 3
meteor remove blaze-html-templates 
echo ""

# Then add Angular templates
echo "${YBAR}Add angular-templates to Meteor project.${NC}" #&& sleep 3
meteor add angular-templates
echo ""

# Let's add angular-meteor dependencies
echo "${YBAR}Add Meteor NPM dependencies${NC}" #&& sleep 5
meteor npm install --save angular angular-meteor && echo ""

echo "${YBAR}Ready to code Meteor-Angular application!${NC}"