const dataLayer = {
    id: 'data',
    type: 'fill',
    paint: {
        'fill-color': {
            property: 'win_party',
            stops: [
                [0, '#dae0e5'],
                [2, '#1A5CC6'],
                [4, '#EE818F']
            ]
        },
        'fill-outline-color': 'white'
    }
};

export { dataLayer };
