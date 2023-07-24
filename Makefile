gendiff:
		node/gendiff.js

lint:
		npx eslint .

test:
		npm test
		
coverage:
		-npx jest --coverage