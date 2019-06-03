import postcss from "rollup-plugin-postcss";

import simplevars from "postcss-simple-vars";
import nested from "postcss-nested";
import cssnext from "postcss-cssnext";
import server from "rollup-plugin-dev-server";
import tailwind from "rollup-plugin-tailwind";

export default {
  input: "src/js/main.js",
  output: {
    file: "dest/bundle.js",
    format: "cjs"
  },
  plugins: [
    server("dest"),
    postcss({
      extensions: [".css"],
      plugins: [simplevars, nested, cssnext],
      extract: true,
      modules: true,
      config: {
        path: "./postcss.config.js"
      }
    })
  ]
};
