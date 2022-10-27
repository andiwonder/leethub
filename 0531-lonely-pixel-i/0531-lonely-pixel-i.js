/**
 * @param {character[][]} picture
 * @return {number}
 */
var findLonelyPixel = function(picture) {
    // m rows by n cols
    let rows = picture.length, cols = picture[0].length;
    let rows_valid = new Array(rows).fill(0), cols_valid = new Array(cols).fill(0);
    let lonely_pixel_count = 0;

    for(let i = 0; i < rows; i++) {
      for(let j = 0; j < cols; j++) {
         if(picture[i][j] === 'B') {
           rows_valid[i] += 1;
           cols_valid[j] += 1; 
         }
      }
    }
  

    for(let i = 0; i < rows; i++) {
      for(let j = 0; j < cols; j++) {
        if(
          picture[i][j] === 'B' 
          && rows_valid[i] === 1 
          && cols_valid[j] === 1
        ) 
          lonely_pixel_count += 1;
      }
    }

    return lonely_pixel_count;
};