function calcArea() {
    try {
        let length = prompt("Nhập chiều dài hình chữ nhật:");
        let width = prompt("Nhập chiều rộng hình chữ nhật:");

        length = parseFloat(length);
        width = parseFloat(width);

        if (isNaN(length) || isNaN(width)) {
            throw new Error("Chiều dài và chiều rộng phải là số");
        }

        if (length <= 0 || width <= 0) {
            throw new Error("Chiều dài và chiều rộng phải lớn hơn 0");
        }

        let area = length * width;
        console.log(`Diện tích hình chữ nhật là: ${area}`);

    } catch (error) {
        console.log("Lỗi:", error.message);
    }
}

calcArea();
