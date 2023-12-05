import product1 from "~/assets/image1.png";
import product2 from "~/assets/image2.png";
import product3 from "~/assets/image3.png";

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
    cover: "https://scontent.fhan3-5.fna.fbcdn.net/v/t1.15752-9/330936447_1348756212631608_7993833024753536847_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeHVUuSma7Zto3VAOnL3l-ndFYLwxexPPcIVgvDF7E89wmo3BTW3JoVWCAzpg_c4SNcdhcNobrNh8PRXKvs4m73a&_nc_ohc=frRJy9Caia0AX-ERzZs&_nc_ht=scontent.fhan3-5.fna&oh=03_AdQszVJ26INyEbx0rxiG6bVulAUOu3JeIYe01TcyGnb-Qg&oe=658C413E",
    images: ["https://scontent.fhan3-5.fna.fbcdn.net/v/t1.15752-9/330936447_1348756212631608_7993833024753536847_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeHVUuSma7Zto3VAOnL3l-ndFYLwxexPPcIVgvDF7E89wmo3BTW3JoVWCAzpg_c4SNcdhcNobrNh8PRXKvs4m73a&_nc_ohc=frRJy9Caia0AX-ERzZs&_nc_ht=scontent.fhan3-5.fna&oh=03_AdQszVJ26INyEbx0rxiG6bVulAUOu3JeIYe01TcyGnb-Qg&oe=658C413E", "https://scontent.fhan3-5.fna.fbcdn.net/v/t1.15752-9/330936447_1348756212631608_7993833024753536847_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeHVUuSma7Zto3VAOnL3l-ndFYLwxexPPcIVgvDF7E89wmo3BTW3JoVWCAzpg_c4SNcdhcNobrNh8PRXKvs4m73a&_nc_ohc=frRJy9Caia0AX-ERzZs&_nc_ht=scontent.fhan3-5.fna&oh=03_AdQszVJ26INyEbx0rxiG6bVulAUOu3JeIYe01TcyGnb-Qg&oe=658C413E", "https://scontent.fhan3-5.fna.fbcdn.net/v/t1.15752-9/330936447_1348756212631608_7993833024753536847_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeHVUuSma7Zto3VAOnL3l-ndFYLwxexPPcIVgvDF7E89wmo3BTW3JoVWCAzpg_c4SNcdhcNobrNh8PRXKvs4m73a&_nc_ohc=frRJy9Caia0AX-ERzZs&_nc_ht=scontent.fhan3-5.fna&oh=03_AdQszVJ26INyEbx0rxiG6bVulAUOu3JeIYe01TcyGnb-Qg&oe=658C413E"],
    description: "Sản phẩm thích hợp để mua tặng người yêu",
    inStock: 5
  },
  {
    id: 3,
    price: 200000,
    name: "Hộp quà tặng 3",
    status: "hot",
    // priceSale: 180000,
    cover: "https://scontent.fhan3-5.fna.fbcdn.net/v/t1.15752-9/330936447_1348756212631608_7993833024753536847_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeHVUuSma7Zto3VAOnL3l-ndFYLwxexPPcIVgvDF7E89wmo3BTW3JoVWCAzpg_c4SNcdhcNobrNh8PRXKvs4m73a&_nc_ohc=frRJy9Caia0AX-ERzZs&_nc_ht=scontent.fhan3-5.fna&oh=03_AdQszVJ26INyEbx0rxiG6bVulAUOu3JeIYe01TcyGnb-Qg&oe=658C413E",
    images: ["https://scontent.fhan3-5.fna.fbcdn.net/v/t1.15752-9/330936447_1348756212631608_7993833024753536847_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeHVUuSma7Zto3VAOnL3l-ndFYLwxexPPcIVgvDF7E89wmo3BTW3JoVWCAzpg_c4SNcdhcNobrNh8PRXKvs4m73a&_nc_ohc=frRJy9Caia0AX-ERzZs&_nc_ht=scontent.fhan3-5.fna&oh=03_AdQszVJ26INyEbx0rxiG6bVulAUOu3JeIYe01TcyGnb-Qg&oe=658C413E", "https://scontent.fhan3-5.fna.fbcdn.net/v/t1.15752-9/330936447_1348756212631608_7993833024753536847_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeHVUuSma7Zto3VAOnL3l-ndFYLwxexPPcIVgvDF7E89wmo3BTW3JoVWCAzpg_c4SNcdhcNobrNh8PRXKvs4m73a&_nc_ohc=frRJy9Caia0AX-ERzZs&_nc_ht=scontent.fhan3-5.fna&oh=03_AdQszVJ26INyEbx0rxiG6bVulAUOu3JeIYe01TcyGnb-Qg&oe=658C413E", "https://scontent.fhan3-5.fna.fbcdn.net/v/t1.15752-9/330936447_1348756212631608_7993833024753536847_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeHVUuSma7Zto3VAOnL3l-ndFYLwxexPPcIVgvDF7E89wmo3BTW3JoVWCAzpg_c4SNcdhcNobrNh8PRXKvs4m73a&_nc_ohc=frRJy9Caia0AX-ERzZs&_nc_ht=scontent.fhan3-5.fna&oh=03_AdQszVJ26INyEbx0rxiG6bVulAUOu3JeIYe01TcyGnb-Qg&oe=658C413E"],
    description: "Sản phẩm thích hợp để mua tặng người yêu",
    inStock: 5
  },
  {
    id: 4,
    price: 200000,
    name: "Hộp quà tặng 4",
    status: "hot",
    // priceSale: 180000,
    cover: "https://scontent.fhan3-5.fna.fbcdn.net/v/t1.15752-9/330936447_1348756212631608_7993833024753536847_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeHVUuSma7Zto3VAOnL3l-ndFYLwxexPPcIVgvDF7E89wmo3BTW3JoVWCAzpg_c4SNcdhcNobrNh8PRXKvs4m73a&_nc_ohc=frRJy9Caia0AX-ERzZs&_nc_ht=scontent.fhan3-5.fna&oh=03_AdQszVJ26INyEbx0rxiG6bVulAUOu3JeIYe01TcyGnb-Qg&oe=658C413E",
    images: ["https://scontent.fhan3-5.fna.fbcdn.net/v/t1.15752-9/330936447_1348756212631608_7993833024753536847_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeHVUuSma7Zto3VAOnL3l-ndFYLwxexPPcIVgvDF7E89wmo3BTW3JoVWCAzpg_c4SNcdhcNobrNh8PRXKvs4m73a&_nc_ohc=frRJy9Caia0AX-ERzZs&_nc_ht=scontent.fhan3-5.fna&oh=03_AdQszVJ26INyEbx0rxiG6bVulAUOu3JeIYe01TcyGnb-Qg&oe=658C413E", "https://scontent.fhan3-5.fna.fbcdn.net/v/t1.15752-9/330936447_1348756212631608_7993833024753536847_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeHVUuSma7Zto3VAOnL3l-ndFYLwxexPPcIVgvDF7E89wmo3BTW3JoVWCAzpg_c4SNcdhcNobrNh8PRXKvs4m73a&_nc_ohc=frRJy9Caia0AX-ERzZs&_nc_ht=scontent.fhan3-5.fna&oh=03_AdQszVJ26INyEbx0rxiG6bVulAUOu3JeIYe01TcyGnb-Qg&oe=658C413E", "https://scontent.fhan3-5.fna.fbcdn.net/v/t1.15752-9/330936447_1348756212631608_7993833024753536847_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeHVUuSma7Zto3VAOnL3l-ndFYLwxexPPcIVgvDF7E89wmo3BTW3JoVWCAzpg_c4SNcdhcNobrNh8PRXKvs4m73a&_nc_ohc=frRJy9Caia0AX-ERzZs&_nc_ht=scontent.fhan3-5.fna&oh=03_AdQszVJ26INyEbx0rxiG6bVulAUOu3JeIYe01TcyGnb-Qg&oe=658C413E"],
    description: "Sản phẩm thích hợp để mua tặng người yêu",
    inStock: 5
  },
  {
    id: 5,
    price: 200000,
    name: "Hộp quà tặng 5",
    status: "hot",
    // priceSale: 180000,
    cover: "https://scontent.fhan3-5.fna.fbcdn.net/v/t1.15752-9/330936447_1348756212631608_7993833024753536847_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeHVUuSma7Zto3VAOnL3l-ndFYLwxexPPcIVgvDF7E89wmo3BTW3JoVWCAzpg_c4SNcdhcNobrNh8PRXKvs4m73a&_nc_ohc=frRJy9Caia0AX-ERzZs&_nc_ht=scontent.fhan3-5.fna&oh=03_AdQszVJ26INyEbx0rxiG6bVulAUOu3JeIYe01TcyGnb-Qg&oe=658C413E",
    images: ["https://scontent.fhan3-5.fna.fbcdn.net/v/t1.15752-9/330936447_1348756212631608_7993833024753536847_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeHVUuSma7Zto3VAOnL3l-ndFYLwxexPPcIVgvDF7E89wmo3BTW3JoVWCAzpg_c4SNcdhcNobrNh8PRXKvs4m73a&_nc_ohc=frRJy9Caia0AX-ERzZs&_nc_ht=scontent.fhan3-5.fna&oh=03_AdQszVJ26INyEbx0rxiG6bVulAUOu3JeIYe01TcyGnb-Qg&oe=658C413E", "https://scontent.fhan3-5.fna.fbcdn.net/v/t1.15752-9/330936447_1348756212631608_7993833024753536847_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeHVUuSma7Zto3VAOnL3l-ndFYLwxexPPcIVgvDF7E89wmo3BTW3JoVWCAzpg_c4SNcdhcNobrNh8PRXKvs4m73a&_nc_ohc=frRJy9Caia0AX-ERzZs&_nc_ht=scontent.fhan3-5.fna&oh=03_AdQszVJ26INyEbx0rxiG6bVulAUOu3JeIYe01TcyGnb-Qg&oe=658C413E", "https://scontent.fhan3-5.fna.fbcdn.net/v/t1.15752-9/330936447_1348756212631608_7993833024753536847_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeHVUuSma7Zto3VAOnL3l-ndFYLwxexPPcIVgvDF7E89wmo3BTW3JoVWCAzpg_c4SNcdhcNobrNh8PRXKvs4m73a&_nc_ohc=frRJy9Caia0AX-ERzZs&_nc_ht=scontent.fhan3-5.fna&oh=03_AdQszVJ26INyEbx0rxiG6bVulAUOu3JeIYe01TcyGnb-Qg&oe=658C413E"],
    description: "Sản phẩm thích hợp để mua tặng người yêu",
    inStock: 5
  },
  {
    id: 6,
    price: 200000,
    name: "Hộp quà tặng 6",
    status: "sale",
    priceSale: 180000,
    cover: "https://scontent.fhan3-5.fna.fbcdn.net/v/t1.15752-9/330936447_1348756212631608_7993833024753536847_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeHVUuSma7Zto3VAOnL3l-ndFYLwxexPPcIVgvDF7E89wmo3BTW3JoVWCAzpg_c4SNcdhcNobrNh8PRXKvs4m73a&_nc_ohc=frRJy9Caia0AX-ERzZs&_nc_ht=scontent.fhan3-5.fna&oh=03_AdQszVJ26INyEbx0rxiG6bVulAUOu3JeIYe01TcyGnb-Qg&oe=658C413E",
    images: ["https://scontent.fhan3-5.fna.fbcdn.net/v/t1.15752-9/330936447_1348756212631608_7993833024753536847_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeHVUuSma7Zto3VAOnL3l-ndFYLwxexPPcIVgvDF7E89wmo3BTW3JoVWCAzpg_c4SNcdhcNobrNh8PRXKvs4m73a&_nc_ohc=frRJy9Caia0AX-ERzZs&_nc_ht=scontent.fhan3-5.fna&oh=03_AdQszVJ26INyEbx0rxiG6bVulAUOu3JeIYe01TcyGnb-Qg&oe=658C413E", "https://scontent.fhan3-5.fna.fbcdn.net/v/t1.15752-9/330936447_1348756212631608_7993833024753536847_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeHVUuSma7Zto3VAOnL3l-ndFYLwxexPPcIVgvDF7E89wmo3BTW3JoVWCAzpg_c4SNcdhcNobrNh8PRXKvs4m73a&_nc_ohc=frRJy9Caia0AX-ERzZs&_nc_ht=scontent.fhan3-5.fna&oh=03_AdQszVJ26INyEbx0rxiG6bVulAUOu3JeIYe01TcyGnb-Qg&oe=658C413E", "https://scontent.fhan3-5.fna.fbcdn.net/v/t1.15752-9/330936447_1348756212631608_7993833024753536847_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeHVUuSma7Zto3VAOnL3l-ndFYLwxexPPcIVgvDF7E89wmo3BTW3JoVWCAzpg_c4SNcdhcNobrNh8PRXKvs4m73a&_nc_ohc=frRJy9Caia0AX-ERzZs&_nc_ht=scontent.fhan3-5.fna&oh=03_AdQszVJ26INyEbx0rxiG6bVulAUOu3JeIYe01TcyGnb-Qg&oe=658C413E"],
    description: "Sản phẩm thích hợp để mua tặng người yêu",
    inStock: 5
  }
];

export default products;