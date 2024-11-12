import React from 'react';

const testimonials = [
    {
        image: 'https://randomuser.me/api/portraits/women/68.jpg',
        quote: 'This product exceeded my expectations! Absolutely loved the quality and the customer service was top-notch!',
        name: 'Sarah J.',
        role: 'Marketing Specialist'
    },
    {
        image: 'https://randomuser.me/api/portraits/men/45.jpg',
        quote: 'A seamless experience from start to finish. Highly recommend to anyone looking for quality and reliability.',
        name: 'Mike R.',
        role: 'Entrepreneur'
    },
    {
        image: 'https://randomuser.me/api/portraits/women/44.jpg',
        quote: "Hands down, one of the best purchases I've made in a long time. Excellent service and support!",
        name: 'Emily W.',
        role: 'Designer'
    },
];

const Orders = () => {
    return (
        <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">What Our Customers Say</h2>
            <div className="flex flex-col gap-6 sm:flex-row sm:flex-wrap justify-center">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md p-6 max-w-xs text-center">
                        <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-gray-200"
                        />
                        <p className="italic text-gray-600 mb-4">"{testimonial.quote}"</p>
                        <p className="font-semibold text-gray-800">- {testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Orders;
