// Vuex를 이용한 상태 관리(store) 생성
import { createStore } from 'vuex';

// 새로운 store 인스턴스 생성
const store = createStore({
    // 상태(State) 초기화
    state() {
        return {
            // 기본적인 계정 정보를 포함하는 상태
            account: {
                id: 0
            }
        };
    },
    // 변이(Mutations): 상태를 변경하는 메서드
    mutations: {
        // setAccount 변이: 계정 정보를 업데이트하는 메서드
        setAccount(state, payload) {
            state.account.id = payload;
        }
    }
});

// 생성한 store를 외부에서 사용할 수 있도록 내보내기
export default store;
