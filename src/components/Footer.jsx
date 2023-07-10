import React from 'react';

let year = new Date().getFullYear();

export default function Footer() {
  return <footer>copyright {year}, CodeBustler</footer>;
}
