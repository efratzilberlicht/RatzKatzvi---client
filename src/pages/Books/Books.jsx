import React from "react";
import { useSelector } from 'react-redux'
import Filter from "../../components/global/Filter/Filter";
import Book from "./Book";
import "./Books.css";


const booksList = [
  {
    ItemId: 2,
    ImgUrl: "./images/אקטואליה.png",
    ContextUrl: "./images/אקטואליה בהלכה א.pdf",
    ItemName: "אקטואליה בהלכה - א",
  },
  {
    ItemId: 4,
    ImgUrl: "./images/אקטואליה-ב.png",
    ContextUrl: "./images/אקטואליה בהלכה ב.pdf",
    ItemName: "אקטואליה בהלכה - ב",
  },
  {
    ItemId: 5,
    ImgUrl: "./images/קטן-בהלכה-א.png",
    ContextUrl: "./images/קטן בהלכה א.pdf",
    ItemName: "קטן בהלכה - א",
  },
  {
    ItemId: 6,
    ImgUrl: "./images/קטן-בהלכה-ב.png",
    ContextUrl: "./images/קטן בהלכה ב.pdf",
    ItemName: "קטן בהלכה - ב",
  },
  {
    ItemId: 7,
    ImgUrl: "./images/ענייני-נשים-א.png",
    ContextUrl: "./images/נשים-א.pdf",
    ItemName: "עניני נשים בהלכה - א",
  },
  {
    ItemId: 8,
    ImgUrl: "./images/ענייני-נשים-ב.png",
    ContextUrl: "./images/נשים-ב.pdf",
    ItemName: "עניני נשים בהלכה - ב",
  },
  {
    ItemId: 9,
    ImgUrl: "./images/av.png",
    ContextUrl: "./images/אבלות.pdf",
    ItemName: "אבלות",
  },
  // {
  //   ItemId: 10,
  //   ImgUrl: "./images/eitanim.png",
  //   ContextUrl: "./images/שבת.pdf",
  //   ItemName: "שבת",
  // },
  {
    ItemId: 11,
    ImgUrl: "./images/eitanim.png",
    ContextUrl: "./images/ירח-האיתנים.pdf",
    ItemName: "ירח האיתנים",
  },
  // {
  //   ItemId: 12,
  //   ImgUrl: "./images/chanuka.png",
  //   ContextUrl: "./images/חנוכה-פורים.pdf",
  //   ItemName: "חנוכה - פורים",
  // },
  // {
  //   ItemId: 13,
  //   ImgUrl: "./images/פסח-שבועות.png",
  //   ContextUrl: "./images/פסח שבועות.pdf",
  //   ItemName: "פסח - שבועות",
  // },
  // {
  //   ItemId: 14,
  //   ImgUrl: "./images/עניני-אבלות.png",
  //   ContextUrl: "./images/download book - simulation.pdf",
  //   ItemName: "עניני אבלות",
  // },
  // {
  //   ItemId: 15,
  //   ImgUrl: "./images/פסח-יום-טוב.png",
  //   ContextUrl: "./images/download book - simulation.pdf",
  //   ItemName: "פסח - יום טוב",
  // },
  {
    ItemId: 16,
    ImgUrl: "./images/מעגל-השנה-א.png",
    ContextUrl: "./images/במעגלי השנה-חלק א.pdf",
    ItemName: "במעגלי השנה - א",
  },
  {
    ItemId: 17,
    ImgUrl: "./images/מעגל-השנה-ב.png",
    ContextUrl: "./images/במעגלי השנה-חלק ב.pdf",
    ItemName: "במעגלי השנה - ב",
  },
  {
    ItemId: 18,
    ImgUrl: "./images/הדמיה רץ כצבי פוריות 2.png",
    ContextUrl: "./images/פוריות אבן העזר א.pdf",
    ItemName: "אבן העזר - א",
  },
  {
    ItemId: 19,
    ImgUrl: "./images/הדמיה רץ כצבי פוריות 2.png",
    ContextUrl: "./images/פוריות אבן העזר - ב.pdf",
    ItemName: "אבן העזר - ב",
  },
  {
    ItemId: 20,
    ImgUrl: "./images/חדשי-השנה-א.png",
    ContextUrl: "./images/פרקי מחשבה א.pdf",
    ItemName: "פרקי מחשבה על חודשי השנה - א",
  },
  {
    ItemId: 21,
    ImgUrl: "./images/חודשי-השנה-ב.png",
    ContextUrl: "./images/פרקי מחשבה ב.pdf",
    ItemName: "פרקי מחשבה על חודשי השנה - ב",
  },
  {
    ItemId: 22,
    ImgUrl: "./images/חדשי-השנה-ג.png",
    ContextUrl: "./images/פרקי מחשבה ג.pdf",
    ItemName: "פרקי מחשבה על חודשי השנה - ג",
  },
  // {
  //   ItemId: 23,
  //   ImgUrl: "./images/eitanim.png",
  //   ContextUrl: "./images/download book - simulation.pdf",
  //   ItemName: "שנות חיים",
  // },
  // {
  //   ItemId: 24,
  //   ImgUrl: "./images/eitanim.png",
  //   ContextUrl: "./images/download book - simulation.pdf",
  //   ItemName: "קונטרס ברית מילה",
  // },
];

export default function Books(props) {
//  const {booksList} = useSelector((state) => state.reducer);
  return (
    <div>
      <Filter props={"ספרים"} />
      <div id="bookList">     
        {booksList.map((book) => (
          <Book book={book} key={book.ItemId} />
        ))}
      </div>
    </div>
  );
}
