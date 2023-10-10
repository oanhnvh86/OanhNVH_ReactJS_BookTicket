//import react, react-redux
import React, { Component } from 'react';
import { connect } from 'react-redux';
//import actions
import { huyGheAction } from '../Redux/actions/BookTicketActions';
//import type
// import {DAT_GHE, HUY_GHE} from '../Redux/types/BookTicketType';

//init component
class ThongTinDatGhe extends Component {
    render() {
        let fs30 = {
            fontSize: '30px'
            }
    
        return (
            <div>
                <div className='mt-5' style={{ textAlign: 'left' }}>
                    <button className='gheDuocChon'></button> <span className='text-light' style={fs30}>Ghế đã đặt</span> <br />
                    <button className='gheDangChon'></button> <span className='text-light' style={fs30}>Ghế đang đặt</span> <br />
                    <button className='ghe ml-0' ></button> <span className='text-light' style={fs30}>Ghế chưa đặt</span>
                </div>
                <div className='mt-5'>
                    <table className='table' border='2'>
                        <thead>
                            <tr className='text-light' style={{fontSize:'20px'}}>
                                <th>Số Ghế</th>
                                <th>Gía</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className='text-warning'>
                            {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                                return <tr key={index}>
                                    <td>{gheDangDat.soGhe}</td>
                                    <td>{gheDangDat.gia.toLocaleString()}</td>
                                    <td><button onClick={()=>{
                                        //C1
                                        // this.props.dispatch({
                                        //      type: HUY_GHE,
                                        //      soGhe: gheDangDat.soGhe
                                        // })

                                        //C2: dung actions
                                        // this.props.dispatch(huyGheAction(gheDangDat.soGhe));

                                        //C3: Dùng mapDispatchToProps
                                        this.props.huyGhe(gheDangDat.soGhe);

                                    }}>Hủy</button></td>
                                </tr>
                            })}
                        </tbody>
                        <tfoot>
                            <tr className='text-warning'>
                                <td></td>
                                <td>Tổng tiền</td>
                                <td>{this.props.danhSachGheDangDat.reduce((tongTien,gheDangDat,index) => {
                                     return tongTien += gheDangDat.gia   ;
                                },0).toLocaleString() }</td>
                            </tr>
                        </tfoot>

                    </table>
                </div>
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
        huyGhe: (soGhe) => {
            //C1
            // dispatch({
            //     type: HUY_GHE,
            //     soGhe
            // })
            
            //C2: dung actions
            dispatch(huyGheAction(soGhe));

        }

    }
}

//export component
export default connect(mapStateToProps,mapDispatchToProps)(ThongTinDatGhe);