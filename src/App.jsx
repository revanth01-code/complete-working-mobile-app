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
const IconRotateCcw = ({ size = 24, className = '' }) => (
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

export default function App() {
  const [activeTab, setActiveTab] = useState('standard');
  const [savedItems, setSavedItems] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pendingSave, setPendingSave] = useState(null);

  // --- AUTO-FIX: Inject Tailwind CSS ---
  // This forces the design engine to load if it's missing
  useEffect(() => {
    const scriptId = 'tailwind-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://cdn.tailwindcss.com';
      document.head.appendChild(script);
    }
  }, []);

  // Load saved items
  useEffect(() => {
    const loadedItems = localStorage.getItem('calc_saved_items');
    if (loadedItems) {
      setSavedItems(JSON.parse(loadedItems));
    }
  }, []);

  // Save items
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
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-800 max-w-md mx-auto shadow-2xl overflow-hidden relative">
      {/* --- Internal CSS --- */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        input[type="number"]::-webkit-inner-spin-button,
        input[type="number"]::-webkit-outer-spin-button { -webkit-appearance: none; margin: 0; }
        body { -webkit-tap-highlight-color: transparent; }
      `}</style>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto bg-gray-50 relative no-scrollbar pt-6">
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

      {/* Save Name Modal */}
      {isModalOpen && (
        <SaveModal
          onConfirm={handleConfirmSave}
          onCancel={() => setIsModalOpen(false)}
        />
      )}

      {/* Bottom Navigation */}
      <div className="bg-white border-t border-gray-200 px-6 py-3 flex justify-between items-center pb-8 sticky bottom-0 z-20">
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

// --- Sub Components ---

const SaveModal = ({ onConfirm, onCancel }) => {
  const [name, setName] = useState('');

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl scale-100 animate-in zoom-in-95 duration-200">
        <h3 className="text-lg font-bold text-gray-900 mb-2">Save Result</h3>
        <p className="text-sm text-gray-500 mb-4">
          Give this calculation a name.
        </p>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name..."
          className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-lg mb-6 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
          autoFocus
        />

        <div className="flex gap-3">
          <button
            onClick={onCancel}
            className="flex-1 py-3 rounded-xl font-bold text-gray-500 hover:bg-gray-100 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={() => onConfirm(name || 'Untitled')}
            className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-bold shadow-lg shadow-blue-200 active:scale-95 transition-all"
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
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');

  const handleNum = (num) => {
    if (display === '0') setDisplay(num);
    else setDisplay(display + num);
  };

  const handleOp = (op) => {
    setEquation(display + ' ' + op + ' ');
    setDisplay('0');
  };

  const calculate = () => {
    try {
      const fullEq = equation + display;
      if (
        !/^[0-9+\-*/. ()]+$/.test(
          fullEq.replace('×', '*').replace('÷', '/').replace(/\s/g, '')
        )
      ) {
        if (!isNaN(parseFloat(display))) return display;
        return null;
      }
      const result = new Function(
        'return ' + fullEq.replace('×', '*').replace('÷', '/')
      )();
      const formattedResult = Number(result).toFixed(2).replace(/\.00$/, '');
      setDisplay(formattedResult);
      setEquation('');
      return formattedResult;
    } catch (e) {
      setDisplay('Error');
      return null;
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setEquation('');
  };

  const handleUndo = () => {
    if (display.length > 1) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay('0');
    }
  };

  return (
    <div className="flex flex-col h-full p-6">
      <div className="flex-1 flex flex-col justify-end items-end mb-6 space-y-2 bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
        <div className="text-gray-400 text-sm h-6">{equation}</div>
        <div className="text-5xl font-light text-gray-900 tracking-tighter break-all">
          {display}
        </div>
      </div>

      <div className="grid grid-cols-4 gap-3">
        <CalcBtn label="C" onClick={handleClear} color="red" />
        <CalcBtn
          label={<IconRotateCcw size={20} />}
          onClick={handleUndo}
          color="gray"
        />
        <CalcBtn label="%" onClick={() => handleOp('%')} color="gray" />
        <CalcBtn label="÷" onClick={() => handleOp('/')} color="blue" />

        <CalcBtn label="7" onClick={() => handleNum('7')} />
        <CalcBtn label="8" onClick={() => handleNum('8')} />
        <CalcBtn label="9" onClick={() => handleNum('9')} />
        <CalcBtn label="×" onClick={() => handleOp('*')} color="blue" />

        <CalcBtn label="4" onClick={() => handleNum('4')} />
        <CalcBtn label="5" onClick={() => handleNum('5')} />
        <CalcBtn label="6" onClick={() => handleNum('6')} />
        <CalcBtn label="-" onClick={() => handleOp('-')} color="blue" />

        <CalcBtn label="1" onClick={() => handleNum('1')} />
        <CalcBtn label="2" onClick={() => handleNum('2')} />
        <CalcBtn label="3" onClick={() => handleNum('3')} />
        <CalcBtn label="+" onClick={() => handleOp('+')} color="blue" />

        <CalcBtn label="0" onClick={() => handleNum('0')} span="col-span-2" />
        <CalcBtn label="." onClick={() => handleNum('.')} />
        <button
          onClick={() => {
            const res = calculate();
            if (res) onSave(res, 'Calculation');
          }}
          className="bg-blue-600 text-white rounded-2xl p-4 text-xl font-medium active:scale-95 transition-transform flex items-center justify-center shadow-lg shadow-blue-200"
        >
          <IconSave size={24} />
        </button>
      </div>
      <button
        onClick={calculate}
        className="mt-3 w-full bg-gray-900 text-white py-4 rounded-2xl font-bold text-xl shadow-xl active:scale-95 transition-all"
      >
        =
      </button>
    </div>
  );
};

const CalcBtn = ({ label, onClick, color = 'default', span = '' }) => {
  const baseClass =
    'h-16 rounded-2xl text-xl font-medium flex items-center justify-center transition-all active:scale-95 select-none';
  const colors = {
    default:
      'bg-white text-gray-900 shadow-sm border border-gray-100 hover:bg-gray-50',
    blue: 'bg-blue-50 text-blue-600 font-bold hover:bg-blue-100',
    gray: 'bg-gray-100 text-gray-600 hover:bg-gray-200',
    red: 'bg-red-50 text-red-500 hover:bg-red-100',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClass} ${colors[color]} ${span}`}
    >
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
    <div className="flex flex-col h-full bg-gray-50">
      <div className="flex-1 overflow-y-auto p-4 space-y-3 pb-32">
        {denominations.map((denom) => {
          const count = counts[denom];
          const subtotal = (parseInt(count) || 0) * denom;
          return (
            <div
              key={denom}
              className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 animate-in slide-in-from-bottom-2 duration-300"
            >
              <div className="w-16 h-12 flex items-center justify-center bg-gray-100 rounded-lg text-gray-700 font-bold font-mono border border-gray-200 shadow-inner">
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
              <div className="w-24 text-right font-bold text-gray-900 text-lg">
                {subtotal > 0 ? `₹${subtotal.toLocaleString()}` : '-'}
              </div>
            </div>
          );
        })}
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 pb-6 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] rounded-t-3xl z-10">
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
      <div className="flex flex-col items-center justify-center h-64 text-gray-400">
        <IconHistory size={48} className="mb-4 opacity-20" />
        <p>No saved items yet.</p>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-4 pb-24">
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-center group"
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
