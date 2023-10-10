import {DAT_GHE, HUY_GHE} from '../types/BookTicketType';

//Khởi tạo giá trị ban đầu của store
const stateDefault = {
    danhSachGheDangDat: [
        // {soGhe:"A1", gia:1000},
        // {soGhe:"B5", gia:1000},

    ]
}

const BookTicketReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case DAT_GHE: {
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.ghe.soGhe);
            if (index !== -1) { //ghế đang đặt đã có trong mảng khi người dùng click => remove đi
                danhSachGheDangDatUpdate.splice(index, 1);
            }
            else { //khi người dùng click mà ghế đó chưa có thì sẽ => push vào mảng
                danhSachGheDangDatUpdate.push(action.ghe);
            }
            state.danhSachGheDangDat = danhSachGheDangDatUpdate;
            return { ...state }
        }
        case HUY_GHE: {
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.soGhe);
            if (index !== -1) { //ghế đang đặt đã có trong mảng khi người dùng click => remove đi
                danhSachGheDangDatUpdate.splice(index, 1);
            }
            state.danhSachGheDangDat = danhSachGheDangDatUpdate;
            return { ...state }
        }
        default: return { ...state }
    }

}

export default BookTicketReducer;