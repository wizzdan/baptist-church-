
import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';

const PrayerRequest: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [request, setRequest] = useState('');
    const [contact, setContact] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, you would handle form submission here
        console.log({ name, email, request, contact });
        setSubmitted(true);
    };

    if(submitted) {
        return (
            <section id="prayer" className="py-20 bg-deep-blue-gray text-white">
                <div className="container mx-auto px-6 text-center">
                    <AnimatedSection>
                        <h2 className="text-4xl font-serif font-bold mb-4">Thank You</h2>
                        <p className="text-lg max-w-2xl mx-auto">Your prayer request has been received. Our prayer team will be lifting you up. Be assured that you are not alone.</p>
                    </AnimatedSection>
                </div>
            </section>
        );
    }

    return (
        <section id="prayer" className="py-20 bg-deep-blue-gray text-white">
            <div className="container mx-auto px-6">
                <AnimatedSection className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-light-neutral mb-4">Need Prayer?</h2>
                    <p className="text-lg text-light-neutral/80 max-w-3xl mx-auto">
                        We believe in the power of prayer. Let us know how we can pray for you. All requests are kept confidential.
                    </p>
                </AnimatedSection>
                <AnimatedSection>
                    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white/10 p-8 rounded-lg shadow-xl">
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <input type="text" placeholder="Your Name (Optional)" value={name} onChange={e => setName(e.target.value)} className="w-full p-3 bg-white/20 rounded border border-transparent focus:bg-white focus:text-deep-blue-gray focus:outline-none focus:ring-2 focus:ring-light-neutral transition placeholder:text-light-neutral/70"/>
                            <input type="email" placeholder="Your Email (Optional)" value={email} onChange={e => setEmail(e.target.value)} className="w-full p-3 bg-white/20 rounded border border-transparent focus:bg-white focus:text-deep-blue-gray focus:outline-none focus:ring-2 focus:ring-light-neutral transition placeholder:text-light-neutral/70"/>
                        </div>
                        <textarea placeholder="Your Prayer Request..." value={request} onChange={e => setRequest(e.target.value)} required rows={5} className="w-full p-3 bg-white/20 rounded border border-transparent focus:bg-white focus:text-deep-blue-gray focus:outline-none focus:ring-2 focus:ring-light-neutral transition mb-6 placeholder:text-light-neutral/70"></textarea>
                        <div className="flex items-center mb-6">
                            <input type="checkbox" id="contact" checked={contact} onChange={e => setContact(e.target.checked)} className="w-5 h-5 rounded text-warm-brown-gray focus:ring-warm-brown-gray"/>
                            <label htmlFor="contact" className="ml-3 text-light-neutral/90">I would like someone from the prayer team to reach out.</label>
                        </div>
                        <button type="submit" className="w-full bg-warm-brown-gray text-white p-4 rounded-lg text-lg font-bold hover:bg-light-neutral hover:text-deep-blue-gray transition-colors duration-300">Submit Request</button>
                    </form>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default PrayerRequest;
