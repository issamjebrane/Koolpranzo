
const ingredients = [
  { emoji: "🥣", description: "Flocons d'avoine avec notre recette speciale" },
  { emoji: "🍎", description: "Tranches de pomme" },
  { emoji: "🍓", description: "Fruits de saison" },
  { emoji: "✨", description: "Graines de chia" },
  { emoji: "🍌", description: "Banane" },
  { emoji: "🥥", description: "Noix de coco rapée" },
  { emoji: "🍇", description: "Raisins secs juteux" },
  { emoji: "🥜", description: "Amandes croquantes en topping" }
];
export const boxes : Box[] = [
    {
        id:1,
      title: '🌾 KOOLPRANZO Box 🥣',
      subtitle:
        "Des options saines et délicieuses pour bien commencer votre journée, préparées avec soin à partir d'ingrédients naturels et nutritifs",
        imgSrcs: [
          '/assets/koolpranzo_box.jpg',
          '/assets/image1.jpg',
          '/assets/image2.jpg',
          '/assets/image3.jpg',
          '/assets/image4.jpg',
          '/assets/image5.jpg',
        ],
        price: 65,
        description: [
          {
            emoji: "🥪",
            title: "Toast de Blé Complet avec Dinde Fumé",
            description: "Pain complet grillé garni de dinde fumée, laitue fraîche, fromage, tomate et œuf.",
          },
          {
            emoji: "🥣",
            title: "Bol de Flocons d'Avoine",
            subtitle: "(Notre recette spéciale)",
            description: "Un bol de flocons d'avoine garni de fruits frais, fruits secs, chocolat noir, yaourt nature, poudre de noix de coco et graines de chia. Servi froid et prêt à savourer.",
          },
          {
            emoji: "🥤",
            title: "Jus Détox Naturel",
            description: "Un jus détox rafraîchissant préparé avec des ingrédients frais et naturels.",
          },
          {
            emoji: "🥞",
            title: "Pancakes à l'Avoine et à la Banane",
            description: "Pancakes moelleux à base de flocons d'avoine et de banane, servis avec des garnitures naturelles sans sucre ajouté.",
          },
          {
            emoji: "🍪",
            title: "Biscuits de Blé Complet",
            description: "", // Add description if needed
          },
          {
            emoji: "🫖",
            title: "Thé Naturel avec Sucre Brun",
            description: "", // Add description if needed
          }
        ]
    },
    {
        id:2,
        title: '🌾 KOOLPRANZO Oat Energy Bowl 🥣',
      subtitle:
          "Flocons d'avoine recette spéciale, tranches de pomme fraîches, fruits de saison, graines de chia, banane, noix de coco râpée, raisins secs juteux, amandes croquantes en garniture",
      imgSrcs: [
          '/assets/oatmeal.jpg',
          '/assets/oatmeal2.jpg',
          '/assets/oatmeal3.jpg',
        ],      
        price: 34,
        description: [
          {
            emoji: "🌾",
            title: "KOOLPRANZO Oat Energy Bowl",
            subtitle: "(Notre recette spéciale)",
            ingredients: ingredients,
          }
        ]
      }
  ];

export type Box = {
    id: number;
    title: string;
    subtitle: string;
    description: {
      emoji: string;
      title: string;
      description?: string;
      subtitle?: string;
      ingredients?: 
      {
        emoji: string;
        description: string;
      }[];
    }[];
    imgSrcs: string[];
    price:number;
};