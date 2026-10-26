$paths = @(
    "C:\Users\Usuario\Desktop",
    "C:\Users\Usuario\Desktop\DEV",
    "C:\Users\Usuario\Desktop\DEV\LIGA UNIVERSITARIA",
    "C:\Users\Usuario\Downloads",
    "C:\Users\Usuario\Documents"
)

foreach ($p in $paths) {
    if (Test-Path $p) {
        Write-Host "Checking: $p"
        Get-ChildItem -Path $p -Depth 1 | Where-Object { 
            $_.Name -like "*APERTURA*" -or 
            $_.Name -like "*CLAUSURA*" -or 
            $_.Name -like "*REGLAMENTO*" -or 
            $_.Name -like "*Liga*" -or 
            $_.Name -like "*ESCUDO*"
        } | Select-Object FullName, Length | Format-Table -AutoSize
    }
}
