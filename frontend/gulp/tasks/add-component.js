module.exports = function () {
    p.gulp.task("add-component", function (callback) {

        let name = p.gp.util.env.name
        if (name) {
            result = p.gulp.src(p.paths.addComponent.templateJs)
                .pipe(p.gp.replace("_template", name))
                .pipe(p.gp.replace("_class", name.toLowerCase()))
                .pipe(p.gp.rename(function (path) {
                    path.basename = name;
                }))
                .pipe(p.gulp.dest(p.paths.addComponent.result + name));

            result = p.gulp.src(p.paths.addComponent.templateScss)
                .pipe(p.gp.replace("_template", name))
                .pipe(p.gp.replace("_class", name.toLowerCase()))
                .pipe(p.gp.rename(function (path) {
                    path.basename = name + '.module';
                }))
                .pipe(p.gulp.dest(p.paths.addComponent.result + name));
        }
        callback()

    });
};