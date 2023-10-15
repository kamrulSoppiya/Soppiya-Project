import alias from '@rollup/plugin-alias';
import image from "@rollup/plugin-image";
import terser from "@rollup/plugin-terser";
import path from "path";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import typescript from "rollup-plugin-typescript2";
import stringHash from "string-hash";

export default {
  input: ["./src/index.ts"],
  output: {
    dir: "dist",
    format: "esm",
    sourcemap: true,
    preserveModules: true,
    preserveModulesRoot: "src",
    // assetFileNames: 'assets/images/[name][extname]',
    entryFileNames: (chunkInfo) => {
      if (chunkInfo.name.includes("node_modules")) {
        return chunkInfo.name.replace("node_modules", "styles") + ".js";
      }

      return "[name].js";
    },
  },
  plugins: [
    peerDepsExternal(),
    alias({
      entries: [
        // eslint-disable-next-line no-undef
        { find: '@', replacement:  path.resolve(__dirname, "src")},
      ]
    }),
    typescript(),
    terser(),
    image(),
    postcss({
      minimize: true,
      modules: {
        generateScopedName: (name, filename, css) => {
          if (filename.includes("global")) {
            return name;
          }
          const hash = stringHash(css).toString(36).substring(0, 5);
          return `elementus_${name}_${hash}`;
        },
      },
    }),
  ],
  external: ["react-select"]
};
