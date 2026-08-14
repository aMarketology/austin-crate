import { readdirSync, readFileSync, writeFileSync, statSync } from 'fs'
import { join } from 'path'

const roots = ['app', 'lib']
const skip = [/\/admin\//]

// Order matters: remove "free" claims first, then replace pickup wording.
const rules = [
  [/free\s+local\s+pickup/gi, 'local pickup available'],
  [/free\s+heavy\s+item\s+pickup/gi, 'heavy item pickup available'],
  [/free\s+heavy\s+package\s+pickup/gi, 'heavy package pickup available'],
  [/free\s+heavy\s+furniture\s+pickup/gi, 'heavy furniture pickup available'],
  [/free\s+furniture\s+pickup/gi, 'furniture pickup available'],
  [/free\s+pickup/gi, 'pickup available'],
  [/free\s+throughout/gi, 'available throughout'],
  [/pick up/gi, 'collect'],
  [/pick-up/gi, 'collection'],
  [/pickup/gi, 'collection'],
]

let changed = 0
const changedFiles = []

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name)
    if (skip.some((s) => s.test(p))) continue
    const st = statSync(p)
    if (st.isDirectory()) {
      walk(p)
    } else if (/\.(tsx?|jsx?|ejs|html|mdx?)$/.test(name)) {
      const original = readFileSync(p, 'utf8')
      let content = original
      for (const [re, rep] of rules) content = content.replace(re, rep)
      if (content !== original) {
        writeFileSync(p, content)
        changed++
        changedFiles.push(p)
      }
    }
  }
}

for (const r of roots) walk(join(process.cwd(), r))
console.log('changed files:', changed)
for (const f of changedFiles) console.log(' -', f)
