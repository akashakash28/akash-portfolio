import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';

const RESPONSES: Record<string, string> = {
  'hello': "Hello! I'm Akash's AI assistant. Ask me anything about his skills, projects, or contact info.",
  'hi': "Hi there! How can I help you learn more about Akash today?",
  'skills': "Akash specializes in backend development (Java, Node.js, Python), cloud (Oracle Cloud, AWS Basics), and AI systems.",
  'projects': "He has built impressive projects like SwiftMeet (Smart Appointment Planner), Hospital Sentiment Analysis AI, and a Live Hand Gesture Recognition system.",
  'contact': "You can reach Akash at akashn200328@gmail.com or find him on LinkedIn and GitHub as @akash-n-dev.",
  'cloud': "Akash is Oracle Cloud Infrastructure Foundations Associate certified and has a strong understanding of AWS basics.",
  'backend': "He is passionate about building scalable backend systems, REST APIs, and intelligent automation using Java and Node.js.",
  'education': "Akash is currently a final-year Computer Science Engineering student with a focus on cloud and AI.",
  'default': "I'm not sure about that. Try asking about his skills, projects, education, or contact information!"
};

const SUGGESTIONS = [
  { label: 'Skills', value: 'skills' },
  { label: 'Projects', value: 'projects' },
  { label: 'Contact', value: 'contact' },
  { label: 'Cloud Experience', value: 'cloud' }
];

const getResponse = (input: string) => {
  const lowerInput = input.toLowerCase();
  if (lowerInput.includes('skill')) return RESPONSES['skills'];
  if (lowerInput.includes('project')) return RESPONSES['projects'];
  if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('reach')) return RESPONSES['contact'];
  if (lowerInput.includes('cloud') || lowerInput.includes('aws') || lowerInput.includes('oracle')) return RESPONSES['cloud'];
  if (lowerInput.includes('backend') || lowerInput.includes('api')) return RESPONSES['backend'];
  if (lowerInput.includes('education') || lowerInput.includes('college') || lowerInput.includes('student')) return RESPONSES['education'];
  if (lowerInput.includes('hello') || lowerInput.includes('hi')) return RESPONSES['hello'];
  return RESPONSES['default'];
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string, isBot: boolean }[]>([
    { text: "Hi! I can tell you about Akash's skills, projects, and experience.", isBot: true }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async (text?: string) => {
    const messageToSend = text || input;
    if (!messageToSend.trim()) return;

    setMessages(prev => [...prev, { text: messageToSend, isBot: false }]);
    setInput('');
    setIsTyping(true);

    // Simulate AI thinking
    setTimeout(() => {
      const botResponse = getResponse(messageToSend);
      setMessages(prev => [...prev, { text: botResponse, isBot: true }]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="glass w-80 sm:w-96 h-[500px] rounded-2xl mb-4 flex flex-col overflow-hidden shadow-2xl border-white/20"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 flex justify-between items-center bg-primary/20">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <Bot size={18} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Akash's Assistant</h3>
                  <p className="text-[10px] text-blue-300">Online & Ready to help</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide"
            >
              {messages.map((msg, i) => (
                <motion.div
                  initial={{ opacity: 0, x: msg.isBot ? -10 : 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={i}
                  className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.isBot 
                      ? 'bg-white/10 text-white rounded-tl-none' 
                      : 'bg-primary text-white rounded-tr-none shadow-lg shadow-primary/20'
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/10 p-3 rounded-2xl rounded-tl-none flex gap-1">
                    <span className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                </div>
              )}
              
              {!isTyping && messages[messages.length - 1]?.isBot && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s.value}
                      onClick={() => handleSend(s.value)}
                      className="text-[10px] px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-primary/20 hover:border-primary/50 transition-all"
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10 bg-black/20">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask me something..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-2 pl-4 pr-10 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                />
                <button 
                  onClick={handleSend}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-primary hover:text-blue-400 transition-colors"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/40 text-white"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>
    </div>
  );
}
