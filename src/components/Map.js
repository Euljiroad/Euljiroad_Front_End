/*global kakao*/ 
import React, { useEffect } from 'react'

const Map=({i, data})=>{
  const {lat, lng} = data[i];
  var divId = "map" + i.toString()
  useEffect(()=>{
    var container = document.getElementById(divId);
    var options = {
      center: new kakao.maps.LatLng(lat, lng),
      level: 3
    };

    var map = new kakao.maps.Map(container, options);

    map.setDraggable(false); //드래그 막기
    map.setZoomable(false); //줌 막기

    var markerPosition  = new kakao.maps.LatLng(lat, lng); 
    var marker = new kakao.maps.Marker({
      position: markerPosition
    });
    marker.setMap(map);

    }, [lat, lng, divId])

    return (
        <div>
            <div id={divId} style={{height: "380px", width: "290px"}}></div>
        </div>
    )
}

export default Map;