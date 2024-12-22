import { useEffect, useRef, useState } from "react";
import HomeHeader from "../Homepage/Header/HomeHeader";
import Footer from "../Footer/Footer";
import { HiDocumentAdd } from "react-icons/hi";
import axios from "axios";

const CreateCampaign = () => {
    const fileInputRef = useRef(null);
    const [ imagePreview, setImagePreview] = useState(null);
    const [ name, setName ] = useState('');
    const [ image, setImage ] = useState(null);
    const [ amount, setAmount ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ startDate, setStartDate ] = useState('');
    const [ endDate, setEndDate ] = useState('');
    const [ bankId, setBankId ] = useState('');
    const [ bankNo, setBankNo ] = useState('');
    
    const [ bankData, setBankData ] = useState([]);

    useEffect(async () => {
        try {
            const response = await axios.get('https://api.vietqr.io/v2/banks');
            setBankData(response.data.data);
        } catch (error) {
            console.error(error);
        }
    }, []);

    const formatCurrency = (value) => {
        const numericValue = value.replace(/[\D]/g, ''); // Remove non-numeric characters
        if (!numericValue) return '';
        return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    };

    const handleAmountChange = (e) => {
        const value = e.target.value;
        setAmount(formatCurrency(value));
    };

    const handleClick = () => {
        fileInputRef.current.click();
    }

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImagePreview(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
            // Kiểm tra xem đã chọn ảnh hay chưa
        if (!imagePreview) {
            alert("Vui lòng chọn một ảnh!");
            return;
        }

        // Tạo FormData
        const formData = new FormData();
        formData.append("name", name); // Tên chiến dịch
        formData.append("description", description); // Mô tả
        formData.append("amount", amount.replace(/\./g, '')); // Mục tiêu (xóa dấu chấm)
        formData.append("startDate", startDate); // Ngày bắt đầu
        formData.append("endDate", endDate); // Ngày kết thúc
        formData.append("image", fileInputRef.current.files[0]); // Tệp ảnh
        
        try {
            const response = await axios.post("http://localhost:8080/api/create-new-campaign", formData);
        } catch (error) {
            console.error(error);
        }
    }



    return (
        <div>
            <HomeHeader/>
            <div className="bg-[#f9f3ee] flex flex-col justify-center items-center pt-10 pb-10">
                <form name="campaign" className="w-full flex flex-col">
                    <div className="flex flex-col w-full pl-32 pr-32">
                        <div className="flex flex-col mb-10">
                            <label className="text-lg font-semibold mb-3">Tên chiến dịch</label>
                            <input 
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="text-xl font-bold p-4 rounded-2xl"
                            />
                        </div>
                        <div className="w-full h-auto flex flex-col mb-8 rounded-2xl" onClick={handleClick}>
                            <label className="text-lg font-semibold mb-3">Ảnh nền chiến dịch</label>
                            {imagePreview ? (
                                <img
                                    src={imagePreview}
                                    alt="preview"
                                    className="w-full h-[500px] mb-6 object-cover rounded-2xl"
                                />
                            ) : (
                                <div className="h-full bg-white p-10 rounded-2xl flex flex-col justify-center items-center">
                                    <HiDocumentAdd className="text-6xl text-gray-500"/>
                                    <p className="mt-4 text-lg font-medium text-gray-500">Thêm ảnh/video</p>
                                    <p className="text-sm text-gray-500">Nhấn để chọn tệp</p>
                                </div>
                            )}
                            <input 
                                type="file"
                                accept="image/*"
                                ref={fileInputRef}
                                value={image}
                                className="hidden"
                                onChange={handleFileChange}
                            />
                        </div>
                        <div className="flex flex-col mb-10">
                            <label className="text-lg font-semibold mb-3">Mô tả</label>
                            <textarea 
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="p-3 w-full h-80 rounded-2xl"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col w-full pr-32 pl-32">
                        <div className="flex flex-col mb-10">
                            <label className="text-lg font-semibold mb-3">Mục tiêu</label>
                            <div className="flex flex-row items-center">
                                <input 
                                    type="text" 
                                    value={amount} 
                                    onChange={handleAmountChange} 
                                    className="w-full p-4 text-orange-500 text-2xl font-semibold rounded-2xl"
                                />
                                <span className="text-xl font-bold text-[#f54a00] ml-4">VND</span>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="w-[50%] flex flex-col mb-10 pr-6">
                                <label className="text-lg font-semibold mb-3">Ngày bắt đầu</label>
                                <input 
                                    type="date"
                                    value={startDate}
                                    onChange={(e) => setStartDate(e.target.value)}
                                    className="text-xl p-4 rounded-2xl"
                                />
                            </div>
                            <div className="w-[50%] flex flex-col mb-10 pl-6">
                                <label className="text-lg font-semibold mb-3">Ngày kết thúc</label>
                                <input 
                                    type="date"
                                    value={endDate}
                                    onChange={(e) => setEndDate(e.target.value)}
                                    className="text-xl p-4 rounded-2xl"
                                />
                            </div>
                        </div>
                        <div className="flex flex-row justify-between mb-10">
                            <div className="flex flex-col w-[50%] pr-6">
                                <label className="text-lg font-semibold mb-3">Mã ngân hàng</label>
                                <select
                                    value={bankId}
                                    onChange={(e) => setBankId(e.target.value)}
                                    className="text-xl p-4 rounded-2xl"
                                >
                                    {bankData.map((bank) => (
                                        <option key={bank.id} value={bank.bin}>{bank.name} ({bank.shortName})</option>
                                    ))}
                                </select>   
                            </div>
                            <div className="flex flex-col w-[50%] pl-6">
                                <label className="text-lg font-semibold mb-3">Số tài khoản</label>
                                <input 
                                    type="text"
                                    value={bankNo}
                                    onChange={(e) => setBankNo(e.target.value)}
                                    className="text-xl p-4 rounded-2xl"
                                />
                            </div>
                        </div>
                        <button 
                            type="submit"
                            className="w-full text-white text-xl font-semibold p-4 rounded-full bg-gradient-to-r from-[#f54a00] to-[#f54a00b2]"
                            onClick={handleSubmit}
                        >
                            Tạo chiến dịch
                        </button>
                    </div>
                </form>
            </div>
            <Footer/>
        </div>
    )
}

export default CreateCampaign;