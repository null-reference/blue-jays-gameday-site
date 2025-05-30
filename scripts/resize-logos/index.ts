/* eslint-disable no-console */
import * as fs from 'fs';
import * as path from 'path';
import sharp from 'sharp';

const INPUT_DIR = path.resolve(__dirname, '../../public/team-logos');
const OUTPUT_DIR = path.resolve(__dirname, 'output');
const TARGET_SIZE = 64;

interface ProcessingResult {
  success: boolean;
  inputFile: string;
  outputFile: string;
  error?: string;
}

async function ensureOutputDirectory(): Promise<void> {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    console.log(`✓ Created output directory: ${OUTPUT_DIR}`);
  } else {
    console.log(`✓ Output directory already exists: ${OUTPUT_DIR}`);
  }
}

async function resizeLogo(
  inputFilePath: string,
  outputFilePath: string,
): Promise<ProcessingResult> {
  try {
    await sharp(inputFilePath)
      .resize(TARGET_SIZE, TARGET_SIZE, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }, // transparent background
      })
      .png() // convert to PNG to maintain transparency
      .toFile(outputFilePath);

    return {
      success: true,
      inputFile: path.basename(inputFilePath),
      outputFile: path.basename(outputFilePath),
    };
  } catch (error) {
    return {
      success: false,
      inputFile: path.basename(inputFilePath),
      outputFile: path.basename(outputFilePath),
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

function generateOutputFileName(inputFileName: string): string {
  // Replace "300x300" with "64x64" in the filename
  return inputFileName.replace('-300x300.png', '-64x64.png');
}

async function processAllLogos(): Promise<void> {
  console.log('🏈 Starting team logo resize process...\n');

  try {
    // Ensure output directory exists
    await ensureOutputDirectory();

    // Read all files from input directory
    const files = fs.readdirSync(INPUT_DIR);
    const logoFiles = files.filter((file) => file.endsWith('.png'));

    if (logoFiles.length === 0) {
      console.log('❌ No PNG files found in the input directory.');
      return;
    }

    console.log(`📁 Found ${logoFiles.length} logo files to process:`);
    logoFiles.forEach((file) => console.log(`   - ${file}`));
    console.log('');

    const results: ProcessingResult[] = [];

    // Process each logo file
    for (let i = 0; i < logoFiles.length; i++) {
      const file = logoFiles[i];
      const inputFilePath = path.join(INPUT_DIR, file);
      const outputFileName = generateOutputFileName(file);
      const outputFilePath = path.join(OUTPUT_DIR, outputFileName);

      console.log(`[${i + 1}/${logoFiles.length}] Processing: ${file} → ${outputFileName}`);

      const result = await resizeLogo(inputFilePath, outputFilePath);
      results.push(result);

      if (result.success) {
        console.log(`   ✅ Successfully resized to ${TARGET_SIZE}x${TARGET_SIZE}`);
      } else {
        console.log(`   ❌ Failed: ${result.error}`);
      }
    }

    // Summary
    console.log('\n📊 Processing Summary:');
    console.log('='.repeat(50));

    const successful = results.filter((r) => r.success);
    const failed = results.filter((r) => !r.success);

    console.log(`✅ Successfully processed: ${successful.length}`);
    console.log(`❌ Failed: ${failed.length}`);
    console.log(`📁 Output directory: ${OUTPUT_DIR}`);

    if (failed.length > 0) {
      console.log('\n❌ Failed files:');
      failed.forEach((result) => {
        console.log(`   - ${result.inputFile}: ${result.error}`);
      });
    }

    console.log('\n🎉 Resize process completed!');
  } catch (error) {
    console.error('💥 Fatal error during processing:', error);
    process.exit(1);
  }
}

// Run the script immediately
processAllLogos().catch((error) => {
  console.error('💥 Unhandled error:', error);
  process.exit(1);
});

export { processAllLogos };
