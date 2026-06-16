var size = 0;
var placement = 'point';

var style_Semaforsinclusius_5 = function(feature, resolution){
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
            src: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" width="36" height="36"><circle cx="18" cy="18" r="16" fill="%23f59e0b" stroke="%23ffffff" stroke-width="2" /><rect x="15" y="8" width="6" height="15" rx="2" fill="%23ffffff" /><circle cx="18" cy="11" r="1.8" fill="%23f59e0b" /><circle cx="18" cy="15.5" r="1.8" fill="%23f59e0b" /><circle cx="18" cy="20" r="1.8" fill="%2310b981" /><path d="M11 14.5c-.6 1-.6 2.2 0 3.2M8.5 12.5c-1.2 1.8-1.2 4.2 0 6M25 14.5c.6 1 .6 2.2 0 3.2M27.5 12.5c1.2 1.8 1.2 4.2 0 6" fill="none" stroke="%23ffffff" stroke-width="1.5" stroke-linecap="round" /></svg>',
            scale: 0.8,
            anchor: [0.5, 0.5]
        }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
