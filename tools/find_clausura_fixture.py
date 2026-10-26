with open(r"raw_data\Liga Sanjuanina (Copy).html", "r", encoding="utf-8", errors="ignore") as f:
    text = f.read()

# Buscar fixture clausura
idx = text.find('"clausura"')
if idx != -1:
    print("Found 'clausura' around:", idx)
    print(text[idx:idx+1500])
else:
    print("Not found 'clausura'")
