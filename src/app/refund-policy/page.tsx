function RefundPolicy() {
    return (
        <div className="md:w-5/6 mx-auto px-4 py-20">
            <section className="rounded-lg p-6">
                <h2 className="text-3xl font-semibold mb-4 text-primarycolor">Refund Policy</h2>
                <p className="mb-6">
                    At Common Person Relief, we are deeply committed to transparency and the responsible use of funds. Please read our refund policy carefully to understand the terms and conditions regarding donations and other transactions on our website.
                </p>

                <h3 className="text-xl font-bold mt-6 mb-2">1. Donations</h3>
                <p>
                    All donations made to Common Person Relief are voluntary and non-refundable. By making a donation, you acknowledge that you understand and agree to this policy.
                </p>

                <h3 className="text-xl font-bold mt-6 mb-2">2. Refunds for Errors</h3>
                <p>
                    In cases where an error occurs during the donation process, such as duplicate transactions or incorrect amounts, please contact us within 7 days of the transaction. We will review the case and, if appropriate, process a refund.
                </p>

                <h3 className="text-xl font-bold mt-6 mb-2">3. Refund Process</h3>
                <ul className="list-disc list-inside space-y-2">
                    <li>
                        To request a refund, please email us at <a href="mailto:info@commonpersonrelief.org" className="text-blue-600 underline">info@commonpersonrelief.org</a> with details of the transaction, including your name, the transaction date, and the amount.
                    </li>
                    <li>
                        Refunds will only be made to the original payment method used during the transaction.
                    </li>
                    <li>
                        Processing of approved refunds may take up to 14 business days.
                    </li>
                </ul>

                <h3 className="text-xl font-bold mt-6 mb-2">4. Event Payments</h3>
                <p>
                    For payments related to event registrations or other activities, refund requests must be made no later than 7 days prior to the event date. After this period, refunds will not be processed.
                </p>

                <h3 className="text-xl font-bold mt-6 mb-2">5. Contact Us</h3>
                <p>
                    If you have questions about this refund policy or need assistance with a transaction, please contact us at:
                </p>
                <address className="mt-2">
                    <p>Email: <a href="mailto:info@commonpersonrelief.org" className="text-blue-600 underline">info@commonpersonrelief.org</a></p>
                    <p>Phone: +1 (432) 803-1218</p>
                </address>
            </section>
        </div>
    );
}

export default RefundPolicy;
