(function ($) {
  'use strict';

  const MODAL_CONTENT_ID = '#js-modal-button-target';

  if ($("#js-modal-target").length > 0) {
    $("#js-modal-target").modaal({
        content_source: MODAL_CONTENT_ID
    });
  }

  if ($("#js-modal-button").length > 0) {
    $("#js-modal-button").modaal({
        content_source: MODAL_CONTENT_ID
    });
  }

  
})(jQuery);
const RADTODEG = 180 / Math.PI;

// Function to set latitude, longitude, and zoom level in cookies
function setMapCookie(lat, lng, zoom) {
    document.cookie = `latitude=${lat}; path=/; domain=${window.location.hostname}`;
    document.cookie = `longitude=${lng}; path=/; domain=${window.location.hostname}`;
    document.cookie = `zoom=${zoom}; path=/; domain=${window.location.hostname}`;
}

// Function to get latitude, longitude, and zoom level from cookies
function getMapCookie() {
    const cookies = document.cookie.split(';');
    let latitude, longitude, zoom;
    cookies.forEach(cookie => {
        const [key, value] = cookie.trim().split('=');
        if (key === 'latitude') {
            latitude = parseFloat(value);
        } else if (key === 'longitude') {
            longitude = parseFloat(value);
        } else if (key === 'zoom') {
            zoom = parseFloat(value);
        }
    });

    // Check if all required values are present
    if (!isNaN(latitude) && !isNaN(longitude) && !isNaN(zoom)) {
        return { latitude, longitude, zoom };
    } else {
        return {};
    }
}

// Retrieve latitude, longitude, and zoom level from cookies
const initialMapSettings = getMapCookie();

// Set initial map view with latitude, longitude, and zoom level from cookies
const map = L.map('map').setView(
    [
        initialMapSettings.latitude || 35.6895,
        initialMapSettings.longitude || 139.6917
    ],
    initialMapSettings.zoom || 16
);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Remove existing zoom control (if any)
map.zoomControl.remove();

// Add zoom control to the specified position (default: 'bottomright')
L.control.zoom({ position: initialMapSettings.position || 'bottomright' }).addTo(map);

// Check if the user has moved the marker at least once
let markerMoved = false;

const marker = L.marker([initialMapSettings.latitude || 35.6895, initialMapSettings.longitude || 139.6917], { draggable: 'true' }).addTo(map);

// 翌日ボタンのクリックイベント
$("#nextDay").on("click", function () {
    const currentDate = $("#datepicker").datepicker("getDate");
    const nextDay = moment(currentDate).add(1, 'days');
    $("#datepicker").datepicker("setDate", nextDay.toDate());

    const markerLatLng = marker.getLatLng();
    drawSunPaths(map, marker, nextDay);
});

// 前日ボタンのクリックイベント
$("#prevDay").on("click", function () {
    const currentDate = $("#datepicker").datepicker("getDate");
    const prevDay = moment(currentDate).subtract(1, 'days');
    $("#datepicker").datepicker("setDate", prevDay.toDate());

    const markerLatLng = marker.getLatLng();
    drawSunPaths(map, marker, prevDay);
});

// Initialize jQuery UI Datepicker
$("#datepicker").datepicker({
    onSelect: function (dateText, inst) {
        const selectedDate = moment(dateText, "YYYY/MM/DD");
        drawSunPaths(map, marker, selectedDate);
    },
    defaultDate: new Date(),
    dateFormat: "yy/mm/dd",
    beforeShow: function(input, inst) {
    // カレンダーの位置をカスタマイズ
    inst.dpDiv.css({
      marginTop: '-24px',  // 上方向へのマージン
      marginLeft: '-42px'  // 左方向へのマージン
    });
  }
});

map.on('click', function (event) {
    const clickedLatLng = event.latlng;
    marker.setLatLng(clickedLatLng);
    markerMoved = true;
    setMapCookie(clickedLatLng.lat, clickedLatLng.lng, map.getZoom());
    drawSunPaths(map, marker, moment($("#datepicker").datepicker("getDate")));
    $("#locationInput").val("");
});

marker.on('drag', function (event) {
    const marker = event.target;
    const selectedDate = moment($("#datepicker").datepicker("getDate"));
    drawSunPaths(map, marker, selectedDate);
    setMapCookie(clickedLatLng.lat, clickedLatLng.lng, map.getZoom());
    $("#locationInput").val("");
});

marker.on('dragend', function (event) {
    const marker = event.target;
    const selectedDate = moment($("#datepicker").datepicker("getDate"));
    drawSunPaths(map, marker, selectedDate);
    setMapCookie(clickedLatLng.lat, clickedLatLng.lng, map.getZoom());
    $("#locationInput").val("");
});

// Function to be called whenever map view changes
function onMapMove() {
    const center = map.getCenter();
    const zoom = map.getZoom();
    setMapCookie(center.lat, center.lng, zoom);
}

// Attach event listeners to the map for tracking view changes
map.on('moveend', onMapMove);

function calcSun(date, longitude, latitude) {
    const { sunrise, sunset } = SunCalc.getTimes(
        date.clone().hour(12).toDate(),
        latitude,
        longitude
    );
    let sunriseAzimuth, sunsetAzimuth;
    if (sunrise) {
        const { azimuth } = SunCalc.getPosition(sunrise, latitude, longitude);
        sunriseAzimuth = azimuth * RADTODEG + 180;
    } else {
        sunriseAzimuth = null;
    }
    if (sunset) {
        const { azimuth } = SunCalc.getPosition(sunset, latitude, longitude);
        sunsetAzimuth = azimuth * RADTODEG + 180;
    } else {
        sunsetAzimuth = null;
    }

    const morningMagicHourStart = sunrise ? moment(sunrise).subtract(50, 'minutes') : null;
    const morningMagicHourEnd = sunrise ? moment(sunrise).subtract(20, 'minutes') : null;
    const eveningMagicHourStart = sunset ? moment(sunset).add(20, 'minutes') : null;
    const eveningMagicHourEnd = sunset ? moment(sunset).add(50, 'minutes') : null;

    // 時刻のフォーマット
    const timeFormat = "H:mm";

    // 更新する要素を取得
    const sunriseTimeElement = document.getElementById("js-sunriseTime");
    const sunsetTimeElement = document.getElementById("js-sunsetTime");
    
    // 要素のテキストを更新
    sunriseTimeElement.innerText = (sunrise ? moment(sunrise).format(timeFormat) : "N/A");
    sunsetTimeElement.innerText = (sunset ? moment(sunset).format(timeFormat) : "N/A");
    
    return {
        sunrise: sunrise ? moment(sunrise) : null,
        sunriseAzimuth,
        sunset: sunset ? moment(sunset) : null,
        sunsetAzimuth,
        sunriseTime: sunrise ? moment(sunrise).format(timeFormat) : null,
        sunsetTime: sunset ? moment(sunset).format(timeFormat) : null,
    };
}

function drawSunPath(map, center, azimuth, color) {
    const radius = 10;
    const endLat = center[0] + radius * Math.cos(azimuth * Math.PI / 180);
    const endLng = center[1] + radius * Math.sin(azimuth * Math.PI / 180);
    const path = [center, [endLat, endLng]];
    return L.polyline(path, { color: color }).addTo(map);
}

let sunriseLine, sunsetLine;

function drawSunPaths(map, marker, selectedDate) {

    const position = marker.getLatLng();

    if (sunriseLine) {
        map.removeLayer(sunriseLine);
    }
    if (sunsetLine) {
        map.removeLayer(sunsetLine);
    }

    const result = calcSun(selectedDate, position.lng, position.lat);

    if (result.sunriseAzimuth !== null) {
        sunriseLine = drawSunPath(map, [position.lat, position.lng], result.sunriseAzimuth, 'red');
    }
    if (result.sunsetAzimuth !== null) {
        sunsetLine = drawSunPath(map, [position.lat, position.lng], result.sunsetAzimuth, 'red');
    }
}

// Initial drawing on page load
const initialDate = moment();
$("#datepicker").datepicker("setDate", initialDate.toDate());
drawSunPaths(map, marker, initialDate);

var lastExecutionTime = 0;
var executionCount = 0;
const maxExecutions = 15;

function getCoordinates() {

    // セッション内の関数呼び出し回数が制限を超えているかを確認
    if (executionCount < maxExecutions) {
        // 現在のタイムスタンプを取得
        var currentTime = Date.now();

        // 最後に関数が実行されてから5秒以上経過しているかを確認
        if (currentTime - lastExecutionTime >= 10000) {
            // 最後の実行時刻を更新
            lastExecutionTime = currentTime;

            // ジオコーディングとマーカーの更新の残りのコード
            var locationInput = document.getElementById('locationInput').value;
            var geocoder = new google.maps.Geocoder();

            geocoder.geocode({ 'address': locationInput }, function (results, status) {
                if (status === 'OK') {
                    var searchLatitude = results[0].geometry.location.lat();
                    var searchLongitude = results[0].geometry.location.lng();

                    marker.setLatLng([searchLatitude, searchLongitude]);

                    const selectedDate = moment($("#datepicker").datepicker("getDate"));
                    drawSunPaths(map, marker, selectedDate);

                    map.panTo([searchLatitude, searchLongitude]);

                    // 関数呼び出し回数を増やす
                    executionCount++;

                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                      
                    const modalClose = document.querySelector('#modaal-close');
                    if (modalClose) {
                      modalClose.click();
                    }

                } else {
                    alert('施設名・住所・郵便番号を入力してください');
                }
            });
        } else {
            // 関数が頻繁に呼び出されている場合のメッセージ表示など、他のアクションを実行
            alert('次のリクエストを行うのに10秒待ってください。マーカーをドラック&ドロップで移動させることも可能です');
        }
    } else {
        alert('同じセッションでのリクエストは15回までです。');
    }
}