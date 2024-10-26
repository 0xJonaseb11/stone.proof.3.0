/* eslint-disable prettier/prettier */
"use client";

import { useState, useEffect } from "react";
import { ethers } from "ethers";
import DataRegistryABI from "../../contracts/DataRegistry.json";
type DataRecord = {
  id: string;
  description: string;
  owner: string;
};

export const DataRegistry: React.FC = () => {
  const [records, setRecords] = useState<DataRecord[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchDataRecords = async () => {
    setIsLoading(true);
    try {
      if (!window.ethereum) {
        alert("Please install MetaMask or any other EVM-wallet");
        return;
      }

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contractAddress = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0"; 
      const contract = new ethers.Contract(contractAddress, DataRegistryABI.abi, signer);

      const recordsData = await contract.getAllRecords();
      const formattedRecords = recordsData.map((record: any) => ({
        id: record.id,
        description: record.description,
        owner: record.owner,
      }));

      setRecords(formattedRecords);
    } catch (error) {
      console.error("Error fetching records:", error);
      alert("An error occurred while fetching records.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDataRecords();
  }, []);

  return (
    <div className="flex flex-col max-w-72 gap-4 bg-neutral-100 px-12 py-16 rounded-xl shadow mr-10">
      <p className="text-2xl text-center text-neutral-800">Data Records</p>
      <p className="text-center text-xl text-neutral-500">
        View and manage data entries on the StoneProof platform.
      </p>
      {isLoading ? (
        <p className="text-center text-neutral-500">Loading records...</p>
      ) : (
        <ul className="bg-white rounded-lg p-4">
          {records.map((record) => (
            <li key={record.id} className="py-2 border-b border-neutral-200">
              <p className="font-bold">{record.description}</p>
              <p className="text-sm text-neutral-500">Owned by: {record.owner}</p>
            </li>
          ))}
        </ul>
      )}
      <button
        onClick={fetchDataRecords}
        className="bg-sky-400 hover:bg-sky-500 transition-all text-white py-2 px-6 rounded-lg mt-4"
      >
        Refresh Data
      </button>
    </div>
  );
};
