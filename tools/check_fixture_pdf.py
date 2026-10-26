from pypdf import PdfReader
reader = PdfReader(r"raw_data\REGLAMENTOS\FIXTURE CLAUSURA 2026.pdf")
print("Num pages:", len(reader.pages))
for i, p in enumerate(reader.pages):
    print(f"Page {i+1} text length:", len(p.extract_text() or ""))
    print(f"Page {i+1} images:", len(p.images))
