import React from 'react';

const CancellationRefundPolicies = () => {
    const date = new Date().getFullYear();
    return (
        <>
            <div>

                <section
                    id="features"
                    className="relative block px-6 py-10 md:py-10 md:px-10 border-t border-b border-neutral-900 bg-neutral-900/30"
                >
                    <div className=" py-8 px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl mx-auto">
                            <h1 className="text-3xl font-bold text-center mb-6">Cancellation/Refund Policies</h1>
                            <p className="text-gray-200 mb-6">
                                <strong>Effective Date:</strong> {date}
                            </p>
                            <p className="text-gray-200 mb-6">
                                At Fuel My Work!, we strive to ensure the satisfaction of all our users. Please read our cancellation and refund policies below:
                            </p>
                            <h2 className="text-xl font-bold mb-4">For Contributors:</h2>
                            <ul className="list-disc pl-6 mb-6">
                                <li className="text-gray-200">Contributions made to crowdfunding campaigns are generally non-refundable.</li>
                                <li className="text-gray-200">In the event of a fraudulent campaign, please contact us immediately at <a href="mailto:support@fuelmywork.com" className="text-blue-500 hover:underline">support@fuelmywork.com</a> for assistance.</li>
                            </ul>
                            <h2 className="text-xl font-bold mb-4">For Campaign Creators:</h2>
                            <ul className="list-disc pl-6 mb-6">
                                <li className="text-gray-200">If you need to cancel your campaign, please contact our support team as soon as possible.</li>
                                <li className="text-gray-200">Funds already distributed to you may not be refundable.</li>
                            </ul>
                            <h2 className="text-xl font-bold mb-4">Exceptions:</h2>
                            <ul className="list-disc pl-6 mb-6">
                                <li className="text-gray-200">In cases where a campaign does not meet its funding goal, contributions may be refunded.</li>
                            </ul>
                            <p className="text-gray-200">
                                If you have any questions or need further assistance, please reach out to us at <a href="mailto:support@fuelmywork.com" className="text-blue-500 hover:underline">support@fuelmywork.com</a>.
                            </p>
                            <div
                                className="absolute top-0 left-0 z-0 h-1/3 w-full "
                                style={{
                                    backgroundImage:
                                        "linear-gradient(to left bottom, rgba(79, 70, 229, 0.2) 0%, transparent 50%, transparent 100%)",
                                    borderColor: "rgba(92, 79, 240, 0.2)",
                                }}
                            ></div>
                            <div
                                className="absolute top-0 right-0 z-0 h-1/3 w-full"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(to right bottom, rgba(220, 38, 38, 0.2) 0%, transparent 50%, transparent 100%)",
                                    borderColor: "rgba(92, 79, 240, 0.2)",
                                }}
                            ></div>

                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default CancellationRefundPolicies;