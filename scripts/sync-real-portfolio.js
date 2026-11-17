const fs = require('fs');
const path = require('path');

const root = process.cwd();
const srcBase = path.join(root, 'referencias', 'Serviços');
const destBase = path.join(root, 'public', 'images', 'servicos-reais');

if (!fs.existsSync(destBase)) {
  fs.mkdirSync(destBase, { recursive: true });
}

const mapFolder = {
  'Adesivo Recortado': 'adesivo-recortado',
  'Adesivos Vinil de Alta qualidade': 'adesivo-vinil',
  'BackDrop': 'backdrop',
  'Balcão Personalizado': 'balcao-personalizado',
  'Banner': 'banner',
  'Display em Acrílico': 'display-acrilico',
  'Fachada em ACM': 'fachada-acm',
  'Faixa de Fachada': 'faixa-fachada',
  'Identificação para Hoteis e Comercio': 'identificacao-comercial',
  'Letra Caixa': 'letra-caixa',
  'Letras em Acrílico': 'letras-acrilico',
  'Logo em Acrílico': 'logo-acrilico',
  'Lona Impressa': 'lona-impressa',
  'Placas em Acrílico': 'placas-acrilico',
  'Plotagem': 'plotagem',
  'Projetos em Acrílico Sob Demanda': 'projetos-acrilico',
  'Quadros Personalizados': 'quadros-personalizados',
  'Totem': 'totem'
};

const manifest = {};
const dirs = fs.readdirSync(srcBase, { withFileTypes: true });

dirs.forEach(d => {
  if (d.isDirectory()) {
    const slug = mapFolder[d.name] || d.name.toLowerCase().replace(/\s+/g, '-');
    const targetDir = path.join(destBase, slug);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }
    const srcDir = path.join(srcBase, d.name);
    const files = fs.readdirSync(srcDir).filter(f => /\.(jpe?g|png|webp)$/i.test(f));
    manifest[slug] = {
      originalName: d.name,
      slug: slug,
      count: files.length,
      cover: '',
      images: []
    };
    files.forEach((file, idx) => {
      const ext = path.extname(file).toLowerCase();
      const num = String(idx + 1).padStart(2, '0');
      const newName = 'sinal-sign-comunicacao-' + slug + '-' + num + ext;
      fs.copyFileSync(path.join(srcDir, file), path.join(targetDir, newName));
      const webPath = '/images/servicos-reais/' + slug + '/' + newName;
      manifest[slug].images.push(webPath);
      if (idx === 0) {
        manifest[slug].cover = webPath;
      }
    });
  }
});

fs.writeFileSync(path.join(root, 'src', 'lib', 'realPortfolioManifest.json'), JSON.stringify(manifest, null, 2), 'utf8');
console.log('Sucesso! Categorias catalogadas:', Object.keys(manifest).length);
let total = 0;
Object.values(manifest).forEach(m => total += m.count);
console.log('Total de fotos copiadas:', total);

