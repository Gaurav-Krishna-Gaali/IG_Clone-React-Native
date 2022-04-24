import { USERS } from "../data/users";

export const POSTS = [
  {
    imageurl:
      "https://www.fashionbeans.com/wp-content/uploads/2021/07/harveyspec-img-1.jpg",
    user: USERS[0].user,
    likes: 123,
    caption: "CLubs is where we live",
    profile_picture: USERS[0].image,
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
      "https://www.socialketchup.in/wp-content/uploads/2020/02/Harvey-Specter-quotes.jpg",
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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkjNbe2ptSR-IDM5vn8n6NGgz9wq1VRQR_lA&usqp=CAU",
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
