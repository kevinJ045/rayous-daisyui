/** @type {import('tailwindcss').Config} */
module.exports = {
  "content": [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  "theme": {
    "extend": {}
  },
  "daisyui": {
    "themes": ["night"]
  },
  "plugins": [
    require('daisyui')
  ]
}