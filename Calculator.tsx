import React, { useState } from 'react';
import { Calculator as CalcIcon } from 'lucide-react';

const Calculator = () => {
  const [dimensions, setDimensions] = useState({
    length: '',
    width: '',
  });
  const [estimate, setEstimate] = useState<number | null>(null);

  const calculateEstimate = (e: React.FormEvent) => {
    e.preventDefault();
    const area = Number(dimensions.length) * Number(dimensions.width);
    // This is a simplified calculation. In reality, you'd want to factor in:
    // - Material costs
    // - Installation complexity
    // - Additional features (lighting, etc.)
    const baseRate = 40; // Example rate per square meter
    setEstimate(area * baseRate);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center mb-6">
        <CalcIcon size={24} className="text-blue-600 mr-3" />
        <h3 className="text-xl font-semibold text-gray-900">Cost Calculator</h3>
      </div>

      <form onSubmit={calculateEstimate} className="space-y-4">
        <div>
          <label htmlFor="length" className="block text-sm font-medium text-gray-700">
            Room Length (meters)
          </label>
          <input
            type="number"
            id="length"
            value={dimensions.length}
            onChange={(e) => setDimensions({ ...dimensions, length: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            min="0"
            step="0.1"
            required
          />
        </div>

        <div>
          <label htmlFor="width" className="block text-sm font-medium text-gray-700">
            Room Width (meters)
          </label>
          <input
            type="number"
            id="width"
            value={dimensions.width}
            onChange={(e) => setDimensions({ ...dimensions, width: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            min="0"
            step="0.1"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Calculate Estimate
        </button>
      </form>

      {estimate !== null && (
        <div className="mt-6 p-4 bg-gray-50 rounded-md">
          <p className="text-gray-700">Estimated Cost:</p>
          <p className="text-2xl font-bold text-blue-600">${estimate.toFixed(2)}</p>
          <p className="text-sm text-gray-500 mt-2">
            * This is a rough estimate. Contact us for a detailed quote.
          </p>
        </div>
      )}
    </div>
  );
};

export default Calculator;