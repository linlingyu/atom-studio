'use babel';
import path from 'path';
import fs from 'fs';
const pkgPath = path.join(__dirname, '..', 'pkg', 'atom-plugin'),
  pkg = JSON.parse(fs.readFileSync(path.join(pkgPath, 'package.json'), 'utf-8'));
atom.packages.loadPackage(pkgPath);
export default {
  activate() {
    atom.packages.activatePackage(pkgPath);
  }
};
