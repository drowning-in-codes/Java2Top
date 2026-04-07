$ErrorActionPreference = "Stop"

$mdFiles = Get-ChildItem -Path "e:\Java2Top\ProJava\docs-*" -Recurse -Filter "*.md"

foreach ($file in $mdFiles) {
    $content = Get-Content -Path $file.FullName -Raw -Encoding UTF8
    $modified = $false
    
    # Fix comparison operators like >= <= > < when not in code blocks
    # Pattern: number followed by comparison operator followed by number
    # We need to be careful not to break existing code blocks
    
    # Fix patterns like >=8, >=64, <64, >8, <=10 etc.
    # But not when they are already in backticks
    
    $patterns = @(
        @(">=8", " `>=8` "),
        @(">=64", " `>=64` "),
        @("<64", " `<64` "),
        @(">8", " `>8` "),
        @("<=10", " `<=10` "),
        @("<= ", " `<=` "),
        @(">= ", " `>=` "),
        @("< ", " `<` "),
        @("> ", " `>` ")
    )
    
    foreach ($pattern in $patterns) {
        $search = $pattern[0]
        $replace = $pattern[1]
        
        # Check if the pattern exists and is not already in backticks
        if ($content -match [regex]::Escape($search)) {
            # Simple replacement - this might need refinement
            $content = $content -replace [regex]::Escape($search), $replace
            $modified = $true
        }
    }
    
    if ($modified) {
        Set-Content -Path $file.FullName -Value $content -Encoding UTF8 -NoNewline
        Write-Host "Fixed: " $file.FullName
    }
}

Write-Host "Done!"
