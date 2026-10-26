import os
import glob
from PIL import Image

escudos = glob.glob(r"public\escudos\*.png")
print(f"Total escudos encontrados: {len(escudos)}")

for p in escudos:
    fname = os.path.basename(p)
    try:
        im = Image.open(p)
        print(f"{fname:<20} | Formato: {im.format} | Tamaño: {im.size} | Modo: {im.mode} | Peso: {os.path.getsize(p)/(1024*1024):.2f} MB")
    except Exception as e:
        print(f"{fname:<20} | ERROR: {e}")
