import product1 from "~/assets/image1.png";
import product2 from "~/assets/image2.png";
import product3 from "~/assets/image3.png";
// hot
import product4 from "../../public/8.png";
import product5 from "../../public/26.png";
import product6 from "../../public/25.png";
// item
import product10 from "../../public/bangdo/10.png";
import product11 from "../../public/bangdo/11.png";
import product12 from "../../public/bangdo/12.png";
import product13 from "../../public/bangdo/13.png";
//
import product17 from "../../public/TC/17.png";
import product18 from "../../public/TC/18.png";
import product19 from "../../public/TC/19.png";
import product20 from "../../public/TC/20.png";

const products = [
  {
    id: "1",
    img: product1,
    price: "190000",
    description: "Set Quà tặng đáng yêu",
    views: 400,
    likes: 30,
    reviews: 20
  },

  {
    id: "2",
    img: product2,
    price: "190000",
    description: "Set Quà tặng đáng yêu",
    views: 400,
    likes: 30,
    reviews: 20
  },

  {
    id: "3",
    img: product3,
    price: "190000",
    description: "Set Quà tặng đáng yêu",
    views: 400,
    likes: 30,
    reviews: 20
  }
];

export const productsHot = [
  {
    id: "44",
    img: product4,
    price: "190000",
    description: "Set Quà tặng đáng yêu",
    views: 400,
    likes: 30,
    reviews: 20
  },

  {
    id: "55",
    img: product5,
    price: "190000",
    description: "Set Quà tặng đáng yêu",
    views: 400,
    likes: 30,
    reviews: 20
  },

  {
    id: "66",
    img: product6,
    price: "190000",
    description: "Set Quà tặng đáng yêu",
    views: 400,
    likes: 30,
    reviews: 20
  }
];

export const productsPage = [
  {
    id: 1,
    price: 200000,
    name: "Hộp quà tặng 1",
    status: "sale",
    priceSale: 180000,
    cover: "https://scontent.fhan3-5.fna.fbcdn.net/v/t1.15752-9/330936447_1348756212631608_7993833024753536847_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeHVUuSma7Zto3VAOnL3l-ndFYLwxexPPcIVgvDF7E89wmo3BTW3JoVWCAzpg_c4SNcdhcNobrNh8PRXKvs4m73a&_nc_ohc=frRJy9Caia0AX-ERzZs&_nc_ht=scontent.fhan3-5.fna&oh=03_AdQszVJ26INyEbx0rxiG6bVulAUOu3JeIYe01TcyGnb-Qg&oe=658C413E",
    images: ["https://scontent.fhan3-5.fna.fbcdn.net/v/t1.15752-9/330936447_1348756212631608_7993833024753536847_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeHVUuSma7Zto3VAOnL3l-ndFYLwxexPPcIVgvDF7E89wmo3BTW3JoVWCAzpg_c4SNcdhcNobrNh8PRXKvs4m73a&_nc_ohc=frRJy9Caia0AX-ERzZs&_nc_ht=scontent.fhan3-5.fna&oh=03_AdQszVJ26INyEbx0rxiG6bVulAUOu3JeIYe01TcyGnb-Qg&oe=658C413E", "https://scontent.fhan3-5.fna.fbcdn.net/v/t1.15752-9/330936447_1348756212631608_7993833024753536847_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeHVUuSma7Zto3VAOnL3l-ndFYLwxexPPcIVgvDF7E89wmo3BTW3JoVWCAzpg_c4SNcdhcNobrNh8PRXKvs4m73a&_nc_ohc=frRJy9Caia0AX-ERzZs&_nc_ht=scontent.fhan3-5.fna&oh=03_AdQszVJ26INyEbx0rxiG6bVulAUOu3JeIYe01TcyGnb-Qg&oe=658C413E", "https://scontent.fhan3-5.fna.fbcdn.net/v/t1.15752-9/330936447_1348756212631608_7993833024753536847_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeHVUuSma7Zto3VAOnL3l-ndFYLwxexPPcIVgvDF7E89wmo3BTW3JoVWCAzpg_c4SNcdhcNobrNh8PRXKvs4m73a&_nc_ohc=frRJy9Caia0AX-ERzZs&_nc_ht=scontent.fhan3-5.fna&oh=03_AdQszVJ26INyEbx0rxiG6bVulAUOu3JeIYe01TcyGnb-Qg&oe=658C413E"],
    description: "Sản phẩm thích hợp để mua tặng người yêu",
    inStock: 5
  },
  {
    id: 2,
    price: 200000,
    name: "Hộp quà tặng 2",
    status: "new",
    priceSale: 180000,
    cover: product1,
    images: [product1, product1, product1],
    description: "Sản phẩm thích hợp để mua tặng người yêu",
    inStock: 5
  },
  {
    id: 3,
    price: 200000,
    name: "Hộp quà tặng 3",
    status: "hot",
    // priceSale: 180000,
    cover: product2,
    images: [product2, product2],
    description: "Sản phẩm thích hợp để mua tặng người yêu",
    inStock: 5
  },
  {
    id: 4,
    price: 200000,
    name: "Hộp quà tặng 4",
    status: "sale",
    priceSale: 180000,
    cover: product3,
    images: [product3, product3],
    description: "Sản phẩm thích hợp để mua tặng người yêu",
    inStock: 5
  },
  {
    id: 5,
    price: 200000,
    name: "Hộp quà tặng 5",
    status: "hot",
    // priceSale: 180000,
    cover: product4,
    images: [product4, product4, product4],
    description: "Sản phẩm thích hợp để mua tặng người yêu",
    inStock: 5
  },
  {
    id: 6,
    price: 200000,
    name: "Hộp quà tặng 6",
    status: "sale",
    priceSale: 180000,
    cover: product5,
    images: [product5, product5],
    description: "Sản phẩm thích hợp để mua tặng người yêu",
    inStock: 5
  },
  {
    id: 7,
    price: 200000,
    name: "Hộp quà tặng 7",
    status: "sale",
    priceSale: 180000,
    cover: product6,
    images: [product6, product6],
    description: "Sản phẩm thích hợp để mua tặng người yêu",
    inStock: 5
  },
  {
    id: 8,
    price: 30000,
    name: "Băng đô 1",
    status: "sale",
    priceSale: 20000,
    cover: product10,
    images: [product10, product10],
    description: "Sản phẩm thích hợp để mua tặng người yêu",
    inStock: 10
  },
  {
    id: 9,
    price: 30000,
    name: "Băng đô 2",
    status: "hot",
    // priceSale: 180000,
    cover: product11,
    images: [product11, product11],
    description: "Sản phẩm thích hợp để mua tặng người yêu",
    inStock: 5
  },
  {
    id: 10,
    price: 35000,
    name: "Băng đô 3",
    status: "hot",
    // priceSale: 180000,
    cover: product12,
    images: [product12, product12],
    description: "Sản phẩm thích hợp để mua tặng người yêu",
    inStock: 5
  },
  {
    id: 11,
    price: 40000,
    name: "Băng đô 4",
    status: "sale",
    priceSale: 25000,
    cover: product13,
    images: [product13, product13],
    description: "Sản phẩm thích hợp để mua tặng người yêu",
    inStock: 5
  },
  {

    id: 12,
    price: 50000,
    name: "Túi chườm 1",
    status: "sale",
    priceSale: 35000,
    cover: product17,
    images: [product17, product17],
    description: "Sản phẩm thích hợp để mua tặng người yêu",
    inStock: 5
  },
  {

    id: 13,
    price: 50000,
    name: "Túi chườm 2",
    status: "sale",
    priceSale: 35000,
    cover: product18,
    images: [product18, product18],
    description: "Sản phẩm thích hợp để mua tặng người yêu",
    inStock: 5
  },
  {

    id: 14,
    price: 50000,
    name: "Túi chườm 3",
    status: "hot",
    // priceSale: 35000,
    cover: product19,
    images: [product19, product19],
    description: "Sản phẩm thích hợp để mua tặng người yêu",
    inStock: 5
  },
  {

    id: 15,
    price: 60000,
    name: "Túi chườm 4",
    status: "hot",
    // priceSale: 35000,
    cover: product20,
    images: [product20, product20],
    description: "Sản phẩm thích hợp để mua tặng người yêu",
    inStock: 5
  }
];

export default products;