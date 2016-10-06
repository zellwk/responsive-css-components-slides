const gulp = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const sourcemaps = require('gulp-sourcemaps')
const browserSync = require('browser-sync').create()

// Compiles sass into css
gulp.task('sass', () => {
  return gulp.src('./scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      includePaths: ['./node_modules']
    }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css/'))
    .pipe(browserSync.reload({stream:true}));
})

gulp.task('browser-sync', () => {
  browserSync.init({
      server: './',
      open: false
  })
})

gulp.task('watch', ['sass'], () => {
  gulp.watch('**/*.html', browserSync.reload)
  gulp.watch('**/*.js', browserSync.reload)
  gulp.watch('**/*.scss', ['sass'])
})

gulp.task('default', ['watch', 'browser-sync'])