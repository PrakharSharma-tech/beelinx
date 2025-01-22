module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    extends: ["eslint:recommended", "plugin:react/recommended"],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12,
      sourceType: "module",
    },
    plugins: ["react"],
    rules: {
      // Rules for warnings and errors
      "no-console": process.env.NODE_ENV === "production" ? "off" : "warn", // Allow console logs in production
      "no-debugger": process.env.NODE_ENV === "production" ? "error" : "warn", // Disable debugger in production
      "no-unused-vars": process.env.NODE_ENV === "production" ? "warn" : "error", // Warn about unused variables in production
      "eqeqeq": process.env.NODE_ENV === "production" ? "off" : "warn", // Relax eqeqeq rule in production
      "react/no-unescaped-entities": process.env.NODE_ENV === "production" ? "off" : "warn", // Allow unescaped entities in production
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  };
  