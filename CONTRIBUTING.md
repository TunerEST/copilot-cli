# Contributing to GitHub Copilot CLI

Thank you for your interest in contributing to GitHub Copilot CLI!

## Development Setup

### Prerequisites

- Node.js v22 or higher
- npm v10 or higher

### Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/TunerEST/copilot-cli.git
   cd copilot-cli
   ```

2. Install dependencies (when they are added):
   ```bash
   npm install
   ```

3. Build the project:
   ```bash
   npm run build
   ```

4. Run the CLI locally:
   ```bash
   npm start
   ```
   
   Or directly:
   ```bash
   node dist/cli.js
   ```

### Project Structure

- `src/` - Source code files
  - `cli.js` - CLI entry point
  - `index.js` - Core functionality
- `dist/` - Built files (generated, not committed to git)
- `.github/` - GitHub workflows and templates
- `README.md` - Main documentation
- `CONTRIBUTING.md` - This file

### Scripts

- `npm run build` - Build the project (copies source files to dist)
- `npm test` - Run tests (currently runs the CLI)
- `npm start` - Run the CLI

### Development Workflow

1. Make your changes in the `src/` directory
2. Build the project: `npm run build`
3. Test your changes: `npm test`
4. Commit your changes following conventional commit format

## Feedback

For feedback and bug reports, please open an issue in this repository.
