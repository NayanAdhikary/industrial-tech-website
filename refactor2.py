import os
import re

def replace_colors(directory):
    replacements = [
        # Teal RGBA to variables
        (r"(?i)rgba\(\s*100\s*,\s*238\s*,\s*220\s*,\s*0\.05\s*\)", "var(--color-primary-alpha-5)"),
        (r"(?i)rgba\(\s*100\s*,\s*238\s*,\s*220\s*,\s*0\.1\s*\)", "var(--color-primary-alpha-10)"),
        (r"(?i)rgba\(\s*100\s*,\s*238\s*,\s*220\s*,\s*0\.15\s*\)", "var(--color-teal-glow)"),
        (r"(?i)rgba\(\s*100\s*,\s*238\s*,\s*220\s*,\s*0\.2\s*\)", "var(--color-primary-alpha-20)"),
        (r"(?i)rgba\(\s*100\s*,\s*238\s*,\s*220\s*,\s*0\.25\s*\)", "var(--color-teal-glow)"),
        (r"(?i)rgba\(\s*100\s*,\s*238\s*,\s*220\s*,\s*0\.3\s*\)", "var(--color-primary-alpha-30)"),
        (r"(?i)rgba\(\s*100\s*,\s*238\s*,\s*220\s*,\s*0\.35\s*\)", "var(--color-primary-alpha-30)"),
        (r"(?i)rgba\(\s*100\s*,\s*238\s*,\s*220\s*,\s*0\.4\s*\)", "var(--color-primary-alpha-40)"),
        (r"(?i)rgba\(\s*100\s*,\s*238\s*,\s*220\s*,\s*0\.5\s*\)", "var(--color-primary-alpha-50)"),
        (r"(?i)rgba\(\s*100\s*,\s*238\s*,\s*220\s*,\s*0\.7\s*\)", "var(--color-primary-alpha-70)"),

        # Replace remaining #000 in button styles and other contexts
        # mostly primary buttons used #000 for text, so --color-on-primary is correct.
        (r"(?i)'#000'", "'var(--color-on-primary)'"),
        (r'(?i)"#000"', '"var(--color-on-primary)"'),

        # Replace black transparent backgrounds with surface
        (r"(?i)rgba\(\s*0\s*,\s*0\s*,\s*0\s*,\s*0\.7\s*\)", "var(--color-surface)"),
        (r"(?i)rgba\(\s*0\s*,\s*0\s*,\s*0\s*,\s*0\.8\s*\)", "var(--color-surface)"),
        
        # Replace white transparent lines with muted border
        (r"(?i)rgba\(\s*255\s*,\s*255\s*,\s*255\s*,\s*0\.25\s*\)", "var(--color-border-muted)"),
    ]

    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith('.jsx') or file.endswith('.js') or file.endswith('.tsx'):
                filepath = os.path.join(root, file)
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()

                new_content = content
                for pattern, replacement in replacements:
                    new_content = re.sub(pattern, replacement, new_content)

                if new_content != content:
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print(f"Updated {filepath}")

if __name__ == '__main__':
    replace_colors('src')
