import os
import re

def replace_colors(directory):
    replacements = [
        (r"(?i)'#131313'", "'var(--color-surface)'"),
        (r'(?i)"#131313"', '"var(--color-surface)"'),
        (r"(?i)'#09090b'", "'var(--color-background)'"),
        (r'(?i)"#09090b"', '"var(--color-background)"'),
        (r"(?i)'#ffffff'", "'var(--color-on-surface)'"),
        (r'(?i)"#ffffff"', '"var(--color-on-surface)"'),
        (r"(?i)'#fff'", "'var(--color-on-surface)'"),
        (r'(?i)"#fff"', '"var(--color-on-surface)"'),
        (r"(?i)'#a1a1aa'", "'var(--color-on-surface-variant)'"),
        (r'(?i)"#a1a1aa"', '"var(--color-on-surface-variant)"'),
        (r"(?i)'rgba\(255,\s*255,\s*255,\s*0\.05\)'", "'var(--color-border-muted)'"),
        (r'(?i)"rgba\(255,\s*255,\s*255,\s*0\.05\)"', '"var(--color-border-muted)"'),
        (r"(?i)'rgba\(255,\s*255,\s*255,\s*0\.1\)'", "'var(--color-border-muted)'"),
        (r'(?i)"rgba\(255,\s*255,\s*255,\s*0\.1\)"', '"var(--color-border-muted)"'),
        (r"(?i)'rgba\(255,\s*255,\s*255,\s*0\.02\)'", "'var(--color-surface)'"),
        (r'(?i)"rgba\(255,\s*255,\s*255,\s*0\.02\)"', '"var(--color-surface)"'),
        (r"(?i)'rgba\(255,\s*255,\s*255,\s*0\.03\)'", "'var(--color-surface-container)'"),
        (r'(?i)"rgba\(255,\s*255,\s*255,\s*0\.03\)"', '"var(--color-surface-container)"'),
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
