// 날짜 : 2021.12.28
// 작성자 : 권태욱
// 내용 : 전역으로 사용 될 css 설정 파일 입니다.

// 날짜 : 2021.12.31
// 작성자 : 정혜민
// 내용 : 전역으로 사용될 css 설정완료

import { css } from "@emotion/react";
import "antd/dist/antd.css";

export const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }
  body {
    font-size: 1rem;
  }

  body.fp-viewing-0 header {
    background: none;
  }
  body.fp-viewing-0 header h1 button {
    background-image: url("/images/common/logo.png");
  }

  html {
    font-size: 100%;
  }

  @media all and (min-width: 1024px) {
    html {
      font-size: 16px;
    }
  }

  @media all and (max-width: 969px) {
    html {
      font-size: 14px;
    }
  }

  @media all and (max-width: 767px) {
    html {
      font-size: 13px;
    }
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-family: "Noto Sans CJK KR", sans-serif;
    // font-size: 100%;
    font-weight: normal;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a,
  a:hover {
    color: #111;
  }
  button {
    background: none;
    outline: none;
    cursor: pointer;
  }
`;
