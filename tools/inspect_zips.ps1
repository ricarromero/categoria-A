Add-Type -AssemblyName System.IO.Compression.FileSystem

Write-Host "=== Contenido de drive-download-20260915T005736Z-1-001.zip ==="
$zip1 = "$HOME\Downloads\drive-download-20260915T005736Z-1-001.zip"
if (Test-Path $zip1) {
    [System.IO.Compression.ZipFile]::OpenRead($zip1).Entries | Select-Object FullName, Length | Format-Table -AutoSize
}

Write-Host "=== Contenido de ESCUDOS.zip ==="
$zipEscudos = "$HOME\Downloads\ESCUDOS.zip"
if (Test-Path $zipEscudos) {
    [System.IO.Compression.ZipFile]::OpenRead($zipEscudos).Entries | Select-Object FullName, Length | Format-Table -AutoSize
}

Write-Host "=== Buscar APERTURA*.zip, CLAUSURA*.zip, REGLAMENTO*.zip ==="
Get-ChildItem -Path "$HOME" -Include "*APERTURA*","*CLAUSURA*","*REGLAMENTO*" -Recurse -Depth 4 -ErrorAction SilentlyContinue | Select-Object FullName, Length | Format-Table -AutoSize
