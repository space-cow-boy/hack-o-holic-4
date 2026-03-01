// src/utils/getImage.js
// Dynamically import images from assets/images using Vite's import.meta.glob
const imageModules = import.meta.glob('../assets/images/*', { eager: true });

export default function getImage(filename) {
  if (!filename) return null;
  const key = `../assets/images/${filename}`;
  const mod = imageModules[key];
  return mod ? mod.default : null;
}
