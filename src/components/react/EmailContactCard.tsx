import { useState } from 'react';
import { Mail } from 'lucide-react';

export default function EmailContactCard() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('hello@automationarchitech.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-between min-h-[280px] bg-gray-50 border border-gray-100 rounded-xl p-6">
      {/* Icon */}
      <Mail className="w-8 h-8 text-gray-600 mb-6" />

      {/* Button */}
      <a
        href="mailto:hello@automationarchitech.com"
        className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 mb-4"
      >
        Email Us
      </a>

      {/* Bottom content - consistent spacing with other cards */}
      <div className="text-sm text-gray-600 text-center min-h-[40px]">
        <button
          onClick={handleCopyEmail}
          className="text-gray-700 hover:text-gray-900 underline cursor-pointer"
          aria-label="Copy email address to clipboard"
        >
          {copied ? 'Copied!' : 'hello@automationarchitech.com'}
        </button>
      </div>
    </div>
  );
}
