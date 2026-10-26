import os
import glob
import re

apertura_files = sorted(glob.glob(r"raw_data\extracted_text\APERTURA\*.txt"))
print(f"Archivos Apertura encontrados: {len(apertura_files)}")
for f in apertura_files:
    print(os.path.basename(f))

clausura_files = sorted(glob.glob(r"raw_data\extracted_text\CLAUSURA\*.txt"))
print(f"\nArchivos Clausura encontrados: {len(clausura_files)}")
for f in clausura_files:
    print(os.path.basename(f))
