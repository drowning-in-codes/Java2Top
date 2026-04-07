$ErrorActionPreference = "Stop"

$mdFiles = Get-ChildItem -Path "e:\Java2Top\ProJava\docs-*" -Recurse -Filter "*.md"

foreach ($file in $mdFiles) {
    $content = Get-Content -Path $file.FullName -Raw -Encoding UTF8
    $modified = $false
    
    # Fix <br> tags - replace with <br />
    if ($content -match "<br>") {
        $content = $content -replace "<br>", "<br />"
        $modified = $true
    }
    
    # Fix <计算机网络> and similar tags - escape them
    if ($content -match "<计算机网络>") {
        $content = $content -replace "<计算机网络>", "\<计算机网络\>"
        $modified = $true
    }
    
    if ($modified) {
        Set-Content -Path $file.FullName -Value $content -Encoding UTF8 -NoNewline
        Write-Host "Fixed: " $file.FullName
    }
}

Write-Host "Done!"
