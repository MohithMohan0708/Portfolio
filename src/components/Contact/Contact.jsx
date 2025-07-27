import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        
        const formDataToSend = new FormData(event.target);
        formDataToSend.append("access_key", "52697489-a3dc-420d-881f-da5732a51126");
        
        const object = Object.fromEntries(formDataToSend);
        const json = JSON.stringify(object);
        
        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            }).then((res) => res.json());
            
            if (res.success) {
                alert("Message sent successfully!");
                setFormData({ name: '', email: '', message: '' });
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            alert("Network error. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className='contact' id='contact'>
            <div className="contact-title">
                <h1>Get In Touch</h1>
            </div>
            
            <div className="contact-section">
                <div className="contact-left">
                    <div className="contact-info-card">
                        <h2>Let's Talk</h2>
                        <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                        
                        <div className="contact-details">
                            <div className="contact-detail">
                                <div className="contact-icon">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div className="contact-info">
                                    <span className="contact-label">Email</span>
                                    <p>mohithmohan0708@gmail.com</p>
                                </div>
                            </div>
                            
                            <div className="contact-detail">
                                <div className="contact-icon">
                                    <i className="fas fa-phone"></i>
                                </div>
                                <div className="contact-info">
                                    <span className="contact-label">Phone</span>
                                    <p>+91-9491404526</p>
                                </div>
                            </div>
                            
                            <div className="contact-detail">
                                <div className="contact-icon">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div className="contact-info">
                                    <span className="contact-label">Location</span>
                                    <p>Rajahmundry, Andhra Pradesh, India</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="availability-status">
                            <div className="status-indicator"></div>
                            <span>Available for freelance work</span>
                        </div>
                    </div>
                </div>
                
                <div className="contact-right">
                    <div className="contact-form-card">
                        <h3>Send me a message</h3>
                        <form onSubmit={onSubmit} className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name">Your Name</label>
                                <input 
                                    type="text" 
                                    id="name"
                                    name="name"
                                    placeholder="Enter your name" 
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="email">Your Email</label>
                                <input 
                                    type="email" 
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email" 
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="message">Your Message</label>
                                <textarea 
                                    id="message"
                                    name="message"
                                    rows="6" 
                                    placeholder="Tell me about your project or just say hello!"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            
                            <button 
                                type="submit" 
                                className={`contact-submit ${isSubmitting ? 'submitting' : ''}`}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="spinner"></div>
                                        <span>Sending...</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Send Message</span>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                            <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact