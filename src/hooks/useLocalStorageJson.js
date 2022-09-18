import { useState, useEffect } from "react";

function useLocalStorageJson(id) {

    let [watchItem, setWatch] = useState([]);

    useEffect(() => {
        let watch = localStorage.getItem("watched");
        if (watch == null) {
            watch = [];
        } else {
            watch = JSON.parse(watch);
        }
        watch.push(id);
        if (watch.length <= 10) {
            watch = new Set(watch);
            watch = [...watch];
        }
        localStorage.setItem("watched", JSON.stringify(watch));
        setWatch(watch);
    }, []);

}
  
export default useLocalStorageJson;

//localStorage에 "watched"라는 key에 json 데이터를 중복없이 저장하는 메소드