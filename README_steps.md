**Task 1: Connect to Remote Repo & set up local working enviornment**

	setup, connect and clone repo to local environment 
	git clone https://git.ogilvy-digital.com/scm/ogc/technolgy-experiement.git technology-experiment

	change to local environment directory
	cd technology-experiment

	Set up a local working environment using the following folder structure:
		Root Folder
			BuildAddtions
			SourceCode
	mkdir BuildAdditions SourceCode

	these folders are empty and untracked; they need content to be added to online repo
	touch BuildAdditions/.gitignore SourceCode/.gitignore

	track
	git add -A

	commit
	git commit -m "created 2 empty folders BuildAdditions and SourceCode"

	push
	git push origin master

**Task 2: Write README.md file**

	placed in root, can be read by bitbucket

**Task 3: Create a basic site folder structure**

	a basic html site structure
	index.html plus folders img, css, and js

**Task 4: Gulp and sass**

	install these plugins: clean, uglify, autoprefixer, gulp-sass
		clean: 
		npm install --save-dev gulp-clean-css 

		uglify: 
		npm install --save-dev gulp-uglify

		autoprefixer: 
		npm install --save-dev gulp-autoprefixer

		gulp-sass: 
		npm install --save-dev gulp-sass 

	also sourcemaps (makes minified files readable): npm install --save-dev gulp-sourcemaps 

**Task 5: Project dependencies and task runner: Bootstrap, Gulp, Sass, etc.**

	bootstrap installed with npm: 
		npm install --save-dev bootstrap-sass

	task runner with gulp: gulpfile.js 
		functions for autoprefixer, sass, compress, fonts; 
		gulp.task('default') calls those fcns from within a watch task; 
		listens and builds for every change

