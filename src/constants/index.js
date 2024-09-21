import {
  friendGroupIcon,
  headphoneIcon,
  newsIcon,
  skyIcon,
  starIcon,
  commentIcon,
  youtubeIcon,
  cartIcon,
  storyImg1,
  storyImg2,
  storyImg3,
  storyImg5,
  storyImg6,
  storyImg7,
  storyImg8,
  user6,
  user3,
  user2,
  smileEmoji,
  cryEmoji,
  angryEmoji,
  wowEmoji,
  loveEmoji,
  hahaEmoji,
  calenderIcon,
  gameIcon,
  happyPost,
  beachPost3,
  beachPost2,
  naturePost1,
  naturePost3,
  naturePost2,
  friendMen1,
  friendLady1,
  friendMen2,
  friendMen3,
  friendLady2,
  friendLady3,
  friendMen4,
  friendLady4,
  pageLogo1,
  pageLogo2,
  pageLogo3,
  pageLogo4,
  pageLogo5,
  game1,
  game2,
  game3,
  game4,
  game5,
  game6,
  storyImg4,
} from "@/assets";
import { GrLocation } from "react-icons/gr";
import { HiOutlineTag } from "react-icons/hi";
import { IoCameraOutline } from "react-icons/io5";

export const recentSearch = [
  {
    name: "Page Turner",
    picture: "/src/assets/user-sm/image-3.webp",
    friends: 3,
  },
  {
    name: "Jessica Dunner",
    picture: "/src/assets/user-sm/image-2.webp",
    friends: 5,
  },
  {
    name: "Jude Adams",
    picture: "/src/assets/user-sm/image-1.webp",
    friends: 1,
  },
];

export const sidebar = [
  {
    name: "Newsfeed",
    icon: newsIcon,
  },
  {
    name: "Favorite",
    icon: starIcon,
  },
  {
    name: "Group",
    icon: friendGroupIcon,
  },
  {
    name: "Music & Video",
    icon: headphoneIcon,
  },
  {
    name: "Weather",
    icon: skyIcon,
  },
  {
    name: "Calender",
    icon: calenderIcon,
  },
  {
    name: "Games",
    icon: gameIcon,
  },
  {
    name: "News",
    icon: commentIcon,
  },
  {
    name: "Live Streams",
    icon: youtubeIcon,
  },
  {
    name: "Shop",
    icon: cartIcon,
  },
];

export const stories = [
  {
    name: "Scarlett Lewis",

    picture: storyImg6,
    color: ["0deg", "#e18d1e", "rgba(0, 212, 255, 0)"],
  },
  {
    name: "Charlotte White",

    picture: storyImg2,
    color: ["0deg", "#ed8079", "rgba(0,212,255,0)"],
  },
  {
    name: "Aria Robinson",

    picture: storyImg1,
    color: ["0deg", "#a38a7b", "rgba(0,212,255,0)"],
  },
  {
    name: "Gabriel Phillips",

    picture: storyImg3,
    color: ["0deg", "#fcd101", "rgba(0, 212, 255, 0)"],
  },
  {
    name: "Stella Adams",

    picture: storyImg5,
    color: ["0deg", "#ed8079", "rgba(0, 212, 255, 0)"],
  },
  {
    name: "Layla Scott",

    picture: storyImg7,
    color: ["0deg", "#174d76", "rgba(0,212,255,0)"],
  },
  {
    name: "Dylan Edwards",

    picture: storyImg8,
    color: ["0deg", "rgba(0,0,0, 1)", "rgba(0, 212, 255, 0)"],
  },
];

export const colors = [
  {
    first: "#fad0c4",
    last: "#ffd1ff",
  },
  {
    first: "#cfd9df",
    last: "#e2ebf0",
  },
  {
    first: "#fdfbfb",
    last: "#ebedee",
  },
  {
    first: "#a8edea",
    last: "#fed6e3",
  },
  {
    first: "#fdfcfb",
    last: "#e2d1c3",
  },
  {
    first: "#fff1eb",
    last: "#ace0f9",
  },
  {
    first: "#e9defa",
    last: "#fbfcdb",
  },
  {
    first: "#eec0c6",
    last: "#7ee8fa",
  },
  {
    first: "#abe9cd",
    last: "#3eadcf",
  },
  {
    first: "#f6f0c4",
    last: "#d99ec9",
  },
  {
    first: "#d9e4f5",
    last: "#f5e3e6",
  },
  {
    first: "#e4eee9",
    last: "#93a5ce",
  },
  {
    first: "#f3e7e9",
    last: "#e3eeff",
  },
  {
    first: "#e9defa",
    last: "#fbfcdb",
  },
];

export const reactions = [
  {
    name: "Album",
    icon: IoCameraOutline,
  },
  {
    name: "Feelings & Activity",
    icon: IoCameraOutline,
    placeholder: "How are you feeling?",
  },
  {
    name: "Check In",
    icon: GrLocation,
    placeholder: "Search For Places...",
  },
  {
    name: "Tag Friends",
    icon: HiOutlineTag,
    placeholder: "Search Your Friends...",
  },
];

export const people = [user6, user3, user2];

export const emojiType = [
  {
    smile: smileEmoji,
  },
  {
    cry: cryEmoji,
  },
  {
    angry: angryEmoji,
  },
  {
    wow: wowEmoji,
  },
  {
    love: loveEmoji,
  },
  {
    haha: hahaEmoji,
  },
];

export const emojis = [
  {
    name: "smile",
    img: smileEmoji,
  },
  {
    name: "cry",
    img: cryEmoji,
  },
  {
    name: "angry",
    img: angryEmoji,
  },
  {
    name: "wow",
    img: wowEmoji,
  },
  {
    name: "love",
    img: loveEmoji,
  },
  {
    name: "haha",
    img: hahaEmoji,
  },
];

export const allPosts = [
  {
    id: "70137403719",
    name: "John Doe",
    profilePicture: "https://randomuser.me/api/portraits/men/1.jpg",
    timePosted: "2024-09-18T14:30:00Z",
    postImages: [happyPost],

    postTitle: "Celebrating My Son's Birthday!",
    postHashtags: ["#Birthday", "#Son", "#Family", "#Joy"],
    postDescription:
      "Had an amazing time celebrating my son's birthday with family and friends! The joy and laughter made it an unforgettable day.",
    numberOfPostReactions: "120",
    numberOfShares: "30",
    postReactions: ["love", "wow", "smile"],
    comments: [
      {
        id: 23223,
        commenterName: "Alice Smith",
        profilePicture: "https://randomuser.me/api/portraits/women/2.jpg",
        message: "Looks incredible! I need to go there!",
        timePosted: "2024-09-18T15:00:00Z",
        repliedComment: [
          {
            id: 88783,
            replierName: "John Doe",
            profilePicture: "https://randomuser.me/api/portraits/men/1.jpg",
            message: "You should! It's worth it!",
            timePosted: "2024-09-18T15:05:00Z",
          },
        ],
      },
    ],
  },
  {
    id: "70137403720",
    name: "Jane Smith",
    profilePicture: "https://randomuser.me/api/portraits/women/3.jpg",
    timePosted: "2024-09-19T10:15:00Z",
    postImages: [],
    postTitle: "Chasing Dreams: The Power of Belief and Determination",
    postHashtags: ["#Motivation", "#Inspiration", "#Goals"],
    postDescription:
      "Believe you can and you're halfway there. Let's keep pushing towards our dreams!",
    numberOfPostReactions: "85",
    numberOfShares: "12",
    postReactions: ["love", "smile"],
    comments: [
      {
        id: 23224,
        commenterName: "Mike Johnson",
        profilePicture: "https://randomuser.me/api/portraits/men/4.jpg",
        message: "Absolutely! Thanks for the reminder.",
        timePosted: "2024-09-19T10:20:00Z",
        repliedComment: [],
      },
    ],
  },
  {
    id: "70137403721",
    name: "Emily Davis",
    profilePicture: "https://randomuser.me/api/portraits/women/5.jpg",
    timePosted: "2024-09-20T08:45:00Z",
    postImages: [beachPost3, beachPost2],
    postTitle: "A Day at the Beach",
    postHashtags: ["#BeachDay", "#Sunshine", "#Relaxation", "#Summer"],
    postDescription:
      "Nothing beats a day at the beach with friends. Sun, sand, and laughter!",
    numberOfPostReactions: "200",
    numberOfShares: "50",
    postReactions: ["love", "haha", "smile"],
    comments: [
      {
        id: 23225,
        commenterName: "Sarah Lee",
        profilePicture: "https://randomuser.me/api/portraits/women/6.jpg",
        message: "Looks like so much fun! I wish I was there!",
        timePosted: "2024-09-20T09:00:00Z",
        repliedComment: [
          {
            id: 88784,
            replierName: "Emily Davis",
            profilePicture: "https://randomuser.me/api/portraits/women/5.jpg",
            message: "You should join us next time!",
            timePosted: "2024-09-20T09:05:00Z",
          },
        ],
      },
    ],
  },
  {
    id: "70137403722",
    name: "Michael Brown",
    profilePicture: "https://randomuser.me/api/portraits/men/7.jpg",
    timePosted: "2024-09-21T16:00:00Z",
    postImages: [naturePost3, naturePost1, naturePost2],
    postTitle:
      "Exploring the Majestic Beauty of Nature and Its Scenic Landscapes",
    postHashtags: ["#Nature", "#Exploration", "#Adventure", "#Beauty"],
    postDescription:
      "Explored the great outdoors and marveled at the stunning landscapes. Every moment in nature was a reminder of its beauty and serenity!",
    numberOfPostReactions: "150",
    numberOfShares: "25",
    postReactions: ["love", "smile"],
    comments: [
      {
        id: 23226,
        commenterName: "Laura Wilson",
        profilePicture: "https://randomuser.me/api/portraits/women/8.jpg",
        message: "That looks amazing! Can you share the recipe?",
        timePosted: "2024-09-21T16:15:00Z",
        repliedComment: [],
      },
    ],
  },
  {
    id: "70137403723",
    name: "Sophia Turner",
    profilePicture: "https://randomuser.me/api/portraits/women/9.jpg",
    timePosted: "2024-09-22T12:30:00Z",
    postImages: [],
    postTitle: "Artistic Expressions",
    postHashtags: ["#Art", "#Creativity", "#Inspiration", "#Design"],
    postDescription:
      "Explored my creative side today and painted a new piece. Art is a wonderful form of expression!",
    numberOfPostReactions: "90",
    numberOfShares: "15",
    postReactions: ["love", "wow", "smile"],
    comments: [
      {
        id: 23227,
        commenterName: "Emily Davis",
        profilePicture: "https://randomuser.me/api/portraits/women/5.jpg",
        message: "Beautiful work! You're so talented!",
        timePosted: "2024-09-22T12:45:00Z",
        repliedComment: [
          {
            id: 88785,
            replierName: "Sophia Turner",
            profilePicture: "https://randomuser.me/api/portraits/women/9.jpg",
            message: "Thank you! I appreciate it!",
            timePosted: "2024-09-22T12:50:00Z",
          },
        ],
      },
    ],
  },
];

export const friendsSuggest = [
  {
    name: "Justin Mandes",
    picture: friendMen1,
  },
  {
    name: "Harper Thomas",
    picture: friendLady1,
  },
  {
    name: "Noah Rodriguez",
    picture: friendMen2,
  },
  {
    name: "Benjamin Young",
    picture: friendMen3,
  },
  {
    name: "Amelia Anderson",
    picture: friendLady2,
  },
  {
    name: "Abigail Garcia",
    picture: friendLady3,
  },
  {
    name: "Liam Miller",
    picture: friendMen4,
  },
  {
    name: "Isabella Wilson",
    picture: friendLady4,
  },
];

export const pagesLiked = [
  {
    name: "Chrimson Agency",
    logo: pageLogo1,
    desc: "Clothing Store",
    followers: "15",
  },
  {
    name: "Digital Pixel",
    logo: pageLogo2,
    desc: "Software Company",
    followers: "128",
  },
  {
    name: "The Angle Bar",
    logo: pageLogo3,
    desc: "Disco Bar",
    followers: "6",
  },
  {
    name: "The Fivestar Food",
    logo: pageLogo4,
    desc: "Restaurant Food",
    followers: "29",
  },
  {
    name: "Royal Watch",
    logo: pageLogo5,
    desc: "Watch Shop",
    followers: "33",
  },
];

export const games = [
  {
    name: "Blood Strike",
    followers: "22.7",
    picture: game1,
  },
  {
    name: "Aero Space",
    followers: "40.8",
    picture: game2,
  },
  {
    name: "Gravick",
    followers: "60",
    picture: game3,
  },
  {
    name: "Eden Blood",
    followers: "97.2",
    picture: game4,
  },
  {
    name: "Star Wars",
    followers: "200.6",
    picture: game5,
  },
  {
    name: "Super Mario",
    followers: "354.8",
    picture: game6,
  },
];

export const galleryPhotos = [
  {
    picture: storyImg1,
  },
  {
    picture: storyImg2,
  },
  {
    picture: storyImg3,
  },
  {
    picture: storyImg4,
  },
  {
    picture: storyImg5,
  },
  {
    picture: storyImg6,
  },
];
