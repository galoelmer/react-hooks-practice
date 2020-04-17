// eslint-disable-next-line
import React, { Component, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

// class BookList extends Component {
//   static contextType = ThemeContext;
//   render() {
//     const { isLightTheme, light, dark } = this.context;
//     const theme = isLightTheme ? light : dark;
//     return (
//       <div
//         className="book-list"
//         style={{ color: theme.syntax, background: theme.bg }}
//       >
//         <ul>
//           <li style={{ background: theme.ui }}>Book 2</li>
//           <li style={{ background: theme.ui }}>Book 3</li>
//           <li style={{ background: theme.ui }}>Book 1</li>
//         </ul>
//       </div>
//     );
//   }
// }

// Implementing functional componets with useContext hook
const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div
      className="book-list"
      style={{ color: theme.syntax, background: theme.bg }}
    >
      <ul>
        <li style={{ background: theme.ui }}>Book 2</li>
        <li style={{ background: theme.ui }}>Book 3</li>
        <li style={{ background: theme.ui }}>Book 1</li>
      </ul>
    </div>
  );
};

export default BookList;
