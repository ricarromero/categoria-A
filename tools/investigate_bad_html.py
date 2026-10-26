with open(r"C:\Users\Usuario\Downloads\Liga_Universitaria_Categoria_A_2026_CORREGIDA.html", "r", encoding="utf-8", errors="ignore") as f:
    text = f.read()

print("Length:", len(text))
idx = text.find("<script")
if idx != -1:
    print("Script found at:", idx)
    print("Script start snippet:")
    print(text[idx:idx+800])
else:
    print("No script tag found!")
