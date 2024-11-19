export const boxes = [
    {
        id:1,
      title: 'Koolpranzo box',
      description:
        'Roasted chicken, tomatoes, parmesan crisps, shaved parmesan, shredded kale, chopped romaine, lime squeeze, caesar',
        imgSrcs: [
          '/assets/koolpranzo_box.jpg',
          '/assets/image1.jpg',
          '/assets/image2.jpg',
          '/assets/image3.jpg',
          '/assets/image4.jpg',
          '/assets/image5.jpg',
        ],
        price: 65,
    },
    {
        id:2,
      title: 'Koolpranzo box',
      description:
        'Roasted chicken, avocado, tomatoes, pickled onions, shredded cabbage, tortilla chips, spring mix, chopped romaine, lime squeeze, lime cilantro jalapeño vinaigrette',
        imgSrcs: [
          '/assets/koolpranzo_box2.jpg',
          '/assets/image6.jpg',
          '/assets/image2.jpg',
          '/assets/image3.jpg',
          '/assets/image4.jpg',
        ],      
        price: 65,
      },
    {
      id:3,
      title: 'BUFFALO CHICKEN',
      description:
        'Blackened chicken, pickled onions, tomatoes, raw carrots, cilantro, blue cheese, za’atar breadcrumbs, shredded kale, chopped romaine, sweetgreen hot sauce, caesar',
        imgSrcs: [
          '/assets/koolpranzo_box.jpg',
          '/assets/image1.jpg',
          '/assets/image2.jpg',
          '/assets/image3.jpg',
          '/assets/image4.jpg',
        ],      
        price: 65,
      },
  ];

export type Box = {
    id: number;
    title: string;
    description: string;
    imgSrcs: string[];
    price:number;
};