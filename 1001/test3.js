function drawHollowInvertedPyramid(rows) {
    if (typeof rows !== 'number' || rows <= 0) {
        console.log("높이를 입력해 주세요.");
        return;
    }

    const totalWidth = 2 * rows - 1;

    for (let i = rows; i >= 1; i--) {
        let line = '';
        const startAsterisksCount = rows - i;
        line += '*'.repeat(startAsterisksCount);
        const pyramidInnerWidth = 2 * i - 1;

        if (i === rows) {
            line += '*'.repeat(pyramidInnerWidth);
        } else if (i === 1) {

        } else {
            const innerSpacesCount = pyramidInnerWidth - 2;
            line += '*';
            line += ' '.repeat(innerSpacesCount);
            line += '*';
        }
        const endAsterisksCount = rows - i;
        line += '*'.repeat(endAsterisksCount);
        console.log(line);
    }
}

// --- 사용 예시 ---

console.log("높이 5인 중앙 빈 역피라미드:");
drawHollowInvertedPyramid(5);