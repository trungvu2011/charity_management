import axios from "axios";
import { useEffect, useState } from "react";
import HomeHeader from "../Homepage/Header/HomeHeader";
import Footer from "../Footer/Footer";
import { HiFlag, HiOutlineClock } from "react-icons/hi";

const CampaignDetail = () => {
    const campaignId = window.location.pathname.split("/")[2];
    const [campaign, setCampaign] = useState(null);
    const [tab, setTab] = useState('Câu chuyện');

    const formatCurrency = (amount) => {
        return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " VND";
    };

    useEffect(() => {
        try {
            const fetchCampaignDetail = async () => {
                const response = await axios.get(`http://localhost:8080/api/get-all-campaigns`);
                const filteredCampaign = response.data.find(campaign => campaign.campaign_id == campaignId);
                setCampaign(filteredCampaign);
            }
            fetchCampaignDetail();
        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <div className="flex flex-col">
            <HomeHeader/>
            <div className="flex flex-row">
                <div className="w-[60%] pl-32 p-8 flex flex-col">
                    <span className="text-4xl font-medium">{campaign?.title}</span>
                    <img alt="campaign" src={campaign?.img} className="w-full object-cover mt-4 rounded-2xl shadow-lg"/>
                    <div className="flex flex-row mt-4">
                        {['Câu chuyện', 'Hoạt động', 'Danh sách ủng hộ'].map((item, index) => (
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
                        {tab === 'Hoạt động' && (
                            <div>
                                <span className="text-2xl font-medium">Hoạt động</span>
                                <p className="mt-4">{campaign?.activity}</p>
                            </div>
                        )}
                        {tab === 'Danh sách ủng hộ' && (
                            <div>
                                <span className="text-2xl font-medium">Danh sách ủng hộ</span>
                                <div className="mt-4">
                                    {campaign?.contributors.map((contributor, index) => (
                                        <div key={index} className="flex flex-row items-center">
                                            <img alt="contributor" src={contributor.img} className="w-10 h-10 object-cover rounded-full"/>
                                            <span className="ml-4">{contributor.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="w-[40%] h-[600px] pr-32 p-6">
                    <div className="flex flex-col rounded-2xl bg-white shadow-lg">
                        <div className="flex flex-col border-b-gray-500 border-b-2 p-6">
                            <div className="flex flex-row">
                                <div className="w-16 h-16 rounded-full border-[#f54a00] border-2">
                                    <img alt="creator" src={campaign?.creator.img} className="w-16 h-16 object-cover rounded-full "/>
                                </div>
                                <div className="flex flex-col ml-4">
                                    <span className="text-base font-semibold text-[#6f6f6f]">Tiền ủng hộ được chuyển đến</span>
                                    <span className="text-lg font-bold text-[#f54a00]">{campaign?.creator}</span>
                                </div>
                            </div>
                            <button className="text-lg font-bold text-[#f54a00] hover:underline mr-auto mt-4">Xem sao kê tài khoản</button>
                        </div>
                        <div className="flex flex-col p-6">
                            <div className="flex flex-row justify-between">
                                <div className="w-[50%] flex flex-row items-center">
                                    <HiFlag className="w-8 h-8 text-green-600 mr-4"/>
                                    <div className="flex flex-col">
                                        <span className="text-base font-semibold text-[#6f6f6f]">Mục tiêu chiến dịch</span>
                                        <span className="text-xl font-semibold">{formatCurrency(campaign.goal_amount)}</span>
                                    </div>
                                </div>
                                <div className="w-[50%] flex flex-row items-center">
                                    <HiOutlineClock className="w-8 h-8 text-blue-600 mr-4"/>
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
            <Footer/>
        </div>
    );
}

export default CampaignDetail;