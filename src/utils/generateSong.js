// Fonction pour générer une musique avec un format spécifique
export function generateMusic(index) {
  return {
    artist: `Artist ${index + 1}`,
    songTitle: `Song Title ${index + 1}`,
    albumTitle: `Album Title ${index + 1}`,
    imageSrc: `album-cover${index + 1}.jpg`,
  };
}
