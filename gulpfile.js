var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	sourcemaps = require('gulp-sourcemaps'),
	uglify = require('gulp-uglify');

//var runSequence = require('run-sequence');

var config = {
	    bootstrapDir: './node_modules/bootstrap-sass',
	    publicDir: './public',
	    sourceDir: './SourceCode/SRC',
	    distDir: './SourceCode/DIST'
	};

// AUTOPREFIXER --------------------------------	 
	gulp.task('theAutoprefixer', function () {
	    return gulp.src(config.sourceDir + '/css/app.css')
	        .pipe(autoprefixer({
	            browsers: ['last 2 versions'],
	            cascade: false
	        }))
	        .pipe(gulp.dest(config.distDir));
	});

// SASS n SOURCE MAPS -------------------------------
	gulp.task('sass', ['theAutoprefixer'], function () {
	 return gulp.src(config.sourceDir + '/**/*.scss')
	  .pipe(sourcemaps.init())
	  .pipe(sass({
	  	outputStyle: 'compressed',
	  	includePaths: config.bootstrapDir
	  }).on('error', sass.logError))
	  .pipe(sourcemaps.write())
	  .pipe(gulp.dest(config.distDir));
	});

// UGLIFY -----------------------------------	
	gulp.task('compress', function () {
	  return gulp.src(config.sourceDir + '/**/*.js')
	  	.pipe(uglify())
	  	.pipe(gulp.dest(config.distDir));
	});

	gulp.task('fonts', function() {
	    return gulp.src(config.bootstrapDir + '/assets/fonts/**/*')
	    .pipe(gulp.dest(config.publicDir + '/fonts'));
	});


// Listen for file changes
	gulp.task('watch', ['default'], function () {
	    gulp.watch([config.sourceDir, 'gulpfile.js']).on('change', function (ev) {
	        gulp.start('default');
	    });
	});

	gulp.task('default', [
		'sass', 
		'fonts',
		'compress'
	]);

/*
gulp.task('default', function (cb) {
	runSequence(
		[
			'sass', 
			'fonts',
			'compress'
		],
		cb
	);
});
*/