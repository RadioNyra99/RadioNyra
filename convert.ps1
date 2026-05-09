Add-Type -AssemblyName System.Drawing
$inputDir = "E:\Nyra\public\OLD Images"
$files = Get-ChildItem -Path $inputDir -Filter *.tif
foreach ($file in $files) {
    Write-Host "Converting $($file.Name)..."
    $inputPath = $file.FullName
    $outputPath = [System.IO.Path]::ChangeExtension($inputPath, ".jpg")
    $image = [System.Drawing.Image]::FromFile($inputPath)
    $image.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $image.Dispose()
    Write-Host "Saved $($outputPath)"
}
