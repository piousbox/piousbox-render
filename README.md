
# Develop
 ./node_modules/.bin/babel src/index.jsx  --presets=react,es2015 > dist/index.js

# Deploy
 ./scripts/build
 
 npm run build
 # version bump
 git add .; git commit -m 'autocommit'; git push
 npm publish

