with open(r"raw_data\Liga Sanjuanina (Copy).html", "r", encoding="utf-8", errors="ignore") as f:
    text = f.read()

import re

m = re.search(r"const DATA_BY_CAT\s*=\s*(\{.*?\});\s*(?:const|let|var)", text, re.DOTALL)
if m:
    data_str = m.group(1)
    print("Found DATA_BY_CAT json/js, length:", len(data_str))
    # parse or inspect keys
    import json
    try:
        data = json.loads(data_str)
        print("Keys of DATA_BY_CAT:", list(data.keys()))
        for cat in data:
            print(f"Cat {cat} keys:", list(data[cat].keys()))
            if "fixture" in data[cat]:
                print(f"Cat {cat} fixture keys:", list(data[cat]["fixture"].keys()))
                for f_torneo in data[cat]["fixture"]:
                    print(f"  {f_torneo} fechas:", len(data[cat]["fixture"][f_torneo]))
    except Exception as e:
        print("JSON parse error:", e)
else:
    print("Pattern not matched directly")
