import React, { useState, useEffect } from 'react';

// --- Icons (Built-in) ---
const IconCalculator = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="16" height="20" x="4" y="2" rx="2" />
    <line x1="8" x2="16" y1="6" y2="6" />
    <line x1="16" x2="16" y1="14" y2="18" />
    <path d="M16 10h.01" />
    <path d="M12 10h.01" />
    <path d="M8 10h.01" />
    <path d="M12 14h.01" />
    <path d="M8 14h.01" />
    <path d="M12 18h.01" />
    <path d="M8 18h.01" />
  </svg>
);
const IconBanknote = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="12" x="2" y="6" rx="2" />
    <circle cx="12" cy="12" r="2" />
    <path d="M6 12h.01M18 12h.01" />
  </svg>
);
const IconHistory = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 12" />
    <path d="M3 3v9h9" />
    <path d="M12 7v5l4 2" />
  </svg>
);
const IconSave = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
    <path d="M17 21v-8H7v8" />
    <path d="M7 3v5h8" />
  </svg>
);
const IconTrash2 = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M3 6h18" />
    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    <line x1="10" x2="10" y1="11" y2="17" />
    <line x1="14" x2="14" y1="11" y2="17" />
  </svg>
);
const IconRefreshCw = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
    <path d="M21 3v5h-5" />
    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
    <path d="M8 16H3v5" />
  </svg>
);
const IconDelete = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" />
    <line x1="18" y1="9" x2="12" y2="15" />
    <line x1="12" y1="9" x2="18" y2="15" />
  </svg>
);
const IconUndo = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 14 4 9l5-5" />
    <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11" />
  </svg>
);
const IconRedo = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m15 14 5-5-5-5" />
    <path d="M20 9H9.5A5.5 5.5 0 0 0 4 14.5v0A5.5 5.5 0 0 0 9.5 20H13" />
  </svg>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('standard');
  const [savedItems, setSavedItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pendingSave, setPendingSave] = useState(null);

  // Auto-inject Tailwind CSS
  useEffect(() => {
    const scriptId = 'tailwind-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://cdn.tailwindcss.com';
      document.head.appendChild(script);
    }
  }, []);

  useEffect(() => {
    const loadedItems = localStorage.getItem('calc_saved_items');
    if (loadedItems) {
      setSavedItems(JSON.parse(loadedItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('calc_saved_items', JSON.stringify(savedItems));
  }, [savedItems]);

  const handleInitiateSave = (amount, type) => {
    setPendingSave({ amount, type });
    setIsModalOpen(true);
  };

  const handleConfirmSave = (name) => {
    if (name && pendingSave) {
      const newItem = {
        id: Date.now(),
        name: name,
        amount: pendingSave.amount,
        type: pendingSave.type,
        date:
          new Date().toLocaleDateString() +
          ' ' +
          new Date().toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          }),
      };
      setSavedItems([newItem, ...savedItems]);
      setIsModalOpen(false);
      setPendingSave(null);
    }
  };

  const deleteItem = (id) => {
    setSavedItems(savedItems.filter((item) => item.id !== id));
  };

  return (
    // FIX: Using 'fixed inset-0' forces the app to fill the entire screen on mobile
    <div className="fixed inset-0 w-full h-full bg-gray-50 flex flex-col font-sans text-gray-800 overflow-hidden">
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        input[type="number"]::-webkit-inner-spin-button,
        input[type="number"]::-webkit-outer-spin-button { -webkit-appearance: none; margin: 0; }
        body { -webkit-tap-highlight-color: transparent; background-color: #f9fafb; margin: 0; padding: 0; }
      `}</style>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden bg-gray-50 relative w-full">
        {activeTab === 'standard' && (
          <StandardCalculator onSave={handleInitiateSave} />
        )}
        {activeTab === 'tally' && (
          <CashTallyCalculator onSave={handleInitiateSave} />
        )}
        {activeTab === 'saved' && (
          <SavedList items={savedItems} onDelete={deleteItem} />
        )}
      </div>

      {isModalOpen && (
        <SaveModal
          onConfirm={handleConfirmSave}
          onCancel={() => setIsModalOpen(false)}
        />
      )}

      {/* Bottom Navigation */}
      <div className="bg-white border-t border-gray-200 px-6 py-2 flex justify-between items-center pb-6 sticky bottom-0 z-20 shrink-0 w-full">
        <NavButton
          active={activeTab === 'standard'}
          onClick={() => setActiveTab('standard')}
          icon={<IconCalculator size={24} />}
          label="Calc"
        />
        <NavButton
          active={activeTab === 'tally'}
          onClick={() => setActiveTab('tally')}
          icon={<IconBanknote size={24} />}
          label="Cash Tally"
        />
        <NavButton
          active={activeTab === 'saved'}
          onClick={() => setActiveTab('saved')}
          icon={<IconHistory size={24} />}
          label="Saved"
        />
      </div>
    </div>
  );
}

const SaveModal = ({ onConfirm, onCancel }) => {
  const [name, setName] = useState('');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl mx-4">
        <h3 className="text-lg font-bold text-gray-900 mb-2">Save Result</h3>
        <p className="text-sm text-gray-500 mb-4">
          Give this calculation a name.
        </p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name..."
          className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-lg mb-6 outline-none focus:border-blue-500"
          autoFocus
        />
        <div className="flex gap-3">
          <button
            onClick={onCancel}
            className="flex-1 py-3 rounded-xl font-bold text-gray-500 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={() => onConfirm(name || 'Untitled')}
            className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-bold shadow-lg shadow-blue-200 active:scale-95"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

const NavButton = ({ active, onClick, icon, label }) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center gap-1 transition-all duration-200 ${
      active ? 'text-blue-600 scale-110' : 'text-gray-400 hover:text-gray-600'
    }`}
  >
    {icon}
    <span className="text-[10px] font-medium">{label}</span>
  </button>
);

const StandardCalculator = ({ onSave }) => {
  const [expression, setExpression] = useState('');
  const [preview, setPreview] = useState('');
  const [history, setHistory] = useState(['']);
  const [historyIndex, setHistoryIndex] = useState(0);

  const safeCalculate = (exp) => {
    try {
      let clean = exp.replace(/×/g, '*').replace(/÷/g, '/');
      if (/[+\-*/.]$/.test(clean)) clean = clean.slice(0, -1);
      if (!clean) return '';
      // eslint-disable-next-line no-new-func
      const result = new Function('return ' + clean)();
      if (!isFinite(result) || isNaN(result)) return '';
      return Number(result).toFixed(2).replace(/\.00$/, '');
    } catch (e) {
      return '';
    }
  };

  const updateExpression = (newExp) => {
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(newExp);
    if (newHistory.length > 20) newHistory.shift();
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);

    setExpression(newExp);
    setPreview(safeCalculate(newExp));
  };

  const handleInput = (val) => {
    updateExpression(expression + val);
  };

  const handleClear = () => {
    updateExpression('');
    setPreview('');
  };

  const handleBackspace = () => {
    updateExpression(expression.slice(0, -1));
  };

  const handleUndo = () => {
    if (historyIndex > 0) {
      const prev = history[historyIndex - 1];
      setHistoryIndex(historyIndex - 1);
      setExpression(prev);
      setPreview(safeCalculate(prev));
    }
  };

  const handleRedo = () => {
    if (historyIndex < history.length - 1) {
      const next = history[historyIndex + 1];
      setHistoryIndex(historyIndex + 1);
      setExpression(next);
      setPreview(safeCalculate(next));
    }
  };

  const handleEqual = () => {
    if (preview && preview !== 'Error') {
      updateExpression(preview);
      setPreview('');
    }
  };

  return (
    // FULL WIDTH FIX: Ensure this container takes 100% width
    <div className="flex flex-col h-full w-full">
      {/* Display Section */}
      <div className="flex-1 flex flex-col justify-end items-end mb-0 space-y-1 bg-white p-6 pb-4 border-b border-gray-100 w-full">
        <div
          className={`text-right font-light text-gray-800 break-all transition-all ${
            expression.length > 10 ? 'text-4xl' : 'text-5xl'
          }`}
        >
          {expression || '0'}
        </div>
        <div className="text-gray-400 text-2xl font-medium h-8">
          {preview ? `= ${preview}` : ''}
        </div>
      </div>

      {/* Button Grid: gap-0.5 for tight grid, w-full for full width */}
      <div className="grid grid-cols-4 gap-px h-[60%] bg-gray-200 w-full border-t border-gray-200">
        <CalcBtn label="C" onClick={handleClear} color="red" />
        <CalcBtn
          label={<IconUndo size={22} />}
          onClick={handleUndo}
          color="gray"
        />
        <CalcBtn
          label={<IconRedo size={22} />}
          onClick={handleRedo}
          color="gray"
        />
        <CalcBtn
          label={<IconDelete size={22} />}
          onClick={handleBackspace}
          color="gray"
        />

        <CalcBtn label="7" onClick={() => handleInput('7')} />
        <CalcBtn label="8" onClick={() => handleInput('8')} />
        <CalcBtn label="9" onClick={() => handleInput('9')} />
        <CalcBtn label="÷" onClick={() => handleInput('÷')} color="blue" />

        <CalcBtn label="4" onClick={() => handleInput('4')} />
        <CalcBtn label="5" onClick={() => handleInput('5')} />
        <CalcBtn label="6" onClick={() => handleInput('6')} />
        <CalcBtn label="×" onClick={() => handleInput('×')} color="blue" />

        <CalcBtn label="1" onClick={() => handleInput('1')} />
        <CalcBtn label="2" onClick={() => handleInput('2')} />
        <CalcBtn label="3" onClick={() => handleInput('3')} />
        <CalcBtn label="-" onClick={() => handleInput('-')} color="blue" />

        <CalcBtn label="0" onClick={() => handleInput('0')} />
        <CalcBtn label="." onClick={() => handleInput('.')} />
        <CalcBtn label="+" onClick={() => handleInput('+')} color="blue" />
        <button
          onClick={() => {
            if (preview) onSave(preview, 'Calculation');
          }}
          className="bg-blue-600 text-white text-xl font-medium active:bg-blue-700 transition-colors flex items-center justify-center h-full w-full"
        >
          <IconSave size={28} />
        </button>
      </div>

      {/* Equal Button */}
      <button
        onClick={handleEqual}
        className="w-full bg-gray-900 text-white py-6 font-bold text-3xl active:bg-gray-800 transition-all shrink-0"
      >
        =
      </button>
    </div>
  );
};

const CalcBtn = ({ label, onClick, color = 'default' }) => {
  const baseClass =
    'h-full w-full text-2xl font-medium flex items-center justify-center active:opacity-75 select-none transition-colors';
  const colors = {
    default: 'bg-white text-gray-900',
    blue: 'bg-blue-50 text-blue-600 font-bold',
    gray: 'bg-gray-50 text-gray-600',
    red: 'bg-red-50 text-red-500',
  };

  return (
    <button onClick={onClick} className={`${baseClass} ${colors[color]}`}>
      {label}
    </button>
  );
};

const CashTallyCalculator = ({ onSave }) => {
  const denominations = [500, 200, 100, 50, 20, 10, 5, 2, 1];
  const [counts, setCounts] = useState(() => {
    const initial = {};
    denominations.forEach((d) => (initial[d] = ''));
    return initial;
  });
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let t = 0;
    denominations.forEach((d) => {
      const val = parseInt(counts[d]) || 0;
      t += val * d;
    });
    setTotal(t);
  }, [counts]);

  const handleCountChange = (denom, value) => {
    if (value === '' || /^\d+$/.test(value)) {
      setCounts((prev) => ({ ...prev, [denom]: value }));
    }
  };

  const handleReset = () => {
    const reset = {};
    denominations.forEach((d) => (reset[d] = ''));
    setCounts(reset);
  };

  return (
    <div className="flex flex-col h-full bg-gray-50 w-full">
      <div className="flex-1 overflow-y-auto p-4 space-y-3 pb-32 w-full">
        {denominations.map((denom) => {
          const count = counts[denom];
          const subtotal = (parseInt(count) || 0) * denom;
          return (
            <div
              key={denom}
              className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 animate-in slide-in-from-bottom-2 duration-300"
            >
              <div className="w-16 h-12 flex items-center justify-center bg-gray-100 rounded-lg text-gray-700 font-bold font-mono border border-gray-200 shadow-inner shrink-0">
                ₹{denom}
              </div>
              <div className="flex-1 flex items-center text-gray-400 font-medium text-sm">
                <span className="mr-2">x</span>
                <input
                  type="tel"
                  value={count}
                  onChange={(e) => handleCountChange(denom, e.target.value)}
                  placeholder="0"
                  className="w-full bg-gray-50 border-b-2 border-transparent focus:border-blue-500 outline-none text-2xl text-gray-900 font-medium py-1 px-2 transition-colors placeholder-gray-200"
                />
              </div>
              <div className="w-24 text-right font-bold text-gray-900 text-lg shrink-0">
                {subtotal > 0 ? `₹${subtotal.toLocaleString()}` : '-'}
              </div>
            </div>
          );
        })}
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 pb-6 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] rounded-t-3xl z-10 w-full">
        <div className="flex justify-between items-end mb-4 px-2">
          <div>
            <div className="text-xs font-bold text-gray-400 uppercase tracking-wide">
              Total Amount
            </div>
            <div className="text-4xl font-bold text-gray-900 tracking-tight">
              ₹{total.toLocaleString()}
            </div>
          </div>
          <button
            onClick={handleReset}
            className="p-2 text-gray-400 hover:text-red-500 transition-colors"
          >
            <IconRefreshCw size={20} />
          </button>
        </div>
        <button
          onClick={() => onSave(`₹${total.toLocaleString()}`, 'Cash Tally')}
          disabled={total === 0}
          className="w-full bg-blue-600 disabled:bg-gray-300 disabled:shadow-none text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-blue-200 active:scale-95 transition-all flex items-center justify-center gap-2"
        >
          <IconSave size={20} />
          Save Tally
        </button>
      </div>
    </div>
  );
};

const SavedList = ({ items, onDelete }) => {
  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-gray-400 w-full">
        <IconHistory size={48} className="mb-4 opacity-20" />
        <p>No saved items yet.</p>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-4 pb-24 w-full">
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-center group w-full"
        >
          <div>
            <h3 className="font-bold text-gray-800">{item.name}</h3>
            <div className="flex items-center gap-2 mt-1">
              <span
                className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wide ${
                  item.type === 'Cash Tally'
                    ? 'bg-purple-100 text-purple-600'
                    : 'bg-blue-100 text-blue-600'
                }`}
              >
                {item.type}
              </span>
              <span className="text-xs text-gray-400">{item.date}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xl font-light text-gray-900">
              {item.amount}
            </span>
            <button
              onClick={() => onDelete(item.id)}
              className="text-gray-300 hover:text-red-500 p-2 transition-colors"
            >
              <IconTrash2 size={18} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
