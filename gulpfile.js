var gulp 				 = require("gulp"),
		less 				 = require("gulp-less"),
		browserSync  = require("browser-sync"),
		concat       = require("gulp-concat"),
		uglify       = require("gulp-uglifyjs"),
		cssnano      = require("gulp-cssnano"),
		rename       = require("gulp-rename"),
		del          = require("del"),
		imagemin		 =	require("gulp-imagemin"),
		pngquant		 = require("imagemin-pngquant"),
		cache				 = require("gulp-cache"),
		autoprefixer = require("gulp-autoprefixer"),
		plumber 		 = require("gulp-plumber");

gulp.task("less", function() {
	 return gulp.src("app/less/main.less")
	 	.pipe(plumber())
	 .pipe(less())
	 .pipe(autoprefixer(["last 15 versions"], {cascade: true}))
	 .pipe(gulp.dest("app/css"))
	 .pipe(browserSync.reload({stream: true}));
});



gulp.task("scripts", function() {
	return gulp.src([
			//подключаем минифицированные файлы библиотек из dist
		])
	.pipe(concat("libs.min.js"))
	.pipe(uglify())
	.pipe(gulp.dest("app/js"));
});

gulp.task("css-libs", ["less"], function() {
	return gulp.src("app/css/libs.css")
	.pipe(cssnano())
	.pipe(rename({suffix: ".min"}))
	.pipe(gulp.dest("app/css"));
});

gulp.task("clean", function() {
	return del.sync("dist");
});

//чистим кэш от картинок вручную
gulp.task("clear", function() {
	return cache.clearAll();
});

gulp.task("img", function() {
	return gulp.src("app/img/**/*")
	.pipe(cache(imagemin({
		interlaced: true,
		progressive: true,
		svgoPlugins: [{removeVieBox: false}],
		une: [pngquant()]
	})))
	.pipe(gulp.dest("dist/img"));
});

gulp.task("watch", ["browser-sync", "css-libs", "scripts"], function() {
	gulp.watch("app/less/**/*.less", ["less"]);
	gulp.watch("app/*.html", browserSync.reload);
	gulp.watch("app/js/**/*.js", browserSync.reload);
});

gulp.task("browser-sync", function() {
	browserSync({
		server: {
			baseDir: "app"
		}
	});
});

gulp.task("build", ["clean", "img", "less", "scripts"], function() {

	var buildCss = gulp.src([
		"app/css/main.css",
		"app/css/libs.min.css",
	])
	.pipe(gulp.dest("dist/css"));

	var buildFonts = gulp.src("app/fonts/**/*")
	.pipe(gulp.dest("dist/fonts"));

	var buildJs = gulp.src("app/js/**/*")
	.pipe(gulp.dest("dist/js"));

	var buildHtml = gulp.src("app/*.html")
	.pipe(gulp.dest("dist"));

});