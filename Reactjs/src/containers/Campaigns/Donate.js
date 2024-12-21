import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import HomeHeader from '../Homepage/Header/HomeHeader';
import Footer from '../Footer/Footer'
import axios from 'axios';

const Donate = () => {
    const { state } = useLocation();
    const campaign = state?.campaign;
    const [amount, setAmount] = useState('');
    const [message, setMessage] = useState('');
    const [name, setName] = useState(campaign?.creator);
    const [email, setEmail] = useState(campaign?.creatorEmail);
    const [showQRCode, setShowQRCode] = useState(false); // State to show QR code modal
    const [paymentLink, setPaymentLink] = useState(''); // Store the payment link to encode in the QR code

    const formatCurrency = (value) => {
        const numericValue = value.replace(/[\D]/g, ''); // Remove non-numeric characters
        if (!numericValue) return '';
        return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    };

    const handleAmountChange = (e) => {
        const value = e.target.value;
        setAmount(formatCurrency(value));
    };

    const handleSubmit = async () => {
        if (!amount) {
            alert('Vui lòng nhập số tiền ủng hộ');
            return;
        }

        // Generate payment URL
        let bankId = campaign.BANK_ID;
        let accountNo = campaign.BANK_NO;
        console.log(bankId, accountNo, amount, message, name);
        let paymentUrl = `https://img.vietqr.io/image/${bankId}-${accountNo}-qr-only.png?amount=${amount}`;
        paymentUrl = `https://img.vietqr.io/image/970422-4888820112004-qr_only.png?amount=10000`;
        setPaymentLink(paymentUrl);

        setShowQRCode(true); // Show QR code modal

    };

    const handlePayment = async () => {
        setShowQRCode(false);

        const data = {
            amount: amount.replace(/\./g, ''), // Remove dots when sending data
            message: message,
            campaign_id: campaign.campaign_id,
            user_id: campaign.user_id,
        };

        await axios.post('http://localhost:8080/api/create-new-donation', data)
            .then((res) => {
                console.log(res);
                alert('Cảm ơn bạn đã ủng hộ chiến dịch');
            })
            .catch((err) => {
                console.log(err);
                alert('Đã xảy ra lỗi, vui lòng thử lại sau');
            });

        window.location.href = `/campaign/id=${campaign.campaign_id}`;
    }



    // Close QR code modal
    const closeModal = () => {
        setShowQRCode(false);
    };

    let imgSrc = campaign.img.startsWith('http') ? campaign.img : `http://localhost:8080${campaign.img}`;

    return (
        <div className="flex flex-col">
            <HomeHeader />
            <div className="h-[100vh] flex flex-row bg-[#f9f3ee]">
                <div className="w-[45%] pl-32 p-8 flex flex-col">
                    <div className="flex flex-col border-b-gray-300 border-b-2 p-6 bg-white rounded-tl-2xl rounded-tr-2xl">
                        <div className="flex flex-row items-center">
                            <div className="w-18 h-18 rounded-full border-[#f54a00] border-4">
                                <img alt="creator" src={campaign?.creator.img} className="w-14 h-14 object-cover rounded-full" />
                            </div>
                            <div className="flex flex-col ml-4">
                                <span className="text-base font-semibold text-[#6f6f6f]">Tiền ủng hộ được chuyển đến</span>
                                <span className="text-lg font-bold text-[#f54a00]">{campaign?.creator}</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col p-6 bg-white rounded-bl-2xl rounded-br-2xl">
                        <span>Bạn đang ủng hộ cho chiến dịch</span>
                        <img alt="campaign" src={imgSrc} className="w-full object-cover mt-4 rounded-2xl shadow-lg" />
                        <span className="text-xl font-bold mt-2">{campaign?.title}</span>
                        <div className="flex flex-row pl-3 pr-3 pb-3 justify-between">
                            <div className="flex flex-row">
                                <span className="text-base text-[#f54a00] font-extrabold">{formatCurrency(campaign.raisedAmount.toString())} VND</span>
                                <span className="text-black text-base font-medium ml-2">đã đạt được</span>
                            </div>
                            <div className="flex flex-row">
                                <span className="text-black text-base font-extrabold">{campaign.progress}%</span>
                            </div>
                        </div>
                        <div className="pb-3">
                            <div className="relative w-full h-2 bg-gray-300 rounded-full">
                                <div className="absolute h-2 bg-[#f54a00] rounded-full" style={{ width: `${campaign.progress}%` }}></div>
                            </div>
                        </div>
                        <div className="flex flex-row pb-3 justify-between">
                            <div className="flex flex-row">
                                <span className="text-base text-gray-500">Của mục tiêu {formatCurrency(campaign.goal_amount.toString())}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-[55%] p-8 pl-5 pr-20 flex flex-col">
                    <div className="p-6 pt-2 space-y-6">
                        <h2 className="text-lg font-semibold text-gray-800">Thông tin ủng hộ</h2>

                        <div>
                            <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                                Nhập số tiền ủng hộ <span className="text-red-500">*</span>
                            </label>
                            <div className="mt-2 flex items-center space-x-2">
                                <input
                                    id="amount"
                                    type="text"
                                    value={amount}
                                    onChange={handleAmountChange}
                                    className="flex-grow p-3 text-orange-500 text-2xl font-semibold border border-gray-300 rounded-2xl focus:ring-orange-500 focus:border-orange-500"
                                />
                                <span className="text-2xl font-semibold text-orange-500">VND</span>
                            </div>
                            <div className="mt-4 flex space-x-2 flex-row">
                                <button className="w-[25%] m-3 mt-0 px-4 py-2 bg-gray-100 text-gray-700 font-semibold rounded-lg focus:ring-2 focus:ring-orange-500 focus:ring-offset-1 shadow-lg"
                                    onClick={() => setAmount(formatCurrency('50000'))}
                                >
                                    50.000
                                </button>
                                <button className="w-[25%] m-3 mt-0 px-4 py-2 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 focus:ring-2 focus:ring-orange-500 focus:ring-offset-1 shadow-lg"
                                    onClick={() => setAmount(formatCurrency('100000'))}
                                >
                                    100.000
                                </button>
                                <button className="w-[25%] m-3 mt-0 px-4 py-2 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 focus:ring-2 focus:ring-orange-500 focus:ring-offset-1 shadow-lg"
                                    onClick={() => setAmount(formatCurrency('200000'))}
                                >
                                    200.000
                                </button>
                                <button className="w-[25%] m-3 mt-0 px-4 py-2 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 focus:ring-2 focus:ring-orange-500 focus:ring-offset-1 shadow-lg"
                                    onClick={() => setAmount(formatCurrency('500000'))}
                                >
                                    500.000
                                </button>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Lời chúc</label>
                            <input
                                id="message"
                                type="text"
                                placeholder="Nhập lời chúc trao gửi yêu thương"
                                className="mt-2 w-full p-3 border border-gray-300 rounded-2xl focus:ring-orange-500 focus:border-orange-500"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </div>

                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Họ và tên</label>
                            <input
                                id="name"
                                type="text"
                                value={name}
                                className="mt-2 w-full p-3 border border-gray-300 rounded-2xl focus:ring-orange-500 focus:border-orange-500"
                                readOnly
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                className="mt-2 w-full p-3 border border-gray-300 rounded-2xl focus:ring-orange-500 focus:border-orange-500"
                                readOnly
                            />
                        </div>

                        <button
                            className="w-full py-3 bg-orange-500 text-white font-semibold text-lg rounded-2xl hover:bg-orange-600 focus:ring-2 focus:ring-orange-500 focus:ring-offset-1"
                            onClick={handleSubmit}
                        >
                            Ủng hộ
                        </button>
                    </div>
                </div>
            </div>

            {/* QR Code Modal */}
            {showQRCode && paymentLink && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-8 rounded-xl w-96 text-center">
                        <img src={paymentLink} alt="QR Code" className="w-64 h-64 mx-auto mb-4" />
                        <div className='flex flex-col'>
                            <span className="text-gray-700">Quét mã để ủng hộ!</span>
                            <button className='w-full mt-4 py-3 bg-orange-500 text-white font-semibold text-lg rounded-2xl hover:bg-orange-600 focus:ring-2 focus:ring-orange-500 focus:ring-offset-1'
                                onClick={() => handlePayment()}
                            >
                                Đã ủng hộ
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <Footer />
        </div>
    );
};

export default Donate;
