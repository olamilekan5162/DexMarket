import { ethers } from "ethers";
import abi from './abi.json';

const contractAddress = "0xFA7202FE4096ABFb517f23ff894d0D303AA16267";
const contractABI = abi;

const getSign = async () =>{
  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  return signer
}

export const getContract = async () => {
  const signer = await getSign()
  return new ethers.Contract(contractAddress, contractABI, signer);
}

export const addProduct = async (name, description, price, imageUrl) => {
    const contract = await getContract();
    const product_price = ethers.parseEther(price);
    const tx = await contract.listProduct(name, product_price, description, imageUrl);
    await tx.wait();
    alert(`${name} added successfully`);
}

export const listProducts = async () => {
    const contract = await getContract();
    const count = await contract.productCounter();
    const products = [];
    for (let i = 1; i <= count; i++) {
        const product = await contract.getProduct(i);
        products.push(product);
    }
    return products;
}

export const buyProduct = async (name, id, price) => {
  try {
    const contract = await getContract();
    const value = ethers.parseEther(price);
    const tx = await contract.buyProduct(id, { value });
    await tx.wait();
    alert(`${name} bought successfully, thank you.`);
  }catch(error){
    console.log(error)
    alert(`failed to buy ${name}: ${error.reason} please check back when restocked`)
  }
}

export const getTransactions = async () =>{
  try {
    const contract = await getContract();
    const txHistory = await contract.getAllTransactions();
    return txHistory
  }catch(error){
    console.log(error.message)
  }
}