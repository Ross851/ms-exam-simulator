#!/bin/bash
# Script to copy documentation files to a new repository
# Usage: ./copy-docs-to-new-repo.sh /path/to/target/repository

if [ "$#" -ne 1 ]; then
    echo "Usage: $0 /path/to/target/repository"
    echo "Example: $0 ~/sefirst-portal-monitoring"
    exit 1
fi

TARGET_DIR="$1"

if [ ! -d "$TARGET_DIR" ]; then
    echo "Error: Target directory does not exist: $TARGET_DIR"
    echo "Please create and clone the target repository first."
    exit 1
fi

echo "Copying documentation files to: $TARGET_DIR"

# List of files to copy (only the documentation files created by copilot)
FILES=(
    ".gitignore"
    "CODE_OF_CONDUCT.md"
    "CONTRIBUTING.md"
    "LICENSE"
    "README.md"
)

# Copy each file
for file in "${FILES[@]}"; do
    if [ -f "$file" ]; then
        cp -v "$file" "$TARGET_DIR/"
        echo "✓ Copied: $file"
    else
        echo "✗ Not found: $file"
    fi
done

echo ""
echo "Files copied successfully!"
echo ""
echo "Next steps:"
echo "1. cd $TARGET_DIR"
echo "2. git add ."
echo "3. git commit -m 'Add repository documentation files'"
echo "4. git push origin main"
