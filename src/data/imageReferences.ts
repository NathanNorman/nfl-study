/**
 * Image references for football diagrams and visuals
 * Using Wikimedia Commons and public domain sources
 */

interface ImageReference {
  url: string;
  alt: string;
  description: string;
  license: string;
  routes?: Record<number, string>;
}

interface ImageCollection {
  diagrams: {
    footballField: ImageReference;
    routeTree: ImageReference;
    shotgun: ImageReference;
    pistol: ImageReference;
    iFormation: ImageReference;
  };
  positions: {
    offense: ImageReference;
    defense: ImageReference;
  };
}

export const images: ImageCollection = {
  diagrams: {
    // Field
    footballField: {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/American_football_field.svg/1024px-American_football_field.svg.png",
      alt: "American Football Field Diagram",
      description: "100-yard field with end zones, yard lines, and hash marks",
      license: "Public Domain"
    },

    // Route Tree
    routeTree: {
      url: "https://via.placeholder.com/800x600/1e1b4b/a78bfa?text=Route+Tree+Diagram",
      alt: "Football Route Tree - Routes 0-9",
      description: "Standard route tree showing all 9 receiver routes",
      license: "Placeholder - will be replaced with diagram",
      routes: {
        0: "Flat/Swing",
        1: "Quick Out/Slant",
        2: "Slant",
        3: "Comeback",
        4: "Curl",
        5: "Out",
        6: "Dig/In",
        7: "Corner/Flag",
        8: "Post",
        9: "Go/Fade"
      }
    },

    // Formations
    shotgun: {
      url: "https://via.placeholder.com/800x400/1e1b4b/a78bfa?text=Shotgun+Formation",
      alt: "Shotgun Formation Diagram",
      description: "QB 5-7 yards behind center",
      license: "Placeholder"
    },

    pistol: {
      url: "https://via.placeholder.com/800x400/1e1b4b/a78bfa?text=Pistol+Formation",
      alt: "Pistol Formation Diagram",
      description: "QB 3-4 yards behind center with RB behind QB",
      license: "Placeholder"
    },

    iFormation: {
      url: "https://via.placeholder.com/800x400/1e1b4b/a78bfa?text=I+Formation",
      alt: "I Formation Diagram",
      description: "RB and FB lined up behind QB in a line (looks like letter I)",
      license: "Placeholder"
    }
  },

  // Position diagrams
  positions: {
    offense: {
      url: "https://via.placeholder.com/1000x600/1e1b4b/a78bfa?text=Offensive+Positions",
      alt: "Offensive Positions Diagram",
      description: "QB, RB, WR, TE, O-Line positions labeled",
      license: "Placeholder"
    },
    defense: {
      url: "https://via.placeholder.com/1000x600/1e1b4b/a78bfa?text=Defensive+Positions",
      alt: "Defensive Positions Diagram",
      description: "DL, LB, CB, S positions labeled",
      license: "Placeholder"
    }
  }
};

/**
 * Helper to get image for a concept
 */
export function getImage(category: keyof ImageCollection, name: string): ImageReference | null {
  const categoryImages = images[category] as Record<string, ImageReference>;
  return categoryImages?.[name] || null;
}
