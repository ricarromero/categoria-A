import os

def print_summary(path):
    print("="*60)
    print("ARCHIVO:", os.path.basename(path))
    print("="*60)
    with open(path, "r", encoding="utf-8", errors="ignore") as f:
        lines = f.readlines()
        for line in lines[:45]:
            print(line.rstrip())

print_summary(r"raw_data\extracted_text\APERTURA\RESUMEN 9nA FECHA.txt")
print_summary(r"raw_data\extracted_text\APERTURA\RESUMEN CUARTOS DE FINALES APERTURA.txt")
print_summary(r"raw_data\extracted_text\APERTURA\RESUMEN FINAL Y 3 PUESTO APERTURA.txt")
