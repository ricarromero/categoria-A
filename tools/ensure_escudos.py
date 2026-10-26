import os
import shutil

p = r"public\escudos"
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
    "RED BULL.png": "red_bull.png"
}

for src, target in mapping.items():
    src_f = os.path.join(p, src)
    dst_f = os.path.join(p, target)
    if os.path.exists(dst_f):
        print(f"Existe: {target} ({os.path.getsize(dst_f)/1024:.1f} KB)")
    elif os.path.exists(src_f):
        shutil.copy2(src_f, dst_f)
        print(f"Copiado: {src} -> {target}")
