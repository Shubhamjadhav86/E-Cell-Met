$badgeCSS = @'
    <style>
        /* Image count notification badge */
        .gallery-main {
            position: relative;
            overflow: visible !important;
        }

        .image-count-badge {
            position: absolute;
            top: 12px;
            right: 12px;
            left: auto !important;
            background: #ff1744;
            color: #fff;
            font-size: 0.8rem;
            font-weight: 600;
            padding: 4px 8px;
            border-radius: 999px;
            box-shadow: 0 4px 12px rgba(255, 23, 68, 0.4);
            cursor: pointer;
            z-index: 20;
            pointer-events: auto;
            opacity: 1 !important;
            width: max-content;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
            user-select: none;
        }

        .image-count-badge:hover {
            transform: scale(1.05);
            box-shadow: 0 6px 16px rgba(255, 23, 68, 0.6);
        }

        @media (max-width: 768px) {
            .image-count-badge {
                top: 8px;
                right: 8px;
                font-size: 0.75rem;
                padding: 3px 6px;
            }
        }
    </style>
'@

$files = 1,3,4,5,6,7,8,9,10,11,12,13,14,15,16

foreach ($i in $files) {
    $file = "c:\Users\Yoga\Documents\E-Cell\E-Cell site\events\event-$i.html"
    $content = Get-Content $file -Raw
    
    # Find and replace the badge CSS section
    # Pattern: from <style> to </style> that contains "Image count notification badge"
    $pattern = '(?s)<style>\s*/\* Image count notification badge \*/.*?</style>'
    
    if ($content -match $pattern) {
        $content = $content -replace $pattern, $badgeCSS
        Set-Content -Path $file -Value $content -NoNewline
        Write-Output "Updated event-$i.html"
    } else {
        Write-Output "WARNING: Could not find badge CSS in event-$i.html"
    }
}

Write-Output "`nCompleted updating all event files"
