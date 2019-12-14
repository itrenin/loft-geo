function mapInit() {
    ymaps.ready(() => {
        let myMap = new ymaps.Map("map", {

            center: [55.76, 37.64], // Москва
            controls: ['zoomControl'],
            zoom: 13
        }, {
            searchControlProvider: 'yandex#search'
        });
    });
}
export { mapInit }