var shapes, names, i, htmlTable;
shapes = ['square', 'rectangle', 'circle', 'triangle'];
names = ['larry', 'barry', 'kenny', 'jacob'];

function createHtmlTable(items) {
    var htmlTable = '<table>';
    for (i = 0; i < items.length; i++) {
        htmlTable += '<tr><td>' + (i + 1) +'</td><td>' + items[i] + '</td></tr>';
    }
    htmlTable += '</table>';
    return htmlTable;
}
getElementbyID
htmlTable = createHtmlTable(shapes);
console.log(htmlTable);

htmlTable = createHtmlTable(names);
console.log(htmlTable);


