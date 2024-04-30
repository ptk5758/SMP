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
    console.log("원하시는 서비스를 입력하세요");
    console.log("1. 장비 조회\n2. 장비 등록\n3. 장비 삭제");
    rl.question("", (line) => {
        let choice = parseInt(line);
        switch (choice) {
            case 1: // 장비 조회
                printAllEquipemt();
                break;
            case 2: // 장비 등록
                registerEquipment();
                break;
            case 3: // 장비 삭제
                console.log("장비 삭제");
                break;
            default: // 잘못된 입력
                break;
        }
    });
}
// 모든 장비를 조회합니다.
function printAllEquipemt() {
    console.log(database);
}
function registerEquipment() {
    rl.question("등록할 장비를 입력해 주세요(exit 입력 시 종료): ", (input) => {
        if (input.toLowerCase() === 'exit') {
            rl.close();
        }
        else {
            database.push(input);
            console.log("현재 등록된 장비: ", database);
            registerEquipment();
        }
    });
}
