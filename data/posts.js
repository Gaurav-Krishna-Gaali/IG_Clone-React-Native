import { USERS } from "../data/users";

export const POSTS = [
  {
    imageurl:
      "https://www.fashionbeans.com/wp-content/uploads/2021/07/harveyspec-img-1.jpg",
    user: USERS[0].user,
    likes: 123,
    caption:
      " Outside my misery, I think I'll find a way of envisioning , the better lies 🔥",
    profile_picture: USERS[0].image,
    comments: [
      {
        user: "gaurav",
        comment: " Damn, man crazy.",
      },
      {
        user: "ferb",
        comment: " I kNow what were you doing",
      },
      {
        user: "ferb",
        comment: " you .✨✨",
      },
    ],
  },
  {
    imageurl:
      "https://www.indiewire.com/wp-content/uploads/2020/08/phineas-and-ferb-the-movie-candace-against-the-universe-1.jpg?w=780",
    user: USERS[1].user,
    likes: 8875,
    caption: "CLubs is where we live",
    profile_picture: USERS[1].image,
    comments: [
      {
        user: "gaurav",
        comment: "Damn, man crazy.",
      },
      {
        user: "ferb",
        comment: "I kNow what were you doing",
      },
    ],
  },
  {
    imageurl:
      "https://media.newyorker.com/photos/61e87281b67066a13fd20ea8/4:3/w_2271,h_1703,c_limit/Caesar-Ronaldo.jpg",
    user: USERS[2].user,
    likes: 875,
    caption: "CLubs is where we live",
    profile_picture: USERS[2].image,
    comments: [
      {
        user: "gaurav",
        comment: "Damn, man crazy.",
      },
      {
        user: "ferb",
        comment: "I kNow what were you doing",
      },
    ],
  },
];
