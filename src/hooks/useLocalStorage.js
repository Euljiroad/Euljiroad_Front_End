import { useState, useEffect } from "react";

function useLocalStorage(key, initialState) {
  const [state, setState] = useState(
    () => JSON.parse(window.localStorage.getItem(key)) || initialState
  );

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default useLocalStorage;


/* 
(카드를 체크했을때 체크 여부를 클라이언트에서 확인하기 위해 사용합니다.) - no json file

//useLocalStorage function 사용 예시
//

function Switch() {
  const [on, setOn] = useLocalStorage("on", false);

  return <button onClick={() => setOn(!on)}>{on ? "ON" : "OFF"}</button>;
}
*/