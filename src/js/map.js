let marker

window.initMap = () => {
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: {
      lat: 59.325,
      lng: 18.07
    }
  })
  marker = new google.maps.Marker({
    map: map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: {
      lat: 59.327,
      lng: 18.067
    }
  })
  marker.addListener('click', toggleBounce)
}

const toggleBounce = () => {
  marker.getAnimation() !== null
    ? marker.setAnimation(null)
    : marker.setAnimation(google.maps.Animation.BOUNCE)
}
