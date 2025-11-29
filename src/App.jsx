import React, { useState, useEffect, useRef } from 'react';

// --- API Configuration ---
const apiKey = '';

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
const IconCreditCard = ({ size = 24, className = '' }) => (
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
    <rect width="20" height="14" x="2" y="5" rx="2" />
    <line x1="2" x2="22" y1="10" y2="10" />
  </svg>
);
const IconPlus = ({ size = 24, className = '' }) => (
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
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);
const IconMinus = ({ size = 24, className = '' }) => (
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
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);
const IconFileText = ({ size = 24, className = '' }) => (
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
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);
const IconChevronDown = ({ size = 24, className = '' }) => (
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
    <path d="m6 9 6 6 6-6" />
  </svg>
);
const IconChevronUp = ({ size = 24, className = '' }) => (
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
    <path d="m18 15-6-6-6 6" />
  </svg>
);
const IconCoins = ({ size = 24, className = '' }) => (
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
    <circle cx="8" cy="8" r="6" />
    <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
    <path d="M7 6h1v4" />
    <path d="m16.71 13.88.7.71-2.82 2.82" />
  </svg>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('standard');
  const [savedItems, setSavedItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClearModalOpen, setIsClearModalOpen] = useState(false);
  const [pendingSave, setPendingSave] = useState(null);

  // --- AUTO-FIX: Inject Tailwind CSS & jsPDF ---
  useEffect(() => {
    const tailwindId = 'tailwind-script';
    if (!document.getElementById(tailwindId)) {
      const script = document.createElement('script');
      script.id = tailwindId;
      script.src = 'https://cdn.tailwindcss.com';
      document.head.appendChild(script);
    }

    const jspdfId = 'jspdf-script';
    if (!document.getElementById(jspdfId)) {
      const script = document.createElement('script');
      script.id = jspdfId;
      script.src =
        'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
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

  const handleInitiateSave = (amount, type, details = null) => {
    setPendingSave({ amount, type, details });
    setIsModalOpen(true);
  };

  const handleConfirmSave = (name) => {
    if (name && pendingSave) {
      const newItem = {
        id: Date.now(),
        name: name,
        amount: pendingSave.amount,
        type: pendingSave.type,
        details: pendingSave.details,
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

  const handleClearAll = () => {
    setSavedItems([]);
    setIsClearModalOpen(false);
  };

  return (
    <div className="fixed inset-0 w-full h-full bg-gray-50 flex flex-col font-sans text-gray-800 overflow-hidden">
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        input[type="number"]::-webkit-inner-spin-button,
        input[type="number"]::-webkit-outer-spin-button { -webkit-appearance: none; margin: 0; }
        body { -webkit-tap-highlight-color: transparent; background-color: #f9fafb; margin: 0; padding: 0; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
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
          <SavedList
            items={savedItems}
            onDelete={deleteItem}
            onClearAll={() => setIsClearModalOpen(true)}
          />
        )}
      </div>

      {isModalOpen && (
        <SaveModal
          onConfirm={handleConfirmSave}
          onCancel={() => setIsModalOpen(false)}
        />
      )}

      {isClearModalOpen && (
        <ClearModal
          onConfirm={handleClearAll}
          onCancel={() => setIsClearModalOpen(false)}
        />
      )}

      {/* Bottom Navigation */}
      <div className="bg-white border-t border-gray-200 px-2 py-2 flex justify-between items-center pb-6 sticky bottom-0 z-20 shrink-0 w-full">
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

// --- Saved List with PDF Download & Clear All ---
const SavedList = ({ items, onDelete, onClearAll }) => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handleDownloadPDF = (item) => {
    if (!item.details) return;

    if (!window.jspdf) {
      alert(
        'PDF generator is still loading. Please wait a moment and try again.'
      );
      return;
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // -- PDF Design --
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(22);
    doc.text('CASH TALLY RECEIPT', 105, 20, null, null, 'center');

    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text(`Date: ${item.date}`, 20, 35);
    doc.text(`Name: ${item.name}`, 20, 42);

    doc.setLineWidth(0.5);
    doc.line(20, 48, 190, 48);

    // List Cash
    let yPos = 60;
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('Cash Breakdown', 20, yPos);
    yPos += 10;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);

    let hasCash = false;
    Object.entries(item.details.counts).forEach(([denom, count]) => {
      const val = parseInt(count) || 0;
      if (val > 0) {
        hasCash = true;
        const total = (val * parseInt(denom)).toLocaleString();
        doc.text(`${denom}`, 20, yPos);
        doc.text(`x ${val}`, 80, yPos);
        doc.text(`=  ${total}`, 150, yPos);
        yPos += 8;
      }
    });

    if (!hasCash) {
      doc.text('No notes tallied.', 20, yPos);
      yPos += 8;
    }

    // Loose Cash in PDF
    const loose = parseInt(item.details.loose) || 0;
    if (loose > 0) {
      doc.text(`Loose Cash:`, 20, yPos);
      doc.text(`${loose.toLocaleString()}`, 150, yPos);
      yPos += 8;
    }

    yPos += 5;
    doc.line(20, yPos, 190, yPos);
    yPos += 10;

    // Totals
    doc.setFont('helvetica', 'bold');
    doc.text(`Cash Total:`, 100, yPos);
    doc.text(`${item.details.cashTotal.toLocaleString()}`, 150, yPos);
    yPos += 8;

    doc.text(`Online Total:`, 100, yPos);
    doc.text(
      `${parseInt(item.details.online || 0).toLocaleString()}`,
      150,
      yPos
    );
    yPos += 12; // Extra space before grand total

    // Grand Total Box
    doc.setDrawColor(0);
    doc.setFillColor(240, 240, 240);
    doc.rect(95, yPos - 8, 80, 14, 'F'); // Highlight box
    doc.setFontSize(14);
    doc.text(`GRAND TOTAL:`, 100, yPos);
    doc.text(`${item.details.grandTotal.toLocaleString()}`, 150, yPos);

    // Footer
    doc.setFontSize(10);
    doc.setTextColor(150);
    doc.text('Generated by Cash Tally App', 105, 280, null, null, 'center');

    // Save
    doc.save(`${item.name.replace(/\s+/g, '_')}_receipt.pdf`);
  };

  if (items.length === 0)
    return (
      <div className="flex flex-col items-center justify-center h-64 text-gray-400 w-full">
        <IconHistory size={48} className="mb-4 opacity-20" />
        <p>No saved items yet.</p>
      </div>
    );

  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-4 pb-24 w-full">
      {/* Clear All Header */}
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">
          History
        </h3>
        <button
          onClick={onClearAll}
          className="text-xs font-bold text-red-500 bg-red-50 px-3 py-1.5 rounded-lg hover:bg-red-100 transition-colors flex items-center gap-1 active:scale-95"
        >
          <IconTrash2 size={14} /> Clear All
        </button>
      </div>

      {items.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all"
        >
          {/* Main Card Header (Clickable) */}
          <div
            onClick={() => item.type === 'Cash Tally' && toggleExpand(item.id)}
            className="p-4 flex justify-between items-center cursor-pointer active:bg-gray-50"
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
              {item.type === 'Cash Tally' ? (
                expandedId === item.id ? (
                  <IconChevronUp size={20} className="text-gray-400" />
                ) : (
                  <IconChevronDown size={20} className="text-gray-400" />
                )
              ) : (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onDelete(item.id);
                  }}
                  className="text-gray-300 hover:text-red-500 p-2 transition-colors"
                >
                  <IconTrash2 size={18} />
                </button>
              )}
            </div>
          </div>

          {/* Expanded Breakdown Area */}
          {expandedId === item.id && item.details && (
            <div className="bg-gray-50 border-t border-gray-100 p-4 text-sm animate-fade-in">
              <div className="space-y-1 mb-4">
                <p className="text-xs font-bold text-gray-400 uppercase mb-2">
                  Breakdown
                </p>
                {Object.entries(item.details.counts).map(([denom, count]) => {
                  const val = parseInt(count) || 0;
                  if (val === 0) return null;
                  return (
                    <div
                      key={denom}
                      className="flex justify-between text-gray-600"
                    >
                      <span>
                        ₹{denom} <span className="text-gray-400">x</span> {val}
                      </span>
                      <span className="font-medium">
                        ₹{(val * parseInt(denom)).toLocaleString()}
                      </span>
                    </div>
                  );
                })}
                {/* Loose Cash Display */}
                {parseInt(item.details.loose) > 0 && (
                  <div className="flex justify-between text-gray-600">
                    <span>Loose Cash</span>
                    <span className="font-medium">
                      ₹{parseInt(item.details.loose).toLocaleString()}
                    </span>
                  </div>
                )}
                {/* Online Display */}
                {parseInt(item.details.online) > 0 && (
                  <div className="flex justify-between text-blue-600 mt-2 pt-2 border-t border-gray-200">
                    <span>Online / UPI</span>
                    <span className="font-medium">
                      ₹{parseInt(item.details.online).toLocaleString()}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex gap-3 mt-4 pt-3 border-t border-gray-200">
                <button
                  onClick={() => handleDownloadPDF(item)}
                  className="flex-1 flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 py-3 rounded-xl text-sm font-bold hover:bg-gray-50 active:scale-95 transition-all shadow-sm"
                >
                  <IconFileText size={18} className="text-red-500" /> Save as
                  PDF
                </button>
                <button
                  onClick={() => onDelete(item.id)}
                  className="flex items-center justify-center w-12 bg-red-50 text-red-500 rounded-xl hover:bg-red-100 active:scale-95 transition-all"
                >
                  <IconTrash2 size={20} />
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// --- Tally Calculator with Online & Loose Cash Section ---
const CashTallyCalculator = ({ onSave }) => {
  const denominations = [500, 200, 100, 50, 20, 10, 5, 2, 1];
  const [counts, setCounts] = useState(() => {
    const initial = {};
    denominations.forEach((d) => (initial[d] = ''));
    return initial;
  });
  const [onlineAmount, setOnlineAmount] = useState('');
  const [looseAmount, setLooseAmount] = useState(''); // New State for Loose Cash
  const [cashTotal, setCashTotal] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);

  useEffect(() => {
    let t = 0;
    denominations.forEach((d) => {
      const val = parseInt(counts[d]) || 0;
      t += val * d;
    });
    // Add Loose Amount to Cash Total
    const loose = parseInt(looseAmount) || 0;
    t += loose;

    setCashTotal(t);
    const online = parseInt(onlineAmount) || 0;
    setGrandTotal(t + online);
  }, [counts, onlineAmount, looseAmount]);

  const handleCountChange = (denom, value) => {
    if (value === '' || /^\d+$/.test(value)) {
      setCounts((prev) => ({ ...prev, [denom]: value }));
    }
  };

  const adjustCount = (denom, amount) => {
    const currentVal = parseInt(counts[denom]) || 0;
    const newVal = Math.max(0, currentVal + amount);
    setCounts((prev) => ({ ...prev, [denom]: newVal.toString() }));
  };

  const handleReset = () => {
    const reset = {};
    denominations.forEach((d) => (reset[d] = ''));
    setCounts(reset);
    setOnlineAmount('');
    setLooseAmount('');
  };

  return (
    <div className="flex flex-col h-full bg-gray-50 w-full relative">
      <div className="flex-1 overflow-y-auto p-4 space-y-3 pb-48 w-full">
        <div className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1 mb-1">
          Cash Denominations
        </div>
        {denominations.map((denom) => {
          const count = counts[denom];
          const subtotal = (parseInt(count) || 0) * denom;
          return (
            <div
              key={denom}
              className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between gap-2"
            >
              <div className="w-14 h-10 flex items-center justify-center bg-gray-100 rounded-lg text-gray-700 font-bold font-mono border border-gray-200 shadow-inner text-sm shrink-0">
                ₹{denom}
              </div>
              <div className="flex-1 flex items-center justify-center gap-2">
                <button
                  onClick={() => adjustCount(denom, -1)}
                  className="w-8 h-8 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center active:bg-gray-200 transition-colors"
                >
                  <IconMinus size={16} />
                </button>
                <input
                  type="tel"
                  value={count}
                  onChange={(e) => handleCountChange(denom, e.target.value)}
                  placeholder="0"
                  className="w-12 text-center bg-transparent border-b-2 border-gray-100 focus:border-blue-500 outline-none text-xl text-gray-900 font-medium py-1 transition-colors placeholder-gray-200"
                />
                <button
                  onClick={() => adjustCount(denom, 1)}
                  className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center active:bg-blue-100 transition-colors"
                >
                  <IconPlus size={16} />
                </button>
              </div>
              <div className="w-20 text-right font-bold text-gray-900 text-base shrink-0">
                {subtotal > 0 ? `₹${subtotal.toLocaleString()}` : '-'}
              </div>
            </div>
          );
        })}

        {/* Loose Amount Section */}
        <div className="mt-4">
          <div className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1 mb-2">
            Loose Cash
          </div>
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-orange-100 flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center bg-orange-50 rounded-lg text-orange-500 font-bold border border-orange-100 shadow-inner shrink-0">
              <IconCoins size={20} />
            </div>
            <div className="flex-1">
              <label className="text-xs text-gray-400 block mb-1">
                Coins / Misc
              </label>
              <input
                type="tel"
                value={looseAmount}
                onChange={(e) => {
                  if (e.target.value === '' || /^\d+$/.test(e.target.value))
                    setLooseAmount(e.target.value);
                }}
                placeholder="Enter amount"
                className="w-full bg-transparent border-b-2 border-transparent focus:border-orange-500 outline-none text-2xl text-gray-900 font-medium p-0 placeholder-gray-200"
              />
            </div>
          </div>
        </div>

        {/* Online Section */}
        <div className="mt-4">
          <div className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1 mb-2">
            Digital / Online
          </div>
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-blue-100 flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center bg-blue-50 rounded-lg text-blue-600 font-bold border border-blue-100 shadow-inner shrink-0">
              <IconCreditCard size={20} />
            </div>
            <div className="flex-1">
              <label className="text-xs text-gray-400 block mb-1">
                UPI / Card Total
              </label>
              <input
                type="tel"
                value={onlineAmount}
                onChange={(e) => {
                  if (e.target.value === '' || /^\d+$/.test(e.target.value))
                    setOnlineAmount(e.target.value);
                }}
                placeholder="Enter amount"
                className="w-full bg-transparent border-b-2 border-transparent focus:border-blue-500 outline-none text-2xl text-gray-900 font-medium p-0 placeholder-gray-200"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 pb-4 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] rounded-t-3xl z-10 w-full">
        <div className="flex justify-between items-center mb-2 px-1 text-xs font-medium text-gray-500">
          <span>Cash: ₹{cashTotal.toLocaleString()}</span>
          <span>+</span>
          <span>Online: ₹{parseInt(onlineAmount || 0).toLocaleString()}</span>
        </div>
        <div className="flex justify-between items-end mb-4 px-1">
          <div>
            <div className="text-xs font-bold text-gray-400 uppercase tracking-wide">
              Grand Total
            </div>
            <div className="text-4xl font-bold text-gray-900 tracking-tight">
              ₹{grandTotal.toLocaleString()}
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
          onClick={() =>
            onSave(
              `Grand Total: ₹${grandTotal.toLocaleString()}`,
              'Cash Tally',
              {
                counts,
                online: onlineAmount,
                loose: looseAmount,
                cashTotal,
                grandTotal,
              }
            )
          }
          disabled={grandTotal === 0}
          className="w-full bg-blue-600 disabled:bg-gray-300 disabled:shadow-none text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-blue-200 active:scale-95 transition-all flex items-center justify-center gap-2"
        >
          <IconSave size={20} />
          Save Tally
        </button>
      </div>
    </div>
  );
};

// --- Standard Calculator ---
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

  const handleInput = (val) => updateExpression(expression + val);
  const handleClear = () => {
    updateExpression('');
    setPreview('');
  };
  const handleBackspace = () => updateExpression(expression.slice(0, -1));
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
    <div className="flex flex-col h-full w-full">
      <div className="flex-1 flex flex-col justify-end items-end mb-0 space-y-1 bg-white p-6 pb-4 border-b border-gray-100 w-full shrink-0">
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

const ClearModal = ({ onConfirm, onCancel }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 animate-in fade-in duration-200">
    <div className="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl mx-4">
      <h3 className="text-lg font-bold text-gray-900 mb-2">Clear History?</h3>
      <p className="text-sm text-gray-500 mb-6">
        This will permanently delete all your saved calculations. This action
        cannot be undone.
      </p>
      <div className="flex gap-3">
        <button
          onClick={onCancel}
          className="flex-1 py-3 rounded-xl font-bold text-gray-500 hover:bg-gray-100 transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={onConfirm}
          className="flex-1 bg-red-500 text-white py-3 rounded-xl font-bold shadow-lg shadow-red-200 active:scale-95 transition-all"
        >
          Delete All
        </button>
      </div>
    </div>
  </div>
);

const NavButton = ({ active, onClick, icon, label, special }) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center gap-1 transition-all duration-200 w-16 ${
      active
        ? special
          ? 'text-purple-600 scale-110'
          : 'text-blue-600 scale-110'
        : 'text-gray-400 hover:text-gray-600'
    }`}
  >
    {icon}
    <span className="text-[10px] font-medium">{label}</span>
  </button>
);
