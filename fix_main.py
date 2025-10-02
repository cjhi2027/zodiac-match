import re

# main.ts 읽기
with open('src/main.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# 정규식으로 변경
pattern = r'(\s+)basic: "(.*?)",\s+caution: "(.*?)",\s+dateRecommendation: "(.*?)"'

def replace_func(match):
    indent = match.group(1)
    basic = match.group(2).replace('"', '\\"')
    caution = match.group(3).replace('"', '\\"')
    date = match.group(4).replace('"', '\\"')
    
    return f'''{indent}basic: {{
{indent}  summary: "요약 추가 필요",
{indent}  description: "{basic}"
{indent}}},
{indent}caution: {{
{indent}  summary: "요약 추가 필요",
{indent}  description: "{caution}"
{indent}}},
{indent}dateRecommendation: {{
{indent}  summary: "요약 추가 필요",
{indent}  description: "{date}"
{indent}}}'''

content = re.sub(pattern, replace_func, content, flags=re.DOTALL)

# main.ts 쓰기
with open('src/main.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("main.ts 변경 완료!")

