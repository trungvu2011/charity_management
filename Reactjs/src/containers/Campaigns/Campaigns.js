import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation để lấy query parameters
import Banner from "../Homepage/Banner/Banner";
import HomeHeader from "../Homepage/Header/HomeHeader";
import Footer from "../Footer/Footer";
import { HiOutlineSearch } from "react-icons/hi";
import axios from '../../axios';
import CampaignCard from './CampaignCard';

const Campaigns = () => {
    const [contributorType, setContributorType] = useState('Tất cả');
    const [status, setStatus] = useState('Đang thực hiện');
    const [campaigns, setCampaigns] = useState([]);
    const [filteredCampaigns, setFilteredCampaigns] = useState([]);
    const [error, setError] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const location = useLocation(); // Hook để lấy thông tin URL

    // Lấy từ khóa tìm kiếm từ URL
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const query = params.get('search') || ''; // Nếu không có tham số, mặc định là ''
        setSearchQuery(query);
    }, [location.search]);

    // Fetch danh sách chiến dịch
    useEffect(() => {
        const fetchCampaigns = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/get-all-campaigns`);
                setCampaigns(response);
                setFilteredCampaigns(response);
            } catch (error) {
                setError(error);
            }
        };

        fetchCampaigns();
    }, []);


    // Lọc chiến dịch theo các tiêu chí
    useEffect(() => {
        const filterCampaigns = () => {
            let filtered = campaigns;


            filtered = filtered.filter(campaign =>
                contributorType === 'Tổ chức' ? campaign.type === true : campaign.type === false
            );

            filtered = filtered.filter(campaign => {
                // 0 : Đang thực hiện, 1: Đã kết thúc, 2: Đạt mục tiêu
                if (status === 'Đang thực hiện') {
                    return campaign.status === 0;
                } else if (status === 'Đã kết thúc') {
                    return campaign.status === 1;
                } else {
                    return campaign.status === 2;
                }
            });

            if (searchQuery) {
                filtered = filtered.filter(campaign => {
                    const normalizedTitle = campaign.title.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
                    const normalizedQuery = searchQuery.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
                    return normalizedTitle.includes(normalizedQuery);
                });
            }

            setFilteredCampaigns(filtered);
        };

        filterCampaigns();
    }, [contributorType, status, campaigns, searchQuery]);

    const handleStatusChange = async (e) => {
        try {
            setStatus(e.target.value);
            const response = await axios.get(`/get-all-campaigns`);
            setCampaigns(response.data);
        } catch (error) {
            setError(error);
        }
    };

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
                            <option value="Đã kết thúc">Đã kết thúc</option>
                            <option value="Đạt mục tiêu">Đạt mục tiêu</option>
                        </select>
                    </div>
                    <div className="w-[40%]">
                        <div className="w-full relative">
                            <HiOutlineSearch className="w-5 h-5 absolute top-[10px] left-4 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Tìm kiếm tên chiến dịch"
                                className="w-full pl-12 pt-2.5 pb-2.5 pr-8 rounded-3xl"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
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
                <div className='flex flex-row flex-wrap mb-8'>
                    {filteredCampaigns.map((campaign) => {
                        return <CampaignCard key={campaign.campaign_id} campaign={campaign} />;
                    })}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Campaigns;
