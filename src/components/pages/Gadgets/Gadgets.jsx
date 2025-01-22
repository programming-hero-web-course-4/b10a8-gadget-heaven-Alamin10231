import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Gadget from '../../Gadget/Gadget';
import Leftbar from '../../Leftbar/Leftbar';

const Gadgets = () => {
    const gadgetsData = useLoaderData();
    const { category } = useParams();
    
    const filtergadgetData = !category || category === "All Products"
        ? gadgetsData
        : gadgetsData.filter(gadget => gadget.category === category);

    return (
        <div className="my-20 max-w-[80%] mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
                Explore Cutting-Edge Gadgets
            </h2>
            <div className="grid grid-cols-4 gap-6">
                {/* Left Sidebar */}
                <div className="md:col-span-1 bg-white flex flex-col border border-[#dfdfe2] rounded-2xl h-[550px]">
                    <Leftbar />
                </div>

                {/* Gadgets Section */}
                <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtergadgetData.map(gadget => (
                        <Gadget key={gadget.product_id} gadget={gadget} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gadgets;
