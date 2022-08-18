module.exports = {
  '*.{js,jsx,ts,tsx}': () => 'npm run lint',
  '*.{ts,tsx}': () => 'tsc -p tsconfig.json --noEmit',
}