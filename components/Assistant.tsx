import React, { useState } from 'react';
import { Sparkles, Send, Gift } from 'lucide-react';
import { askPartyAssistant } from '../services/geminiService';
import { LoadingState } from '../types';

const Assistant: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [status, setStatus] = useState<LoadingState>(LoadingState.IDLE);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    setStatus(LoadingState.LOADING);
    const result = await askPartyAssistant(question);
    setResponse(result);
    setStatus(LoadingState.SUCCESS);
    setQuestion('');
  };

  const suggestions = [
    "What should I wear?",
    "Can I bring a friend?",
    "Gift ideas for the host?",
    "What's the cocktail menu?"
  ];

  return (
    <section className="py-16 bg-christmas-green text-christmas-cream border-y-8 border-christmas-gold/50">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-6 animate-pulse">
          <Sparkles className="text-christmas-gold mr-2" />
          <span className="font-bold tracking-widest text-sm uppercase">AI Party Concierge</span>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-display mb-6">Ask the Elf</h2>
        <p className="mb-8 font-light text-lg opacity-90">
          Not sure what to wear to match the red walls? Wondering about parking? 
          Ask our AI assistant who knows all about the venue!
        </p>

        <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-2xl">
          {response && (
             <div className="mb-6 bg-christmas-cream text-stone-800 p-4 rounded-lg text-left shadow-lg relative">
               <div className="absolute -top-3 -left-3 bg-christmas-red text-white p-2 rounded-full">
                 <Gift size={16} />
               </div>
               <p className="font-serif italic leading-relaxed">"{response}"</p>
             </div>
          )}

          <form onSubmit={handleAsk} className="relative">
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="e.g. Is there a dress code?"
              className="w-full bg-white/10 border border-white/20 rounded-full py-4 pl-6 pr-14 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-christmas-gold transition-all"
              disabled={status === LoadingState.LOADING}
            />
            <button
              type="submit"
              disabled={status === LoadingState.LOADING}
              className="absolute right-2 top-2 p-2 bg-christmas-gold text-christmas-red rounded-full hover:bg-yellow-400 transition-colors disabled:opacity-50"
            >
              <Send size={20} />
            </button>
          </form>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {suggestions.map((s) => (
              <button
                key={s}
                onClick={() => setQuestion(s)}
                className="text-xs bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full transition-colors text-white/80"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Assistant;