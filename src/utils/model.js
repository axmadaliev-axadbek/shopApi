import path from 'path'
import fs from 'fs'

function read (name) {
    let data = fs.readFileSync(path.join(process.cwd(),'src', 'database', name + '.js'), 'utf-8')
    return data || null
}

function write(filename, data) {
    fs.writeFileSync(path.join(process.cwd(), 'src', 'database', filename + '.js'), JSON.stringify(data, null, 4))
    return true
}

export {
    read, write
}