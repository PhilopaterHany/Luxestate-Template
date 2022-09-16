const gulp = require("gulp");
const pug = require("gulp-pug");
const autoprefixer = require("gulp-autoprefixer");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const livereload = require("gulp-livereload");
const notify = require("gulp-notify");

gulp.task("html", function () {
    return gulp
        .src("src/pug/index.pug")
        .pipe(pug())
        .pipe(gulp.dest("dist"))
        .pipe(notify("Pug Has Been Compiled & Minified Successfully!"))
        .pipe(livereload());
});

gulp.task("css", function () {
    return gulp
        .src("src/sass/main.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
        .pipe(autoprefixer("last 2 versions"))
        .pipe(sourcemaps.write(".", { includeContent: false }))
        .pipe(gulp.dest("dist/css"))
        .pipe(notify("SCSS Has Been Compiled & Minified Successfully!"))
        .pipe(livereload());
});

gulp.task("js", function () {
    return gulp
        .src("src/js/*")
        .pipe(sourcemaps.init())
        .pipe(concat("master.js"))
        .pipe(uglify())
        .pipe(sourcemaps.write(".", { includeContent: false }))
        .pipe(gulp.dest("dist/js"))
        .pipe(
            notify("Javascript Has Been Concatenated & Minified Successfully!")
        )
        .pipe(livereload());
});

gulp.task("default", function () {
    require("./server.js");
    livereload.listen();
    gulp.watch("src/pug/**/*", gulp.series("html"));
    gulp.watch("src/sass/**/*", gulp.series("css"));
    gulp.watch("src/js/*", gulp.series("js"));
});
