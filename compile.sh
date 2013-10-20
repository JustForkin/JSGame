#!/bin/sh
touch ./bin/JSGame.min.js
touch temp.js
cat ./lib/JSGame.js >> temp.js
cat ./lib/utilities.js >> temp.js
cat ./lib/surface.js >> temp.js
cat ./lib/keycodes.js >> temp.js
cat ./lib/game.js >> temp.js
cat temp.js | sed -e "s|/\*\(\\\\\)\?\*/|/~\1~/|g" -e "s|/\*[^*]*\*\+\([^/][^*]*\*\+\)*/||g" \
    -e "s|\([^:/]\)//.*$|\1|" -e "s|^//.*$||" | tr '\n' ' ' | \
      sed -e "s|/\*[^*]*\*\+\([^/][^*]*\*\+\)*/||g" -e "s|/\~\(\\\\\)\?\~/|/*\1*/|g" \
        -e "s|\s\+| |g" -e "s| \([{;:,]\)|\1|g" -e "s|\([{;:,]\) |\1|g" > ./bin/JSGame.min.js
rm temp.js
