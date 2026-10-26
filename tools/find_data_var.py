with open(r"raw_data\Liga Sanjuanina (Copy).html", "r", encoding="utf-8", errors="ignore") as f:
    text = f.read()

import re

matches = [m.start() for m in re.finditer(r"DATA_BY_CAT\s*=", text)]
print("DATA_BY_CAT positions:", matches)

if matches:
    pos = matches[0]
    print(text[pos:pos+1000])

# Buscar si hay BIANCONERI, WAIHEKE, SAN BIRRENCE etc
print("Has BIANCONERI:", "BIANCONERI" in text)
print("Has ANTORCHA:", "ANTORCHA" in text)
