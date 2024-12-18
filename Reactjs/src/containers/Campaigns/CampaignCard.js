import React from 'react';

const CampaignCard = ({ campaign }) => {
    const formatCurrency = (amount) => {
        return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " VND";
    };

    const handleClick = () => {
        window.location.href = `/campaign/${campaign.campaign_id}`;
    }

    return (
        <div className='flex flex-col w-[30%] h-[480px] m-4 bg-white rounded-xl shadow-md hover:cursor-pointer' onClick={handleClick}>
            <img src={campaign.img} alt="" className='w-full h-[300px] object-cover rounded-t-xl'/>
            <span className='p-3 text-xl font-extrabold truncate'>{campaign.title}</span>
            <div className='flex flex-row pl-3 pr-3 pb-3'>
                <span className='text-base text-gray-500'>Tạo bởi</span>
                <span className='ml-2 text-base text-[#f54a00] font-extrabold'>{campaign.creator}</span>
            </div>
            <div className='flex flex-row pl-3 pr-3 pb-3 justify-between'>
                <div className='flex flex-row'>
                    <span className='text-base text-[#f54a00] font-extrabold'>{formatCurrency(campaign.raisedAmount)} VND</span>
                    <span className='text-base font-medium ml-2'>đã đạt được</span>
                </div>
                <div className='flex flex-row'>
                    <span className='text-base font-extrabold'>{campaign.progress}%</span>
                </div>
            </div>
            <div className='pl-3 pr-3 pb-3'>
                <div className='relative w-full h-2 bg-gray-300 rounded-full'>
                    <div className='absolute h-2 bg-[#f54a00] rounded-full' style={{ width: `${campaign.progress}%` }}></div>
                </div>
            </div>
            <div className='flex flex-row pl-3 pr-3 pb-3 justify-between'>
                <div className='flex flex-row'>
                    <span className='text-base text-gray-500'>Của mục tiêu {campaign.goal_amount} VND</span>
                </div>
            </div>
        </div>
    )
}

export default CampaignCard;