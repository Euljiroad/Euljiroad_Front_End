import React from "react";
import Deck from "./components/Deck";
import "./styles/Deck.css";
//import 'bootstrap/dist/css/bootstrap.css'; - bootstrap 사용시 초기 css 무너질 수 있음 -> tailwind, scss에 익숙해져보는 것도 좋을듯 
//card flip 사용하고 싶으면 bootstrap 보다 바닐라css나 tailwind가 나을듯함 -> 현재 의존성 문제 발생으로 강제 인스톨한 상태 (https://www.youtube.com/watch?v=CC78NrgZkY8 참조)




/* 

 */
//one page spa
const App = () => {

return(
<>
<h1>을지로드</h1>
<h4>11:30 BC인의 선택</h4>

<Deck />
</>
)
}

export default App;