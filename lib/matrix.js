export function generate(rows, cols) {
    const mat = new Array(rows);
    for (let row = 0; row < rows; row++) {
        mat[row] = new Array(cols);
        for (let col = 0; col < cols; col++) {
            mat[row][col] = 0;
        }
            
    }

    return mat;
}