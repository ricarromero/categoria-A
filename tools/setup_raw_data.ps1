$dest = "c:\Users\Usuario\Desktop\DEV\CATEGORIA A\raw_data"
if (-not (Test-Path $dest)) { New-Item -ItemType Directory -Path $dest | Out-Null }

Write-Host "Copiando carpetas de Desktop..."
Copy-Item -Path "C:\Users\Usuario\Desktop\APERTURA" -Destination $dest -Recurse -Force
Copy-Item -Path "C:\Users\Usuario\Desktop\CLAUSURA" -Destination $dest -Recurse -Force
Copy-Item -Path "C:\Users\Usuario\Desktop\REGLAMENTOS" -Destination $dest -Recurse -Force

Write-Host "Copiando zips y referencias de Downloads..."
Copy-Item -Path "C:\Users\Usuario\Downloads\ESCUDOS.zip" -Destination $dest -Force
Copy-Item -Path "C:\Users\Usuario\Downloads\Liga Sanjuanina (Copy).html" -Destination $dest -Force
Copy-Item -Path "C:\Users\Usuario\Downloads\Liga Sanjuanina (Copy).md" -Destination $dest -Force

Write-Host "Descomprimiendo ESCUDOS.zip en public/escudos..."
$escudosDest = "c:\Users\Usuario\Desktop\DEV\CATEGORIA A\public\escudos"
if (-not (Test-Path $escudosDest)) { New-Item -ItemType Directory -Path $escudosDest | Out-Null }
Expand-Archive -Path "C:\Users\Usuario\Downloads\ESCUDOS.zip" -DestinationPath $escudosDest -Force

Write-Host "Descomprimiendo APERTURA.zip, CLAUSURA.zip, REGLAMENTOS.zip en raw_data para asegurar que no falte nada..."
Expand-Archive -Path "C:\Users\Usuario\Desktop\APERTURA.zip" -DestinationPath "$dest\APERTURA_ZIP" -Force
Expand-Archive -Path "C:\Users\Usuario\Desktop\CLAUSURA.zip" -DestinationPath "$dest\CLAUSURA_ZIP" -Force
Expand-Archive -Path "C:\Users\Usuario\Desktop\REGLAMENTOS.zip" -DestinationPath "$dest\REGLAMENTOS_ZIP" -Force

Write-Host "Listando todo en raw_data:"
Get-ChildItem -Path $dest -Recurse | Select-Object FullName, Length | Format-Table -AutoSize
