var gulp = require("gulp");

gulp.task('move-html',function(){
	return gulp.src('./index.html')
	.pipe(gulp.dest('./project/'))
});

gulp.task('background',function(){
	gulp.watch('./index.html',['move-html']);
});