import axios from "axios";
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import HomeHeader from "../Homepage/Header/HomeHeader";
import Footer from "../Footer/Footer";
import { HiFlag, HiOutlineClock } from "react-icons/hi";

const CampaignDetail = () => {
    const { state } = useLocation();  // Lấy dữ liệu truyền qua state từ link
    const campaign = state?.campaign; // Lấy campaign từ state
    const [tab, setTab] = useState('Câu chuyện');
    const [donationInfo, setDonationInfo] = useState([]);
    const [searchQuery, setSearchQuery] = useState(''); // State cho tìm kiếm

    const formatCurrency = (amount) => {
        return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " VND";
    };

    useEffect(() => {
        const fetchDonationInfo = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/get-donation-information/', {
                    params: {
                        campaign_id: campaign.campaign_id // Truyền tham số qua params
                    }
                });
                console.log(response.data); // Kiểm tra dữ liệu trả về
                setDonationInfo(response.data.donationList); // Cập nhật thông tin ủng hộ
            } catch (error) {
                console.error(error); // Xử lý lỗi nếu có
            }
        };

        fetchDonationInfo(); // Gọi hàm fetch dữ liệu
    }, [campaign.campaign_id]); // Lắng nghe thay đổi campaign_id

    const filteredDonations = donationInfo.filter((donation) => {
        return donation.name && donation.name.toLowerCase().includes(searchQuery.toLowerCase());
    });


    const renderDonationInfo = () => {
        return (
            <table className="min-w-full table-auto border-collapse">
                <thead>
                    <tr>
                        <th className="px-4 py-2 text-left border-b font-semibold text-gray-700">Người ủng hộ</th>
                        <th className="px-4 py-2 text-left border-b font-semibold text-gray-700">Số tiền ủng hộ</th>
                        <th className="px-4 py-2 text-left border-b font-semibold text-gray-700">Thời gian ủng hộ</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredDonations.length > 0 ? (
                        filteredDonations.map((donation, index) => (
                            <tr key={index} className="odd:bg-gray-100 even:bg-white">
                                <td className="px-4 py-2 border-b">{donation.name}</td>
                                <td className="px-4 py-2 border-b">{formatCurrency(donation.amount)}</td>
                                <td className="px-4 py-2 border-b">
                                    {
                                        new Date(donation.donation_date).toLocaleTimeString('vi-VN', {
                                            hour: '2-digit',
                                            minute: '2-digit',
                                            second: '2-digit',
                                            hour12: false, // 24-hour format
                                        }) + ' - ' +
                                        new Date(donation.donation_date).toLocaleDateString('vi-VN', {
                                            year: 'numeric',
                                            month: 'numeric',
                                            day: 'numeric',
                                        })

                                    }
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3" className="px-4 py-2 text-center">Không tìm thấy kết quả</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    };

    return (
        <div className="flex flex-col">
            <HomeHeader />
            <div className="flex flex-row">
                <div className="w-[60%] pl-32 p-8 flex flex-col">
                    <span className="text-4xl font-medium">{campaign?.title}</span>
                    <img alt="campaign" src={campaign?.img} className="w-full object-cover mt-4 rounded-2xl shadow-lg" />
                    <div className="flex flex-row mt-4">
                        {['Câu chuyện', 'Danh sách ủng hộ'].map((item, index) => (
                            <button
                                key={index}
                                className={`p-3 mr-4 rounded-full ${tab === item ? 'bg-[#f54a0033] text-[#f54a00]' : 'text-black'}`}
                                onClick={() => setTab(item)}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                    <div className="mt-4">
                        {tab === 'Câu chuyện' && (
                            <div>
                                <p className="mt-4 text-lg text-[#0a0a0a]">{campaign?.description}</p>
                            </div>
                        )}
                        {tab === 'Danh sách ủng hộ' && (
                            <div>
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        placeholder="Tìm kiếm người ủng hộ"
                                        className="w-full p-2 border rounded-md"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)} // Cập nhật giá trị tìm kiếm
                                    />

                                </div>
                                {donationInfo.length > 0 ? renderDonationInfo() : <p>Chưa có ủng hộ</p>}
                            </div>
                        )}
                    </div>
                </div>
                <div className="w-[40%] h-[600px] pr-32 p-6">
                    <div className="flex flex-col rounded-2xl bg-white shadow-lg">
                        <div className="flex flex-col border-b-gray-500 border-b-2 p-6">
                            <div className="flex flex-row">
                                <div className="w-16 h-16 rounded-full border-[#f54a00] border-2">
                                    <img alt="creator" src={campaign?.creator.img} className="w-16 h-16 object-cover rounded-full " />
                                </div>
                                <div className="flex flex-col ml-4">
                                    <span className="text-base font-semibold text-[#6f6f6f]">Tiền ủng hộ được chuyển đến</span>
                                    <span className="text-lg font-bold text-[#f54a00]">{campaign?.creator}</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col p-6">
                            <div className="flex flex-row justify-between">
                                <div className="w-[50%] flex flex-row items-center">
                                    <HiFlag className="w-8 h-8 text-green-600 mr-4" />
                                    <div className="flex flex-col">
                                        <span className="text-base font-semibold text-[#6f6f6f]">Mục tiêu chiến dịch</span>
                                        <span className="text-xl font-semibold">{formatCurrency(campaign.goal_amount)}</span>
                                    </div>
                                </div>
                                <div className="w-[50%] flex flex-row items-center">
                                    <HiOutlineClock className="w-8 h-8 text-blue-600 mr-4" />
                                    <div className="flex flex-col">
                                        <span className="text-base font-semibold text-[#6f6f6f]">Thời gian còn lại</span>
                                        <span className="text-xl font-semibold">{campaign.remainingDays} ngày</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 rounded-full bg-gray-300 h-3">
                                <div className="bg-[#f54a00] h-3 rounded-full" style={{ width: `${campaign.progress}%` }}></div>
                            </div>
                            <div className="flex flex-row justify-between mt-4">
                                <div className="flex flex-row">
                                    <span className="text-base font-semibold text-[#6f6f6f]">Đã đạt được</span>
                                    <span className="text-xl font-bold ml-2 text-[#f54a00]">{formatCurrency(campaign.raisedAmount)}</span>
                                </div>
                                <span className="text-base font-semibold text-[#6f6f6f]">{campaign.progress} %</span>
                            </div>
                            <button className="w-full bg-gradient-to-r from-[#f54a00] to-[#ff9252] text-xl text-white font-bold rounded-full p-4 mt-4 hover:bg-[#f54a0033]">Ủng hộ</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default CampaignDetail;
