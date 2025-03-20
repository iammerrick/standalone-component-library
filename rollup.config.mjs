import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";

export default {
  input: "src/index.ts",
  output: {
    file: "dist/index.js",
    format: "es",
    sourcemap: true,
  },

  plugins: [
    replace({
      preventAssignment: true,
      values: {
        "process.env.NODE_ENV": JSON.stringify("production"),
      },
    }),
    resolve(),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.json",
      sourceMap: true,
      declaration: true,
      outDir: "dist",
      declarationDir: "dist",
    }),
  ],
};
