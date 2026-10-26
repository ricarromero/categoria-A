import os
import shutil
from PIL import Image

raw_dir = r"public\escudos\raw"
opt_dir = r"public\escudos"
os.makedirs(raw_dir, exist_ok=True)

# Mapeo de archivos originales a nombres canónicos
mapping = {
    "ANTORCHA.png": "antorcha.png",
    "ASTON.png": "aston.png",
    "C-LESION.png": "c_lesion.png",
    "CALISE.png": "calise.png",
    "CELTIC.png": "celtic.png",
    "CONSTRUCTORES.png": "constructores.png",
    "DE PRIMERA.png": "de_primera.png",
    "ECLIPSE.png": "eclipse.png",
    "JAGGER.png": "jagermeister.png",
    "LA MQUINA.png": "la_maquina.png",
    "MAVERICKS.png": "maverick.png",
    "MINASTER.png": "minaster_city.png",
    "NOTTI.png": "nottingham.png",
    "OTRO EQUIPO.png": "otro_equipo.png",
    "RED BULL.png": "red_bull.png",
}

for src_name, target_name in mapping.items():
    src_path = os.path.join(opt_dir, src_name)
    raw_dest = os.path.join(raw_dir, src_name)
    if os.path.exists(src_path) and not os.path.exists(raw_dest):
        shutil.copy2(src_path, raw_dest)
    
    # Procesar y redimensionar a máx 360x360 manteniendo aspecto
    if os.path.exists(raw_dest):
        im = Image.open(raw_dest)
        im.thumbnail((360, 360), Image.Resampling.LANCZOS)
        out_target = os.path.join(opt_dir, target_name)
        im.save(out_target, format="PNG", optimize=True)
        print(f"Optimizado: {src_name} -> {target_name} ({im.size[0]}x{im.size[1]}, {os.path.getsize(out_target)/1024:.1f} KB)")
