import glob
import re
import os

files = sorted(glob.glob(r"raw_data\extracted_text\APERTURA\RESUMEN *FECHA.txt"))

for f in files:
    print("="*50)
    print("ARCHIVO:", os.path.basename(f))
    with open(f, "r", encoding="utf-8", errors="ignore") as fp:
        lines = fp.readlines()
        for l in lines[:15]:
            l_str = l.strip()
            if l_str.startswith("Zona") or l_str.startswith("Interzonal") or "vs" in l_str:
                print("  ", l_str)
