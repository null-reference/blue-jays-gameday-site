# Team Logo Resizer

This script resizes all team logos from 300x300 to 64x64 pixels.

## Usage

Run the script using npm:

```bash
npm run resize-logos
```

Or directly with ts-node:

```bash
npx ts-node --project scripts/tsconfig.json scripts/resize-logos/index.ts
```

## What it does

1. Reads all PNG files from `/public/team-logos/`
2. Resizes each logo to 64x64 pixels while maintaining aspect ratio
3. Converts them to PNG format with transparent background
4. Saves the resized images to `/scripts/resize-logos/output/`
5. Renames files from `*-300x300.png` to `*-64x64.png`

## Output

The resized logos will be saved in the `output` directory with filenames like:

- `bluejays-64x64.png`
- `yankees-64x64.png`
- etc.

## Dependencies

- `sharp` - Fast image processing library for Node.js
- `ts-node` - TypeScript execution environment for Node.js

## Requirements

- Node.js and npm
- TypeScript configuration with `esModuleInterop: true` (handled by scripts/tsconfig.json)

## Notes

The script automatically creates the output directory if it doesn't exist and provides detailed progress output during processing.
