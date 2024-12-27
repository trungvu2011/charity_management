import React from 'react';
import { Link } from 'react-router-dom';

const CampaignCard = ({ campaign }) => {
    const formatCurrency = (amount) => {
        return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " VND";
    };

    let imgSrc = campaign.img.startsWith('http') ? campaign.img : `http://localhost:8080${campaign.img}`;

    return (
        <Link
            to={{
                pathname: `/campaign/id=${campaign.campaign_id}`, // Điều hướng đến chi tiết chiến dịch
            }}
            className='relative flex flex-col w-[30%] h-[480px] m-3 bg-white rounded-xl shadow-md hover:cursor-pointer no-underline'
        >
            <img src={imgSrc} alt="" className='w-full h-[300px] object-cover rounded-t-xl' />
            <div className='absolute bg-[#f4f4f4] top-4 left-2 rounded-full pt-2 pb-2 pl-3 pr-3'>
                <span className='text-black text-sm font-medium'>
                    {campaign.status === 0 ? `Còn ${campaign.remainingDays} ngày` : campaign.status === 1 ? 'Đã kết thúc' : 'Đạt mục tiêu'}
                </span>
            </div>
            <span className='p-3 text-black text-xl font-extrabold truncate'>{campaign.title}</span>
            <div className='flex flex-row pl-3 pr-3 pb-3'>
                <span className='text-base text-gray-500'>Tạo bởi</span>
                <span className='ml-2 text-base text-[#f54a00] font-extrabold'>{campaign.creator}</span>
            </div>
            <div className='flex flex-row pl-3 pr-3 pb-3 justify-between'>
                <div className='flex flex-row'>
                    <span className='text-base text-[#f54a00] font-extrabold'>{formatCurrency(campaign.raisedAmount)} VND</span>
                    <span className='text-black text-base font-medium ml-2'>đã đạt được</span>
                </div>
                <div className='flex flex-row'>
                    <span className='text-black text-base font-extrabold'>{campaign.progress}%</span>
                </div>
            </div>
            <div className='pl-3 pr-3 pb-3'>
                <div className='relative w-full h-2 bg-gray-300 rounded-full'>
                    <div className='absolute h-2 bg-[#f54a00] rounded-full' style={{ width: `${campaign.progress}%` }}></div>
                </div>
            </div>
            <div className='flex flex-row pl-3 pr-3 pb-3 justify-between'>
                <div className='flex flex-row'>
                    <span className='text-base text-gray-500'>Của mục tiêu {formatCurrency(campaign.goal_amount)} VND</span>
                </div>
            </div>
        </Link>
    )
}

export default CampaignCard;
