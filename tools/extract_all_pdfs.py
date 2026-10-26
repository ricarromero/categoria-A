import os
import glob
from pypdf import PdfReader

base_dir = r"c:\Users\Usuario\Desktop\DEV\CATEGORIA A\raw_data"
out_dir = os.path.join(base_dir, "extracted_text")
os.makedirs(out_dir, exist_ok=True)

sections = ["APERTURA", "CLAUSURA", "REGLAMENTOS"]

for sec in sections:
    sec_path = os.path.join(base_dir, sec)
    sec_out = os.path.join(out_dir, sec)
    os.makedirs(sec_out, exist_ok=True)
    
    pdf_files = glob.glob(os.path.join(sec_path, "*.pdf"))
    print(f"--- Procesando {sec} ({len(pdf_files)} PDFs) ---")
    for pdf_path in pdf_files:
        fname = os.path.basename(pdf_path)
        out_txt = os.path.join(sec_out, fname.replace(".pdf", ".txt"))
        try:
            reader = PdfReader(pdf_path)
            content = []
            for i, page in enumerate(reader.pages):
                text = page.extract_text() or ""
                content.append(f"=== PAGINA {i+1} ===\n" + text)
            full_text = "\n\n".join(content)
            with open(out_txt, "w", encoding="utf-8") as f:
                f.write(full_text)
            print(f"OK: {fname} -> {len(full_text)} caracteres")
        except Exception as e:
            print(f"ERROR: {fname} -> {e}")

print("\nExtraccion completada con exito.")
