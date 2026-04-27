import sharp from 'sharp'
import { readdir } from 'fs/promises'
import { join } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const publicDir = join(__dirname, '..', 'public')

const files = await readdir(publicDir)
const images = files.filter((f) => /\.(jpe?g)$/i.test(f))

console.log(`Found ${images.length} JPEG files to compress...\n`)

for (const file of images) {
  const filePath = join(publicDir, file)
  try {
    const info = await sharp(filePath).metadata()
    const buffer = await sharp(filePath).jpeg({ quality: 80 }).toBuffer()
    const { writeFile, stat } = await import('fs/promises')
    const before = (await stat(filePath)).size
    await writeFile(filePath, buffer)
    const after = buffer.length
    const saved = (((before - after) / before) * 100).toFixed(1)
    console.log(`✓ ${file}: ${(before / 1024).toFixed(0)}KB → ${(after / 1024).toFixed(0)}KB (saved ${saved}%)`)
  } catch (err) {
    console.error(`✗ ${file}: ${err.message}`)
  }
}

console.log('\nDone.')
