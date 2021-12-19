const gulp = require("gulp");
const sourcemaps = require("gulp-sourcemaps");
const scss = require("gulp-sass")(require("sass"));
const nunjucksRender = require("gulp-nunjucks-render");
const browserSync = require("browser-sync").create();
const htmlbeautify = require("gulp-html-beautify");
const autoprefixer = require("autoprefixer");
const postcss = require("gulp-postcss");

const PATH = {
    NUNJUCKS: "./src/html/templates",
    HTML: "./src/html/dist",
    SCSS: "./src/style/scss",
    CSS: "./src/style/css"
};

const scssOptions = {
    outputStyle: "expanded",
    indentType: "tab",
    indentWidth: 1,
    precision: 2,
    sourceComments: false
};

gulp.task("scss:compile", function () {
    return gulp.src("src/style/scss/*")
        .pipe(sourcemaps.init())
        .pipe(scss(scssOptions).on("error", scss.logError))
        .pipe(postcss([autoprefixer()]))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(PATH.CSS))
        .pipe(browserSync.reload({
            stream: true
        }));
});


gulp.task("nunjucks-html", function () {
    return gulp.src("src/html/templates/*")
        .pipe(
            nunjucksRender({
                path: [PATH.NUNJUCKS]
            })
        )
        .pipe(htmlbeautify({
            "indent_size": 4,
            "indent_char": " ",
            "eol": "\n",
            "indent_level": 0,
            "indent_with_tabs": true,
            "preserve_newlines": true,
            "max_preserve_newlines": 10,
            "jslint_happy": true,
            "space_after_anon_function": false,
            "brace_style": "collapse",
            "keep_array_indentation": false,
            "keep_function_indentation": false,
            "space_before_conditional": true,
            "break_chained_methods": false,
            "eval_code": false,
            "unescape_strings": false,
            "wrap_line_length": 0,
            "wrap_attributes": "auto",
            "wrap_attributes_indent_size": 4,
            "end_with_newline": false
        }))
        .pipe(gulp.dest(PATH.HTML))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task("browserSync", function () {
    return browserSync.init({
            port: 8000,
            server: {
                baseDir: PATH.HTML,
                directory: true
            }
        }),

        gulp.watch(PATH.SCSS, gulp.series("scss:compile")),
        gulp.watch(PATH.NUNJUCKS, gulp.series("nunjucks-html"));
});

gulp.task("watch", function () {
    gulp.watch(PATH.SCSS, gulp.series("scss:compile"));
    gulp.watch(PATH.NUNJUCKS, gulp.series("nunjucks-html"));
});

gulp.task("default",
    gulp.series([
        "scss:compile",
        "nunjucks-html",
        "browserSync",
        "watch"
    ])
);
