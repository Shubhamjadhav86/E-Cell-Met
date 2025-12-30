import os

file_path = "styles.css"

with open(file_path, "rb") as f:
    content = f.read()

# Find the last occurrence of the valid closing brace before my messed up append
# The messed up append started with / * = = = ...
# Search for .event-card:hover .event-content::after { ... } which ends around line 3847
# The last valid CSS block ends with:
#     filter: blur(25px);
# }

marker = b"filter: blur(25px);\r\n}"
idx = content.rfind(marker)

if idx != -1:
    # Keep up to the marker + its length
    clean_content = content[:idx + len(marker)]
    
    # Append the new clean CSS
    new_css = b"""

/* ========================================= */
/* FINAL MOBILE OVERRIDES (SAFEGUARD)      */
/* Ensures 2-column Core Team grid on phone */
/* ========================================= */
@media (max-width: 768px) {
    .core-team-grid {
        display: grid !important;
        grid-template-columns: repeat(2, 1fr) !important;
        gap: 16px !important;
        padding: 0 1rem !important;
    }

    .core-team-grid .leader-card {
        grid-column: auto !important;
        grid-row: auto !important;
        width: 100% !important;
        height: auto !important;
    }
}
"""
    with open(file_path, "wb") as f:
        f.write(clean_content + new_css)
    print("Fixed styles.css successfully.")
else:
    print("Could not find marker in styles.css")
