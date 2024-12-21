import { useRef, useState } from "react";
import HomeHeader from "../Homepage/Header/HomeHeader";

const CreateCampaign = () => {
    const fileInputRef = useRef(null);
    const [ imagePreview, setImagePreview] = useState(null);

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

    const handleSubmit = () => {
        
    }

    return (
        <div>
            <HomeHeader/>
            <div className="bg-[#f9f3ee] flex flex-col justify-center items-center pt-6">
                <form name="campaign" className="w-full flex flex-row justify-between">
                    <div className="flex flex-col w-[50%] pl-32 p-6">
                        <div className="flex flex-col mb-10">
                            <label className="text-lg font-semibold mb-3">Tên chiến dịch</label>
                            <input type="text" placeholder="" className="text-xl font-bold p-4 rounded-2xl"/>
                        </div>
                        <div className="w-full h-96 flex flex-col mb-10 rounded-2xl" onClick={handleClick}>
                            <label className="text-lg font-semibold mb-3">Ảnh nền chiến dịch</label>
                            {imagePreview ? (
                                <img
                                    src={imagePreview}
                                    alt="preview"
                                    className="w-full h-[300px] mb-6 object-cover rounded-2xl"
                                />
                            ) : (
                                <div className="h-full bg-white p-6 rounded-2xl flex flex-col justify-center items-center">
                                    <div className="w-12 h-12 bg-gray-300 rounded-full flex justify-center items-center">
                                        <span className="text-2xl font-bold text-white">+</span>
                                    </div>
                                    <p className="mt-4 text-lg font-medium">Thêm ảnh/video</p>
                                    <p className="text-sm text-gray-300">Nhấn để chọn tệp</p>
                                </div>
                            )}
                            <input 
                                type="file"
                                accept="image/*"
                                ref={fileInputRef}
                                className="hidden"
                                onChange={handleFileChange}
                            />
                        </div>
                        <div className="flex flex-col mb-10">
                            <label className="text-lg font-semibold mb-3">Mô tả</label>
                            <textarea className="p-3 w-full h-80 rounded-2xl"/>
                            <image/>
                        </div>
                    </div>
                    <div className="flex flex-col w-[50%] pr-32 p-6">
                        <div className="flex flex-col mb-10">
                            <label className="text-lg font-semibold mb-3">Mục tiêu</label>
                            <div className="flex flex-row items-center">
                                <input type="number" className="w-full p-4 text-xl rounded-2xl"/>
                                <span className="text-xl font-bold text-[#f54a00] ml-4">VND</span>
                            </div>
                        </div>
                        <div className="flex flex-col mb-10">
                            <label className="text-lg font-semibold mb-3">Ngày bắt đầu</label>
                            <input type="date" className="text-xl p-4 rounded-2xl"/>
                        </div>
                        <div className="flex flex-col mb-10">
                            <label className="text-lg font-semibold mb-3">Ngày kết thúc</label>
                            <input type="date" className="text-xl p-4 rounded-2xl"/>
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
        </div>
    )
}

export default CreateCampaign;