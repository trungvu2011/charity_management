import Banner from "../Homepage/Banner/Banner";
import HomeHeader from "../Homepage/Header/HomeHeader";
import { HiOutlineSearch } from "react-icons/hi";

const Campaigns = () => {
    return (
        <div>
            <HomeHeader/>
            <Banner/>
            <div className="flex flex-col bg-[#f9f3ee] pl-12 pr-12">
                <div className="flex justify-center items-center">
                    <span className="p-5 font-semibold text-2xl ">Chiến dịch gây quỹ nổi bật</span>
                </div>
                <div className="flex flex-row justify-between mb-6">
                    <div className="flex flex-row items-start">
                        <select name="statusstatus" id="" className="pl-4 pt-2 pb-2 pr-8 mr-6 rounded-lg">
                            <option value="Đang thực hiện">Đang thực hiện</option>
                            <option value="Đạt mục tiêu">Đạt mục tiêu</option>
                            <option value="Đã kết thúc">Đã kết thúc</option>
                            <option value="Tạm dừng">Tạm dừng</option>
                        </select>
                        <select name="category" id="" className="pl-4 pt-2 pb-2 pr-8 mr-6 rounded-lg">
                            <option value="">Danh mục</option>
                            <option value="Xóa đói">Xóa đói</option>
                            <option value="Trẻ em">Người già</option>
                            <option value="Người nghèo">Người nghèo</option>
                            <option value="Người khuyết tật">Người khuyết tật</option>
                            <option value="Bệnh hiểm nghèo">Bệnh hiểm nghèo</option>
                            <option value="Dân tộc thiểu số">Dân tộc thiểu số</option>
                            <option value="Lao động di cư">Lao động di cư</option>
                            <option value="Người vô gia cư">Người vô gia cư</option>
                            <option value="Môi trường">Môi trường</option>
                            <option value="Xóa nghèo">Xóa nghèo</option>
                            <option value="Giáo dục">Giáo dục</option>
                            <option value="Biến đổi khí hậu & thiên tai">Biến đổi khí hậu & thiên tai</option>
                            <option value="Khác">Khác</option>
                        </select>
                        <select name="location" id="" className="pl-4 pt-2 pb-2 pr-8 mr-6 rounded-lg">
                            <option value="">Khu vực</option>
                            <option value="An Giang">An Giang</option>
                            <option value="Bà Rịa - Vũng Tàu">Bà Rịa - Vũng Tàu</option>
                            <option value="Bắc Giang">Bắc Giang</option>
                            <option value="Bắc Kạn">Bắc Kạn</option>
                            <option value="Bạc Liêu">Bạc Liêu</option>
                            <option value="Bắc Ninh">Bắc Ninh</option>
                            <option value="Bến Tre">Bến Tre</option>
                            <option value="Bình Định">Bình Định</option>
                            <option value="Bình Dương">Bình Dương</option>
                            <option value="Bình Phước">Bình Phước</option>
                            <option value="Bình Thuận">Bình Thuận</option>
                            <option value="Cà Mau">Cà Mau</option>
                            <option value="Cần Thơ">Cần Thơ</option>
                            <option value="Cao Bằng">Cao Bằng</option>
                            <option value="Đà Nẵng">Đà Nẵng</option>
                            <option value="Đắk Lắk">Đắk Lắk</option>
                            <option value="Đắk Nông">Đắk Nông</option>
                            <option value="Điện Biên">Điện Biên</option>
                            <option value="Đồng Nai">Đồng Nai</option>
                            <option value="Đồng Tháp">Đồng Tháp</option>
                            <option value="Gia Lai">Gia Lai</option>
                            <option value="Hà Giang">Hà Giang</option>
                            <option value="Hà Nam">Hà Nam</option>
                            <option value="Hà Nội">Hà Nội</option>
                            <option value="Hà Tĩnh">Hà Tĩnh</option>
                            <option value="Hải Dương">Hải Dương</option>
                            <option value="Hải Phòng">Hải Phòng</option>
                            <option value="Hậu Giang">Hậu Giang</option>
                            <option value="Hòa Bình">Hòa Bình</option>
                            <option value="Hưng Yên">Hưng Yên</option>
                            <option value="Khánh Hòa">Khánh Hòa</option>
                            <option value="Kiên Giang">Kiên Giang</option>
                            <option value="Kon Tum">Kon Tum</option>
                            <option value="Lai Châu">Lai Châu</option>
                            <option value="Lâm Đồng">Lâm Đồng</option>
                            <option value="Lạng Sơn">Lạng Sơn</option>
                            <option value="Lào Cai">Lào Cai</option>
                            <option value="Long An">Long An</option>
                            <option value="Nam Định">Nam Định</option>
                            <option value="Nghệ An">Nghệ An</option>
                            <option value="Ninh Bình">Ninh Bình</option>
                            <option value="Ninh Thuận">Ninh Thuận</option>
                            <option value="Phú Thọ">Phú Thọ</option>
                            <option value="Phú Yên">Phú Yên</option>
                            <option value="Quảng Bình">Quảng Bình</option>
                            <option value="Quảng Nam">Quảng Nam</option>
                            <option value="Quảng Ngãi">Quảng Ngãi</option>
                            <option value="Quảng Ninh">Quảng Ninh</option>
                            <option value="Quảng Trị">Quảng Trị</option>
                            <option value="Sóc Trăng">Sóc Trăng</option>
                            <option value="Sơn La">Sơn La</option>
                            <option value="Tây Ninh">Tây Ninh</option>
                            <option value="Thái Bình">Thái Bình</option>
                            <option value="Thái Nguyên">Thái Nguyên</option>
                            <option value="Thanh Hóa">Thanh Hóa</option>
                            <option value="Thừa Thiên Huế">Thừa Thiên Huế</option>
                            <option value="Tiền Giang">Tiền Giang</option>
                            <option value="TP Hồ Chí Minh">TP Hồ Chí Minh</option>
                            <option value="Trà Vinh">Trà Vinh</option>
                            <option value="Tuyên Quang">Tuyên Quang</option>
                            <option value="Vĩnh Long">Vĩnh Long</option>
                            <option value="Vĩnh Phúc">Vĩnh Phúc</option>
                            <option value="Yên Bái">Yên Bái</option>
                        </select>
                    </div>
                    <div className="w-[40%]">
                        <div className="w-full relative">
                            <HiOutlineSearch className="w-5 h-5 absolute top-[10px] left-4 text-gray-400"/>
                            <input type="text" placeholder="Tìm kiếm tên chiến dịch" className="w-full pl-12 pt-2 pb-2 pr-8 rounded-3xl"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Campaigns;