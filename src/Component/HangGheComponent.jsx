//import react, react-redux
import React, { Component } from 'react';
import { connect } from 'react-redux';
//import actions
import { datGheAction } from '../Redux/actions/BookTicketActions';


// export default 
class HangGhe extends Component {
    renderGhe = () => {
        return this.props.hangGheProps.danhSachGhe.map((ghe, index) => {
            let cssGheDaDat = '';
            let disable = false;

            //Trạng thái ghế đã bị người khác đặt rồi
            if (ghe.daDat) {
                cssGheDaDat = 'gheDuocChon';
                disable = true;
            }
            //Xét trạng thái ghế đang đặt
            let cssGheDangDat = '';
            let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.soGhe === ghe.soGhe);
            if (indexGheDangDat !== -1) {
                cssGheDangDat = 'gheDangChon';
            }
            return <button onClick={() => {
                //C3: Dùng mapDispatchToProps
                this.props.datGhe(ghe);
            }} disabled={disable} className={`ghe ${cssGheDaDat} ${cssGheDangDat}`} key={index}>
                {/* {index + 1} */}
                {ghe.soGhe}
            </button>
        })
    }

    renderSoHang = () => {
        return this.props.hangGheProps.danhSachGhe.map((hang, index) => {
            return <button className='rowNumber'>
                {hang.soGhe}
            </button>
        }
        )

    }

    renderHangGhe = () => {
        if (this.props.soHangGHe === 0) {
            return <div className='ml-4'>
                {this.props.hangGheProps.hang}
                {this.renderSoHang()}
            </div>
        } else {
            return <div>
                {this.props.hangGheProps.hang}
                {this.renderGhe()}
            </div>
        }
    }

    render() {
        return (
            <div className='text-light text-left mt-3 ml-5' style={{ fontSize: 30 }}>

                {this.renderHangGhe()}
            </div>
        )
    }
}

//Get data from State
const mapStateToProps = state => {
    return {
        danhSachGheDangDat: state.BookTicketReducer.danhSachGheDangDat
    }
};

//Update data to State
const mapDispatchToProps = (dispatch) => {
    return {
        datGhe: (ghe) => {
            //C1
            // dispatch({
            //     type: 'DAT_GHE',
            //     ghe
            // })
            
            //C2: dung actions
            dispatch(datGheAction(ghe));

        }

    }
}

//export component
export default connect(mapStateToProps, mapDispatchToProps)(HangGhe);