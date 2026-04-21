#!/bin/bash

# MMS DESIGN SYSTEM - IRONCLAD AUDIT SCRIPT (V2 - Smart Filter)
# Purpose: Detect naked color primitives in the UI layer.

TARGET_DIR="./src/components/ui"
# Use word boundaries \b to avoid catching variable names like --black-a1
# But we DO want to catch 'white' when used as a value.
# Regex Explainer:
# [^--\-] avoids catching variables
# \b(white|black|red|blue|#...) avoids catching 'blue' inside 'blue-a3'
FORBIDDEN_TERMS=("(?<!-)\bwhite\b" "(?<!-)\bblack\b" "(?<!-)\bred\b" "(?<!-)\bblue\b" "(?<!-)\bgreen\b" "#[0-9a-fA-F]\{3,6\}")

echo "🛡️ Starting Ironclad Audit (V2)..."
echo "------------------------------------------------"

ERROR_FOUND=0

# Clean UI files excluding theme.css
FILES=$(find "$TARGET_DIR" -name "*.css")

for file in $FILES; do
    # Search for forbidden patterns that ARE NOT variable names
    # We look for terms that are NOT preceded by -- or -
    matches=$(grep -rnE "( |:)(white|black|red|blue|green|#[0-9a-fA-F]{3,6})(;|$)" "$file")
    
    if [ ! -z "$matches" ]; then
        echo "❌ FORBIDDEN PRIMITIVE FOUND in $(basename "$file"):"
        echo "$matches"
        ERROR_FOUND=1
    fi
done

echo "------------------------------------------------"
if [ $ERROR_FOUND -eq 0 ]; then
    echo "✅ AUDIT PASSED: Zero naked primitives detected in UI layer."
    exit 0
else
    echo "🚨 AUDIT FAILED: Please replace primitives with semantic tokens."
    exit 1
fi
