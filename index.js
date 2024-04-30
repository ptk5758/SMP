"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
let isLogin = false; // -> 로그인 했는지 안했는지
let ADMIN_ID = "developer";
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("관리자님의 아이디를 입력하세요 : ", (line) => {
    if (ADMIN_ID === line) {
        isLogin = true;
        management();
    }
    else {
        console.log("잘못된 아이디 입니다.");
        rl.close();
    }
});
const database = ["카메라", "조명", "고프로"];
function management() {
    console.log("어서오세요 관리자님");
    equipmentChoice();
}
function equipmentChoice() {
    console.log("원하시는 서비스를 입력하세요");
<<<<<<< delete_equipment
    console.log("1. 장비 조회\n2. 장비 등록\n3. 장비 삭제");
=======
    console.log("1. 장비 조회\n2. 장비 등록\n3. 장비 삭제\n4. 종료");
>>>>>>> main
    rl.question("", (line) => {
        let choice = parseInt(line);
        switch (choice) {
            case 1: // 장비 조회
<<<<<<< delete_equipment
                console.log("장비 조회");
                showallequipment();
=======
                printAllEquipemt();
>>>>>>> main
                break;
            case 2: // 장비 등록
                console.log("장비 등록");
                break;
            case 3: // 장비 삭제
                console.log("장비 삭제");
<<<<<<< delete_equipment
                deleteequipment();
                break;
=======
                break;
            case 4: // 종료
                console.log("종료 됩니다");
                process.exit();
>>>>>>> main
            default: // 잘못된 입력
                console.log("잘못된 입력입니다.");
                break;
        }
<<<<<<< delete_equipment
    });
}
function showallequipment() {
    console.log(database);
    rl.close();
}
function deleteequipment() {
    console.log("삭제할 장비를 입력하세요");
    rl.question("", (line) => {
        let equipment = line;
        let index = database.indexOf(equipment);
        if (index !== -1) {
            database.splice(index, 1);
            console.log("삭제 완료");
            console.log("현재 장비 목록", database);
        }
        else {
            console.log("삭제할 장비가 없습니다.");
        }
        rl.close();
    });
=======
        equipmentChoice();
    });
}
// 모든 장비를 조회합니다.
function printAllEquipemt() {
    console.log(database);
>>>>>>> main
}
