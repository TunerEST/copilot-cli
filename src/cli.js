#!/usr/bin/env node

/**
 * GitHub Copilot CLI
 * Main entry point for the command-line interface
 */

const { runCopilot } = require('./index');

async function main() {
  try {
    await runCopilot();
  } catch (error) {
    console.error('Error running Copilot CLI:', error.message);
    process.exit(1);
  }
}

main();
