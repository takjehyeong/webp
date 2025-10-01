function drawPyramid(rows) {
    if (typeof rows !== 'number' || rows <= 0) {
        console.log("유효한 양의 정수 높이를 입력해 주세요.");
        return;
    }

    for (let i = 1; i <= rows; i++) {
        const spaces = ' '.repeat(rows - i);
        const stars = '*'.repeat(2 * i - 1);
        console.log(spaces + stars);
    }
}

// --- 사용 예시 ---

console.log("높이 5인 피라미드:");
drawPyramid(5);

console.log("\n높이 3인 피라미드:");
drawPyramid(3);