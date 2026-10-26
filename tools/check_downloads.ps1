Get-ChildItem -Path "$HOME\Downloads" | Where-Object { 
    $_.Name -like "*APERTURA*" -or 
    $_.Name -like "*CLAUSURA*" -or 
    $_.Name -like "*REGLAMENTO*" -or 
    $_.Name -like "*ESCUDO*" -or 
    $_.Name -like "*Liga*" -or 
    $_.Name -like "*Sanjuanina*" -or 
    $_.Name -like "*drive*" 
} | Select-Object Name, Length, FullName | Format-Table -AutoSize
