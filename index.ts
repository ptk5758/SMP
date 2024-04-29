import readLine from 'readline'
let isLogin = false // -> 로그인 했는지 안했는지
let ADMIN_ID = "developer"

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("관리자님의 아이디를 입력하세요 : ",  (line : string) => {
    if (ADMIN_ID === line) {
        isLogin = true        
        management()         
    } else {
        console.log("잘못된 아이디 입니다.")
        rl.close()
    }
})

const database = ["카메라", "조명", "고프로"]


function management() {    
    console.log("어서오세요 관리자님")
    console.log("원하시는 서비스를 입력하세요")
    console.log("1. 장비 조회\n2. 장비 등록\n3. 장비 삭제")
    rl.question("", (line : string) => {      
        let choice = parseInt(line)  
        switch (choice) {
            case 1: // 장비 조회
                printAllEquipemt()
                break
            case 2: // 장비 등록
                console.log("장비 등록")
                break
            case 3 : // 장비 삭제
                console.log("장비 삭제")    
                break                
            default : // 잘못된 입력
                break
        }
    })
    
}

function printAllEquipemt() {
    console.log(database)
}