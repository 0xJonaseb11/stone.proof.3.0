/* eslint-disable prettier/prettier */
"use client";

import React, { useState, ChangeEvent } from "react";
import { ethers, Contract, providers } from "ethers";
import SupplyChainABI from "../../contracts/SupplyChain.json";

const SupplyChainAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

interface BatchDetails {
  id: ethers.BigNumber;
  owner: string;
  location: string;
  status: string;
  timestamp: number;
}

export const SupplyChain: React.FC = () => {
  const [location, setLocation] = useState<string>('');
  const [batchId, setBatchId] = useState<string>('');
  const [newOwner, setNewOwner] = useState<string>('');
  const [newStatus, setNewStatus] = useState<string>('');
  const [batchDetails, setBatchDetails] = useState<BatchDetails | null>(null);

  const provider = new providers.Web3Provider(window.ethereum as any);
  const signer = provider.getSigner();
  const supplyChainContract: Contract = new ethers.Contract(
    SupplyChainAddress,
    SupplyChainABI.abi,
    signer
  );

  const createBatch = async (): Promise<void> => {
    try {
      const tx = await supplyChainContract.createBatch(location);
      await tx.wait();
      alert("Batch created!");
    } catch (error: any) {
      console.error(error);
      alert("Error creating batch.");
    }
  };

  const getBatch = async (): Promise<void> => {
    try {
      const batch = await supplyChainContract.getBatch(parseInt(batchId, 10));
      setBatchDetails(batch);
    } catch (error: any) {
      console.error(error);
      alert("Error fetching batch details.");
    }
  };

  const transferOwnership = async (): Promise<void> => {
    try {
      const tx = await supplyChainContract.transferOwnership(parseInt(batchId, 10), newOwner);
      await tx.wait();
      alert("Ownership transferred!");
    } catch (error: any) {
      console.error(error);
      alert("Error transferring ownership.");
    }
  };

  const updateStatus = async (): Promise<void> => {
    try {
      const tx = await supplyChainContract.updateStatus(parseInt(batchId, 10), newStatus);
      await tx.wait();
      alert("Status updated!");
    } catch (error: any) {
      console.error(error);
      alert("Error updating status.");
    }
  };

  const handleChange = (setter: React.Dispatch<React.SetStateAction<string>>) => 
    (event: ChangeEvent<HTMLInputElement>) => {
      setter(event.target.value);
    };

  return (
    <div className="flex flex-col max-w-72 gap-4 bg-neutral-100 px-12 py-16 rounded-xl shadow">
      <p className="text-2xl text-center text-neutral-800">Supply Chain Management</p>

      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={handleChange(setLocation)}
        className="border rounded p-2"
      />
      <button
        onClick={createBatch}
        className="bg-sky-400 hover:bg-sky-500 transition-all text-white py-2 px-6 rounded-lg"
      >
        Create Batch
      </button>

      <input
        type="text"
        placeholder="Batch ID"
        value={batchId}
        onChange={handleChange(setBatchId)}
        className="border rounded p-2"
      />
      <button
        onClick={getBatch}
        className="bg-sky-400 hover:bg-sky-500 transition-all text-white py-2 px-6 rounded-lg"
      >
        Get Batch
      </button>

      {batchDetails && (
        <div className="mt-4">
          <p>Batch ID: {batchDetails.id.toString()}</p>
          <p>Owner: {batchDetails.owner}</p>
          <p>Location: {batchDetails.location}</p>
          <p>Status: {batchDetails.status}</p>
          <p>Timestamp: {new Date(batchDetails.timestamp * 1000).toLocaleString()}</p>
        </div>
      )}

      <input
        type="text"
        placeholder="New Owner Address"
        value={newOwner}
        onChange={handleChange(setNewOwner)}
        className="border rounded p-2"
      />
      <button
        onClick={transferOwnership}
        className="bg-sky-400 hover:bg-sky-500 transition-all text-white py-2 px-6 rounded-lg"
      >
        Transfer Ownership
      </button>

      <input
        type="text"
        placeholder="New Status"
        value={newStatus}
        onChange={handleChange(setNewStatus)}
        className="border rounded p-2"
      />
      <button
        onClick={updateStatus}
        className="bg-sky-400 hover:bg-sky-500 transition-all text-white py-2 px-6 rounded-lg"
      >
        Update Status
      </button>
    </div>
  );
};
