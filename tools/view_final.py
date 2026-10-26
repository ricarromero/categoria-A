import os
import glob

files = glob.glob(r"raw_data\extracted_text\APERTURA\*FINAL*.txt")
for p in files:
    print("="*60)
    print("ARCHIVO:", os.path.basename(p))
    print("="*60)
    with open(p, "r", encoding="utf-8", errors="ignore") as f:
        print(f.read())
