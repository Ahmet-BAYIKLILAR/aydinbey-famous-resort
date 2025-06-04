const fs = require('fs');
const path = require('path');

const activityImages = [
  { name: 'su-polosu.jpg', title: 'Water Polo' },
  { name: 'havuz-oyunlari.jpg', title: 'Pool Games' },
  { name: 'turnuvalar.jpg', title: 'Tournaments' },
  { name: 'aquapark.jpg', title: 'Aquapark' },
  { name: 'acik-ve-kapali-havuzlar.jpg', title: 'Indoor & Outdoor Pools' },
  { name: 'step.jpg', title: 'Step' },
  { name: 'aerobik.jpg', title: 'Aerobics' },
  { name: 'jimnastik.jpg', title: 'Gymnastics' },
  { name: 'fitness-center.jpg', title: 'Fitness Center' },
  { name: 'dart.jpg', title: 'Darts' },
  { name: 'boccia.jpg', title: 'Boccia' },
  { name: 'animasyon-sovlari.jpg', title: 'Animation Shows' },
  { name: 'mini-club.jpg', title: 'Mini Club' }
];

const activitiesDir = path.join(process.cwd(), 'public', 'activities');

// Create activities directory if it doesn't exist
if (!fs.existsSync(activitiesDir)) {
  fs.mkdirSync(activitiesDir, { recursive: true });
}

// Create placeholder files for missing images
activityImages.forEach(image => {
  const imagePath = path.join(activitiesDir, image.name);
  if (!fs.existsSync(imagePath)) {
    console.log(`Missing image: ${image.name} (${image.title})`);
  }
});

// Create a mapping file for the frontend
const mappingPath = path.join(process.cwd(), 'src', 'app', 'utils', 'activity-images.ts');
const mappingContent = `// This file is auto-generated. Do not edit manually.
export const activityImageMap: Record<string, string> = {
${activityImages.map(img => `  '${img.title}': '${img.name}'`).join(',\n')}
};
`;

if (!fs.existsSync(path.dirname(mappingPath))) {
  fs.mkdirSync(path.dirname(mappingPath), { recursive: true });
}

fs.writeFileSync(mappingPath, mappingContent);
console.log('Created activity image mapping file at:', mappingPath); 