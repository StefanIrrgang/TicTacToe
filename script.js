let fields = [
    null,
    'circle',
    null,
    null,
    'cross',
    null,
    null,
    null,
    null,
];

function init() {
    render();
}

function render() {
    let tableHtml = '<table>';

    for (let i = 0; i < 3; i++) {
        tableHtml += '<tr>';

        for (let j = 0; j < 3; j++) {
            const index = i * 3 + j;
            const field = fields[index];
            const symbol = field === 'circle' ? generateCircleSVG() : (field === 'cross' ? generateCrossSVG() : '');

            tableHtml += '<td>' + symbol + '</td>';
        }

        tableHtml += '</tr>';
    }

    tableHtml += '</table>';

    document.getElementById('container').innerHTML = tableHtml;
}

function generateCircleSVG() {
    const fillColor = '#00B0EF';
    const width = 60;
    const height = 60;
    
    const svgCode = `
      <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
        <circle cx="${width/2}" cy="${height/2}" r="${width/2}" fill="${fillColor}">
          <animate attributeName="r" from="0" to="${width/2}" dur="250ms" fill="freeze" />
        </circle>
      </svg>
    `;
  
    return svgCode;
  }
  
  function generateCrossSVG() {
    const fillColor = '#FFC000';
    const width = 70;
    const height = 70;
    const strokeWidth = 5;
  
    const svgCode = `
      <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
        <g transform="rotate(45 ${width/2} ${height/2})">
          <line x1="0" y1="${height / 2}" x2="${width}" y2="${height / 2}" stroke="${fillColor}" stroke-width="${strokeWidth}">
            <animate attributeName="x2" from="0" to="${width}" dur="1s" fill="freeze" />
          </line>
          <line x1="${width / 2}" y1="0" x2="${width / 2}" y2="${height}" stroke="${fillColor}" stroke-width="${strokeWidth}">
            <animate attributeName="y2" from="0" to="${height}" dur="250ms" fill="freeze" />
          </line>
        </g>
      </svg>
    `;
  
    return svgCode;
  }
  
  
  