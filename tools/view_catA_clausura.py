import json
import re

with open(r"raw_data\Liga Sanjuanina (Copy).html", "r", encoding="utf-8", errors="ignore") as f:
    text = f.read()

m = re.search(r"const DATA_BY_CAT\s*=\s*(\{.*?\});\s*(?:const|let|var)", text, re.DOTALL)
if m:
    data = json.loads(m.group(1))
    catA = data["A"]
    print("Cat A clausuraFechas:")
    print(json.dumps(catA.get("clausuraFechas", []), indent=2, ensure_ascii=False))
