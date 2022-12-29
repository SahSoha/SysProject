const data = {
  products: [
    {
      name: 'full milk',
      slug: 'full milk',
      image:
        'https://cdnprod.mafretailproxy.com/sys-master-root/hc2/h60/27308418662430/12719_2.jpg_480Wx480H',
      salar: '15.10 L.E',
    },
    {
      name: 'free milk',
      slug: 'free-milk',
      image:
        'https://www.luluhypermarket.com/medias/1436441-01.jpg-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzNDMwMzd8aW1hZ2UvanBlZ3xoZTgvaDUyLzExODMzNTk0NjA5Njk0LzE0MzY0NDEtMDEuanBnXzEyMDBXeDEyMDBIfGM5MGM0NTQzNDVkZGE5Yjk2ZjQzYzBkNzM3YjZiYmQ2Zjg3ZTM3ZWNjYTExNjA3MmM2OWNjMjM0OTU2ODRmMjg',
      salar: '20 L.E',
    },
    {
      name: '0% fat milk',
      slug: '0%-fat-milk',
      image:
        'https://cdnprod.mafretailproxy.com/sys-master-root/h8b/h07/27324937306142/390280_2.jpg_480Wx480H',
      salar: '10.50 L.E',
    },
    {
      name: 'Processed cream cheese',
      slug: 'Processed cream cheese',
      image:
        'https://www.puckarabia.com/globalassets/new-products-pictures/packshots/resized/11-puck-cream-500g-ara.png?preset=product640',
      salar: '50 L.E',
    },
    {
      name: 'Cream Cheese & Spreads',
      slug: 'Cream Cheese & Spreads',
      image:
        'https://www.luluhypermarket.com/cdn-cgi/image/f=auto/medias/314424-01.jpg-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2MzI0NDB8aW1hZ2UvanBlZ3xoMWUvaGFhLzExODc1MDAzODI2MjA2LzMxNDQyNC0wMS5qcGdfMTIwMFd4MTIwMEh8M2VjYzI1NmZiYmQ4OWE1MDIzMjIyMjQzZDA3ZTM2YjJhNTZhMTgxNzBlZjBhNzA4YzVjYjVhMTRlMTk5YjhhZg',
      salar: '30.0 L.E',
    },
    {
      name: 'cheese with less salt',
      slug: 'cheese with less salt',
      image:
        'https://www.luluhypermarket.com/cdn-cgi/image/f=auto/medias/1409535-01.jpg-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w1NzQxMTF8aW1hZ2UvanBlZ3xoZmEvaGYwLzExODc0ODg0OTExMTM0LzE0MDk1MzUtMDEuanBnXzEyMDBXeDEyMDBIfDYyNDQ3MjRhNGU4YzNjMGYzNjliNGU2NDU2ZDE2Njg1MDg0Y2FiYzlhNDY3NmFhZWFlZjEyYjQxNzJmYzllODE',
      salar: '18.30 L.E',
    },
    {
      name: 'Cheese with pepper',
      slug: 'Cheese with pepper',
      image:
        'https://cdnprod.mafretailproxy.com/sys-master-root/hbb/h38/9342444044318/327043_main.jpg_480Wx480H',
      salar: '35.50 L.E',
    },
    {
      name: 'Cheese',
      slug: 'Cheese',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjLmydulLAIiXCjp4pou-KkLL-QjEfjHeDVg&usqp=CAU',
      salar: '42 L.E',
    },
    {
      name: 'Roqueford cheese',
      slug: 'Roqueford cheese',
      image:
        'https://cdnprod.mafretailproxy.com/sys-master-root/h04/he6/9342688854046/429799_main.jpg_480Wx480H',
      salar: '60 L.E',
    },
    {
      name: 'Natural yogurt',
      slug: 'Natural yogurt',
      image:
        'https://images.spinneys.net/product/36268/d4Ktbwo28RAzdw907qDeORAfZ6QWK31LsQD0Ng5x.jpeg',
      salar: '5 L.E',
    },
    {
      name: 'Low fat yogurt',
      slug: 'Low fat yogurt',
      image:
        'https://cdn.salla.sa/jROPm/258YEDiHwWILjzAteHcqLSuEaLwEJqJ0S43yUnIr.jpg',
      salar: '10.50 L.E',
    },
    {
      name: 'lite yogurt',
      slug: 'lite yogurt',
      image:
        'https://cdnprod.mafretailproxy.com/sys-master-root/h56/hc9/27324710486046/312660_main.jpg_480Wx480H',
      salar: '7 L.E',
    },
    {
      name: 'Butter ',
      slug: 'Butter ',
      image:
        'https://www.lurpak.com/optimized/golden-small-pad/siteassets/final-packshots/middle-east/j00068-butter-web-images-277x438_unsalted.jpg',
      salar: ' 85 L.E',
    },
    {
      name: 'Salted Butter',
      slug: 'Salted Butter',
      image:
        'https://www.lurpak.com/siteassets/final-packshots/middle-east/j00068-butter-web-images-277x438_slightly-salted.jpg',
      salar: '70 L.E',
    },
    {
      name: 'Olive Oil Butter',
      slug: 'Olive Oil Butter',
      image:
        'https://www.lurpak.com/optimized/golden-small-pad/siteassets/final-packshots/lurpak_thumb_spreadable_olive.png',
      salar: '90 L.E',
    },
    {
      name: 'choclate ice cream',
      slug: 'choclate ice cream',
      image:
        'https://www.bhg.com.au/media/29587/chocolate-cadbury-icecream.jpg?width=720&center=0.0,0.0',
      salar: '25 L.E',
    },
    {
      name: 'vanilla ice cream',
      slug: 'vanilla ice cream',
      image:
        'https://cdnprod.mafretailproxy.com/sys-master-root/h2a/hb7/10162890014750/512324_main.jpg_480Wx480H',
      salar: '20 L.E',
    },
    {
      name: 'caramel ice cream',
      slug: 'caramel ice cream',
      image:
        'https://cdnprod.mafretailproxy.com/sys-master-root/h36/hcd/27025308450846/575857_main.jpg_480Wx480H',
      salar: ' 22.50 L.E',
    },
  ],
};
export default data;
