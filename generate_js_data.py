import json
import os

json_path = r"C:\xampp\htdocs\portfolio_projects_data.json"
js_path = r"C:\xampp\htdocs\portfolio\projects_data.js"

if not os.path.exists(json_path):
    print(f"Error: {json_path} does not exist.")
    exit(1)

with open(json_path, "r", encoding="utf-8") as f:
    data = json.load(f)

# Write to JavaScript file as a global variable
js_content = f"""// Automatically generated from portfolio_projects_data.json
// Contains {len(data)} projects
const projectsData = {json.dumps(data, indent=2)};
"""

with open(js_path, "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"Generated {js_path} successfully with {len(data)} projects.")
