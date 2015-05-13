L.DNC.Geo = L.Class.extend({
    includes: L.Mixin.Events,

    options: {},

    buffer: {
        maxFeatures: 1,
        additionalArgs: 0.1,
        description: 'Calculates a buffer for input features for a given radius. Units supported are miles, kilometers, and degrees.',
        parameters: [
            {
                name: 'distance',
                description: 'Distance to draw the buffer.',
                type: 'number',
                default: 10
            },
            {
                name: 'unit',
                type: 'select',
                description: '',
                options: ['miles', 'feet', 'kilometers', 'meters', 'degrees'],
                default: 'miles'
            }
        ],
        createsLayer: true
    },
	centroid: {
        minFeatures: 1,
        maxFeatures: 2,
        description: 'Takes one or more features and calculates the centroid using the arithmetic mean of all vertices. This lessens the effect of small islands and artifacts when calculating the centroid of a set of polygons.',
        createsLayer: true
    },
    union: {
        minFeatures: 2,
        maxFeatures: 2,
        description: 'Takes two polygons and returns a combined polygon. If the input polygons are not contiguous, this function returns a MultiPolygon feature.',
        createsLayer: true
    }

});
