import React, { useState, useEffect, useRef } from 'react';
import styles from './ChatBot.module.css';

const Chatbot = () => {
    const [open, setOpen] = useState(false);
    const [hover, setHover] = useState(false);
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);

    const messagesEndRef = useRef(null);

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

        setMessages(prev => [...prev, { fromUser: false, text: botResponse }]);
    };

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <div className={`${styles.chatbotContainer} ${open ? styles.open : ''}`}>
            {open ? (
                <div className={styles.chatWindow}>
                    <div className={styles.header}>
                        <span>Chatbot</span>


                        <button onClick={toggleChat}
                            className={styles.closeButton}>
                            ✖
                        </button>
                    </div>
                    <div className={styles.messagesContainer}>
                        {messages.map((msg, i) => (
                            <div key={i} className={msg.fromUser
                                ? styles.userMessageWrapper
                                : styles.botMessageWrapper}>
                                <span className={msg.fromUser
                                    ? styles.userMessage
                                    : styles.botMessage}>
                                    {msg.text}
                                </span>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className={styles.inputContainer}>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="Type a message..."
                            className={styles.inputField}
                        />
                        <button onClick={handleSend}
                            className={styles.sendButton}>
                            Send
                        </button>
                    </div>
                </div>
            ) : (
                <button
                    onClick={toggleChat}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    className={`${styles.toggleButton} ${hover || open ? styles.visible : ''}`}
                >
                    💬
                </button>
            )}
        </div>
    );
};

export default Chatbot;