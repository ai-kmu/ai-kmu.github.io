function initMap() {
    var k_univ = { lat: 37.60986651821443, lng: 126.99727053599317 };
    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 17,
            center: { lat: 37.61056928891616, lng: 126.99723087041835 }
        });
    const marker = new google.maps.Marker({
        position: k_univ,
        map: map,
    });

    marker.addListener("click", () => {
        window.open("https://www.google.co.kr/maps/place/%EA%B5%AD%EB%AF%BC%EB%8C%80%ED%95%99%EA%B5%90/@37.6108736,126.9951002,17z/data=!3m1!4b1!4m5!3m4!1s0x357cbd1dddcabfef:0xde7cc0e9a47b92bc!8m2!3d37.6108694!4d126.9972889?hl=ko")
    })
}