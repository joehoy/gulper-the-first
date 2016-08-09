**Task 1: upload from local working enviornment**
	track
	git add -A

	commit
	git commit -m ""

	push
	git push origin master


**Task 2: Gulp and sass**

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

**Task 3: Project dependencies and task runner: Bootstrap, Gulp, Sass, etc.**

	bootstrap installed with npm: 
		npm install --save-dev bootstrap-sass

	task runner with gulp: gulpfile.js 
		functions for autoprefixer, sass, compress, fonts; 
		gulp.task('default') calls those fcns from within a watch task; 
		listens and builds for every change

