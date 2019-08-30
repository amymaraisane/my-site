const imagemin = require("imagemin"),    // The imagemin module.
  imageminWebp = require("imagemin-webp"),   // imagemin's WebP plugin.
  // outputFolder = "./images",            // Output folder
  Images = "./public/imgs/*{.png}";       // PNG images

(async () => {
  const files = await imagemin([Images], {
    destination: "./public/images",
    plugins: [imageminWebp()],
  });

  console.log(files);
})();