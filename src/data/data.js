import placeholderImage from "../assets/images/avatar-1.png";
import placeholderImageMarketplace from "../assets/images/marketplace-img-1.png";
import placeholderImageGroup from "../assets/images/group-img-1.png";
import placeholderImageAvatarGroup from "../assets/images/group-avatar-1.png";
import postImage1 from "../assets/images/post-img-1.png";

const feedsHome = [
  {
    type: "text/image",
    content: {
      author: "Lori Cortez",
      text: "I created Roughly plugin to sketch crafted hand-drawn elements which can be used to any usage (diagrams/flows/decoration/etc)",
      img: postImage1,
    },
    like: 4,
    comment: [null],
    shares: 1,
  },
  {
    type: "text/images",
    content: {
      author: "Lori Cortez",
    },
  },
];

const requestContact = {
  total: 2,
  people: [
    {
      name: "Haris Maulana",
      mutual_friend: "10 mutual friends",
      img: placeholderImage,
    },
    {
      name: "Marinez",
      mutual_friend: "8 mutual friends",
      img: placeholderImage,
    },
  ],
};

const contactPeople = [
  {
    name: "Piter Maio",
    img: placeholderImage,
  },
  {
    name: "John Doe",
    img: placeholderImage,
  },
  {
    name: "Jane Smith",
    img: placeholderImage,
  },
  {
    name: "Sarah Johnson",
    img: placeholderImage,
  },
  {
    name: "Michael Brown",
    img: placeholderImage,
  },
  {
    name: "Olivia Wilson",
    img: placeholderImage,
  },
  {
    name: "David Lee",
    img: placeholderImage,
  },
  {
    name: "Ava Davis",
    img: placeholderImage,
  },
  {
    name: "Robert Taylor",
    img: placeholderImage,
  },
  {
    name: "Sophia Miller",
    img: placeholderImage,
  },
  {
    name: "William Johnson",
    img: placeholderImage,
  },
  {
    name: "Emily White",
    img: placeholderImage,
  },
];

const product = [
  {
    name: "Men's Watch",
    price: "$49",
    seller: "Travel Moon",
    brand: "Zara",
    rating: 5,
    img: placeholderImageMarketplace,
  },
  {
    name: "Women's Sunglasses",
    price: "$29",
    seller: "Fashion Trends",
    brand: "Ray-Ban",
    rating: 4.7,
    img: placeholderImageMarketplace,
  },
  {
    name: "Wireless Headphones",
    price: "$79",
    seller: "Tech Haven",
    brand: "Sony",
    rating: 4.8,
    img: placeholderImageMarketplace,
  },
  {
    name: "Laptop Backpack",
    price: "$39",
    seller: "Gear Up",
    brand: "HP",
    rating: 4.5,
    img: placeholderImageMarketplace,
  },
  {
    name: "Smartphone Case",
    price: "$19",
    seller: "Gadget World",
    brand: "Apple",
    rating: 4.9,
    img: placeholderImageMarketplace,
  },
  {
    name: "Men's Shoes",
    price: "$59",
    seller: "Footwear Express",
    brand: "Nike",
    rating: 4.6,
    img: placeholderImageMarketplace,
  },
  {
    name: "Digital Camera",
    price: "$399",
    seller: "Camera Corner",
    brand: "Canon",
    rating: 4.7,
    img: placeholderImageMarketplace,
  },
  {
    name: "Cookware Set",
    price: "$99",
    seller: "Kitchen Essentials",
    brand: "Cuisinart",
    rating: 4.8,
    img: placeholderImageMarketplace,
  },
  {
    name: "Women's Handbag",
    price: "$69",
    seller: "Fashion Haven",
    brand: "Coach",
    rating: 4.6,
    img: placeholderImageMarketplace,
  },
  {
    name: "Bluetooth Speaker",
    price: "$59",
    seller: "Soundwave",
    brand: "JBL",
    rating: 4.5,
    img: placeholderImageMarketplace,
  },
  {
    name: "Gaming Console",
    price: "$299",
    seller: "GameZone",
    brand: "Sony PlayStation",
    rating: 4.9,
    img: placeholderImageMarketplace,
  },
  {
    name: "Fitness Tracker",
    price: "$49",
    seller: "Active Life",
    brand: "Fitbit",
    rating: 4.7,
    img: placeholderImageMarketplace,
  },
  {
    name: "Home Theater System",
    price: "$499",
    seller: "Audio Paradise",
    brand: "Samsung",
    rating: 4.8,
    img: placeholderImageMarketplace,
  },
  {
    name: "Coffee Maker",
    price: "$29",
    seller: "Brew Masters",
    brand: "Keurig",
    rating: 4.6,
    img: placeholderImageMarketplace,
  },
  {
    name: "Men's T-Shirt",
    price: "$19",
    seller: "Fashion World",
    brand: "Adidas",
    rating: 4.5,
    img: placeholderImageMarketplace,
  },
  {
    name: "Tablet Computer",
    price: "$199",
    seller: "Tech Universe",
    brand: "Samsung",
    rating: 4.9,
    img: placeholderImageMarketplace,
  },
];

const group = [
  {
    name: "Travel moon",
    type: "Public Group",
    member: "30k member",
    cover: placeholderImageGroup,
    avatar: placeholderImageAvatarGroup,
  },
  {
    name: "Car Legend Community",
    type: "Public Group",
    member: "30k member",
    cover: placeholderImageGroup,
    avatar: placeholderImageAvatarGroup,
  },
  {
    name: "Travel World",
    type: "Public Group",
    member: "30k member",
    cover: placeholderImageGroup,
    avatar: placeholderImageAvatarGroup,
  },
  {
    name: "Beatty Community",
    type: "Public Group",
    member: "30k member",
    cover: placeholderImageGroup,
    avatar: placeholderImageAvatarGroup,
  },
  {
    name: "Event Group",
    type: "Public Group",
    member: "30k member",
    cover: placeholderImageGroup,
    avatar: placeholderImageAvatarGroup,
  },
  {
    name: "Fun Make Society",
    type: "Public Group",
    member: "30k member",
    cover: placeholderImageGroup,
    avatar: placeholderImageAvatarGroup,
  },
  {
    name: "Travel Africa",
    type: "Public Group",
    member: "30k member",
    cover: placeholderImageGroup,
    avatar: placeholderImageAvatarGroup,
  },
  {
    name: "Travel Asia",
    type: "Public Group",
    member: "30k member",
    cover: placeholderImageGroup,
    avatar: placeholderImageAvatarGroup,
  },
  {
    name: "Fashion Hop",
    type: "Public Group",
    member: "30k member",
    cover: placeholderImageGroup,
    avatar: placeholderImageAvatarGroup,
  },
  {
    name: "Topa Wijaya",
    type: "Public Group",
    member: "100k member",
    cover: placeholderImageGroup,
    avatar: placeholderImageAvatarGroup,
  },
];

const dataDelivery = {
  rows: [
    {
      no_Do: "DO/223/33173",
      pembeli: "CAHAYA TEKNINDO MAJU MANDIRI",
      metode_pengiriman: "Cargo",
      alamat_pengiriman: "JL RAWA BUAYA OUTER RING ROAD",
      tanggal_pembuatan: "09 December 2023",
      status_pesanan: "on delivery",
      detail_pesanan_produk: [
        {
          product: "V. Sock AW 6 x 5, Rucika",
          kuantitas_1: 0,
          kuantitas_2: 0,
          kuantitas_3: 100,
        },
        {
          product: "V. Sock AW 6 x 5, Rucika",
          kuantitas_1: 0,
          kuantitas_2: 0,
          kuantitas_3: 100,
        },
      ],
    },

    {
      no_Do: "DO/223/33164",
      pembeli: "TUNAS WIKARYA PERWITA",
      metode_pengiriman: "Cargo",
      alamat_pengiriman: "JL KH WAHID HASYIM",
      tanggal_pembuatan: "09 December 2023",
      status_pesanan: "on delivery",
      detail_pesanan_produk: [
        {
          product: "Knie 90 AW 3, Rucika",
          kuantitas_1: 0,
          kuantitas_2: 0,
          kuantitas_3: 12,
        },
        {
          product: "Knie 90 AW 3, Rucika",
          kuantitas_1: 0,
          kuantitas_2: 0,
          kuantitas_3: 12,
        },
      ],
    },
    {
      no_Do: "DO/223/33083",
      pembeli: "IKAGRIYA DARMAPERSADA",
      metode_pengiriman: "Cargo",
      alamat_pengiriman: "Container address 1",
      tanggal_pembuatan: "09 December 2023",
      status_pesanan: "on delivery",
      detail_pesanan_produk: [
        {
          product: "Coupler conduit 20mm, Andaru",
          kuantitas_1: 0,
          kuantitas_2: 0,
          kuantitas_3: 30,
        },
        {
          product: "Coupler conduit 20mm, Andaru",
          kuantitas_1: 0,
          kuantitas_2: 0,
          kuantitas_3: 30,
        },
      ],
    },
    {
      no_Do: "DO/223/33129",
      pembeli: "MAJUMAPAN BANGUNINDO",
      metode_pengiriman: "Cargo",
      alamat_pengiriman: "Container address 1",
      tanggal_pembuatan: "09 December 2023",
      status_pesanan: "on delivery",
      detail_pesanan_produk: [
        {
          product: "Pipa PVC D 3, Supramas",
          kuantitas_1: 0,
          kuantitas_2: 0,
          kuantitas_3: 25,
        },
        {
          product: "Pipa PVC D 3, Supramas",
          kuantitas_1: 0,
          kuantitas_2: 0,
          kuantitas_3: 25,
        },
      ],
    },
    {
      no_Do: "DO/223/33127",
      pembeli: "SUMBER KARYA SENTOSA",
      metode_pengiriman: "Cargo",
      alamat_pengiriman: "Container address 1",
      tanggal_pembuatan: "09 December 2023",
      status_pesanan: "on delivery",
      detail_pesanan_produk: [
        {
          product: "Dop AW 2, Rucika",
          kuantitas_1: 0,
          kuantitas_2: 0,
          kuantitas_3: 20,
        },
        {
          product: "Dop AW 2, Rucika",
          kuantitas_1: 0,
          kuantitas_2: 0,
          kuantitas_3: 20,
        },
      ],
    },
    {
      no_Do: "DO/223/33165",
      pembeli: "INTINUSA TEKNIK SEJAHTERA",
      metode_pengiriman: "Cargo",
      alamat_pengiriman: "Container address 1",
      tanggal_pembuatan: "09 December 2023",
      status_pesanan: "on delivery",
      detail_pesanan_produk: [
        {
          product: "Knie 90 D 2, Rucika",
          kuantitas_1: 0,
          kuantitas_2: 0,
          kuantitas_3: 6,
        },
        {
          product: "Knie 90 D 2, Rucika",
          kuantitas_1: 0,
          kuantitas_2: 0,
          kuantitas_3: 6,
        },
        {
          product: "Knie 90 D 2, Rucika",
          kuantitas_1: 0,
          kuantitas_2: 0,
          kuantitas_3: 6,
        },
        {
          product: "Knie 90 D 2, Rucika",
          kuantitas_1: 0,
          kuantitas_2: 0,
          kuantitas_3: 6,
        },
      ],
    },
  ],
};

export {
  feedsHome,
  contactPeople,
  requestContact,
  product,
  group,
  dataDelivery,
};
