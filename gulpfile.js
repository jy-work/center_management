const gulp = require("gulp");
const sourcemaps = require("gulp-sourcemaps");
const scss = require("gulp-sass")(require("sass"));
const nunjucksRender = require("gulp-nunjucks-render");
const browserSync = require("browser-sync").create();
const htmlbeautify = require("gulp-html-beautify");
const autoprefixer = require("autoprefixer");
const postcss = require("gulp-postcss");

const paths = {
    scss: "./src/style/scss/*.scss"
};

const PATH = {
    HTML: "./src/html/templates",
    ASSETS: {
        STYLE: "./src/style/scss"
    }
};

const scssOptions = {
    outputStyle: "expanded",
    indentType: "tab",
    indentWidth: 1,
    precision: 2,
    sourceComments: false
};

gulp.task("scss:compile", function () {
    return gulp
        .src(paths.scss)
        .pipe(sourcemaps.init())
        .pipe(scss(scssOptions).on("error", scss.logError))
        .pipe(postcss([autoprefixer()]))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("./src/style/css"))
        .pipe(browserSync.reload({
            stream: true
        }));
});


gulp.task("nunjucks-html", function () {
    return gulp.src("./src/html/templates/*")
        .pipe(
            nunjucksRender({
                path: [PATH.HTML]
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
        .pipe(gulp.dest("./src/html/dist"))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task("browserSync", function () {
    return browserSync.init({
            port: 8000,
            server: {
                baseDir: "./src/html/dist",
                directory: true
            }
        }),

        gulp.watch(paths.scss, gulp.series("scss:compile")),
        gulp.watch(PATH.HTML, gulp.series("nunjucks-html"));
});

gulp.task("watch", function () {
    gulp.watch(paths.scss, gulp.series("scss:compile"));
    gulp.watch(PATH.HTML, gulp.series("nunjucks-html"));
});

gulp.task("default",
    gulp.series([
        "scss:compile",
        "nunjucks-html",
        "browserSync",
        "watch"
    ])
);