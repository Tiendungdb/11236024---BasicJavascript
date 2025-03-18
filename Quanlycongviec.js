let taskList = [];

function addTask(task) {
    try {
        if (!task || typeof task !== "string") {
            throw new Error("Công việc thêm vào phải là một chuỗi không rỗng.");
        }

        taskList.push(task);
        console.log(`Thêm công việc: "${task}"`);

    } catch (error) {
        console.log(error.message);
    }
}

function alterTask(index, alteredTask) {
    try {
        if (isNaN(index)) {
            throw new Error("Chỉ mục của công việc cần sửa phải là một số");
        }

        if (!alteredTask || typeof alteredTask !== "string") {
            throw new Error("Công việc chỉnh sửa phải là một chuỗi không rỗng.");
        }

        index = Number(index);

        if (index < 0 || index >= taskList.length) {
            throw new Error("Không có công việc với chỉ mục này để sửa");
        }

        taskList[index] = alteredTask;
        console.log(`Công việc đã được sửa thành: "${alteredTask}"`);

    } catch (error) {
        console.log(error.message);
    }
}

function dropTask(index) {
    try {
        if (isNaN(index)) {
            throw new Error("Chỉ mục của công việc cần bỏ phải là một số");
        }

        index = Number(index);

        if (index < 0 || index >= taskList.length) {
            throw new Error("Không có công việc với chỉ mục này để bỏ");
        }

        taskList.splice(index, 1);
        console.log(`Xóa công việc: "${taskList[index]}"`);

    } catch (error) {
        console.log(error.message);
    }
}

function viewTask() {
    try {
        console.log("\n Danh sách công việc:");
        if (taskList.length === 0) {
            console.log("Không có công việc nào");
            return;
        }

        taskList.forEach((task, index) => {
            console.log(`${index + 1}. ${task}`);
        });

    } catch (error) {
        console.log("Đã xảy ra lỗi khi hiển thị danh sách công việc:", error.message);
    }
}

addTask("Học");
addTask("Ngủ");
addTask("Chơi");
addTask("");
addTask(1);

viewTask();

alterTask(1, "Ăn");
alterTask("a", "Sửa lỗi code");
alterTask(5, "Học");
alterTask(1, 123);

dropTask(0);
dropTask("b");
dropTask(10);

viewTask();