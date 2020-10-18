const fs = require("fs");
const path = require("path");
const replace = require("replace-in-file");
const escapeRegExp = require("lodash.escaperegexp");

// the directory in which you're outputting your build
let baseDir = "dist";
let enDir = "dist/en";
// the name for the directory where your static files will be moved to
let staticDir = "assets/images";
// the directory where your built files (css and JavaScript) will be moved  to
let assetsDir = "assets";

// same for the assetsDir directory
if (!fs.existsSync(path.join(__dirname, baseDir, assetsDir))) {
    fs.mkdirSync(path.join(__dirname, baseDir, assetsDir));
}

// if the staticDir directory isn't there, create it
if (!fs.existsSync(path.join(__dirname, baseDir, staticDir))) {
    fs.mkdirSync(path.join(__dirname, baseDir, staticDir));
}

// Loop through the baseDir directory
fs.readdir(`./${baseDir}`, (err, files) => {
    // store all files in custom arrays by type
    let html = [];
    let js = [];
    let css = [];
    let maps = [];
    let staticAssets = [];

    files.forEach((file) => {
        // first HTML files
        if (file.match(/.+\.(html)$/)) {
            console.log("html match", file);
            html.push(file);
        } else if (file.match(/.+\.(js)$/)) {
            // then JavaScripts
            js.push(file);
        } else if (file.match(/.+\.(map)$/)) {
            // then CSS
            maps.push(file);
        } else if (file.match(/.+\.(css)$/)) {
            // then sourcemaps
            css.push(file);
        } else if (file.match(/.+\..+$/)) {
            // all other files, exclude current directory and directory one level up
            staticAssets.push(file);
        }
    });
    // check what went where
    console.log("html", html, "css", css, "js", js, "staticAssets", staticAssets);

    // create an array for all compiled assets
    let assets = css.concat(js).concat(maps);

    // replace all other resources in html
    html.forEach((file) => {
        staticAssets.forEach((name) => {
            let options = {
                files: path.join(baseDir, file),
                from: new RegExp(escapeRegExp(name), "g"),
                to: staticDir + "/" + name,
            };
            try {
                let changedFiles = replace.sync(options);
                console.log("Modified files:", changedFiles.join(", "));
            } catch (error) {
                console.error("Error occurred:", error);
            }
        });
        assets.forEach((name) => {
            let options = {
                files: path.join(baseDir, file),
                from: new RegExp(escapeRegExp(name), "g"),
                to: assetsDir + "/" + name,
            };
            try {
                let changedFiles = replace.sync(options);
                console.log("Modified files:", changedFiles.join(", "));
            } catch (error) {
                console.error("Error occurred:", error);
            }
        });
    });

    // replace map links in js
    js.forEach((file) => {
        maps.forEach((name) => {
            let options = {
                files: path.join(baseDir, file),
                from: name,
                to: "../" + assetsDir + "/" + name,
            };
            try {
                let changedFiles = replace.sync(options);
                console.log("Modified files:", changedFiles.join(", "));
            } catch (error) {
                console.error("Error occurred:", error);
            }
        });
    });

    // replace links in css
    css.forEach((file) => {
        staticAssets.forEach((name) => {
            let options = {
                files: path.join(baseDir, file),
                from: new RegExp(escapeRegExp(name), "g"),
                to: "../" + staticDir + "/" + name,
            };
            try {
                let changedFiles = replace.sync(options);
                console.log("Modified files:", changedFiles.join(", "));
            } catch (error) {
                console.error("Error occurred:", error);
            }
        });
    });

    // move js and css and maps
    assets.forEach((name) => {
        fs.rename(path.join(__dirname, baseDir, name), path.join(__dirname, baseDir, assetsDir, name), function (err) {
            if (err) throw err;
            console.log(`Successfully moved ${name}`);
        });
    });
    // move staticAssets
    staticAssets.forEach((name) => {
        fs.rename(path.join(__dirname, baseDir, name), path.join(__dirname, baseDir, staticDir, name), function (err) {
            if (err) throw err;
            console.log(`Successfully moved ${name}`);
        });
    });
});

fs.readdir(`./${enDir}`, (err, files) => {
    let enhtml = [];
    let fromtoRegExp = [
        { from: '(src=")([^ ]+.js")', to: `$1../${assetsDir}/$2` },
        { from: '(href=")([^ ]+.css")', to: `$1../${assetsDir}/$2` },
        { from: '(src=")([^ ]+.png")', to: `$1../${staticDir}/$2` },
        { from: '(src=")([^ ]+.svg")', to: `$1../${staticDir}/$2` },
        { from: '(src=")([^ ]+.jpg")', to: `$1../${staticDir}/$2` },
        { from: '(href=")([^ ]+.ico")', to: `$1../${staticDir}/$2` },
        { from: '(srcset=")([^ ]+.webp")', to: `$1../${staticDir}/$2` },
        { from: '(srcset=")([^ ]+.jpg")', to: `$1../${staticDir}/$2` },
        { from: '(srcset=")([^ ]+.png")', to: `$1../${staticDir}/$2` },
        { from: '(href=")en/([^ ]+.html)', to: "$1$2" },
        { from: '(<a class="nav-link" href=")([^ ]+.html" aria-label="Turkish">TR <span class="sr-only">Turkish version</span></a>)', to: "$1../$2" },
        { from: '(href=")(pdf/[^ ]+.pdf")', to: "$1../$2" },
    ];

    files.forEach((file) => {
        if (file.match(/.+\.(html)$/)) {
            console.log("html match", file);
            enhtml.push(file);
        }
    });

    console.log("html:", enhtml);

    enhtml.forEach((file) => {
        fromtoRegExp.forEach((reg) => {
            let options = {
                files: path.join(enDir, file),
                from: new RegExp(reg.from, "g"),
                to: reg.to,
            };
            try {
                let changedFiles = replace.sync(options);
                console.log("FROM: ", reg.from, "--> TO: ", reg.to);
                console.log("Modified files:", changedFiles.join(", "));
            } catch (error) {
                console.error("Error occurred:", error);
            }
        });
    });
});
