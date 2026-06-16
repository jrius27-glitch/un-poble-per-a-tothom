var size = 0;
var placement = 'point';

var style_Parkingsadaptats_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var labelText = "";
    var value = feature.get("");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = [ new ol.style.Style({
        image: new ol.style.Icon({
            src: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" width="36" height="36"><circle cx="18" cy="18" r="16" fill="%233b82f6" stroke="%23ffffff" stroke-width="2" /><circle cx="21" cy="10" r="2" fill="%23ffffff" /><path d="M22 17h-3.5v-3.5c0-.8-.7-1.5-1.5-1.5h-1c-.8 0-1.5.7-1.5 1.5V17c0 .8.7 1.5 1.5 1.5H19v4.5l-2.5 2c-.4.3-.6.8-.6 1.3 0 1 .8 1.7 1.7 1.7.5 0 1-.2 1.3-.6l3.5-2.8c.4-.3.7-.8.7-1.3V17z" fill="%23ffffff" /><path d="M17.5 19.5c0-1.9-1.6-3.5-3.5-3.5S10.5 17.6 10.5 19.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5z" fill="none" stroke="%23ffffff" stroke-width="2" /></svg>',
            scale: 0.8,
            anchor: [0.5, 0.5]
        }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
