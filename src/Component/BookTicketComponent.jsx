//import react
import React, { Component } from 'react';
//import css
import '../Assets/css/BookTicketCSS.css';
//import data json
import danhSachGhe  from  '../Assets/data/danhSachGhe.json'
//import child component 
import ThongTinDatGheComponent from './ThongTinDatGheComponent';
import HangGheComponent from './HangGheComponent';

//output
export default class BookTicket extends Component {
    renderHangGhe = () =>{
        return danhSachGhe.map((hangGhe,index) => {
            return <div key={index} >
                <HangGheComponent hangGheProps = {hangGhe} soHangGHe={index}/>
            </div>
        })
    }
    render() {
        // Move to BookTicketCSS, using class
        // let styleBg = {
        //     position: "fixed", 
        //     width: "100%", 
        //     height: "100%", 
        //     backgroundImage: "url('./img/bgmovie.jpg')",  //Remember edit path
        //     backgroundSize: "100%" 
        // }

        // let styleblurBg = {
        //     position: 'fixed', 
        //     width: '100%', 
        //     height: '100%', 
        //     backgroundColor: 'rgba(0,0,0,0.5)'
        // }

        // let styleShowRow = {
        //     display:'flex', 
        //     flexDirection:'column', 
        //     justifyContent:'center'
        // }

        return (
            <div className='bookingMovie styleBg'> {/* style={styleBg} */}
                <div className='styleblurBg'> {/* style={styleblurBg} */}
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-8 text-center">
                                <div className='text-warning display-4'>ĐẶT VÉ XEM PHIM CYBERLEARN.VN</div>
                                <div className='mt-5 text-light' style={{fontSize:'25px'}}>Màn hình</div>
                                <div className='mt-2 ml-5 styleShowRow' >   {/* style={styleShowRow} */}
                                    <div className="screen"></div>
                                    {this.renderHangGhe()}
                                </div>
                                
                            </div>
                            <div className="col-4 ">
                            <div style={{fontSize:'35px'}} className='text-light mt-2 '>DANH SÁCH GHẾ BẠN CHỌN</div>
                                <ThongTinDatGheComponent />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

