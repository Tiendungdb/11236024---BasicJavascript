function wordCount() {
    try {
        let text = prompt("Nhập vào văn bản:");

        if (!text) {
            throw new Error("Văn bản không hợp lệ");
        }

        text = text.toLowerCase();

        let words = text.replace(/[.,!?;:"()]/g, "").split(/\s+/); // Bỏ dấu, ngắt từ theo khoảng trống

        let wordCount = {};

        words.forEach(word => {
            if (word) {
                wordCount[word] = (wordCount[word] || 0) + 1; // Từ xuất hiện lần đầu có giá trị wordCount[word] = undefined nên vòng lặp chọn giá trị 0
            }
        });

        console.log("\n Kết quả đếm:");
        console.table(wordCount);

    } catch (error) {
        console.log("Lỗi:", error.message);
    }
}

wordCount();
