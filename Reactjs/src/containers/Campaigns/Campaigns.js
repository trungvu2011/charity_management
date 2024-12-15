import React, { useEffect, useState } from 'react';
import Banner from "../Homepage/Banner/Banner";
import HomeHeader from "../Homepage/Header/HomeHeader";
import { HiOutlineSearch } from "react-icons/hi";
import axios from 'axios';
import CampaignCard from './CampaignCard';

const Campaigns = () => {
    const [contributorType, setContributorType] = useState('Tất cả');
    const [status, setStatus] = useState('Đang thực hiện');
    const [campaigns, setCampaigns] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchCampaigns = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/get-all-campaigns`);
                setCampaigns(response.data);
            } catch (error) {
                setError(error);
            }
        }

        fetchCampaigns();
    }, []);

    const handleStatusChange = async (e) => {
        try {
            setStatus(e.target.value);
            const response = await axios.get(`http://localhost:8080/api/get-all-campaigns`);
            setCampaigns(response.data);
        } catch (error) {
            setError(error);
        }
    }

    return (
        <div>
            <HomeHeader />
            <Banner />
            <div className="flex flex-col bg-[#f9f3ee] pl-32 pr-32">
                <div className="flex justify-center items-center">
                    <span className="p-5 font-semibold text-2xl ">Chiến dịch gây quỹ nổi bật</span>
                </div>
                <div className="flex flex-row justify-between mb-6">
                    <div className="flex flex-row items-start">
                        <select name="status" id="" className="h-full pl-4 pt-2 pb-2 pr-8 mr-6 rounded-lg" onChange={handleStatusChange}>
                            <option value="Đang thực hiện">Đang thực hiện</option>
                            <option value="Đạt mục tiêu">Đạt mục tiêu</option>
                            <option value="Đã kết thúc">Đã kết thúc</option>
                            <option value="Tạm dừng">Tạm dừng</option>
                        </select>
                    </div>
                    <div className="w-[40%]">
                        <div className="w-full relative">
                            <HiOutlineSearch className="w-5 h-5 absolute top-[10px] left-4 text-gray-400" />
                            <input type="text" placeholder="Tìm kiếm tên chiến dịch" className="w-full pl-12 pt-2.5 pb-2.5 pr-8 rounded-3xl" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-row mb-6">
                    {['Tất cả', 'Tổ chức', 'Cá nhân'].map((button) => (
                        <button
                            key={button}
                            className={`text-xl p-6 ${contributorType === button ? 'text-[#f54a00] border-b-2 border-[#f54a00]' : ''}`}
                            onClick={() => setContributorType(button)}
                        >
                            {button}
                        </button>
                    ))}
                </div>
                <div className='flex flex-row flex-wrap'>
                    {campaigns.map((campaign) => {
                        return <CampaignCard key={campaign.campaign_id} campaign={campaign} />
                    })}
                </div>
            </div>
        </div>
    );
}

export default Campaigns;