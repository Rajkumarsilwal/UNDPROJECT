import React, { useState, useEffect, useRef } from 'react';

const Chatbot = () => {
    const [open, setOpen] = useState(false);
    const [hover, setHover] = useState(false);
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);

    const messagesEndRef = useRef(null); // Used for auto-scroll

    const toggleChat = () => setOpen(!open);

    const handleSend = async () => {
        if (input.trim() === '') return;

        const userMessage = { fromUser: true, text: input };
        const newMessages = [...messages, userMessage];
        setMessages(newMessages);
        setInput('');

        const lowerInput = input.toLowerCase();
        let botResponse = '';

        if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
            botResponse = 'Hi there! How can I assist you today?';
        } else if (lowerInput.includes('help')) {
            botResponse = 'Sure! Please tell me what you need help with.';
        } else if (lowerInput.includes('name')) {
            botResponse = "I'm your virtual assistant chatbot.";
        } else {
            botResponse = "I am unable to answer. Sorry";
        }
        // } else {
        //     try {
        //         const res = await fetch('https://api.openai.com/v1/chat/completions', {
        //             method: 'POST',
        //             headers: {
        //                 'Content-Type': 'application/json',
        //                 'Authorization': 'Bearer YOUR_OPENAI_API_KEY',
        //             },
        //             body: JSON.stringify({
        //                 model: 'gpt-3.5-turbo',
        //                 messages: [
        //                     { role: 'system', content: 'You are a helpful assistant.' },
        //                     { role: 'user', content: input },
        //                 ],
        //             }),
        //         });

        //         const data = await res.json();
        //         botResponse = data.choices?.[0]?.message?.content?.trim() || 'AI did not respond.';
        //     } catch (error) {
        //         console.error('Fetch error:', error);
        //         botResponse = 'Sorry, I could not connect to AI right now.';
        //     }
        // }

        setMessages(prev => [...prev, { fromUser: false, text: botResponse }]);
    };

    // Auto-scroll to bottom when messages update
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <div
            style={{
                position: 'fixed',
                bottom: '1rem',
                right: 'max(1rem, calc((100vw - 1200px) / 1.98 + 1.5rem))',
                width: open ? '300px' : '60px',
                height: open ? '400px' : '60px',
                borderRadius: '15px',
                backgroundColor: '#fff',
                boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                overflow: 'hidden',
                transition: 'all 0.5s ease-in-out',
                zIndex: 10000,
            }}
        >
            {open ? (
                <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    {/* Header */}
                    <div style={{
                        padding: '10px',
                        background: '#009A44',
                        color: '#fff',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        fontWeight: 'bold',
                    }}>
                        <span>Chatbot</span>
                        <button onClick={toggleChat} style={{
                            background: 'none',
                            border: 'none',
                            color: '#fff',
                            fontSize: '18px',
                            cursor: 'pointer'
                        }}>✖</button>
                    </div>

                    {/* Messages */}
                    <div style={{
                        flex: 1,
                        padding: '10px',
                        overflowY: 'auto',
                        backgroundColor: '#f9f9f9'
                    }}>
                        {messages.map((msg, i) => (
                            <div key={i} style={{
                                textAlign: msg.fromUser ? 'right' : 'left',
                                margin: '6px 0'
                            }}>
                                <span style={{
                                    background: msg.fromUser ? '#dcf8c6' : '#e0e0e0',
                                    padding: '8px 12px',
                                    borderRadius: '12px',
                                    display: 'inline-block',
                                    maxWidth: '80%'
                                }}>{msg.text}</span>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <div style={{
                        display: 'flex',
                        borderTop: '1px solid #ddd'
                    }}>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="Type a message..."
                            style={{
                                flex: 1,
                                border: 'none',
                                padding: '10px',
                                outline: 'none'
                            }}
                        />
                        <button onClick={handleSend} style={{
                            padding: '10px',
                            background: '#009A44',
                            color: '#fff',
                            border: 'none',
                            cursor: 'pointer',
                            fontWeight: 'bold',
                        }}>Send</button>
                    </div>
                </div>
            ) : (
                <button
                    onClick={toggleChat}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    style={{
                        width: '100%',
                        height: '100%',
                        background: '#009A44',
                        color: '#fff',
                        fontSize: '40px',
                        border: 'none',
                        borderRadius: '15px',
                        cursor: 'pointer',
                        opacity: open || hover ? 1 : 0.6,
                        transition: 'opacity 0.3s ease',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    💬
                </button>
            )}
        </div>
    );
};

export default Chatbot;
